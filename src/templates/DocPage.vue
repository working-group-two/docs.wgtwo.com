<template>
  <DocsLayout :subtitles="subtitles" :links="links">
    <VueRemarkContent />
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
  }

  allDocPage {
    edges {
      node {
        title
        topic
        externalLink
        path
        id
        fileInfo {
          path
        }
      }
    }
  }
}
</page-query>

<script>
import ordering from "@/data/ordering.yaml";

export default {
  computed: {
    links() {
      const docPages = this.$page.allDocPage.edges.map(edge => edge.node);
      const topics = new Set(docPages.map(d => d.topic));
      const types = new Set(docPages.map(d => d.type));
      const topicsEnumerated = new Map(ordering.topic.map((el, index) => [el, index]));
      const typesEnumerated = new Map(ordering.type.map((el, index) => [el, index]));

      const sortTopics = (a, b) => {
        const map = topicsEnumerated;
        const unsortedVal = map.size;
        let aVal = map.has(a.title) ? map.get(a.title) : unsortedVal;
        let bVal = map.has(b.title) ? map.get(b.title) : unsortedVal;
        return aVal-bVal;
      };

      const sortTypes = (a, b) => {
        const map = typesEnumerated;
        const unsortedVal = map.size;
        let aVal = map.has(a.type) ? map.get(a.type) : unsortedVal;
        let bVal = map.has(b.type) ? map.get(b.type) : unsortedVal;
        return aVal-bVal;
      };

      return [...topics]
        .sort(sortTopics)
        .map(t => ({
          title: t,
          items: docPages.filter(doc => doc.topic === t).sort(sortTypes)
        }));
    },
    subtitles() {
      // Only h2 and h3 titles
      let subtitles = this.$page.doc.subtitles.filter(function(value, index, arr) {
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
