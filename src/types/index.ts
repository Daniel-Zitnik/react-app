export type Song = {
    id: number, 
    artist: string, 
    title: string,
    audioFile: string,
    artWork: string,
    album: string
}

export type SongFromITunes = {
    trackID: number, 
    trackName: string, 
    artistName: string, 
    previewUrl: string, 
    artWorkUrl100: string, 
    collectionName: string,
    kind: string
}