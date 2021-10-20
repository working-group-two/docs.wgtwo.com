<template>
  <div>
    <Header></Header>
    <div class="landing-page">
      <section>
        <h2 class="title is-2">Core Network APIs</h2>
        <p>
          Working Group Two's API platform allows
          <strong>Third Party Developers</strong>
          to build products that interact with the core network. Third parties
          need to obtain consent from operators or subscribers via our Oauth2
          service.
        </p>
        <br />
        <p>
          We have a v0 of several of our APIs ready that you can test, and a
          stable v1 for just a few APIs that you can use to create products
          today.
        </p>
        <br />
        <b-button tag="a" type="is-info" href="https://v1.docs.wgtwo.com">
          View documentation for v1 stable
        </b-button>
        <br />
        <br />
        <b-button tag="a" type="is-danger" href="/overview">
          View documentation for v0
        </b-button>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: "WGTWO API documentation",
    titleTemplate: null,
  },
};
</script>

<style scoped>
.landing-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 24px;
}

.landing-page p {
  font-size: 18px;
}

.landing-page section {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
