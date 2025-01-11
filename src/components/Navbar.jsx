import { Link, NavLink } from 'react-router'
import "./Navbar.css"
 
function Navbar() {
 
    return (
      <div className="navbar">
        <ul>
            <NavLink to="/" className="nav-link" activeStyle={{borderBottom: "1px solid #000"}}>
                <p>
                    About
                </p>
            </NavLink>
            <NavLink to="/myworks" className="nav-link" activeStyle={{borderBottom: "1px solid #000"}}>
                <p>
                    My Works
                </p>
            </NavLink>
            <NavLink to="/contact" className="nav-link" activeStyle={{borderBottom: "1px solid #000"}}>
                <p>
                    Contact
                </p>
            </NavLink>
        </ul>
      </div>
    )
  }
  
  export default Navbar
  