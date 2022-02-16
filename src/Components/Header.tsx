import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {

    
    return (

        <div className='header'>
            <h1><a target="_blank" href="https://www.twitch.tv/">Twitch</a></h1> 
            
            <NavLink to='/'>Trending</NavLink>
            <NavLink to='/TopGames'>Top Games</NavLink>
            <NavLink to='/Search'>Search</NavLink>
            <NavLink to='/Favorites'>Favorites</NavLink>
            
        </div>
    );
}