<script>
import { EventBus } from '~/event-bus.js';
import { mapGetters, mapState } from 'vuex';

export default {
  render(createElement) {
    return createElement('div', this.$slots.default);
  },
  updated() {
    this.updateTokens(this.activeRole);
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
          fixClassAndText(childElement, "${OPERATOR_TOKEN}", this.operatorToken);
          fixClassAndText(childElement, "${CLIENT_ID}", this.clientId);
          fixClassAndText(childElement, '"CLIENT_ID"', q(this.clientId));
          fixClassAndText(childElement, "${CLIENT_SECRET}", this.clientSecret);
          fixClassAndText(childElement, '"CLIENT_SECRET"', q(this.clientSecret));
          fixClassAndText(childElement, "${ACCESS_TOKEN}", this.accessToken);
          fixClassAndText(childElement, '"ACCESS_TOKEN"', q(this.accessToken));
          fixClassAndText(childElement, "${USER_TOKEN}", this.userToken);
          fixClassAndText(childElement, '"USER_TOKEN"', q(this.userToken));
        });
      });
    },
  },
  mounted() {
    EventBus.$on('codefetched', () => {
      this.$forceUpdate();
    });
  },
  computed: {
    ...mapGetters([
      'operatorToken'
    ]),
    ...mapState({
      clientId: state => state.auth.clientId,
      clientSecret: state => state.auth.clientSecret,
      accessToken: state => state.auth.accessToken,
      userToken: state => state.auth.userToken,
      activeRole: state => state.auth.activeRole,
    }),
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
