<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>WGTWO API docs</h1>

    <ul>
      <li><h2><g-link to="/send-sms/how-to/send-sms/">Send SMS</g-link></h2></li>
      <li><h2><g-link to="/voicemail/how-to/list-and-play-voicemails/">Voicemail</g-link></h2></li>
    </ul>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'WGTWO API docs'
  }
}
</script>

<style scoped>
.h2 {
  margin-right: 1rem;
}
</style>
