<template>
  <div>
    <b-navbar class="topnav" v-bind:mobile-burger="false">
      <template slot="brand">
        <b-navbar-item tag="g-link" exact to="/">
          <WGTwo class="navbar__logo" />
        </b-navbar-item>
      </template>
    </b-navbar>

    <main class="section">
      <div class="columns">
        <article class="column is-three-fifths">
          <slot></slot>
        </article>
        <nav class="column articlenav is-one-fifths is-hidden-touch">
          <slot name="articlenav"></slot>
        </nav>
        <nav class="column docsnav is-one-fifths is-hidden-touch">
          <slot name="docsnav"></slot>
        </nav>
      </div>
    </main>
    <footer class="footer is-hidden-desktop" v-if="this.$slots.docsnav">
      <slot name="docsnav"></slot>
    </footer>
  </div>
</template>

<style>
:root {
  --nav-sticky-top-position: 89px;
}
.active {
  font-weight: bolder;
}
</style>
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

.docsnav {
  order: -1;
  position: sticky;
  top: var(--nav-sticky-top-position);
  align-self: flex-start;
}

.articlenav {
  position: sticky;
  top: var(--nav-sticky-top-position);
  align-self: flex-start;
}

.navbar__logo {
  width: auto;
  height: 30px;
}
</style>

<script>
import WGTwo from "~/assets/images/wgtwo-logo.svg";

export default {
  components: {
    WGTwo
  }
};
</script>
