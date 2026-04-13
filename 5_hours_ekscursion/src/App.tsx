import {type CSSProperties, useEffect, useState} from "react"
import './App.css'
import type {Track, TrackDetailsResource} from "./types/types.ts";

export function App() {

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
        <>
            <h1>Musicfun Player</h1>
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
            <hr/>
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

        </>
    )
}

export default App
