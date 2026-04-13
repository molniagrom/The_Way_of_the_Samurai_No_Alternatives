import {useTrack} from "../../bll/useTrack.ts";
import s from "./TrackDetails.module.css"

type PropsTrackDetails = {
    selectedTrackID: string | null
}

export function TrackDetails({selectedTrackID}: PropsTrackDetails) {
    console.log("TrackDetails")
    const {selectedTrack} = useTrack(selectedTrackID)


    return (
        <div className={s.track}>
            <h2>Track Details</h2>
            {!selectedTrackID && <span>No selected track</span>}
            {selectedTrackID && !selectedTrack && <span>Loading...</span>}
            {selectedTrack && <div>
                <h4>{selectedTrack.attributes.title}</h4>
                <p>
                    {selectedTrack.attributes.lyrics ?? 'Lyrics are not available for this track.'}
                </p>
            </div>}
            {selectedTrackID && selectedTrack && selectedTrack.id !== selectedTrackID && <span>Loading...</span>}
        </div>
    )
}
