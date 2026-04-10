const apiKey = "7375c246-b206-4c43-a2ae-0010f7388790"
const headers = {
    "api-key": apiKey,
}

export const getTrack = (trackId: string) => {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: headers
    })
        .then(res => res.json())
}

export const getTracks = () => {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
        headers: headers
    })
        .then(res => res.json())
}