import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {

    return (

        <div>
            Twitch Clone
            <NavLink to='/'>Search</NavLink>
            <NavLink to='/topgames'>Top Games</NavLink>
            <NavLink to='/Favorites'>Favorites</NavLink>

        </div>
    );
}