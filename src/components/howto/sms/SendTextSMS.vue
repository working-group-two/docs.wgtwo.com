<template>
  <language-tabs>
    <template #grpcurl>
      <GithubCode
        fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/sms/send-text-sms.sh"
        language="shell"
        v-show="isOperatorTabSelected"
        key="operator"
        @code-fetched="$forceUpdate()"
      />
      <GithubCode
        fileUrl="https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/sms/send-text-sms.sh"
        language="shell"
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
