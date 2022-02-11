import { useState } from "react";


export function SearchBar(props: {onSubmit: (channelSearch:string) => void}) {

    const [channelSearch, setChannelSearch] = useState('');

    return (

        <div>
            <input value={channelSearch} onChange={(e) => setChannelSearch(e.target.value)} type='text' name='channelSearch'/>
            <button onClick={() => props.onSubmit(channelSearch)}>Search</button>
        </div>
    );
}