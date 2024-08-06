import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [count, setCount] = useState(0);
  const handleLike = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="home-end">
        <div className="home-end-about-us">
          <h2>About Us</h2>
          <br />
          <h3>Our Vision:</h3>
          <br />
          <p>
            Entrepreneurship in India is yet to reveal its hidden potential. It
            will not only help India to frontier with the world leaders but also
            unlock the quality of brains that we are so proud of. With this
            idea, The Entrepreneurship Development Cell, IIT Delhi wishes to
            inculcate and Enrich the entrepreneurial environment in India by
            creating an easily accessible and exhaustive set of resources for
            the entrepreneurs, which including the students, the budding
            professionals, mentors, angel investors and the venture capitalists
            through various fun-filled yet educating sessions such as Startup
            Showcases, competitions, eTalks and so on and so forth.
          </p>
          <br />
          <h4>Our Mission:</h4>
          <br />
          <p>
            To create a sustainable and diverse entrepreneurial ecosystem where
            the young and the elderly come together to take entrepreneurship a
            step ahead in India.
          </p>
        </div>
        <div className="home-end-contact-info">
          <h2>Contact Us</h2>
          <br />
          <ul>
            <li>
              <i
                style={{ marginRight: "1.3%" }}
                className="fas fa-map-marker-alt"
              />
              Location:
              <a href="https://iitj.ac.in/footer/index.php?id=contact">
                IIT Jodhpur, Karwar
              </a>
            </li>
            <li>
              <i className="fab fa-whatsapp" />
              Phone: 91-9079156932
            </li>
            <li>
              <i className="fas fa-envelope" />
              Email:<a href="mailto:bie@iitj.ac.in">bie@iitj.ac.in</a>
            </li>
          </ul>
          <br />
          <h2>Social Connecting</h2>
          <br />
          <button onClick={handleLike}>Like</button>
          <h5>{count} liked this </h5>
        </div>
      </div>
      <div className="footer">
        <div className="footer-heading">
          Site Developed by Aaditya Sharma and Raditya Saraf ©2024 E-CELL IIT
          Jodhpur
        </div>
      </div>
    </>
  );
}

export default Footer;
