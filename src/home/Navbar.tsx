import '../scss/styles.css'
import { NavLink } from "react-router";

function Navbar() {
    return (
        <div className='navbar'>
            <NavLink className='navlink roboto unselectable' to="/home/tadpoles">Tadpoles</NavLink>
            <NavLink className='navlink roboto unselectable' to="/home/seedlings">Seedlings</NavLink>
            <NavLink className='navlink roboto unselectable' to="/home/settings">Settings</NavLink>
        </div>
    )
}

export default Navbar
