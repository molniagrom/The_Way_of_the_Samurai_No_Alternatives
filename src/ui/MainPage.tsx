import {PageTitle} from "./PageTitle/PageTitle";
import {Playlist} from "./Playlist/Playlist";
import {TrackDetails} from "./TrackDetails/TrackDetails";
import {useState} from "react";

export function MainPage() {
    console.log("MainPage")
    const [selectedTrackID, setSelectedTracksID] = useState<string | null>(null)

    const handleTrackSelect = (trackId: string) => {
        setSelectedTracksID(trackId)
    }

    return (
        <div>
            <PageTitle value={"Musicfun Player"}/>
            <Playlist selectedTrackID={selectedTrackID} onTrackSelect={handleTrackSelect}/>
            <TrackDetails selectedTrackID={selectedTrackID}/>
        </div>
    )
}
