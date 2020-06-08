import React, { Component } from "react";
import "../Styles/main.css";
import { Button } from "reactstrap";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
export default class Main extends Component {
  state = {
    about: false,
    skills: false,
    projects: false,
    resume: false,
  };
  handleAbout = () =>
    this.setState({ about: true, skills: false, projects: false });
  handleSkills = () =>
    this.setState({ skills: true, about: false, projects: false });
  handleProjects = () =>
    this.setState({ projects: true, about: false, skills: false });
  render() {
    return (
      <div className="App">
        <div className="row" id="row">
          <div className="col-xs-7  col-md-5 offset-3    offset-md-1">
            <img
              src={require("../Assets/anshuman.jpg")}
              alt="anshuman"
              id="photo"
            />
            <h1>ANSHUMAN MOHAPATRA</h1>
            <h5>Front-End Developer</h5>
            <span>
              <a href="mailto:amohapatra2001@gmail">
                <span class="material-icons">mail_outline</span>
                amohapatra2001@gmail.com
              </a>
            </span>
            <br />
            <span>
              <a href="tel:8895455356">
                <span class="material-icons">call</span>
                8895455356
              </a>
            </span>
            <br />
            <span>
              <a href="https://www.facebook.com/profile.php?id=100009797476778">
                {" "}
                <i class="fa fa-facebook" />
              </a>
            </span>
            <span>
              <a href="https://github.com/amohapatra123">
                {" "}
                <i class="fa fa-github" />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/anshuman2261/">
                {" "}
                <i class="fa fa-instagram" />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/anshuman-mohapatra-72374318b/">
                {" "}
                <i class="fa fa-linkedin" />
              </a>
            </span>
            <br /> <span>&copy;2020 Anshuman Mohapatra</span>
          </div>
          <div className="col-xs-12 col-md-6">
            <Button
              variant="flat"
              color="light"
              outline
              className="mt-2 ml-5 ml-md-4"
              onClick={this.handleAbout}
            >
              ABOUT
            </Button>

            <Button
              variant="flat"
              color="light"
              outline
              className="mt-2  ml-4 ml-md-3"
              onClick={this.handleSkills}
            >
              SKILLS
            </Button>

            <Button
              variant="flat"
              color="light"
              outline
              className="mt-2  ml-4 ml-md-3"
              onClick={this.handleProjects}
            >
              PROJECTS
            </Button>
            <a href="https://docs.google.com/document/d/1JpllA4ad-WIhZwl28ZF-I1riiPoXSpRqQrIXke2oVjA/edit?usp=sharing">
              <Button
                variant="flat"
                color="light"
                outline
                className="mt-2  ml-5  ml-md-3 d-none d-sm-inline"
              >
                RESUME
              </Button>
            </a>

            <div className="mt-5" id="render">
              {this.state.about ? <About /> : null}
              {this.state.skills ? <Skills /> : null}
              {this.state.projects ? <Projects /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
