import {type CSSProperties} from "react";
import type {Track} from "../../types/types.ts";

type Props = {
    track: Track
    isSelected: boolean
    onTrackSelect: (trackId: string) => void
}

export function TrackItem({track, isSelected, onTrackSelect}: Props) {
    const style: CSSProperties = {}
    if (isSelected) {
        style.outline = "1px solid green"
    }

    return (
        <li style={style}>
            <div onClick={() => onTrackSelect(track.id)}>{track.attributes.title}</div>
            <audio controls src={track.attributes.attachments[0].url}></audio>
        </li>
    )
}
