<template>
  <Layout>
    <div>
      <div class="content">
        <slot />
      </div>
      <footer>
        <aside class="editthispage">
          <a :href="editLink" target="_blank" class="button">
            <Github class="editthispage__githublogo" />Edit this page on GitHub
          </a>
        </aside>
        <nav>
          <div class="docs-nav__previous">
            <g-link
              v-if="previousPage"
              exact
              class="button button--small docs-nav__link"
              :to="previousPage.path"
            >&larr; {{ previousPage.title }}</g-link>
          </div>
          <div class="docs-nav__next">
            <g-link
              v-if="nextPage"
              exact
              class="button button--small docs-nav__link"
              :to="nextPage.path"
            >{{ nextPage.title }} &rarr;</g-link>
          </div>
        </nav>
      </footer>
    </div>
    <template v-slot:docsnav>
      <div v-for="topic in links" :key="topic.title">
        <h3 style="text-transform: capitalize">{{topic.title}}</h3>
        <ul class="docs-nav__list">
          <li v-for="item in topic.items" :key="item.id">
            <g-link v-if="item.externalLink === ''" :to="item.path">{{item.title}}</g-link>
            <span v-else>
              <a :href="item.externalLink" target="_blank">{{item.title}} ↗️</a>
            </span>
          </li>
        </ul>
      </div>
    </template>
    <template v-slot:articlenav v-if="subtitles.length">
      <p>On this page</p>
      <ul class="anchormenu">
        <li
          class="anchormenu__item anchormenu__item-depth-2"
          :key="h2.value"
          v-for="h2 in subtitles"
        >
          <a class="anchormenu__link" :href="h2.anchor">{{ h2.value }}</a>
          <ul v-if="h2.children" class="anchormenu__sub-menu">
            <li
              v-for="h3 in h2.children"
              :key="h3.value"
              class="anchormenu__item anchormenu__item-depth-3"
            >
              <a class="anchormenu__link" :href="h3.anchor">{{ h3.value }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
.anchormenu__sub-menu {
  padding-left: 1rem;
}

.docs-nav__list {
  padding-left: 1rem;
}

.editthispage {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.docs-nav__previous {
  float: left;
}

.docs-nav__next {
  float: right;
}

.editthispage__githublogo {
  margin-right: .2rem;
}
</style>

<script>
import Github from "~/assets/images/github-logo.svg";

export default {
  components: {
    Github
  },
  props: {
    subtitles: { type: Array, default: () => [] },
    links: { type: Array, default: () => [] }
  },
  computed: {
    currentPath() {
      return this.$route.matched[0].path;
    },
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
  }
};
</script>
