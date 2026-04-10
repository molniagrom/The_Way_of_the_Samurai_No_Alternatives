import { PageTitle } from "../PageTitle/PageTitle";
import { Playlist } from "../Playlist/Playlist";
import { TrackDetails } from "../TrackDetails/TrackDetails";
import {useEffect, useState} from "react";
import type {Track, TrackDetailsResource} from "../types/types.ts";

export function MainPage() {

    const [tracks, setTracks] = useState<Track[] | null>(null)
    const [selectedTrackID, setSelectedTracksID] = useState<string | null>(null)
    const [selectedTrack, setSelectedTracks] = useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
            headers: {
                "api-key": "7375c246-b206-4c43-a2ae-0010f7388790",
            }
        })
            .then(res => res.json())
            .then(json => setTracks(json.data))


    }, []);

    const handleSelectTrack = (trackId: string) => {
        setSelectedTracksID(trackId)

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
            headers: {
                "api-key": "7375c246-b206-4c43-a2ae-0010f7388790",
            }
        })
            .then(res => res.json())
            .then(json => setSelectedTracks(json.data))
    }

    return (
        <div>
            <PageTitle value={"Musicfun Player"}/>
            <Playlist tracks={tracks} selectedTrackID={selectedTrackID} handleSelectTrack={handleSelectTrack}/>
            <TrackDetails selectedTrackID={selectedTrackID} selectedTrack={selectedTrack}/>
        </div>
    )
}
