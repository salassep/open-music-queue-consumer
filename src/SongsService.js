const { Pool } = require('pg');

class SongsService {
  constructor() {
    this._pool = new Pool();
  }

  async getSongsFromPlaylist(playlistId) {
    const query = {
      text: 'SELECT songs.* FROM songs LEFT JOIN playlistsongs ON playlistsongs.song_id = songs.id LEFT JOIN playlists ON playlists.id = playlistsongs.playlist_id WHERE playlists.id = $1',
      values: [playlistId],
    };

    const result = await this._pool.query(query);
    return result.rows;
  }
}

module.exports = SongsService;
