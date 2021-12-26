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
          <span class="tag">{{ character.modified | dateTimeFormat }}</span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import common from '@/mixins/common';

export default {
  name: 'Character',
  mixins: [common],
  props: {
    character: Object,
  },
};
</script>

<style scoped>
</style>
