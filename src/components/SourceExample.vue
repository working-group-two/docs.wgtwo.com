<template>
  <div>
    <Prism :code="content" :language="language"></Prism>
    <figcaption>
      <a class="github-link" :href="fileUrl" target="_blank">{{
        shortFileUrl
      }}</a>
    </figcaption>
  </div>
</template>

<script>
import Prism from "vue-prism-component";

export default {
  components: {
    Prism,
  },
  props: {
    src: Object,
  },
  computed: {
    content() {
      return this.src.content;
    },
    file() {
      return this.src.file;
    },
    language() {
      const fileEndingSplit = this.file.split(".");
      if (fileEndingSplit.length < 2) {
        return "";
      }

      const extensionToLanguage = {
        "sh": "bash",
      };
      const extension = fileEndingSplit[1];
      if (extension in extensionToLanguage) {
        return extensionToLanguage[extension];
      }

      return extension;
    },
    fileUrl() {
      return `https://github.com/working-group-two/docs.wgtwo.com/blob/master/${this.file}`;
    },
    shortFileUrl() {
      return this.fileUrl.substring(this.fileUrl.lastIndexOf('/') + 1);
    },
  },
};
</script>
