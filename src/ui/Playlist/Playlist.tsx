import {type CSSProperties} from "react";
import {useTracks} from "../../bll/useTracks.tsx";

type PropsPlaylist = {
    selectedTrackID: string | null
    onTrackSelect: (trackId: string) => void
}

export function Playlist({selectedTrackID, onTrackSelect}: PropsPlaylist) {
    console.log("Playlist")
    const {tracks} = useTracks()


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
