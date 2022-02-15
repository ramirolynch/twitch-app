import axios from 'axios';
import { useState } from 'react';
import { Stream, Streams } from '../Models/Stream';



export function fetchTopStreams() {

    return axios.get<Streams>(`https://api.twitch.tv/helix/streams`, {
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
                        'Client-Id': `${process.env.REACT_APP_TWITCH_CLIENT_ID}`
                    }
                })
<<<<<<< HEAD
                .then(response => response)
}

export function fetchSearchedChannels(searchTerm:string) {

    return axios.get<Streams>('https://api.twitch.tv/helix/search/channels', {
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
                        'Client-Id': `${process.env.REACT_APP_TWITCH_CLIENT_ID}`
                    },
                    params: {
                        'query': searchTerm
                    }
                 })
                 .then(response => response)
=======
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
>>>>>>> 6d02b94a9cbde8cf79205ffee5d1abd490f41e1f
}