<template>
  <div class="list-voicemails">
    <b-tabs>
      <b-tab-item label="Kotlin" class="content" icon="language-kotlin">
        <b-collapse class="card" :open="false">
          <div slot="trigger" slot-scope="props" class="card-header" role="button">
            <p class="card-header-title">Install dependencies</p>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
            </a>
          </div>
          <div class="card-content">
            <JitpackDependency />
            <p>Then you can add the dependencies:</p>
            <ClientDependencies :clients="['events-grpc', 'utils-grpc']" />
          </div>
        </b-collapse>
        <h3>Snippet</h3>
        <GithubCode
          fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/feature/roles/examples/kotlin/operator/voicemail/src/main/kotlin/ListVoicemail.kt"
          language="kotlin"
          v-if="isOperatorTabSelected"
          key="0"
        />
        <GithubCode
          fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/feature/roles/examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/ListVoicemail.kt"
          language="kotlin"
          v-if="isThirdPartyDeveloperTabSelected"
          key="1"
        />
      </b-tab-item>
      <b-tab-item label="grpcurl" icon="bash">
        <GithubCode
          fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/feature/roles/examples/grpcurl/operator/voicemail/list-voicemail.sh"
          language="shell"
          v-if="isOperatorTabSelected"
          key="0"
        />
        <GithubCode
          fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/feature/roles/examples/grpcurl/thirdpartydev/voicemail/list-voicemail.sh"
          language="shell"
          v-if="isThirdPartyDeveloperTabSelected"
          key="1"
        />
      </b-tab-item>
    </b-tabs>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'isOperatorTabSelected',
      'isThirdPartyDeveloperTabSelected',
    ]),
  },
};
</script>
<style scoped>
.list-voicemails {
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 16px 16px 8px 16px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.01);
  margin-bottom: 16px;
}
.list-voicemails p.card-header-title {
  margin-bottom: inherit;
}
</style>
<style>
.list-voicemails ul {
  margin: 0;
}
</style>
