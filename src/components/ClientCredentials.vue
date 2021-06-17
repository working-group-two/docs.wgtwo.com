<template>
  <div>
    <div class="client-config">
      <div class="half-flex">
        <b-field label="Client ID" label-position="inside">
          <b-input
              :value="clientId"
              @input="setCredential({ type: 'clientId', value: $event })"
              placeholder="b3dc0414-cf77-11eb-b4bc-8720de4e0fa8"></b-input>
        </b-field>
        <b-field label="Client Secret" label-position="inside">
          <b-input
              :value="clientSecret"
              @input="setCredential({ type: 'clientSecret', value: $event })"
              placeholder="Pdct5r9wiHOaaIOxC9adEL46RSCd9DjVWmpPLYaMxjonaa38yfdPbMwjXZsUJMqhKsuRLjWH"
          ></b-input>
        </b-field>
      </div>
      Credentials will be cleared when you close the page.
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';

export default {
  computed: {
    ...mapState({
      clientId: state => state.credentials.clientId,
      clientSecret: state => state.credentials.clientSecret,
    }),
  },
  methods: {
    ...mapMutations([
      'setCredential',
    ]),
  }
};
</script>
<style scoped>

.half-flex {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
}

.half-flex > * {
  width: calc(50% - 8px);
}
</style>
