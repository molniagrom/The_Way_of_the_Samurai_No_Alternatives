import {PageTitle} from "./PageTitle/PageTitle";
import {Playlist} from "./Playlist/Playlist";
import {TrackDetails} from "./TrackDetails/TrackDetails";
import {useTrackSelection} from "../bll/useTrackSelection.tsx";

export function MainPage() {
    console.log("MainPage")
    const {selectedTrackID, handleTrackSelect} = useTrackSelection()


    return (
        <div>
            <PageTitle value={"Musicfun Player"}/>
            <Playlist selectedTrackID={selectedTrackID} onTrackSelect={handleTrackSelect}/>
            <TrackDetails selectedTrackID={selectedTrackID}/>
        </div>
    )
}
