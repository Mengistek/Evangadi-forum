import React from 'react'
import './Footer.css'
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png" />
        
        <InstagramIcon className='icons'/>
        <FacebookIcon className='icons' />
        <YouTubeIcon  className='icons'/>
        <div></div>
      </div>
      <div className='footer-info'>
        <h1>Useful Link</h1>
        <p>Hom it Works</p>
        <p>Terms of service</p>
        <p>Privace policy</p>
      </div>
      <div>
        <h1 className='footer-info'>Contact Info</h1>
        <p>Evangadi Networks</p>
        <p>suport@evangadi.com</p>
        <p>+1-202-386-2702</p>
      </div>
    </div>
  );
}

export default Footer;

