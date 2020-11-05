<template>
  <div class="language-tabs">
    <CustomiseAuthContent>
      <b-tabs :value="codeLangIndex" @input="setCodeLangIndex($event)" :animated="false">
        <b-tab-item label="grpcurl" icon="bash">
          <slot name="grpcurl">
            Not available.
          </slot>
        </b-tab-item>
        <b-tab-item label="Kotlin" class="content" icon="language-kotlin">
          <b-collapse class="card" :open="false" v-if="kotlinDeps">
            <div slot="trigger" slot-scope="props" class="card-header" role="button">
              <p class="card-header-title">Install dependencies</p>
              <a class="card-header-icon">
                <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
              </a>
            </div>
            <div class="card-content">
              <JitpackDependency />
              <p>Then you can add the dependencies:</p>
              <ClientDependencies :clients="kotlinDeps" />
            </div>
          </b-collapse>
          <div class="is-size-4 mt-4">Snippet</div>
          <slot name="kotlin">
            Not available
          </slot>
        </b-tab-item>
      </b-tabs>
    </CustomiseAuthContent>
  </div>
</template>
<script>
import { mapGetters, mapState, mapMutations } from "vuex";
import CustomiseAuthContent from "~/components/CustomiseAuthContent";

export default {
  components: {
    CustomiseAuthContent,
  },
  props: {
    kotlinDeps: Array,
  },
  methods: {
    ...mapMutations([
      'setCodeLangIndex'
    ]),
  },
  computed: {
    ...mapState({
      codeLangIndex: state => state.codeLang.codeLangIndex,
    }),
    ...mapGetters([
      "isOperatorTabSelected",
      "isThirdPartyDeveloperTabSelected",
    ]),
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
