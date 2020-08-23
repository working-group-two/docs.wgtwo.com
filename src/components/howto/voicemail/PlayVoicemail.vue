<template>
  <language-tabs :kotlinDeps="['events-grpc', 'utils-grpc']">
    <template #grpcurl>
      <GithubCode
        fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/feature/roles/examples/grpcurl/operator/voicemail/play-voicemail.sh"
        language="shell"
        v-if="isOperatorTabSelected"
        key="operator"
        @code-fetched="$forceUpdate()"
      />
      <GithubCode
        fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/feature/roles/examples/grpcurl/thirdpartydev/voicemail/play-voicemail.sh"
        language="shell"
        v-if="isThirdPartyDeveloperTabSelected"
        key="thirdpartydev"
        @code-fetched="$forceUpdate()"
      />
    </template>
    <template #kotlin>
      <GithubCode
        fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/feature/roles/examples/kotlin/operator/voicemail/src/main/kotlin/PlayVoicemail.kt"
        language="kotlin"
        v-if="isOperatorTabSelected"
        key="operator"
        @code-fetched="$forceUpdate()"
      />
      <GithubCode
        fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/feature/roles/examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/PlayVoicemail.kt"
        language="kotlin"
        v-if="isThirdPartyDeveloperTabSelected"
        key="thirdpartydev"
        @code-fetched="$forceUpdate()"
      />
    </template>
  </language-tabs>
</template>
<script>
import { mapGetters } from "vuex";
import LanguageTabs from "~/components/LanguageTabs";

export default {
  components: {
    LanguageTabs,
  },
  computed: {
    ...mapGetters([
      "isOperatorTabSelected",
      "isThirdPartyDeveloperTabSelected",
    ]),
  },
};
</script>
