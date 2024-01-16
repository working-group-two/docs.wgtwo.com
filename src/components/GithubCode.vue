<template>
  <div>
    <Prism :language="language" :code="content" :class="{ 'fill-screen': fillScreen }"></Prism>
    <figcaption>
      <a class="github-link" :href="fileUrl" target="_blank">{{ shortFileUrl }}</a>
    </figcaption>
  </div>
</template>
<script>
import axios from "axios";
import Prism from "vue-prism-component";

export default {
  components: {
    Prism,
  },
  props: {
    fileUrl: String,
    language: {
      type: String,
      default: "protobuf"
    },
  },
  data() {
    return {
      content: "Loading...",
      failed: false,
    };
  },
  computed: {
    rawLink: function() {
      return this.fileUrl
        .replace("//github.com/", "//raw.githubusercontent.com/")
        .replace("/blob/", "/");
    },
    shortFileUrl: function() {
      return this.fileUrl.substring(this.fileUrl.lastIndexOf("/") + 1);
    },
    fillScreen: function() {
      return !this.failed && this.content === "Loading...";
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      return axios.get(this.rawLink, { responseType: "text" })
        .then(res => {
          this.content = res.data;
          this.$emit("code-fetched");
        }).catch(e => {
          console.error(e);
          this.content = "Failed to load code, please use the link";
          this.failed = true;
        });
    },
  }
};
</script>
<style>
.fill-screen {
  min-height: 100vh;
  width: 100%;
}
.github-link {
  word-wrap: break-word;
  font-size: 90%;
  width: 100%;
  text-align: center;
  display: block;
}
pre + figcaption .github-link {
  margin-top: -8px;
}
</style>
