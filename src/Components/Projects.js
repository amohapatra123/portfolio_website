import React, { Component } from "react";
import {
  Card,
  Button,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-8 col-md-5 offset-2 offset-md-0  mt-1">
            <Card id="card">
              <CardImg
                src={require("../Assets/hacktoberfest.jpg")}
                height="100vh"
                id="card"
              />
              <CardBody>
                <CardTitle>HactoberFest Website</CardTitle>
                <hr />
                <CardText>
                  To mention all the excluded repositories in HactoberFest 2019.
                </CardText>
                <a href="https://github.com/amohapatra123/codex-minor-project">
                  {" "}
                  <Button color="light" outline>
                    View Project
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
          <div className="col-8 col-md-5 offset-2 offset-md-0  mt-1">
            <Card id="card">
              <CardImg
                src={require("../Assets/image.png")}
                height="100vh"
                id="codex"
              />
              <CardBody>
                <CardTitle>Codex Events Webpage</CardTitle>
                <hr />
                <CardText>
                  To mention ongoing event conducted by the club
                </CardText>
                <a href="https://github.com/amohapatra123/Codex_Events_Website">
                  {" "}
                  <Button color="light" outline>
                    View Project
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-md-5 offset-2 offset-md-0  mt-1">
            <Card id="card">
              <CardImg
                src={require("../Assets/soa.png")}
                height="100vh"
                width="80%"
                id="card"
              />
              <CardBody>
                <CardTitle>ITER Alumni Portal</CardTitle>
                <hr />
                <CardText>
                  Portal to maintain the record of all the Alumni of college.
                </CardText>
                <a href="https://github.com/amohapatra123/ITER_ALUMNI_TRACKER">
                  {" "}
                  <Button color="light" outline>
                    View Project
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
          <div className="col-8 col-md-5 offset-2 offset-md-0  mt-1">
            <Card id="card">
              <CardImg
                src={require("../Assets/IRCLogo.png")}
                height="100vh"
                id="codex"
              />
              <CardBody>
                <CardTitle>IRC Club Website</CardTitle>
                <hr />
                <CardText>Website for the Robotics club of college.</CardText>
                <a href="https://github.com/amohapatra123/WebsiteForTheClub">
                  {" "}
                  <Button color="light" outline>
                    View Project
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
