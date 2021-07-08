<script>
import { mapGetters, mapState } from 'vuex';

export default {
  render(createElement) {
    return createElement('div', {
      props: { // these are needed to make the component reactive (update) when these values change
        operatorToken: this.operatorToken,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
        accessToken: this.accessToken,
        userToken: this.userToken,
        }
      }, this.$slots.default);
  },
  updated() {
    // this.updateTokens(this.roleByActiveTab);
    // setTimeout(() => { // hack to be more sure the content will get updated
    //   this.updateTokens(this.roleByActiveTab);
    // }, 300);
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
  computed: {
    ...mapGetters([
      'operatorToken',
      'roleByActiveTab',
    ]),
    ...mapState({
      clientId: state => state.credentials.clientId,
      clientSecret: state => state.credentials.clientSecret,
      accessToken: state => state.credentials.accessToken,
      userToken: state => state.credentials.userToken,
    }),
  }
};
</script>
<style>
.token.your-token-here {
  position: relative;
  border: 1px dashed#ffffff99;
  padding: 2px 4px;
  border-radius: 5px;
  margin: 0 2px;
  background: #0d0208;
  color: #00ff41;
}

.token.your-token-here::after {
  display: none;
  content: "REPLACE ME";
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(80%, -60%);
  background: white;
  padding: 2px;
  font-size: 10px;
  color: black;
  border-radius: 8px;
  z-index: 1;
}

.token.your-token-here:hover:after  {
  display: block;
}
</style>
