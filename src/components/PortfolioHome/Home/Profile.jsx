import React from "react";
import Typical from "react-typical";
import './Profile.css';

const Home = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
          <div className="colz-icons">

            <a href="https://www.facebook.com/cam.g.s">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/camgstewart/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/camgstewart">
              <i className="fa fa-github-square"></i>
            </a>
          </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Cameron</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Developer 🌎",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Developer 💎",
                    1000,
                    "Musician 🎶",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Full Stack developer ready to bring your dreams to fruition.
                Proficient in JavaScript, ReactJS and NodeJS.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
            {""}
             Hire Me {" "} 
             </button>
            <a href="22CGS.pdf" download="Cameron Stewart 22CGS.pdf">
              <button className="btn highlighted-btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
