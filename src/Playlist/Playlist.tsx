import {type CSSProperties, useEffect, useState} from "react";
import type {Track} from "../types/types.ts";

type PropsPlaylist = {
    selectedTrackID: string | null
    onTrackSelect: (trackId: string) => void
}

export function Playlist({selectedTrackID, onTrackSelect}: PropsPlaylist) {
    console.log("Playlist")
    const [tracks, setTracks] = useState<Track[] | null>(null)

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
            headers: {
                "api-key": "7375c246-b206-4c43-a2ae-0010f7388790",
            }
        })
            .then(res => res.json())
            .then(json => setTracks(json.data))


    }, []);

    const handleSelectTrack = (trackId: string) => {
        onTrackSelect(trackId)
    }

    return (
        <div>
            {tracks === null && <span>Loading...</span>}
            {tracks?.length === 0 && <span>No tracks</span>}
            <ul>
                {tracks?.map((track) => {
                    const style: CSSProperties = {}
                    if (track.id === selectedTrackID) {
                        style.outline = "1px solid green"
                    }
                    return (
                        <li key={track.id} style={style}>
                            <div onClick={() => handleSelectTrack(track.id)}>{track.attributes.title}</div>
                            <audio controls src={track.attributes.attachments[0].url}></audio>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
