<template>
  <ClientOnly>
    <language-tabs :kotlinDeps="kotlinDeps">
      <template #grpcurl v-if="grpcurlOperator && isOperatorTabSelected || grpcurlThirdpartydev && isThirdPartyDeveloperTabSelected">
        <GithubCode
          :fileUrl="grpcurlOperator"
          language="shell"
          v-if="isOperatorTabSelected"
          key="operator"
          @code-fetched="$forceUpdate()"
        />
        <GithubCode
          :fileUrl="grpcurlThirdpartydev"
          language="shell"
          v-if="isThirdPartyDeveloperTabSelected"
          key="thirdpartydev"
          @code-fetched="$forceUpdate()"
        />
      </template>
      <template #curl v-if="curlOperator && isOperatorTabSelected || curlThirdpartydev && isThirdPartyDeveloperTabSelected">
        <GithubCode
          :fileUrl="curlOperator"
          language="shell"
          v-if="isOperatorTabSelected"
          key="operator"
          @code-fetched="$forceUpdate()"
        />
        <GithubCode
          :fileUrl="curlThirdpartydev"
          language="shell"
          v-if="isThirdPartyDeveloperTabSelected"
          key="thirdpartydev"
          @code-fetched="$forceUpdate()"
        />
      </template>
      <template #kotlin v-if="kotlinOperator && isOperatorTabSelected || kotlinThirdpartydev && isThirdPartyDeveloperTabSelected">
        <GithubCode
          :fileUrl="kotlinOperator"
          language="kotlin"
          v-if="isOperatorTabSelected"
          key="operator"
          @code-fetched="$forceUpdate()"
        />
        <GithubCode
          :fileUrl="kotlinThirdpartydev"
          language="kotlin"
          v-if="isThirdPartyDeveloperTabSelected"
          key="thirdpartydev"
          @code-fetched="$forceUpdate()"
        />
      </template>
    </language-tabs>
  </ClientOnly>
</template>
<script>
import { mapGetters } from "vuex";
import LanguageTabs from "~/components/LanguageTabs";

export default {
  components: {
    LanguageTabs,
  },
  props: {
    kotlinDeps: Array,
    kotlinOperator: String,
    kotlinThirdpartydev: String,
    grpcurlOperator: String,
    grpcurlThirdpartydev: String,
    curlOperator: String,
    curlThirdpartydev: String,
  },
  computed: {
    ...mapGetters([
      "isOperatorTabSelected",
      "isThirdPartyDeveloperTabSelected",
    ]),
  },
};
</script>
