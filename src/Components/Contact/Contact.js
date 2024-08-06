import React from "react";
import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };
  const handleBlur = () => {
    setFocusedInput(null);
  };
  return (
    <>
      <div className="contact">
        <div className="contact-heading">
          <span>CONTACT US</span>
          <p>Get In Touch</p>
        </div>
        <div className="contact-us">
        <div className="contact-form">
          <form>
          <div className="form-heading">
            Message
          </div>
            <input className={focusedInput === "name" ? "focused" : ""}
            onFocus={() => handleFocus("name")} onBlur={handleBlur} type="text" placeholder="Name" />
            <input className={focusedInput === "email" ? "focused" : ""}
            onFocus={() => handleFocus("email")} onBlur={handleBlur} type="email" placeholder="Email" />
            <input className={focusedInput === "subject" ? "focused" : ""}
            onFocus={() => handleFocus("subject")} onBlur={handleBlur} type="text" placeholder="Subject" />
            <textarea className={focusedInput === "message" ? "focused" : ""}
            onFocus={() => handleFocus("message")} onBlur={handleBlur} placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
          </div>
          <div className="contact-info">
          <h2>Contact Info</h2>
          <br/>
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
          </div>
        </div>
      </div>
    </>
  );
}
