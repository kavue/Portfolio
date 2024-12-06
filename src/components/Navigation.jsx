import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="nav">
    <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
      About Me
    </NavLink>
    <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
      Portfolio
    </NavLink>
    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
      Contact
    </NavLink>
    <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>
      Resume
    </NavLink>
  </nav>
);

export default Navigation;
