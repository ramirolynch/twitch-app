import { useEffect, useState } from "react";
import { fetchTopStreams, fetchSearchedChannels } from "../Service/TwitchApi";
import { Stream } from "stream";
import { SearchResults } from "./SearchResults";
import { Streams } from "../Models/Stream";


export function SearchPage() {

    const [searchTerm, setSearchTerm] = useState('');
    const [topStreams, setTopStreams] = useState<Streams[]>([]);
    const [searchList, setSearchList] = useState<Stream[]>([]);

    useEffect(() => {
        fetchTopStreams().then(response => {console.log(response)
            // setTopStreams(response.data)
        });
        // fetchSearchedChannels(searchTerm).then(response => setSearchList(response));
    },[searchTerm]);

    return (

        <div>

            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' name='channelSearch'/>
            <button onClick={() => setSearchTerm(searchTerm)}>Search</button>

            <SearchResults></SearchResults>

        </div>
    );
}