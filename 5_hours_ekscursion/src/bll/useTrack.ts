import {useEffect, useState} from "react";
import type {TrackDetailsResource} from "../types/types.ts";
import {getTrack} from "../dal/api.ts";

export function useTrack(selectedTrackID: string | null) {
    const [selectedTrack, setSelectedTracks] = useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        if (!selectedTrackID) return

        getTrack(selectedTrackID)
            .then(json => setSelectedTracks(json.data))
    }, [selectedTrackID]);

    return {selectedTrack}
}