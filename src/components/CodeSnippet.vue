<template>
    <language-tabs :kotlin-deps="kotlinDeps">
      <template #grpcurl v-if="grpcurl">
        <source-example :src="grpcurl" />
      </template>
      <template #curl v-if="curl">
        <source-example :src="curl" />
      </template>
      <template #kotlin v-if="kotlin">
        <source-example :src="kotlin" />
      </template>
    </language-tabs>
</template>
<script>
import LanguageTabs from "~/components/LanguageTabs";
import SourceExample from '../components/SourceExample.vue';

export default {
  components: {
    LanguageTabs,
    SourceExample,
  },
  props: {
    kotlinDeps: Array,
    kotlin: Object,
    grpcurl: Object,
    curl: Object,
  },
};
</script>
