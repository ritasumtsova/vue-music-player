export interface Song {
  artist: String;
  duration: String;
  imageUrl: String;
  status: String;
  time: String | Number;
  title: String;
}

export interface Playlist {
  nowplaying: Array<Song>;
}