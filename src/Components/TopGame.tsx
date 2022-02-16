import { useContext } from "react";
import { isTemplateMiddle } from "typescript";
import { StreamContext } from "../Context/StreamsContext";
import { Game } from "../Models/Stream";

export function TopGame(props:{game:Game}) {

    const {addFaveGame, removeFaveGame, faveGames} = useContext(StreamContext);

    function checkFavorites(){
        let foundItem = faveGames.find((item)=> item.id === props.game.id);
        if(foundItem) {
            return true;
        } else {
            return false;
        }
    }
    

    return (
        <div>
            <ul className='topgame'>
                <li>User name: {props.game.name}</li> 
                <li><a target="_blank" href={'https://www.twitch.tv/directory/game/' + props.game.name}><img src={(props.game.box_art_url).replace('{width}', '155').replace('{height}', '204')}/></a></li>
            </ul>

           


            {checkFavorites() === false ? <button className='notliked' onClick={()=> { addFaveGame(props.game)}}><span className={'material-icons-outlined'}>favorite</span></button> : <button className='liked' onClick={()=> { removeFaveGame(props.game.id)}}><span className={'material-icons-outlined'}>favorite</span></button> }
        
        </div>
    
);
}

