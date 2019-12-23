<template>
  <Layout>
    <template v-slot:leftnav>
      <div v-for="topic in links" :key="topic.title">
        <h3 style="text-transform: capitalize">{{topic.title}}</h3>
        <ul class="docs-nav__list">
          <li v-for="item in topic.items" :key="item.id">
            <g-link v-if="item.externalLink === ''" :to="item.path">{{item.title}}</g-link>
            <span v-else>
              <a :href="item.externalLink" target="_blank">{{item.title}}</a>↗️
            </span>
          </li>
        </ul>
      </div>
    </template>
    <section>
      <nav v-if="subtitles.length">
        <h3>On this page</h3>
        <ul class="menu-item anchormenu">
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
      </nav>
    </section>
    <article>
      <slot />
    </article>
    <nav class="docs-nav">
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
ul {
  list-style-type: none;
  padding-left: 1rem;
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
      let path = this.currentPath;
      if ((path.match(new RegExp("/", "g")) || []).length == 1)
        path = path + "/README";
      return `https://github.com/gridsome/gridsome.org/blob/master${path}.md`;
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
    nextPage() {
      return this.items[this.currentIndex + 1];
    },
    previousPage() {
      return this.items[this.currentIndex - 1];
    }
  }
};
</script>
