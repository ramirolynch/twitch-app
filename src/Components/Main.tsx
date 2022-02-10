import { NavLink } from "react-router-dom";
import { ResultsList } from "./ResultsList";


export function Main() {

    return (

        <div>
            <NavLink to='/'>Search</NavLink>
            <NavLink to='/Favorites'>Favorites</NavLink>
        </div>
    );
}