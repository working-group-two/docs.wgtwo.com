<template>
  <div>
    <Header></Header>
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
nav a.active {
  font-weight: bolder;
}

/* Fix prismjs vs bulma making some numbers very big:
https://github.com/jgthms/bulma/issues/1708#issuecomment-382560341 */
.content .tag, .content .number {
  display: inline;
  padding: inherit;
  font-size: inherit;
  line-height: inherit;
  text-align: inherit;
  vertical-align: inherit;
  border-radius: inherit;
  font-weight: inherit;
  white-space: inherit;
  background: inherit;
  margin: inherit;
}
</style>
<style scoped>
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
</style>
