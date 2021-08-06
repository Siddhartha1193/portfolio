import React, {Component} from 'react';

export default class Skills extends Component{
  render(){
    return(
      <div className="section section-skills section-first row">
        <h3  className="css3-gradient-2">Skills</h3>
        <h4 className="skills-title"> Programming Languages and Tools:</h4>
        <ul className="list-inline skill-icons">
          <li className="list-inline-item">
            <i className="devicon-react-plain"></i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="devicon-angularjs-plain"></i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="devicon-javascript-plain"></i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="devicon-jquery-plain"></i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="fab fa-node"></i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="fab fa-npm"></i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="devicon-bootstrap-plain"></i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="devicon-css3-plain"></i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="devicon-html5-plain"></i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="devicon-java-plain"> </i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="devicon-android-plain"> </i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="devicon-mongodb-plain"> </i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="devicon-mysql-plain"> </i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="devicon-php-plain"> </i>
          </li>&nbsp;
          <li className="list-inline-item">
            <i className="devicon-github-plain"> </i>
          </li>

        </ul>
        <br/>
        <ul className="skills-list fa-ul">
          <li><h5><span className="fa-li"><i className="fas fa-code "></i></span><b></b>ReactJS, AngularJS, NodeJS, Java, Android Development, PHP, JavaScript, HTML5/CSS3, Redux, XML, JSON, jQuery, REST APIs</h5></li>
          <li><h5><span className="fa-li"><i className="fas fa-database "></i></span>MySQL, MongoDB, PostgreSQL, SQLite, JDBC, Firebase</h5></li>
          <li><h5><span className="fa-li"><i className="fas fa-wrench "></i></span> Android Studio, Atom, AWS, Git, Subversion, Mac OS X, Ubuntu</h5></li>
          </ul>

      </div>
      )
    }
  }
