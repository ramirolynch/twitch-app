import { useEffect, useState } from "react";
import { fetchTopStreams } from "../Service/TwitchApi";
import { Stream, Streams } from "../Models/Stream";
import { Result } from "./Result";

export function SearchPage() {

    const [searchTerm, setSearchTerm] = useState('');
    const [topStreams, setTopStreams] = useState<Streams[]>([]);
    const [searchList, setSearchList] = useState<Stream[]>([]);

    useEffect(() => {
        fetchTopStreams().then(response => {console.log(response)
            // setTopStreams(response.data)
        });
        // searchChannels(searchTerm).then(response => setSearchList(response));
    },[searchTerm]);

        return (

            <div>

                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' name='channelSearch'/>
                <button onClick={() => setSearchTerm(searchTerm)}>Search</button>

                {searchList.map((stream, i) => <Result key={i} stream={stream}></Result>)}

            </div>
        );
}
