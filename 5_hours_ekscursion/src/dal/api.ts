const apiKey = "7375c246-b206-4c43-a2ae-0010f7388790"
const headers = {
    "api-key": apiKey,
}

export const getTrack = async (trackId: string) => {
    const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: headers
    })
    return await res.json()
}

export const getTracks = async () => {
    const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
        headers: headers
    })
    return await res.json()
}