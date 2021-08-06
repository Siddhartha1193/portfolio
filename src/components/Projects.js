import React, {Component} from 'react';

export default class Projects extends Component{
  render(){
    return(
      <div className="section section-projects section-first row">
        <h3  className="css3-gradient-2">Projects</h3>
        <h4 className="projects-list">PHP Tutorial (PHP, HTML5, jQuery, MySQL, JavaScript)&nbsp;
          <small>
            <i className="list-inline-item social-icons">
              <a href="https://github.com/Siddhartha1193/PHP-Tutorial" target="_blank" title="View on Github">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>&nbsp;
              <a href="http://thecity.sfsu.edu/PHPTutorial/" target="_blank" title="Goto project">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fas fa-external-link-alt fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </i>
          </small>
        </h4>
        <p>An online tutorial website on the programming language PHP - with code samples, graded and ungraded quizzes and demo on how to develop an application using PHP. Admin feature included that allows modification of all content on the website.</p>
        <h4 className="projects-list">My Portfolio (ReactJS, NodeJS, Boostrap)&nbsp;
          <small>
            <i className="list-inline-item social-icons">
              <a href="https://github.com/Siddhartha1193/My-Portfolio" target="_blank" title="View on Github">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>&nbsp;
              <a href="http://www.siddharthasankasala.tech/" target="_blank" title="Goto project">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fas fa-external-link-alt fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </i>
          </small>
        </h4>
        <p>Portfolio website that includes a detailed summary of my projects, work experience, education, contact information and social media profiles.</p>
        <h4 className="projects-list">iSplit (JavaScript, ReactJS, NodeJS, Redux)&nbsp;
          <small>
            <i className="list-inline-item social-icons">
              <a href="https://github.com/Siddhartha1193/iSplit" target="_blank" title="View on Github">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>&nbsp;
            </i>
          </small>
        </h4>
        <p>iSplit is a mobile web application that uses OCR to read a bill and split it up inot a list of items. These items can then be assigned to individuals which will make bill splitting easy.</p>
        <h4 className="projects-list">Profiler (Android Application, Google Maps API, GeoFencing)&nbsp;
          <small>
            <i className="list-inline-item social-icons">
              <a href="https://github.com/Csc-780/Profiler_project" target="_blank" title="View on Github">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>&nbsp;
              <a href="https://play.google.com/store/apps/details?id=com.abhijit.profiler&hl=en" target="_blank" title="Goto project">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fas fa-external-link-alt fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </i>
          </small>
        </h4>
        <p>An android application that automatically activates user defined settings on the device based on the user’s location, time of the day and amount of battery charge remaining in the device.</p><p> Published app on Google Play Store</p>
        <h4 className="projects-list">Great Table(PHP, HTML5, jQuery, MySQL, MVC, Agile, AWS, Scrum)&nbsp;
          <small>
            <i className="list-inline-item social-icons">
              <a href="https://github.com/Siddhartha1193/Great-Table" target="_blank" title="View on Github">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>&nbsp;
            </i>
          </small>
        </h4>
        <p>Was the Technical lead of a team that designed and developed a website that allows users to search for restaurants based on their favorite locations or cuisines. This website was hosted using AWS.</p>
        <h4 className="projects-list">Just Park It! (Android Application, SFPark API, SQLite, Agile)&nbsp;
          <small>
            <i className="list-inline-item social-icons">
              <a href="https://github.com/Siddhartha1193/Just-ParkIt" target="_blank" title="View on Github">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>&nbsp;
            </i>
          </small>
        </h4><p>Was the UI lead of a team that designed and developed an android application that displays available parking locations using the Google Maps API and parsing data from SFPark API. Additional features like color coding of street cleaning data, GPS status check and search were implemented. </p>
      </div>
      )
    }
  }
