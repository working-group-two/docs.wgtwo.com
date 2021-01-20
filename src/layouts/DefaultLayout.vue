<template>
  <div>
    <Header></Header>
    <main class="section main">
      <article class="article">
        <slot></slot>
      </article>
      <nav class="articlenav is-hidden-touch">
        <slot name="articlenav"></slot>
      </nav>
      <nav class="docsnav is-hidden-touch">
        <slot name="docsnav"></slot>
      </nav>
    </main>
    <footer class="footer is-hidden-desktop" v-if="this.$slots.docsnav">
      <slot name="docsnav"></slot>
    </footer>
  </div>
</template>

<style>
:root {
  --nav-sticky-top-position: 101px;
}

/* Fix prismjs vs bulma making some numbers very big:
https://github.com/jgthms/bulma/issues/1708#issuecomment-382560341 */
.content .tag,
.content .number {
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

.content h1 a {
  display: none;
}

/* hack to make header links work with sticky nav in desktop mode */
@media screen and (min-width: 1024px) {
  #content h2,
  #content h3,
  #content h4,
  #content h5,
  #content h6 {
    padding-top: 85px;
    margin-top: -49px;
  }
}
</style>
<style scoped>
.article {
  width: 700px;
}

/* make it use all the width on tablet */
@media screen and (max-width: 1023px) {
  .article {
    width: 100%;
  }
}

.docsnav {
  order: -1;
}

.docsnav,
.articlenav {
  width: 256px;
  padding: 0 16px 40px 16px;
  margin: 0 16px;
  top: var(--nav-sticky-top-position);
  align-self: flex-start;
  position: sticky;
  height: calc(100vh + var(--nav-sticky-top-position) * -1 - 12px);
  overflow: auto;
}

.docsnav a.active {
  font-weight: bolder;
}

.footer a.active {
  font-weight: bolder;
}

.main {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: space-evenly;
}
</style>
