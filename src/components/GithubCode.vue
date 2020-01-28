<template>
  <div>
    <h1>{{ title }}</h1>
    <Prism :language="language" :code="content" :class="{ 'fill-screen': fillScreen }"></Prism>
    <figcaption>
      <a class="github-link" :href="to" target="_blank">{{ to }}</a>
    </figcaption>
  </div>
</template>
<script>
import Github from "~/assets/images/github-logo.svg";
import { get } from "axios";
import prism from 'prismjs'
import 'prismjs/components/prism-protobuf'
import 'prismjs/components/prism-kotlin'
import Prism from 'vue-prism-component'

export default {
  components: {
    Github,
    Prism
  },
  created() {
    this.fetchData();
  },
  props: {
    to: String,
    title: String,
    language: {
      type: String,
      default: "protobuf"
    }
  },
  data() {
    return {
      content: "Loading...",
      failed: false,
    };
  },
  methods: {
    fetchData: function() {
      return get(this.rawLink, { responseType: 'text' })
        .then(res => (this.content = res.data))
        .catch(e => {
          this.content = "Failed to load code, please use the link";
          this.failed = true;
        })
    }
  },
  computed: {
    rawLink: function() {
      return this.to
        .replace("//github.com/", "//raw.githubusercontent.com/")
        .replace("/blob/", "/");
    },
    fillScreen: function() {
      return !this.failed && this.content === "Loading...";
    }
  }
};
</script>
<style>
.fill-screen {
  min-height: 100vh;
}
.github-link {
  word-wrap: break-word;
}
</style>
