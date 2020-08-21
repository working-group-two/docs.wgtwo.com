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
      function q(text) {
        return '"' + text + '"';
      }

      function fixClassAndText(element, equalsText, newText) {
        if (element.innerText === equalsText) {
          element.classList.add("your-token-here");
          element.innerText = newText;
        }
      }

      this.$el.querySelectorAll("pre > code").forEach(el => {
        if (el.textContent === "Loading...") {
          return;
        }
        if (!el.hasAttribute("data-original-code")) {
          el.setAttribute("data-original-code", el.textContent);
        }
        el.textContent = el.getAttribute("data-original-code");
        Prism.highlightElement(el);

        el.querySelectorAll(".token").forEach(childElement => {
          fixClassAndText(childElement, "${OPERATOR_TOKEN}", this.value.operatorToken);
          fixClassAndText(childElement, "${CLIENT_ID}", this.value.clientId);
          fixClassAndText(childElement, '"CLIENT_ID"', q(this.value.clientId));
          fixClassAndText(childElement, "${CLIENT_SECRET}", this.value.clientSecret);
          fixClassAndText(childElement, '"CLIENT_SECRET"', q(this.value.clientSecret));
          fixClassAndText(childElement, "${ACCESS_TOKEN}", this.value.accessToken);
          fixClassAndText(childElement, '"ACCESS_TOKEN"', q(this.value.accessToken));
          fixClassAndText(childElement, "${USER_TOKEN}", this.value.userToken);
          fixClassAndText(childElement, '"USER_TOKEN"', q(this.value.userToken));
        });
      });
    },
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
  background: #0d0208;
  color: #00ff41;
}
</style>
