import {  ReactNode, useEffect, useState } from "react";
import { isTemplateSpan } from "typescript";
import { Channel, Stream, Streams } from "../Models/Stream";
import { StreamContext } from "../Context/StreamsContext";




interface Props {children:ReactNode;}

export function StreamContextProvider({children}:Props) {


const [favorites, setFavorites] = useState<Stream[]>([])

function addFave(stream:Stream) {
    setFavorites([...favorites,stream]);
}

function removeFave(id:string) {
    setFavorites(favorites.filter((stream)=> stream.user_id != id));

}

const [faveChannels, setFaveChannels] = useState<Channel[]>([]);

function addFaveChannel(channel:Channel) {
    setFaveChannels([...faveChannels,channel]);
}

function removeFaveChannel(id:string) {
    setFaveChannels(faveChannels.filter((channel)=> channel.id != id));

}


    return (

        <StreamContext.Provider value={{faveChannels, addFaveChannel, removeFaveChannel, favorites, addFave, removeFave}}>
            {children}
        </StreamContext.Provider>  
    );
}
