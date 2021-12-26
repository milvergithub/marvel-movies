<template>
  <div>
    <div class="columns">
      <div class="mt-5 mt-3 column is-half is-full-mobile is-offset-one-quarter-desktop">
        <SearchBar @searchEvent="searchEvent"></SearchBar>
      </div>
    </div>
    <div id="infinite-scroll"
         class="infinite-scroll p-2 characters">
      <Character v-for="character in characters" :key="character.uuid"
                 :character="character">
      </Character>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Character from '@/components/Character';
import SearchBar from '@/components/SearchBar';

export default {
  name: 'CharactersPage',
  components: { SearchBar, Character },
  computed: {
    ...mapGetters({
      characters: 'GET_CHARACTERS',
      initialParams: 'GET_PARAMS',
    }),
  },
  data: () => ({
    nameStartsWith: '',
    marvelParams: {},
  }),
  methods: {
    ...mapActions({
      getCharactersRequest: 'GET_CHARACTERS_ACTION',
      clearCharacters: 'CLEAR_CHARACTERS_ACTION',
    }),
    searchEvent(e) {
      this.marvelParams = { ...this.initialParams };
      if (e) {
        this.marvelParams.nameStartsWith = e;
      }
      this.clearCharacters();
      this.getCharactersRequest(this.marvelParams);
    },
    listenScroll() {
      const listElm = document.querySelector('#infinite-scroll');
      listElm.addEventListener('scroll', () => {
        if (listElm.scrollTop === 0) {
          return;
        }
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          this.marvelParams.offset += 1;
          this.getCharactersRequest(this.marvelParams);
        }
      });
    },
  },
  mounted() {
    this.marvelParams = { ...this.initialParams };
    this.getCharactersRequest(this.marvelParams);
    this.listenScroll();
  },
};
</script>

<style scoped lang="scss">
.infinite-scroll {
  overflow: auto;
  height: 83vh;
}
.characters {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2em;
}
</style>
