<template>
  <div class="language-tabs">
    <b-tabs :value="codeLangIndex" :animated="false" @input="setCodeLangIndex($event)">
      <b-tab-item v-if="$slots.grpcurl || !$slots.curl" label="grpcurl" icon="bash">
        <slot name="grpcurl">
          Not available.
        </slot>
      </b-tab-item>
      <b-tab-item v-if="$slots.curl" label="curl" icon="bash">
        <slot name="curl">
          Not available.
        </slot>
      </b-tab-item>
      <b-tab-item label="Kotlin" class="content" icon="language-kotlin">
        <b-collapse v-if="kotlinDeps" class="card" :open="false">
          <div
            slot="trigger"
            slot-scope="props"
            class="card-header"
            role="button"
          >
            <p class="card-header-title">
              Install dependencies
            </p>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
            </a>
          </div>
          <div class="card-content">
            <ClientDependencies :clients="kotlinDeps"></ClientDependencies>
          </div>
        </b-collapse>
        <div v-if="$slots.kotlin" class="is-size-4 mt-4">
          Snippet
        </div>
        <slot name="kotlin">
          Not available.
        </slot>
      </b-tab-item>
    </b-tabs>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  props: {
    kotlinDeps: Array,
  },
  methods: {
    ...mapMutations([
      "setCodeLangIndex"
    ]),
  },
  computed: {
    ...mapState({
      codeLangIndex: state => state.codeLang.codeLangIndex,
    }),
  },
};
</script>
<style scoped>
.language-tabs {
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 16px 16px 8px 16px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.01);
  margin-bottom: 16px;
}
.language-tabs p.card-header-title {
  margin-bottom: inherit;
}
</style>
<style>
.language-tabs ul {
  margin: 0;
}
</style>
