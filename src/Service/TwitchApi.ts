import axios from 'axios';

export function getStreamResponse() {

    const access_token = process.env.REACT_APP_TWITCH_ACCESS_TOKEN;
    const client_id = process.env.REACT_APP_TWITCH_CLIENT_ID;

    return axios.get(`https://api.twitch.tv/helix/streams`, {
                    headers: {
                        'Authorization': `Bearer ${access_token}`,
                        'Client-ID': `${client_id}`
                    }
                })
                .then(response => response.data);
}
