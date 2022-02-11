import { useEffect, useState } from "react";
import { Streams } from "../Models/Stream";
import { getStreamResponse, getTop } from "../Service/TwitchApi";



export function SearchPage() {

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
   
       return(
   
           <div>
   
               
   
               {/* <SearchResults streams={streams}></SearchResults> */}
           </div>
   
       )
   
   
   }
   
   
   
