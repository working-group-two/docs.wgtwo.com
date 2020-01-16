<template>
  <b-navbar class="topnav" v-bind:mobile-burger="false">
    <template slot="brand">
      <b-navbar-item tag="g-link" exact to="/">
        <WGTwo class="topnav__logo" />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
import WGTwo from "~/assets/images/wgtwo-logo.svg";

export default {
  components: {
    WGTwo
  }
};
</script>
<style scoped>
.topnav {
  border-bottom: 1px solid hsl(0, 0%, 90%);
  position: sticky;
  top: 0;
}

@media screen and (max-width: 769px) {
  .topnav {
    position: initial;
  }
}

.topnav__logo {
  width: auto;
  height: 30px;
}
</style>