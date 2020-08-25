<template>
  <DocsLayout :subtitles="subtitles" :links="links">
    <b-modal
      :active.sync="isRoleModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
      @input="updateRole($event);"
    >
      <role-selection></role-selection>
    </b-modal>
    <button
      class="button is-role role-selection-button"
      @click="isRoleModalActive = true"
    >{{ roleButtonText }}</button>
    <VueRemarkContent>
      <template v-slot:auth>
        <DemoConfigurer />
      </template>
    </VueRemarkContent>
  </DocsLayout>
</template>

<page-query>
query ($id: ID!) {
  doc: docPage (id: $id) {
    title
    headings (depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    }
    roles
  }
}
</page-query>

<static-query>
query {
  allDocPage {
    edges {
      node {
        title
        topic
        externalLink
        path
        id
        type
        typeOrder
        fileInfo {
          path
        }
        roles
      }
    }
  }
}
</static-query>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import ordering from "@/data/ordering.yaml";
import DemoConfigurer from "~/components/DemoConfigurer";
import RoleSelection from "~/components/RoleSelection.vue";

export default {
  components: {
    DemoConfigurer,
    RoleSelection,
  },
  watch: {
    "$page.doc.roles"(newRoles) {
      this.updateAvailableRoles(newRoles);
    },
  },
  methods: {
    ...mapActions(["updateRole", "updateAvailableRoles"]),
  },
  mounted() {
    setTimeout(() => {
      if (
        !this.hasRoleChoiceBeenGiven &&
        !this.isRoleModalActive &&
        this.role === ""
      ) {
        this.isRoleModalActive = true;
      }
    }, 6000);
    this.updateAvailableRoles(this.$page.doc.roles);
  },
  computed: {
    ...mapGetters(["roleButtonText", "operatorToken"]),
    ...mapState({
      role: (state) => state.role.role,
      hasRoleChoiceBeenGiven: (state) => state.role.hasRoleChoiceBeenGiven,
    }),
    isRoleModalActive: {
      get() {
        return this.$store.state.role.isRoleModalActive;
      },
      set(value) {
        this.$store.commit("setRoleModalActive", value);
      },
    },
    links() {
      function availableForRole(docRoles, role) {
        return (
          role === "" || // show-all-docs-"role"
          (docRoles.length === 0 && role === "OPERATOR") || // roles not defined and role is operator assume the doc is for that role
          docRoles.indexOf(role) !== -1
        );
      }

      const docPages = this.$static.allDocPage.edges
        .map((edge) => edge.node)
        .map((doc) => ({
          ...doc,
          availableForRole: availableForRole(doc.roles, this.role),
        }));
      const topics = new Set(docPages.map((d) => d.topic));
      const types = new Set(docPages.map((d) => d.type));
      const topicsEnumerated = new Map(
        ordering.topic.map((el, index) => [el, index])
      );
      const typesEnumerated = new Map(
        ordering.type.map((el, index) => [el, index])
      );

      const sortTopics = (a, b) => {
        const map = topicsEnumerated;
        const afterOthersValue = map.size.toString();
        let aVal = map.has(a) ? map.get(a).toString() : afterOthersValue + a; // `+ a` and `+ b` are needed to order things the same each time
        let bVal = map.has(b) ? map.get(b).toString() : afterOthersValue + b;
        return aVal < bVal ? -1 : 1;
      };

      const sortTypes = (a, b) => {
        const map = typesEnumerated;
        const afterOthersValue = map.size.toString();
        let aVal =
          (map.has(a.type) ? map.get(a.type) : afterOthersValue) +
          `${a.typeOrder}` +
          a.title;
        let bVal =
          (map.has(b.type) ? map.get(b.type) : afterOthersValue) +
          `${b.typeOrder}` +
          b.title;
        return aVal < bVal ? -1 : 1;
      };

      return [...topics].sort(sortTopics).map((t) => ({
        title: t,
        items: docPages.filter((doc) => doc.topic === t).sort(sortTypes),
      }));
    },
    subtitles() {
      // Only h2 and h3 titles
      let subtitles = this.$page.doc.subtitles.filter(function (
        value,
        index,
        arr
      ) {
        return [2, 3].includes(value.depth);
      });

      let lastParent = null;
      for (const h of subtitles) {
        h.children = [];
        if (h.depth === 2) {
          lastParent = h;
        } else {
          lastParent.children.push(h);
        }
      }

      return subtitles.filter((v) => v.depth === 2);
    },
  },
  metaInfo() {
    const { title, headings } = this.$page.doc;

    return {
      title: title || (headings.length ? headings[0].value : undefined),
    };
  },
};
</script>
<style>
.role-selection-button {
  position: fixed;
  bottom: 0;
  right: 40px;
  border-radius: 4px 4px 0 0;
  z-index: 1;
}
</style>
