import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About Us
      </NavLink>
      <NavLink to="/services" className="nav-link">
        Services
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact Us
      </NavLink>
    </>
  );
}

export default Menu;
