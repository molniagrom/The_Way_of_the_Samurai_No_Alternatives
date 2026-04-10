import type {TrackDetailsResource} from "../types/types.ts";
import {useEffect, useState} from "react";

type PropsTrackDetails = {
    selectedTrackID: string | null
}

export function TrackDetails({selectedTrackID}: PropsTrackDetails) {
    console.log("TrackDetails")

    const [selectedTrack, setSelectedTracks] = useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + selectedTrackID, {
            headers: {
                "api-key": "7375c246-b206-4c43-a2ae-0010f7388790",
            }
        })
            .then(res => res.json())
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
