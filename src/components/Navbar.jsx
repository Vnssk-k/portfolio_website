import { Link, NavLink } from 'react-router'
import "./Navbar.css"
 
function Navbar() {
 
    return (
      <div className="navbar">
        <ul>
            <NavLink to="/" className="nav-link">
                <p>
                    About
                </p>
            </NavLink>
            <NavLink to="/myworks" className="nav-link">
                <p>
                    My Works
                </p>
            </NavLink>
            <NavLink to="/contact" className="nav-link">
                <p>
                    Contact
                </p>
            </NavLink>
        </ul>
      </div>
    )
  }
 
  export default Navbar
 