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
        <div className='trendingbox'>
            
            <ul className="trendingresults">
                <li className='trendingthumbnail'><a target='_blank' href={'https://www.twitch.tv/' + props.stream.user_name}><img src={(props.stream.thumbnail_url).replace('{width}', '187').replace('{height}', '105')}/></a></li>

                <li className='trendinginfo'>
                    <a target='_blank' href={'https://www.twitch.tv/' + props.stream.user_name}>{props.stream.user_name}</a> 
                    <a target='_blank' href={'https://www.twitch.tv/' + props.stream.user_name}>{props.stream.title}</a>
                    Viewers: {props.stream.viewer_count}
                </li>
                <div className='buttonbox'>  
                    <button className='navbutton'> <a target="_blank" href={'https://www.twitch.tv/' + props.stream.user_name}>Go to {props.stream.user_name}</a>  </button>
                    {checkFavorites() === false ? <button className='notliked' onClick={()=> { addFave(props.stream)}}><span className={'material-icons-outlined'}>favorite</span></button> : <button className='liked' onClick={()=> { removeFave(props.stream.user_id)}}><span className={'material-icons-outlined'}>favorite</span></button> }
                </div>
            </ul>
            

            
            
            
        </div>
    
    );
}
