<template>
  <div class="role-selection card">
    <div class="card-content content">
      <h1>Select role</h1>
      <p>
        We can customise the content to help you better achieve your goals.
        <br />You can change this later.
      </p>
        <div class="choices">
          <button class="button is-info">Third party developer</button>
          <span>I'm making an app for other people to use</span>
          <button class="button is-info">Mobile operator</button>
          <span>I'm working for a mobile operator</span>
          <button class="button is-info">Subscriber</button>
          <span>I want to hack with my own subscription</span>
          <button class="button is-info">Show all docs</button>
          <span>Don't make any customisations to the content</span>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  methods: {}
};
</script>
<style>
.role-selection .choices {
  display: grid;
  grid-template-columns: auto auto;
  gap: 14px;
  align-items: center;
}
</style>
