<template>
  <div class="is-expanded">
    <div class="field">
      <div class="field-body">
        <div class="field has-addons has-addons-centered">
          <div class="control is-medium is-expanded">
            <input type="text" placeholder="Search..." v-on:keyup.enter="searchEvt"
                   class="input is-medium is-rounded" v-model="search">
            <span class="icon is-left">
              <i class="mdi mdi-magnify mdi-24px"></i>
            </span>
          </div>
          <p class="control">
            <b-button label="Search" type="is-warning" rounded size="is-medium"
                      @click="searchEvt"/>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data: () => ({
    search: '',
  }),
  methods: {
    searchEvt() {
      this.$emit('searchEvent', this.search);
    },
  },
};
</script>

<style scoped>

</style>
