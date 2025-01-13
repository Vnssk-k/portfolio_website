import { NavLink } from 'react-router'
import "./Navbar.css"
 
function Navbar() {
 
    return (
      <div className="navbar">
        <ul>
            <NavLink to="/" className="nav-link">
                <p>
                    ABOUT
                </p>
            </NavLink>
            <NavLink to="/myworks" className="nav-link">
                <p>
                    MY WORKS
                </p>
            </NavLink>
            <NavLink to="/contact" className="nav-link">
                <p>
                    CONTACT
                </p>
            </NavLink>
        </ul>
      </div>
    )
  }
 
  export default Navbar
 
 