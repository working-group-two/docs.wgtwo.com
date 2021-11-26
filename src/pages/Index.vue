<template>
  <div>
    <Header></Header>
    <div class="landing-page">
      <section>
        <h2 class="title is-2">Core Network APIs</h2>
        <p>
          Working Group Two's API platform allows you to build products that
          <b>interact with the core telco network</b>. You obtain consent from
          operators or subscribers via OAuth 2.0.
        </p>
        <br />
        <div class="button-container">
          <b-button tag="a" type="is-info" href="https://v1.docs.wgtwo.com">
            View documentation for v1
          </b-button>
          <b-button tag="a" type="" href="/overview">
            View documentation for v0
          </b-button>
        </div>
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
  max-width: 530px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: -16px;
}

.button-container a {
  margin-top: 16px;
}
</style>
