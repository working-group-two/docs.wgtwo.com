<template>
  <div>
    <Header></Header>
    <main class="main">
      <nav class="docsnav-container is-hidden-touch">
        <div class="docsnav">
          <slot name="docsnav"></slot>
        </div>
      </nav>
      <div class="doc-main-container">
        <div class="article-container">
          <div class="is-flex">
            <div class="article">
              <slot></slot>
            </div>
            <nav class="articlenav is-hidden-touch" v-if="$slots.articlenav">
              <slot name="articlenav"></slot>
            </nav>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer docsnav is-hidden-desktop" v-if="this.$slots.docsnav">
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

.dosc_nav__anchor {
  display: block;
  width: 100%;
}

</style>
<style scoped>
.doc-main-container {
  flex-grow: 1;
  min-height: 100vh;
}

.article-container {
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  padding: 32px 16px;
}

.article {
    max-width: 75%;
    padding: 1rem;
 }

 /* make it use all the width on tablet */
@media screen and (max-width: 1023px) {
  .doc-main-container {
    width: 100%;
  }
  .article-container {
    max-width: 100%;
  }

  .article {
    max-width: 100%;
    padding: 0;
  }
}

.docsnav-container {
  width: 256px;
  border-right: 1px solid #ddd;
  background: linear-gradient(90deg, #ffffff, #fbfbfb);
}

.docsnav-container .docsnav {
  position: sticky;
  top: calc(var(--nav-sticky-top-position) - 1.5rem); /* subtract padding */
  height: calc(100vh + var(--nav-sticky-top-position) * -1 - 40px);
  overflow-x: hidden;
}

.docsnav {
  padding: .5rem .75rem;
  display: flex;
  flex-direction: column;
}

.docsnav li {
  border-radius: 8px;
  padding: 4px 8px;
}

.articlenav {
  max-width: 25%;
  top: calc(var(--nav-sticky-top-position) - 1.5rem); /* subtract padding */
  position: sticky;
  padding: 1.5rem 0 1.5rem 1rem;
  height: 100%; 
  border-left: 1px solid #ccc;
  margin-left: 3rem;
}

.docsnav .active {
  background: hsl(0deg 0% 0% / 7%);
}

.main {
  display: flex;
}
</style>
