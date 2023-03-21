<script lang="ts" setup>
import moment from 'moment';
import { Song } from '../types/Playlist';

interface SongProps {
  song: Song
}

defineProps<SongProps>()
</script>

<template>
  <div class="history-song">
    <img :src="song.imageUrl" alt="album cover" class="history-song__image">
    <div>
      <p class="history-song__title">{{ song.title }}</p>
      <p class="history-song__subtitle">{{ song.artist }} {{ song.duration }}</p>
      <p class="history-song__date"> {{ moment(song.time).format('LLL') }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .history-song {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    text-align: left;

    &__image {
      width: 150px;
      height: 150px;
      border-radius: 0.5rem;
    }

    &__title {
      font-weight: 700;
      font-size: 29px;
    }

    &__subtitle {
      font-size: 20px;
      margin-bottom: 8px;
    }

    &__date {
      margin-top: 0;
    }
  }
</style>