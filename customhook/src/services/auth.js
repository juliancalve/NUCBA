export const post = (url, body) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}

export const get = (url) => {
    return fetch(url, {
        method: 'GET',
    });
}