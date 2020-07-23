<template>
  <DocsLayout :subtitles="subtitles" :links="links">
    <b-modal
      :active.sync="auth.isRoleModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
      v-model="auth.role"
    >
      <role-selection></role-selection>
    </b-modal>
    <button
      class="button is-snippet role-selection-button"
      @click="auth.isRoleModalActive = true"
    >{{ roleButtonText }}</button>
    <CustomiseAuthContent :value="{...auth, operatorToken}">
      <VueRemarkContent>
        <template v-slot:auth>
          <DemoConfigurer v-model="auth" :availableRoles="availableRoles" />
        </template>
      </VueRemarkContent>
    </CustomiseAuthContent>
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
import ordering from "@/data/ordering.yaml";
import CustomiseAuthContent from "~/components/CustomiseAuthContent";
import DemoConfigurer from "~/components/DemoConfigurer";
import RoleSelection from "~/components/RoleSelection.vue";

export default {
  components: {
    CustomiseAuthContent,
    DemoConfigurer,
    RoleSelection,
  },
  data() {
    return {
      auth: {
        clientId: "CLIENT_ID",
        clientSecret: "CLIENT_SECRET",
        accessToken: "ACCESS_TOKEN",
        userToken: "USER_TOKEN",
        activeRoleTab: 0,
        roleByIndex: ["THIRD_PARTY_DEVELOPER", "OPERATOR", "SUBSCRIBER"],
        isRoleModalActive: false,
        role: "",
        hasRoleChoiceBeenGiven: false,
      },
    }
  },
  watch: {
    auth: {
      handler() {
        this.setActiveTabBasedOnSelectedRole(this.auth.role);
        this.persistConfig();
      },
      deep: true,
    },
    'auth.isRoleModalActive'() {
      localStorage.setItem("HAS_ROLE_CHOICE_BEEN_GIVEN", true);
    },
    availableRoles() {
      this.setActiveTabBasedOnSelectedRole(this.role);
    },
  },
  methods: {
    persistConfig() {
      localStorage.setItem("ROLE", this.auth.role);
      sessionStorage.setItem("CLIENT_ID", this.auth.clientId);
      sessionStorage.setItem("CLIENT_SECRET", this.auth.clientSecret);
      sessionStorage.setItem("ACCESS_TOKEN", this.auth.accessToken);
      sessionStorage.setItem("USER_TOKEN", this.auth.userToken);
    },
    setActiveTabBasedOnSelectedRole(role) {
      if (role === "" && this.availableRoles.has(this.getCurrentRoleFromActiveTab)) {
        return;
      }
      if (this.availableRoles.has(role)) {
        this.auth.activeRoleTab = this.auth.roleByIndex.indexOf(role);
        return;
      }
      this.selectFirstAvailableRole();
    },
    availableForRole(docRoles, role) {
      return role === "" // show-all-docs-"role"
        || (docRoles.length === 0 && role === "OPERATOR") // roles not defined and role is operator assume the api is for that role
        || docRoles.indexOf(role) !== -1;
    },
    selectFirstAvailableRole() {
      if (this.availableRoles.has("THIRD_PARTY_DEVELOPER")) {
        this.auth.activeRoleTab = this.auth.roleByIndex.indexOf("THIRD_PARTY_DEVELOPER");
        return;
      }
      if (this.availableRoles.has("OPERATOR")) {
        this.auth.activeRoleTab = this.auth.roleByIndex.indexOf("OPERATOR");
        return;
      }
      if (this.availableRoles.has("SUBSCRIBER")) {
        this.auth.activeRoleTab = this.auth.roleByIndex.indexOf("SUBSCRIBER");
        return;
      }
      this.auth.activeRoleTab = this.auth.roleByIndex.indexOf("OPERATOR");
    },
  },
  created() {
    if (typeof window === `undefined`) return;
    if (localStorage.getItem("HAS_ROLE_CHOICE_BEEN_GIVEN") && localStorage.getItem("ROLE")) {
      this.auth.role = localStorage.getItem("ROLE");
    }
    this.selectFirstAvailableRole();

    if (sessionStorage.getItem("CLIENT_ID")) {
      this.auth.clientId = sessionStorage.getItem("CLIENT_ID");
    }
    if (sessionStorage.getItem("CLIENT_SECRET")) {
      this.auth.clientSecret = sessionStorage.getItem("CLIENT_SECRET");
    }
    if (sessionStorage.getItem("ACCESS_TOKEN")) {
      this.auth.accessToken = sessionStorage.getItem("ACCESS_TOKEN");
    }
    if (sessionStorage.getItem("USER_TOKEN")) {
      this.auth.userToken = sessionStorage.getItem("USER_TOKEN");
    }
  },
  mounted() {
    setTimeout(() => {
      if (!localStorage.getItem("HAS_ROLE_CHOICE_BEEN_GIVEN") && !this.auth.isRoleModalActive && this.auth.role === "") {
        this.auth.isRoleModalActive = true;
      }
    }, 6000);
  },
  computed: {
    availableRoles() {
      const rolesForDoc = this.$page.doc.roles;
      return rolesForDoc.length > 0 ? new Set(rolesForDoc) : new Set(["OPERATOR"]);
    },
    getCurrentRoleFromActiveTab() {
      return this.auth.roleByIndex[this.auth.activeRoleTab];
    },
    roleButtonText() {
      const role = this.auth.role;
      if (role === "THIRD_PARTY_DEVELOPER") {
        return "Developer";
      } else if (role === "OPERATOR") {
        return "Operator";
      } else if (role === "SUBSCRIBER") {
        return "Subscriber";
      }
      return "Show all";
    },
    operatorToken() {
      if (typeof window === `undefined`) return;
      return this.auth.clientId && this.auth.clientSecret
        ? btoa(this.auth.clientId + ":" + this.auth.clientSecret)
        : "";
    },
    links() {
      const docPages = this.$static.allDocPage.edges.map(edge => edge.node)
        .map(doc => ({...doc, availableForRole: this.availableForRole(doc.roles, this.auth.role) }) );
      const topics = new Set(docPages.map(d => d.topic));
      const types = new Set(docPages.map(d => d.type));
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

      return [...topics].sort(sortTopics).map(t => ({
        title: t,
        items: docPages.filter(doc => doc.topic === t).sort(sortTypes)
      }));
    },
    subtitles() {
      // Only h2 and h3 titles
      let subtitles = this.$page.doc.subtitles.filter(function(
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

      return subtitles.filter(v => v.depth === 2);
    }
  },
  metaInfo() {
    const { title, headings } = this.$page.doc;

    return {
      title: title || (headings.length ? headings[0].value : undefined)
    };
  }
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
