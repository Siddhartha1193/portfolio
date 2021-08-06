import React, {Component} from 'react';

export default class Experience extends Component{
  render(){
    return(
      <div className="section section-work section-first row">
        <h3  className="css3-gradient-2">Work experience</h3>
          <div  className="section-work-list row-fluid">

            	<h4 className="work-title">Web Developer</h4>
              <h5 className="work-name"><i className="fas fa-building"></i> San Francisco State university <p className="pull-right work-date"><i className="fas fa-calendar-alt work-date"></i> February 2015 - January 2016</p></h5>
              <ul className="company-list fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Designed, developed and successfully launched the latest version of SFSU's library website</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Created web content using HTML5, CSS3, PHP, Bootstrap and Drupal. Used MySQL for database</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Assisted with Library website maintenance, digital image processing, design, and web content creation. Updated existing web pages and created new Drupal based pages and content</li>
              </ul>
              <br/>
            	<h4 className="work-title">Systems Analyst</h4>
              <h5 className="work-name"><i className="fas fa-building"></i> San Francisco State university <p className="pull-right"><i className="fas fa-calendar-alt"></i> February 2016 - October 2017</p></h5>
              <ul className="company-list fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Technical Support, IT Management</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>LAN/ WAN Administration, Systems installation and configuration </li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Troubleshoot enterprise software (Active Directory, e-mail, data backup, anti-virus, anti-spyware, network, accounts) as necessary</li>
              </ul>
              <br/>
            	<h4 className="work-title">Web Accessibility Evaluator</h4>
              <h5 className="work-name"><i className="fas fa-building"></i> San Francisco State university <p className="pull-right"><i className="fas fa-calendar-alt"></i> May 2015 - August 2015</p></h5>
              <ul className="company-list fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Tested websites utilizing assistive technology tools and devices for WCAG 2.0 success criteria and prepared detailed reports documenting identified violations with suggested solutions with code examples, based on the existing design.</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Studied and applied web accessibility evaluation tools like JAWS (Job Access With Speech) and processed accessible Adobe PDF documents using Acrobat Adobe.</li>
              </ul>

          </div>
        </div>
            )
          }
        }
