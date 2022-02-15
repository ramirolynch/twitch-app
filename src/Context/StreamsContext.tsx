import { Streams, Stream, Channel } from "../Models/Stream";
import { createContext} from 'react';
import { StringifyOptions } from "querystring";


export interface StreamContextModel {
   
    favorites:Stream[];
    faveChannels:Channel[];
    addFave:(stream:Stream)=>void;
    addFaveChannel:(channel:Channel)=>void;
    removeFave:(id:string)=>void;
    removeFaveChannel:(id:string)=>void;
}

const defaultValue:StreamContextModel = {
   
    favorites:[],
    faveChannels:[],
    addFave:()=>{},
    addFaveChannel:()=>{},
    removeFave:()=>{},
    removeFaveChannel:()=>{}
}

export const StreamContext = createContext<StreamContextModel>(defaultValue);
