import { Link, NavLink } from 'react-router'
 
function Navbar() {
 
    return (
      <div>
        <ul>
            <NavLink to="/">
                <p>
                    About
                </p>
            </NavLink>
            <NavLink to="/myworks">
                <p>
                    My Works
                </p>
            </NavLink>
            <NavLink to="/contact">
                <p>
                    Contact
                </p>
            </NavLink>
        </ul>
      </div>
    )
  }
  
  export default Navbar
  