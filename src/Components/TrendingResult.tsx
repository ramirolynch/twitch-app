import { useContext, useState } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { Stream, Channel } from "../Models/Stream";

export function TrendingResult(props:{stream:Stream}) {

    const {addFave, removeFave, favorites} = useContext(StreamContext);

    function checkFavorites(){
        let foundItem = favorites.find((item)=>item.user_id === props.stream.user_id);
        if(foundItem) {
            return true;
        } else {
            return false;
        }
    }



    return (
        <div>
            <ul className='trendingresult'>
                <li>Username: {props.stream.user_name}</li> 
                <li>Title: {props.stream.title}</li> 
                <li>Viewers: {props.stream.viewer_count}</li>
                <li><img src={(props.stream.thumbnail_url).replace('{width}', '250').replace('{height}', '141')}/></li>
            </ul>

            {checkFavorites() === false ? <button className='notliked' onClick={()=> { addFave(props.stream)}}><span className={'material-icons-outlined'}>favorite</span></button> : <button className='liked' onClick={()=> { removeFave(props.stream.user_id)}}><span className={'material-icons-outlined'}>favorite</span></button> }
            
        
        </div>
    
    );
}
