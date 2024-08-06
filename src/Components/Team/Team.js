import React from "react";
import "./Team.css";
function Team() {
  return (
    <>
      <div className="team">
      <div className="team-heading">
      <span>OUR TEAM</span>
      <p>The ones who make it all possible</p>
      </div>
      <div className="prof">
        <div className="prof-card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
          <div className="prof-container">
            <h4><b>John Doe</b></h4>
          
        <div className="prof-social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Team;
