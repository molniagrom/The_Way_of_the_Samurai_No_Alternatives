import {type CSSProperties, useEffect, useState} from "react";
import type {Track} from "../../types/types.ts";
import {getTracks} from "../../dal/api.ts";

type PropsPlaylist = {
    selectedTrackID: string | null
    onTrackSelect: (trackId: string) => void
}

export function Playlist({selectedTrackID, onTrackSelect}: PropsPlaylist) {
    console.log("Playlist")
    const [tracks, setTracks] = useState<Track[] | null>(null)

    useEffect(() => {
        getTracks()
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
