export default `
  createSong(
    song: SongInput!
  ): Song
  
  updateSong(
    song_id: ID!
    song: SongInput!
  ): Song
`;
