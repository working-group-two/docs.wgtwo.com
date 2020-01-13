<template>
  <div>
    <b-navbar class="topnav" :mobile-burger="false">
      <template slot="brand">
        <b-navbar-item>
          <g-link exact to="/">
            <WGTwo class="navbar__logo" />
          </g-link>
        </b-navbar-item>
      </template>
    </b-navbar>

    <main class="section">
      <div class="columns">
        <article class="column is-three-fifths">
          <slot></slot>
        </article>
        <nav class="column articlenav">
          <slot name="articlenav"></slot>
        </nav>
        <nav class="column docsnav">
          <slot name="docsnav"></slot>
        </nav>
      </div>
    </main>
    <footer class="footer footernav">
      <slot name="docsnav"></slot>
    </footer>
  </div>
</template>

<style scoped>
.topnav {
  border-bottom: 1px solid hsla(0, 0%, 90%, 1);
}

.docsnav {
  order: -1;
}

.navbar__logo {
  width: auto;
  height: 30px;
}

@media screen and (max-width: 768px) {
  .articlenav {
    display: none;
  }

  .docsnav {
    display: none;
  }
}

@media screen and (min-width: 769px) {
  .footernav {
    display: none;
  }
}
</style>

<script>
import WGTwo from "~/assets/images/wgtwo-logo-square.svg";

export default {
  components: {
    WGTwo
  }
};
</script>
