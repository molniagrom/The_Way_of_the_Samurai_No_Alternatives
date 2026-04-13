import {useTracks} from "../../bll/useTracks.ts";
import {TrackItem} from "./TrackItem.tsx";
import s from "./Playlist.module.css"

type PropsPlaylist = {
    selectedTrackID: string | null
    onTrackSelect: (trackId: string) => void
}

export function Playlist({selectedTrackID, onTrackSelect}: PropsPlaylist) {
    console.log("Playlist")
    const {tracks} = useTracks()

    return (
        <div>
            {tracks === null && <span>Loading...</span>}
            {tracks?.length === 0 && <span>No tracks</span>}
            <ul className={s.tracks}>
                {tracks?.map((track) => (
                    <TrackItem
                        key={track.id}
                        track={track}
                        isSelected={track.id === selectedTrackID}
                        onTrackSelect={onTrackSelect}
                    />
                ))}
            </ul>
        </div>
    )
}
