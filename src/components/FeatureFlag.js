import React, {Component} from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const HelloWorld = ({ flags }) => {
    return flags.textSearch ? <div className="section section-about section-first row">
    <h3  className="css3-gradient-2">LaunchDarkly Flag Status</h3>
    <ul className="about-list fa-ul">
            <li><span className="fa-li"><i className="fas fa-certificate "></i></span><b>Text Search Flag is on</b></li></ul></div> : 
            <div className="section section-about section-first row">
            <h3  className="css3-gradient-2">LaunchDarkly Flag Status</h3>
            <ul className="about-list fa-ul">
                    <li><span className="fa-li"><i className="fas fa-certificate "></i></span><b>Text Search Flag is off</b></li></ul></div>;
};

export default withLDConsumer()(HelloWorld);

