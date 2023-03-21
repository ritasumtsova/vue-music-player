<script lang="ts" setup>
import moment from 'moment';
import { Song } from '../types/Playlist';

interface SongProps {
  song: Song
}

defineProps<SongProps>()
</script>

<template>
  <div class="playing-song">
    <img :src="song.imageUrl" alt="album cover" class="playing-song__image">
    <div>
      <p class="playing-song__title">{{ song.title }}</p>
      <p class="playing-song__subtitle">{{ song.artist }}</p>
      <progress class="playing-song__progressbar" value="40" max="100"></progress>
      <div class="playing-song__footer">
        <p>{{ moment(song.time).format('LLL') }}</p>
        <p>{{ song.duration }}</p>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .playing-song {
    &__image {
      width: 300px;
      height: 300px;
      border-radius: 0.5rem;
    }

    &__progressbar {
      width: 100%;
      height: 20px;
      accent-color: hsl(300, 83%, 56%);
      filter: drop-shadow(5px 5px 5px hsl(300, 67%, 50%));
    }

    &__title {
      font-weight: 700;
      font-size: 32px;
    }

    &__subtitle {
      font-size: 24px;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
    }
  }
</style>