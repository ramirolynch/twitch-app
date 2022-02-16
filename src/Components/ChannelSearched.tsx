import { useContext } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { Channel} from "../Models/Stream";


export function ChannelSearched(props:{channel:Channel}) {

    const {addFaveChannel, removeFaveChannel, faveChannels} = useContext(StreamContext);

    function checkFavorites(){
        let foundItem = faveChannels.find((item)=>item.id === props.channel.id);
        if(foundItem) {
            return true;
        } else {
            return false;
        }
    }


    

    return (
        <div>
            <div className="searched">
            <ul>

                <li>Game name: {props.channel.game_name}</li> 
                <li>Channel title: {props.channel.title}</li> 
               <li>Is live?: {props.channel.is_live === false ? 'Offline' : 'Online'}</li>
               <li><img src={(props.channel.thumbnail_url)}/></li>
            </ul>

            <button> <a target="_blank" href={'https://www.twitch.tv/' + props.channel.broadcaster_login}>{props.channel.game_name}</a>  </button>

            {checkFavorites() === false ? <button className='notliked' onClick={()=> { addFaveChannel(props.channel)}}><span className={'material-icons-outlined'}>favorite</span></button> : <button className='liked' onClick={()=> { removeFaveChannel(props.channel.id)}}><span className={'material-icons-outlined'}>favorite</span></button> }
            </div>
        </div>
    
);
}
