import {useState} from "react";

export function useTrackSelection() {
    const [selectedTrackID, setSelectedTracksID] = useState<string | null>(null)

    const handleTrackSelect = (trackId: string) => {
        setSelectedTracksID(trackId)
    }

    return {selectedTrackID, handleTrackSelect}
}