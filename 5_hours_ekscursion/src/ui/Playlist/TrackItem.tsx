import type {Track} from "../../types/types.ts";
import s from "./TrackItem.module.css"
import clsx from "clsx";

type Props = {
    track: Track
    isSelected: boolean
    onTrackSelect: (trackId: string) => void
}

export function TrackItem({track, isSelected, onTrackSelect}: Props) {
    let classNames = clsx({
        [s.track] : true,
        [s.selected]: isSelected,
    })

    return (
        <li className={classNames}>
            <div onClick={() => onTrackSelect(track.id)}>{track.attributes.title}</div>
            <audio controls src={track.attributes.attachments[0].url}></audio>
        </li>
    )
}
