import { useState } from "react";
import { Stream } from "../Models/Stream";
import { Result } from "./Result";


export function SearchResults() {

    const [streamResults, setStreamResults] = useState<Stream[]>([]);

    return (

        <ul>
            {streamResults.map((stream, i) => <Result key={i} stream={stream}></Result>)}
        </ul>
    );
}