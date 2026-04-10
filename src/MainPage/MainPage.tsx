import {PageTitle} from "../PageTitle/PageTitle";
import {Playlist} from "../Playlist/Playlist";
import {TrackDetails} from "../TrackDetails/TrackDetails";
import {useState} from "react";
import type {TrackDetailsResource} from "../types/types.ts";

export function MainPage() {
    console.log("MainPage")
    const [selectedTrackID, setSelectedTracksID] = useState<string | null>(null)
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)
    const [trackDetailsError, setTrackDetailsError] = useState<string | null>(null)

    const handleTrackSelect = (trackId: string) => {
        setSelectedTracksID(trackId)
        setSelectedTrack(null)
        setTrackDetailsError(null)

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
            headers: {
                "api-key": "7375c246-b206-4c43-a2ae-0010f7388790",
            }
        })
            .then(async res => {
                if (!res.ok) {
                    const errorText = await res.text()

                    throw new Error(`Track details request failed: ${res.status} ${res.statusText}. ${errorText}`)
                }

                return res.json()
            })
            .then(json => setSelectedTrack(json.data))
            .catch(error => {
                console.error('Failed to load track details', {trackId, error})
                setTrackDetailsError(error instanceof Error ? error.message : 'Unknown error')
            })
    }

    return (
        <div>
            <PageTitle value={"Musicfun Player"}/>
            <Playlist selectedTrackID={selectedTrackID} onTrackSelect={handleTrackSelect}/>
            <TrackDetails
                selectedTrack={selectedTrack}
                selectedTrackID={selectedTrackID}
                trackDetailsError={trackDetailsError}
            />
        </div>
    )
}
