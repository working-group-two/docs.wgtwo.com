<template>
  <b-navbar class="topnav" v-bind:mobile-burger="false">
    <template slot="brand">
      <b-navbar-item tag="g-link" exact to="/">
        <Logo class="topnav__logo" />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
import Logo from "~/assets/images/logo.svg";

export default {
  components: {
    Logo
  }
};
</script>
<style scoped>
.topnav {
  border-bottom: 1px solid hsl(0, 0%, 90%);
  position: sticky;
  top: 0;
  background: linear-gradient(#f2f2f2, #f8f8f8);
}

@media screen and (max-width: 1023px) {
  .topnav {
    position: initial;
  }
}

.topnav__logo {
  width: auto;
  height: 30px;
}
</style>
