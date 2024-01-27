export interface SpotifyTrack {
  album: {
    images: { url: string }[],
    name: string
  },
  name: string,
  artists: {
    name: string
  }[],
  explicit: boolean,
  id: string
}