
function parseAlbum(albumResponse) {
    const albums = albumResponse.items.map(function (album) {
        return {
            id: album.id,
            name: album.name,
            type: album.album_type,
            release: album.release_date,
            artists: album.artists.map(function (artist) {
                return { name: artist.name, id: artist.id }
            }),
            tracks: album.total_tracks
        }
    });
    return albums;
}

function parseTrack(trackResponse) {
    const trackSet = trackResponse.map(function (track) {
        return {
            name: track.name,
            id: track.id,
            durationMs: track.duration_ms,
            preview: track.preview_url,
            album: track.album,
            albumId: track.albumId,
            release: track.release,
            albumType: track.albumType,
            artists: track.artists.map(function (artist) {
                return { name: artist.name, type: artist.type, id: artist.id }
            })
        }
    })
    return trackSet;
}


export { parseAlbum, parseTrack }