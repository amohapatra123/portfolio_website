import React, { Component } from "react";
import "../Styles/skills.css";
export default class Skills extends Component {
  render() {
    return (
      <div className="card container animate" id="card">
        <div class="container">
          <h2>SKILLS</h2>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6">
              Languages
              <hr />
              HTML5<span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <br />
              CSS3<span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <br />
              JAVASCRIPT<span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
            </div>
            <div className="col-12 col-md-6">
              Frameworks
              <hr />
              BOOTSTRAP4<span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <br />
              JQUERY<span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <br />
              REACT<span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              Tools
              <hr />
              GIT<span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <br />
              GITHUB<span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
              <span class="material-icons">grade</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
