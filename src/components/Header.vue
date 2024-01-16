<template>
  <b-navbar class="topnav" :mobile-burger="false">
    <template #brand>
      <b-navbar-item
        tag="g-link"
        exact
        to="/"
        class="p-0"
      >
        <Logo class="topnav__logo"></Logo>
      </b-navbar-item>
    </template>
    <template #end>
      <slot name="header-end"></slot>
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
  background: linear-gradient(#ffffff, #fbfbfb);
  height: calc(81 / 16 * 1rem);
  padding: 4px 16px;
}

@media screen and (max-width: 1023px) {
  .topnav {
    position: initial;
  }
}

.topnav__logo {
  width: auto;
  height: 100%;
}
</style>
