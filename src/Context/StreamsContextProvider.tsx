import {  ReactNode, useEffect, useState } from "react";
import { isTemplateSpan } from "typescript";
import { Stream, Streams } from "../Models/Stream";
import { StreamContext } from "../Context/StreamsContext";
import { getStreamResponse, getTop } from "../Service/TwitchApi";



interface Props {children:ReactNode;}

export function StreamContextProvider({children}:Props) {

    const[streams, setStreams] = useState<Stream[]>([]);

       useEffect(() =>{
    
        getStreamResponse().then(response => setStreams(response.data));
    

       }, []);

    const [streamList, setStreamList] = useState<Stream[]>(streams) // between parenthesis we put the list of streams that we want in the context.
    const [favorites, setFavorites] = useState<Stream[]>([])

    function addFave(stream:Stream) {
        setStreamList([...favorites,stream]);
    }

    function removeFave(id:string) {
        setFavorites(favorites.filter((stream)=> stream.user_id != id));
    
    }

    return (

        <StreamContext.Provider value={{streamList, favorites, addFave, removeFave}}>
            {children}
        </StreamContext.Provider>  
    );
}
