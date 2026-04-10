import type {TrackDetailsResource} from "../types/types.ts";
import {useEffect, useState} from "react";
import {getTrack} from "../dal/api.ts";

type PropsTrackDetails = {
    selectedTrackID: string | null
}

export function TrackDetails({selectedTrackID}: PropsTrackDetails) {
    console.log("TrackDetails")

    const [selectedTrack, setSelectedTracks] = useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        if (!selectedTrackID) return

        getTrack(selectedTrackID)
            .then(json => setSelectedTracks(json.data))
    }, [selectedTrackID]);

    return (
        <div>
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
