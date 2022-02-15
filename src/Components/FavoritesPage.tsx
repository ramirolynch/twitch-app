import { useContext } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { TrendingResult } from "./TrendingResult";


export function FavoritesPage() {

    const {favorites} = useContext(StreamContext)

   

    return(

        <div>
            {favorites.map((stream, i) => <TrendingResult key={i} stream={stream}></TrendingResult>)}
        </div>
    );
}