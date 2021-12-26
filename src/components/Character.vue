<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="character.cover" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="character.cover" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ character.name}}</p>
        </div>
      </div>
      <div class="content">
        {{ character.description | truncate(50, '...') }}
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span class="tag card-footer-item__datetime">
            {{ character.modified | dateTimeFormat }}
          </span>
          <span class="card-footer-item card-footer-item__edit">
            <b-button rounded expanded @click="editCharacterModal(character)">
              <span style="color: darkred">Edit</span>
            </b-button>
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import common from '@/mixins/common';
import ModalMovie from '@/components/ModalMovie';

export default {
  name: 'Character',
  mixins: [common],
  props: {
    character: Object,
  },
  methods: {
    editCharacterModal(item) {
      this.$buefy.modal.open({
        parent: this,
        props: {
          character: item,
        },
        component: ModalMovie,
        hasModalCard: true,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  & .card-footer-item__edit {
    transform: scale(0.0);
    opacity: 0;
  }
}
.card:hover {
  transition: all 0.3s ease-in-out;
  & * {
    color: white;
  }
  background: darkred;
  & .card-footer-item__edit {
    transform: scale(1.0);
    opacity: 1;
  }
  & .card-footer-item__datetime {
    transform: scale(0.0);
    width: 0;
    opacity: 0;
  }
}
</style>
