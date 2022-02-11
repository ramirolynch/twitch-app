import { NavLink } from "react-router-dom";
import { SearchResults } from "./SearchResults";


export function Main() {

    return (

        <div>
            <NavLink to='/'>Search</NavLink>
            <NavLink to='/Favorites'>Favorites</NavLink>
        </div>
    );
}