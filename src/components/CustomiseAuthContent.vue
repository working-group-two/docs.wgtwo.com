<script>
import EventMaker from "~/components/EventMaker.vue";
import { EventBus } from '~/event-bus.js';

export default {
  render(createElement) {
    return createElement('div', this.$slots.default);
  },
  props: ["value"],
  updated() {
    if (this.value.activeRoleTab === 0) {
      this.updateBearerOrUserToken("bearer");
    } else if (this.value.activeRoleTab === 1) {
      this.$el.querySelectorAll("pre > code").forEach(el => {
        el.textContent = el.textContent
          .replace(
            /import com.wgtwo.api.util.auth.(OperatorToken|UserToken|BearerToken)/g,
            `import com.wgtwo.api.util.auth.OperatorToken`
          )
          .replace(
            /(BearerToken|OperatorToken|UserToken)\(".*"\)/g,
            'OperatorToken("${CLIENT_ID}", "${CLIENT_SECRET}")'
          )
          .replace(
            /"Authorization: (Basic|Bearer) .*"/g,
            '"Authorization: Basic ${OPERATOR_TOKEN}"'
          );
        Prism.highlightElement(el);
        this.fixClassAndText(el, "${OPERATOR_TOKEN}", this.value.operatorToken);
        this.fixClassAndText(el, "${CLIENT_ID}", this.value.clientId);
        this.fixClassAndText(el, "${CLIENT_SECRET}", this.value.clientSecret);
      });
    } else if (this.value.activeRoleTab === 2) {
      this.updateBearerOrUserToken("user");
    }
  },
  methods: {
    updateBearerOrUserToken(type) {
      const isBearer = type === "bearer";
      const tokenImport = isBearer ? "BearerToken" : "UserToken";
      this.$el.querySelectorAll("pre > code").forEach(el => {
        el.textContent = el.textContent
          .replace(
            /import com.wgtwo.api.util.auth.(OperatorToken|UserToken|BearerToken)/g,
            `import com.wgtwo.api.util.auth.${tokenImport}`
          )
          .replace(
            /(BearerToken|OperatorToken|UserToken)\(".*"\)/g,
            'BearerToken("${TOKEN}")'
          )
          .replace(
            /"Authorization: (Basic|Bearer) .*"/g,
            '"Authorization: Bearer ${TOKEN}"'
          );
        Prism.highlightElement(el);
        this.fixClassAndText(
          el,
          "${TOKEN}",
          type === "bearer" ? this.value.accessToken : this.value.userToken
        );
      });
    },
    fixClassAndText(block, equalsText, newText) {
      block.querySelectorAll(".token").forEach(element => {
        if (element.innerText === equalsText) {
          element.classList.add("TOKEN");
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
.token.TOKEN {
  border: 1px dashed#ffffff99;
  padding: 2px 4px;
  border-radius: 5px;
  margin: 0 2px;
  background: black;
}
</style>
