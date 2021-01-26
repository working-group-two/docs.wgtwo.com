<template>
  <language-tabs :kotlinDeps="['events-grpc', 'utils-grpc']">
    <template #grpcurl>
      <GithubCode
        fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/voicemail/delete-voicemail.sh"
        language="shell"
        v-show="isOperatorTabSelected"
        key="operator"
        @code-fetched="$forceUpdate()"
      />
      <GithubCode
        fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/voicemail/delete-voicemail.sh"
        language="shell"
        v-show="isThirdPartyDeveloperTabSelected"
        key="thirdpartydev"
        @code-fetched="$forceUpdate()"
      />
    </template>
    <template #kotlin>
      <GithubCode
        fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/voicemail/src/main/kotlin/DeleteVoicemail.kt"
        language="kotlin"
        v-show="isOperatorTabSelected"
        key="operator"
        @code-fetched="$forceUpdate()"
      />
      <GithubCode
        fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/voicemail/src/main/kotlin/DeleteVoicemail.kt"
        language="kotlin"
        v-show="isThirdPartyDeveloperTabSelected"
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
