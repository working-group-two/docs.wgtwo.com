<template>
  <language-tabs :kotlinDeps="['mms-grpc', 'utils-grpc']">
    <template #kotlin>
      <GithubCode
        fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/mms/src/main/kotlin/SendAudioToSubscriber.kt"
        language="kotlin"
        v-show="isOperatorTabSelected"
        key="operator"
        @code-fetched="$forceUpdate()"
      />
      <GithubCode
        fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/mms/src/main/kotlin/SendAudioToSubscriber.kt"
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
