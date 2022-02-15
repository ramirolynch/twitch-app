import { useState } from "react";
import { Stream } from "../Models/Stream";
import { Result } from "./Result";



    const [streamResults, setStreamResults] = useState<Stream[]>([]);

    export function SearchResults() {


        return (
        <div>
            
            <ul>
                {streamResults.map((stream, i) => <Result key={i} stream={stream}></Result>)}
            </ul>

        </div>
    );
}