import {type CSSProperties} from "react";
import type {Track} from "../types/types.ts";

type PropsPlaylist = {
    tracks: Track[] | null
    selectedTrackID: string | null
    handleSelectTrack: (trackId: string) => void
}

export function Playlist({tracks, selectedTrackID, handleSelectTrack}: PropsPlaylist) {

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
