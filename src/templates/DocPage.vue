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

export default {
  computed: {
    links() {
      const docPages = this.$static.allDocPage.edges.map(edge => edge.node);
      const topics = new Set(docPages.map(d => d.topic));
      const types = new Set(docPages.map(d => d.type));
      const topicsEnumerated = new Map(ordering.topic.map((el, index) => [el, index]));
      const typesEnumerated = new Map(ordering.type.map((el, index) => [el, index]));

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
        let aVal = (map.has(a.type) ? map.get(a.type) : afterOthersValue) + `${a.typeOrder}` + a.title;
        let bVal = (map.has(b.type) ? map.get(b.type) : afterOthersValue) + `${b.typeOrder}` + b.title;
        return aVal < bVal ? -1 : 1;
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
