import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import PropTypes from "prop-types";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        "I am a <b>Computer Engineering Student</b> specialized in the <b>MERN</b> stack with
        a growing focus on<b>AI/ML and Data Science.</b>I am passionate about bridging the gap between
        concepts and reality by turning ideas into functional technology. For
        me, success isn’t just a goal; it is a daily habit of continuous
        learning, building, and refining my craft."
      </p>
    );
    const two = <p></p>;

    const tech_stack = [
      "Javascript ",
      "Python",
      "React.js",
      "Java",
      "Typescript",
      "Mysql",
      "ExpressJs",
      "Git",
      "MongoDB",
      "NodeJs",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Sahil Shinde" src={"/assets/sahilshinde.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
