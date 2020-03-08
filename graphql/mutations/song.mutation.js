export default `
  createSong(
    song: SongInput!
  ): Song
  
  updateSong(
    song_id: ID!
    song: SongInput!
  ): Song
  
  deleteSong(
    song_id: ID!
  ): Song
`;
