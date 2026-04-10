import type {TrackDetailsResource} from "../types/types.ts";

type PropsTrackDetails = {
    selectedTrackID: string | null
    selectedTrack: TrackDetailsResource | null
}

export function TrackDetails({selectedTrack, selectedTrackID}: PropsTrackDetails) {
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
