import axios from 'axios';

export function getStreamResponse() {

    return axios.get(`https://api.twitch.tv/helix/streams`, {
                    headers: {
                        'Authorization': `${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
                        'Client-ID': `${process.env.REACT_APP_TWITCH_CLIENT_ID}`
                    }
                })
                .then(response => response.data);
}

export function getTop() {

    return axios.get(`https://api.twitch.tv/helix//games/top`, {
                    headers: {
                        'Authorization': `${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
                        'Client-ID': `${process.env.REACT_APP_TWITCH_CLIENT_ID}`
                    }
                })
                .then(response => response.data);
}