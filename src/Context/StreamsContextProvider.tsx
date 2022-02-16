import {  ReactNode, useEffect, useState } from "react";
import { isTemplateSpan } from "typescript";
import { Channel, Game, Stream, Streams } from "../Models/Stream";
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

const [gamesList, setGamesList] = useState<Game[]>([])

const [faveGames, setFaveGames] = useState<Game[]>([])

function addFaveGame(game:Game) {
    setFaveGames([...faveGames,game]);
}

function removeFaveGame(id:string) {
    setFaveGames(faveGames.filter((game)=> game.id != id));
}

function setGames(games:Game[]){
    setGamesList(games)
}


    return (

        <StreamContext.Provider value={{faveGames, gamesList, setGames, addFaveGame, removeFaveGame, faveChannels, addFaveChannel, removeFaveChannel, favorites, addFave, removeFave}}>
            {children}
        </StreamContext.Provider>  
    );
}
