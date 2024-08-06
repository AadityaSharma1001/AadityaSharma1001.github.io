import './Navbar.css';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
function Navbar({isActive}) {
  return (
    <>
      <div className='navbar'>
        <img className='image' src={logo} alt="logo" />
        <div className="navbar-content">
          <div className='content' >
            <NavLink className= "links" to="/" activeClassName="active">HOME</NavLink>
          </div>
          <div className='content' id='INITIATIVES'>
            <NavLink className= "links" to="/initiatives" activeClassName="active">INITIATIVES</NavLink>
              <div className='dropdown-content'>
                <NavLink className= "links" to="/CampusCeo" activeClassName="active">CAMPUS CEO</NavLink>
                <NavLink className= "links" to="/JobFair" activeClassName="active">JOB FAIR</NavLink>
                <NavLink className= "links" to="/blog" activeClassName="active">BLOG</NavLink>
                <NavLink className= "links" to="/InternshipPortal" activeClassName="active">INTERNSHIP PORTAL</NavLink>
              </div>
          </div>
          <div className='content' id='E-SUMMIT'>
            <NavLink className= "links" to="/E-Summit" activeClassName="active">E-SUMMIT</NavLink>
            <div className='dropdown-content-2'>
              <NavLink className= "links" to="/StartupShowcase" activeClassName="active">STARTUP SHOWCASE</NavLink>
              <NavLink className= "links" to="/StockMarket" activeClassName="active">STOCK MARKET</NavLink>
              <NavLink className= "links" to="/CaseStudy" activeClassName="active">CASE STUDY</NavLink>
          </div>
          </div>
          <div className='content'>
            <NavLink className= "links" to="/team" activeClassName="active">TEAM</NavLink>
          </div>
          <div className='content' id='CONTACT-US'>
            <NavLink className= "links" to="/contact" activeClassName="active">CONTACT US</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
