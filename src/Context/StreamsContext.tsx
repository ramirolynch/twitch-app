import { Streams, Stream } from "../Models/Stream";
import { createContext} from 'react';
import { StringifyOptions } from "querystring";


export interface StreamContextModel {
    streamList:Stream[];
    favorites:Stream[];
    addFave:(stream:Stream)=>void;
    removeItem:(id:string)=>void;
}

const defaultValue:StreamContextModel = {
    streamList:[],
    favorites:[],
    addFave:()=>{},
    removeFave:()=>{}
}

export const StreamContext = createContext<StreamContextModel>(defaultValue);
