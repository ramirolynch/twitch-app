import { useState } from "react";
import { Stream, Channel } from "../Models/Stream";

export function TrendingResult(props:{stream:Stream}) {

    return (
        <div>
            <ul>
                <li>Username: {props.stream.user_name}</li> 
                <li>Title: {props.stream.title}</li> 
                <li>Viewers: {props.stream.viewer_count}</li>
                <li><img src={(props.stream.thumbnail_url).replace('{width}', '250').replace('{height}', '141')}/></li>
            </ul>
        
        </div>
    
    );
}
