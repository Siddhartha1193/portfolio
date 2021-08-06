import React, {Component} from 'react';



export default class Sidebar extends Component{
  render(){
    return(
      <div className="span4 vcard">
        <div className="vcard-wrap">
          <div className="vcard-photo">
            <img src={require('../images/avatar.jpg')} alt="profile photo" title="My Photo"/>
          </div>
          <div  className="vcard-bio">
            <h3  className="vcard-name">Siddhartha Sankasala</h3>

            <br/>

            <ul className = "list unstyled vcard-contact">
              <li className="vcard-contact-address">
                <i className="fa fa-home fa-2x span v2" aria-hidden="true"></i>&nbsp; &nbsp;
                <h5 className="spanv10 address">San Francisco, CA, U5A</h5>
              </li>
              <li className="vcard-contact-email "><i className="fas fa-envelope fa-2x spanv2"></i>&nbsp; &nbsp;
                <h5 className="spanv10 email"><a href="mailto: ssankasa@mail.sfsu.edu" title="Email me">ssankasa@mail.sfsu.edu</a></h5>
              </li>
              <li className="vcard-contact-phone"><i className="fa fa-phone fa-2x span v2" aria-hidden="true"></i>&nbsp; &nbsp;
                <h5 className="spanv10">(415)-316-3347</h5>
              </li>

            </ul>
            <br/>
          </div>
          <hr/>

          <div className="vcard-bio social">
            <h4 className="vcard-social"> Professional Network  </h4>
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <span className="fa-stack fa-2x">
                  <a href="https://www.linkedin.com/in/siddharthasankasala/" target="_blank" title="LinkedIn">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
                  </a>
                </span>
              </li>
              <li className="list-inline-item">
                <span className="fa-stack fa-2x">
                  <a href="https://github.com/Siddhartha1193" target="_blank" title="Github">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fab fa-github fa-stack-1x fa-inverse"></i>
                  </a>
                </span>
              </li>
              <li className="list-inline-item">
                <span className="fa-stack fa-2x">
                  <a href="https://angel.co/siddhartha-sankasala" target="_blank" title="AngelList">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-angellist fa-stack-1x fa-inverse"></i>
                  </a>
                </span>
              </li>
            </ul>

            <hr/>

            <h4 className="vcard-resume"> Resume  </h4>
            <ul className="list-inline resume">
              <li className="list-inline-item">
                <span className="fa-stack fa-2x">
                  <a  href="https://drive.google.com/file/d/1XBJVkOboyfGqqdnWc7pWX4g8TSg_MP7g/view?usp=sharing" target="_blank" title="Resume">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-file-pdf fa-stack-1x fa-inverse"></i>
                  </a>
                </span>
              </li>
            </ul>

            <hr/>
            <h4 className="vcard-social-media"> Social Media  </h4>
            <ul className="list-inline social-media">
              <li className="list-inline-item">
                <span className="fa-stack fa-2x">
                  <a href="https://www.facebook.com/sid1193" target="_blank" title="Facebook">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
                  </a>
                </span>
              </li>
              <li className="list-inline-item">
                <span className="fa-stack fa-2x">
                  <a href="https://twitter.com/siddhartha1193" target="_blank" title="Twitter">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                  </a>
                </span>
              </li>
            </ul>


          </div>

          </div>


      </div>

    )
  }
}
