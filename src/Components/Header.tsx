import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {

    return (

        <div>
            Twitch Clone
            <NavLink to='/'>Trending</NavLink>
            <NavLink to='/TopGames'>Top Games</NavLink>
            <NavLink to='/Search'>Search</NavLink>
            <NavLink to='/Favorites'>Favorites</NavLink>

        </div>
    );
}