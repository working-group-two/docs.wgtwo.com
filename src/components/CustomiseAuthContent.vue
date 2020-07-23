<script>
import { EventBus } from '~/event-bus.js';

export default {
  render(createElement) {
    return createElement('div', this.$slots.default);
  },
  props: ["value"],
  updated() {
    this.updateTokens(this.value.activeRole);
  },
  methods: {
    updateTokens(role) {
      const isOperator = role === "OPERATOR";
      const isThirdPartyDeveloper = role === "THIRD_PARTY_DEVELOPER";
      const authorizationType = isOperator ? "Basic" : "Bearer";
      const tokenImport = isOperator ? "OperatorToken" : (
        role === "THIRD_PARTY_DEVELOPER" ? "BearerToken" : "UserToken"
      );
      const constructor = isOperator
        ? 'OperatorToken("${CLIENT_ID}", "${CLIENT_SECRET}")'
        : (
          isThirdPartyDeveloper
            ? 'BearerToken("${TOKEN}")'
            : 'UserToken("${TOKEN}")'
        );

      this.$el.querySelectorAll("pre > code").forEach(el => {
        if (el.textContent === "Loading...") {
          return;
        }
        if (!el.hasAttribute("data-original-code")) {
          el.setAttribute("data-original-code", el.textContent);
        }
        el.textContent = el.getAttribute("data-original-code")
          .replace(
            /import com.wgtwo.api.util.auth.(OperatorToken|UserToken|BearerToken)/g,
            `import com.wgtwo.api.util.auth.${tokenImport}`
          )
          .replace(
            /(BearerToken|OperatorToken|UserToken)\(".*"\)/g,
            constructor
          )
          .replace(
            /"Authorization: (Basic|Bearer) .*"/g,
            '"Authorization: ' + authorizationType + ' ${TOKEN}"'
          );
        Prism.highlightElement(el);
        if (isOperator) {
          this.fixClassAndText(el, "${TOKEN}", this.value.operatorToken);
          this.fixClassAndText(el, "${CLIENT_ID}", this.value.clientId);
          this.fixClassAndText(el, "${CLIENT_SECRET}", this.value.clientSecret);
        } else {
          this.fixClassAndText(el, "${TOKEN}", isThirdPartyDeveloper ? this.value.accessToken : this.value.userToken);
        }
      });
    },
    fixClassAndText(block, equalsText, newText) {
      block.querySelectorAll(".token").forEach(element => {
        if (element.innerText === equalsText) {
          element.classList.add("your-token-here");
          element.innerText = newText;
        }
      });
    }
  },
  mounted() {
    EventBus.$on('codefetched', () => {
      this.$forceUpdate();
    });
  }
};
</script>
<style>
.token.your-token-here {
  border: 1px dashed#ffffff99;
  padding: 2px 4px;
  border-radius: 5px;
  margin: 0 2px;
  background: #0D0208;
  color: #00FF41;
}
</style>
