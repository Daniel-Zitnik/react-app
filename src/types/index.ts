export type Song = {
    id: number, 
    artist: string, 
    title: string,
    audioFile: string,
    artwork: string,
    album: string
}

export type SongFromITunes = {
    trackId: number, 
    trackName: string, 
    artistName: string, 
    previewUrl: string, 
    artworkUrl100: string, 
    collectionName: string,
    kind: string
}