<script lang="ts" setup>
import { ref, Ref, onBeforeUnmount } from 'vue';
import moment, { MomentInput } from 'moment';
import { Playlist, Song } from '../types/Playlist';
import HistorySong from './HistorySong.vue';
import PlayingSong from './PlayingSong.vue';

const playlist: Ref<Array<Song> | null> = ref(null);

const sortByDate = (playlist: Array<Song>): Array<Song> => {
  const toMilliseconds = playlist.map(song => {
    return {...song, time: +(moment(song.time as MomentInput).format('x'))}
  })

  return toMilliseconds.sort((a, b) => a.time.valueOf() - b.time.valueOf()).reverse();
};

const fetchPlaylist = async (): Promise<void> => {
  await fetch('/api/thisisgo/go/onair.json')
  .then((response) => response.json())
  .then((data: Playlist) => {
    playlist.value = sortByDate(data.nowplaying);
  })
  .catch(err => console.log(err));
}

const interval = setInterval(fetchPlaylist, 2000);

onBeforeUnmount(() => clearInterval(interval))
</script>

<template>
  <ul class="playlist">
    <li v-for="(song, i) in playlist" :key="i">
      <template v-if="song.status === 'playing'">
        <PlayingSong :song="song" />
      </template>
      <template v-else>
        <HistorySong :song="song" />
      </template>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .playlist {
    border: 1px solid rgb(93, 91, 245);
    border-radius: 1rem;
    list-style: none;
    padding: 1rem;
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  
    & > li {
      margin-top: 1.5rem;
    }
  }
</style>
