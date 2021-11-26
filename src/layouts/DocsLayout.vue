<template>
  <DefaultLayout>
    <b-notification
      type="is-warning is-light"
      aria-close-label="Close notification"
      role="alert"
      v-if="!hideWarning"
    >
      <div class="is-flex">
        <!-- has-icon on b-notification does not work with is-light, so we add an icon manually -->
        <b-icon icon="information" size="is-large" style="margin-right: 16px" />
        <div>
          This documentation is for v0 of our APIs and might change. See
          <a href="https://v1.docs.wgtwo.com">https://v1.docs.wgtwo.com</a> for
          our guaranteed stable APIs.
        </div>
      </div>
    </b-notification>
    <div>
      <div class="content" id="content">
        <slot />
      </div>
      <footer>
        <aside class="editthispage">
          <a :href="editLink" target="_blank" icon-left="pencil">
            <b-icon icon="pencil" size="is-small" />
            Edit page
          </a>
        </aside>
        <nav class="previous-next-buttons">
          <g-link
            v-if="previousPage"
            exact
            class="button is-link is-inverted docs-nav__link"
            :to="previousPage.path"
            >&larr; {{ previousPage.title }}</g-link
          >
          <g-link
            v-if="nextPage"
            exact
            class="button is-link is-inverted docs-nav__nextlink"
            :to="nextPage.path"
            >{{ nextPage.title }} &rarr;</g-link
          >
        </nav>
      </footer>
    </div>
    <template v-slot:docsnav>
      <div
        v-for="topic in links"
        :key="topic.title"
        class="docs-nav__container"
      >
        <h3 class="is-uppercase">{{ topic.title }}</h3>
        <ul class="docs-nav__list">
          <g-link
            v-for="item in topic.items.filter((it) => !it.hideFromMenu)"
            :key="item.id"
            :to="item.path"
            tag="li"
            ><a
              class="dosc_nav__anchor"
              :class="{ 'has-text-grey': !item.availableForRole }"
              >{{ item.title }}</a
            ></g-link
          >
        </ul>
      </div>
    </template>
    <template v-slot:articlenav v-if="subtitles.length">
      <h3>ON THIS PAGE</h3>
      <ul class="anchormenu">
        <li v-for="h2 in subtitles" :key="h2.value">
          <g-link :href="h2.anchor">{{ h2.value }}</g-link>
          <ul v-if="h2.children" class="anchormenu__sub-menu">
            <li v-for="h3 in h2.children" :key="h3.value">
              <g-link :href="h3.anchor">{{ h3.value }}</g-link>
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
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.previous-next-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.docs-nav__nextlink {
  margin-left: auto;
}

.docs-nav__container:not(:first-child) {
  margin-top: 16px;
}

.docsnav h3,
.articlenav h3 {
  font-weight: 700;
  font-family: "Oxanium", sans-serif;
  font-size: 17px;
}
</style>

<script>
import Github from "~/assets/images/github-logo.svg";

export default {
  components: {
    Github,
  },
  props: {
    subtitles: { type: Array, default: () => [] },
    links: { type: Array, default: () => [] },
    hideWarning: { type: Boolean, default: false },
  },
  data() {
    return {
      loaderId: null,
    };
  },
  methods: {
    clearLoadId() {
      if (this.loaderId !== null) {
        clearInterval(this.loaderId);
        this.loaderId = null;
      }
    },
  },
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
      return this.items.findIndex((item) => {
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
    },
  },
  updated() {
    this.loaderId = setInterval(() => {
      if (
        document.querySelector(".swagger-ui") !== null &&
        typeof SwaggerUIBundle !== "undefined" &&
        this.loaderId !== null
      ) {
        this.clearLoadId();
        SwaggerUIBundle({
          dom_id: ".swagger-ui",
          url: document
            .querySelector(".swagger-ui")
            .getAttribute("data-spec-url"),
          deepLinking: true,
          presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
          plugins: [SwaggerUIBundle.plugins.DownloadUrl],
        });
      }
    }, 100);
  },
  beforeDestroy() {
    this.clearLoadId();
  },
};
</script>
