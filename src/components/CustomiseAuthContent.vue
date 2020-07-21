<script>
// import AuthPropsMixin from "~/components/mixins/AuthPropsMixin.vue";
import EventMaker from "~/components/EventMaker.vue";
import { EventBus } from '~/event-bus.js';

export default {
  render(createElement) {
    // return createElement("h1", this.value.accessToken);
    const self = this;
    // console.log(this);
    console.log(self.value);
    return createElement(
      "div",
      {
        props: {
          fagballs: "FAGBALLS"
        },
        on: {
          change: function(event) {
            console.log("got event");
            console.log("Forcing update");
            self.$forceUpdate();
          }
        }
      },
      [
        createElement(EventMaker, {
          on: {
            codefetched: function(event) {
              console.log("got event from EventMaker");
              console.log("Forcing update");
              self.$forceUpdate();
            }
          }
        }),
        createElement("pre", JSON.stringify(this.value, null, 2)),
        createElement(
          "div",
          {
            props: {
              fagballs: "FAGBALLS"
            },
            on: {
              change: function(event) {
                console.log("got event");
                console.log("Forcing update");
                self.$forceUpdate();
              }
            }
          },
          this.$slots.default
        )
      ]
    );
    // return createElement('div', this.$slots.default);
  },
  props: ["value"],
  updated() {
    console.log(this.value.accessToken);
    console.log("Updated called");
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
    setTimeout(() => {
      // this.$forceUpdate();
    }, 100);
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
    EventBus.$on('codefetched', _ => {
      this.$forceUpdate();
    });
    return;
    const self = this;
    const observer = new MutationObserver(() => {
      console.log("got change");
      this.$forceUpdate();
    });
    observer.observe(self.$el, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true
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
