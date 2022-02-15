export interface Streams {
    
    data:Stream[];
}

export interface Stream {
    user_id:string;
    user_name:string;
    game_name:string;
    title:number;
    viewer_count:number;
    thumbnail_url:string;
    is_mature:boolean;
}