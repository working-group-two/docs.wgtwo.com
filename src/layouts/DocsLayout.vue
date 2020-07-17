<template>
  <DefaultLayout>
    <b-modal :active.sync="isRoleModalActive"
              has-modal-card
              trap-focus
              :destroy-on-hide="false"
              aria-role="dialog"
              aria-modal
              scroll="keep"
              >
        <role-selection></role-selection>
    </b-modal>
    <button class="button is-info role-selection-button" @click="isRoleModalActive = true">All docs</button>
    <b-notification
            type="is-danger"
            aria-close-label="Close notification"
            role="alert"
    >These APIs and corresponding docs are under development and may change without notice</b-notification>
    <div>
      <div class="content" id="content">
        <slot />
      </div>
      <footer>
        <aside class="editthispage">
          <b-button tag="a" :href="editLink" target="_blank">
            <Github class="editthispage__githublogo" />Edit this page on GitHub
          </b-button>
        </aside>
        <nav class="previous-next-buttons">
          <g-link
            v-if="previousPage"
            exact
            class="button is-link is-inverted docs-nav__link"
            :to="previousPage.path"
          >&larr; {{ previousPage.title }}</g-link>
          <g-link
            v-if="nextPage"
            exact
            class="button is-link is-inverted docs-nav__link"
            :to="nextPage.path"
          >{{ nextPage.title }} &rarr;</g-link>
        </nav>
      </footer>
    </div>
    <template v-slot:docsnav>
      <div v-for="topic in links" :key="topic.title" class="docs-nav__container">
        <h3 class="is-uppercase">{{topic.title}}</h3>
        <ul class="docs-nav__list">
          <li v-for="item in topic.items" :key="item.id">
            <g-link :to="item.path" :class="{'has-text-grey': item.roles}">{{item.title}}</g-link>
          </li>
        </ul>
      </div>
    </template>
    <template v-slot:articlenav v-if="subtitles.length">
      <h3>ON THIS PAGE</h3>
      <ul class="anchormenu">
        <li v-for="h2 in subtitles" :key="h2.value">
          <a :href="h2.anchor">{{ h2.value }}</a>
          <ul v-if="h2.children" class="anchormenu__sub-menu">
            <li v-for="h3 in h2.children" :key="h3.value">
              <a :href="h3.anchor">{{ h3.value }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </DefaultLayout>
</template>

<style scoped>
.anchormenu__sub-menu {
  padding-left: 16px;
}

.editthispage {
  margin-top: 24px;
  margin-bottom: 24px;
}

.previous-next-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.editthispage__githublogo {
  margin-right: 8px;
}

.docs-nav__container:not(:first-child) {
  margin-top: 16px;
}

.docsnav h3,
.articlenav h3 {
  font-weight: 700;
  font-family: "Quicksand", sans-serif;
  font-size: 17px;
}

.role-selection-button {
  position: fixed;
  bottom: 0;
  right: 40px;
  border-radius: 4px 4px 0 0;
  z-index: 1;
}
</style>

<script>
import Github from "~/assets/images/github-logo.svg";
import CodeExamplesCredentialsInjector from "~/code-examples-credentials-injector.js";
import RoleSelection from "~/components/RoleSelection.vue";

export default {
  components: {
    Github,
    RoleSelection,
  },
  props: {
    subtitles: { type: Array, default: () => [] },
    links: { type: Array, default: () => [] }
  },
  data: () => ({
      isRoleModalActive: false,
      role: null,
  }),
  computed: {
    editLink() {
      return `https://github.com/working-group-two/docs.wgtwo.com/blob/master/docs/${this.currentItem.fileInfo.path}`;
    },
    items() {
      return this.links.reduce(
        (acc, group) => (acc.push(...group.items), acc),
        []
      );
    },
    currentIndex() {
      return this.items.findIndex(item => {
        return (
          item.path.replace(/\/$/, "") === this.$route.path.replace(/\/$/, "")
        );
      });
    },
    currentItem() {
      return this.items[this.currentIndex];
    },
    nextPage() {
      return this.items[this.currentIndex + 1];
    },
    previousPage() {
      return this.items[this.currentIndex - 1];
    }
  },
  mounted() {
    let loaderId = setInterval(() => {
      if (document.querySelector("#swagger-ui") !== null && typeof SwaggerUIBundle !== "undefined" ) {
        clearInterval(loaderId);
        SwaggerUIBundle({
          "dom_id": "#swagger-ui",
          url: document.querySelector("#swagger-ui").getAttribute("data-spec-url"),
          deepLinking: true,
          presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
          ],
          plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
          ],
        });
      }
    }, 100);
    CodeExamplesCredentialsInjector();
  }
};
</script>
