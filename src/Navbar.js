import './Navbar.css';
import logo from './logo.png';
function Navbar() {
  return (
    <>
      <div className='navbar'>
        <img className='image' src={logo} alt="logo" />
        <div className="navbar-content">
          <div className='content' >
            <a href='#'>HOME</a>
          </div>
          <div className='content'>
            <a href='#'>ABOUT US</a>
          </div>
          <div className='content' id='INITIATIVES'>
            <a href='#'>INITIATIVES</a>
              <div className='dropdown-content'>
                <a href='#'>CAMPUS CEO</a>
                <a href='#'>JOB FAIR</a>
                <a href='#'>BLOG</a>
                <a href='#'>INTERNSHIP PORTAL</a>
              </div>
          </div>
          <div className='content' id='E-SUMMIT'>
            <a href='#'>E-SUMMIT</a>
            <div className='dropdown-content-2'>
              <a href='#'>STARTUP SHOWCASE</a>
              <a href='#'>STOCK MARKET</a>
              <a href='#'>CASE STUDY</a>
          </div>
          </div>
          <div className='content' id='CONTACT-US'>
            <a href='#'>CONTACT US</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
