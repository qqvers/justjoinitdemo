import logo from "../photos/logo.png";
import { jobData } from "../data";
export default function Footer() {
  return (
    <div className="footer_container">
      <img src={logo} alt="logo" />
      <div className="footer_info">
        <div className="footer_products">
          <h3>Products</h3>
          <p>Offers</p>
          <p>Top companies</p>
          <p>Geek</p>
          <p>Employer Panel</p>
          <p>Candidate Profile</p>
          <p>Pricing</p>
        </div>
        <div className="footer_resources">
          <h3>Resources</h3>
          <p>Help</p>
          <p>Terms</p>
          <p>Privacy policy</p>
        </div>
        <div className="footer_about">
          <h3>About Us</h3>
          <p>About Us</p>
          <p>Career</p>
        </div>
      </div>
      <div className="footer_social_media">
        <p>Follow us on social media</p>
        <img src={jobData[4].logo} alt="logoSocialMedia" />
        <img src={jobData[5].logo} alt="logoSocialMedia" />
        <img src={jobData[7].logo} alt="logoSocialMedia" />
        <img src={jobData[8].logo} alt="logoSocialMedia" />
      </div>
    </div>
  );
}
