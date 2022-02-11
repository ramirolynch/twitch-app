import {  ReactNode, useState } from "react";
import { isTemplateSpan } from "typescript";
import { Stream } from "../Models/Stream";
import { StreamContext } from "../Context/StreamContext";
//import menu from '../MenuArray'


interface Props {children:ReactNode;}

export function StreamContextProvider({children}:Props) {

    const [streamList, setStreamList] = useState<Stream[]>([]) // between parenthesis we put the list of streams that we want in the context.
    const [favorites, setFavorites] = useState<Stream[]>([])

    function addFave(stream:Stream) {
        setStreamList([...favorites,stream])
    }

    function removeItem(id:string) {
    setFavorites(favorites.filter((stream)=> stream.user_id != id));
    
    }

    return (
        <StreamContext.Provider value={{streamList, favorites, addFave, removeFave, setFavorites, setStreamList }}>
            {children}
        </StreamContext.Provider>  
    );
}
