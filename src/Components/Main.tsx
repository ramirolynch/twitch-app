import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Streams } from "../Models/Stream";
import { getStreamResponse, getTop } from "../Service/TwitchApi";
import { SearchResults } from "./SearchResults";


export function Main() {

    const[streams, setStreams] = useState<Streams[]>([]);
    const [searchTerm, setSearchTerm]= useState('')
    
   
    
           useEffect(() =>{
   
               if (searchTerm === ''){
                getStreamResponse().then(response => setStreams(response.data));
               } else {
                    getTop().then(response => setStreams(response.data))
    
               }
   
           }, [searchTerm]);
    
   
       
           function setSearch(searchTerm: string){
               setSearchTerm(searchTerm)
           }
   

    return (

        <div>
            <NavLink to='/'>Search</NavLink>
            <NavLink to='/Favorites'>Favorites</NavLink>

            
        </div>
    );
}