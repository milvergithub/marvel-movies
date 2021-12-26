<template>
  <div>
    <form action="">
      <div class="modal-card" style="width: 50vw">
        <header class="modal-card-head">
          <p class="modal-card-title">Character</p>
        </header>
        <section class="modal-card-body">
          <b-field>
            <b-input placeholder="Name" required type="text" v-model="character.name">
            </b-input>
          </b-field>
          <b-field>
            <b-input type="textarea" v-model="character.description" required minlength="10"
                     maxlength="1000">
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <b-button label="Cancel" @click="$emit('close')" />
          <b-button label="Update" type="is-primary" @click="updateCharacter()"/>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ModalMovie',
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      editCharacter: 'EDIT_CHARACTER_ACTION',
    }),
    updateCharacter() {
      if (this.character.name && this.character.name.length > 0
          && this.character.description && this.character.description.length > 0) {
        this.editCharacter(this.character);
        this.$emit('close');
      }
    },
  },
};
</script>

<style scoped>

</style>
