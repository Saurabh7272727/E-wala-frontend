import React from 'react'
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="left_footer_side_section">
                <h2>About</h2>
                <p>React.Js</p>
                <p>Next.Js</p>
                <p>Node.Js</p>
                <p>Express.Js</p>
            </div>
            <div className="middle_side_section_footer">
                <h2>Express.js</h2>
                <p>Website is dinamic web using react and all method</p>
                <p>Ex- post ,get ,put, patch</p>
            </div>
            <div className="right_side_section_footer">
                <h2>Email & company</h2>
                <p>saurabhsharma63679383@gmail.com</p>
                <p>Up- 273164</p>
                <p>FullStackDeveloper $saurabh</p>
            </div>
        </footer>
    )
}

export default Footer;
