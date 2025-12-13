import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";
import PropTypes from "prop-types";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {

    const projects = {
      "SuiteSpot": {
        desc:
          "SuiteSpot is a web application designed for booking accommodations. It allows users to list their properties, browse available listings, make bookings, and manage associated bill.",
        techStack: "JavaScript, EJS, Bootstrap, Node.js (Express.js), Sequelize, MySQL",
        link: "https://github.com/SahilShinde108/SuiteSpot",

        // open: ""
      },
      "Apna Video Call": {
        desc:
          "A MERN stack video chat application. Leverages WebRTC for peer-to-peer media streams and Socket.io for real-time signaling, enabling HD video calls, live messaging, and screen sharing.",
        techStack: "Node.js (Express.js), React.js, TypeScript, WebRTC, Socket.io, MongoDB",
        link: "https://github.com/SahilShinde108/Video-Conferencing-Platform",
        open: "https://apnavideocall-f97q.onrender.com/"
      },
      "ZenoTrade": {
        desc:
          "ZenoTrade: A modern trading platform featuring a public landing page, secure user authentication, and an interactive dashboard for real-time portfolio tracking, order management, and performance analytics.",
        techStack: "Javascript, HTML , CSS, ReactJs, NodeJs, MongoDB",
        link: "https://github.com/SahilShinde108/ZenoTrade",
        open: "https://zenotrade.onrender.com/"
      },
      
      "Ai base Healthcare Architecture for India": {
        desc:
          "AI-powered rural healthcare ecosystem connecting Patients, Health Workers, and Pharmacies. Features offline disease prediction, telemedicine, and automated health alerts.",
        techStack: "Javascript, Python, HTML, CSS, SQLite",
        link: "https://github.com/SahilShinde108/Ai-base-HealthCare-Architecture-for-India",
        open: "https://ai-base-healthcare-architecture-for-india.onrender.com"
      },
      "Career Crafters": {
        desc:
          "A comprehensive career guidance platform featuring interactive assessment quizzes, detailed career exploration across Science, Commerce, and Arts streams, and personalized recommendations.",
        techStack: "PHP, MySQL, HTML, CSS, JavaScript",
        link: "https://github.com/SahilShinde108/Career-Guidance",
        // open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
