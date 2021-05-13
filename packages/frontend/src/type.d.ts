declare global {
    interface Window {
        onSpotifyWebPlaybackSDKReady:any;
    }
}

type tile={
    img: string,
    title: string,
    popularity: number,
    imgHeight:number,
    imgWidth:number,
    uri: string
}

type question={
    question:string,
    answer:string,
    audio:string,
    options:string[]
}

