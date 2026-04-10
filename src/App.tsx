import {type CSSProperties, useEffect, useState} from "react"
import './App.css'

// Тип для вложения (например, ссылка на файл)
type Attachment = {
    url: string;
};

// Тип для атрибутов трека (название и список вложений)
type TrackAttributes = {
    title: string;
    attachments: Attachment[];
};

// Основной тип для трека, включающий ID и атрибуты
type Track = {
    id: string;
    attributes: TrackAttributes;
};

export function App() {

    const [tracks, setTracks] = useState<Track[] | null>(null)
    const [selectedTrackID, setSelectedTracks] = useState<string | null>(null)

    useEffect(() => {
        setTimeout(() => {
            fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {headers: {
                "api-key": "7375c246-b206-4c43-a2ae-0010f7388790",
                }})
                .then(res => res.json())
                .then(json => setTracks(json.data))

        }, 3000)

    }, []);

    const onClickHandler = (id: string) => {
        setSelectedTracks(id)
    }

    return (
        <>
            <h1>Musicfun Player</h1>
            {tracks === null && <span>Loading...</span>}
            {tracks?.length === 0 && <span>No tracks</span>}
            <ul>
                {tracks?.map((track) => {
                    const style:  CSSProperties = {}
                    if (track.id === selectedTrackID) {
                        style.outline = "1px solid green"
                    }
                    return (
                        <li key={track.id} style={style}>
                            <div onClick={() => onClickHandler(track.id)}>{track.attributes.title}</div>
                            <audio controls src={track.attributes.attachments[0].url}></audio>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default App
