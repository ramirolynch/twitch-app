import { useContext } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { ChannelSearched } from "./ChannelSearched";
import { TrendingResult } from "./TrendingResult";


export function FavoritesPage() {

    const {favorites, faveChannels} = useContext(StreamContext)


   
    return(

        <div>
            <h2>Trending Favorites</h2>
            {favorites.length > 0 ? favorites.map((stream, i) => <TrendingResult key={i} stream={stream}></TrendingResult>): <h3>You haven't favorited any trending channels yet :)</h3>}
            <h2>Favorite Channels from Search</h2>
            {faveChannels.length > 0 ? faveChannels.map((channel, i) => <ChannelSearched key={i} channel={channel}></ChannelSearched>) : <h3>You haven't favorited any searched channels yet :)</h3>}
        </div>
    );
}