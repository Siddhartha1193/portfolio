import React, {Component} from 'react';

export default class About extends Component{
  render(){
    return(
      <div className="section section-about section-first row">
        <h3  className="css3-gradient-2">About Me</h3>
          <h4 className="about-title"> Software Developer | CS Graduate | San Francisco </h4><br/>
          <ul className="about-list fa-ul">
            <li><span className="fa-li"><i className="fas fa-certificate "></i></span><b>Well versed with JavaScript, ReactJS, Android Development, React Native, NodeJS</b></li>
            <li><span className="fa-li"><i className="fas fa-certificate "></i></span><b>Worked extensively with Object Oriented Methodologies, SQL and NoSQL databases</b></li>
            <li><span className="fa-li"><i className="fas fa-certificate "></i></span><b>Worked in environments that follow Agile Software Developement and Scrum</b></li>
            <li><span className="fa-li"><i className="fas fa-certificate "></i></span><b>Passionate about learning and adapting to new technologies</b></li>
            <li><span className="fa-li"><i className="fas fa-certificate "></i></span><b>Currently seeking new opportunities as a Software Developer</b></li>
          </ul>
      </div>
      )
    }
  }
