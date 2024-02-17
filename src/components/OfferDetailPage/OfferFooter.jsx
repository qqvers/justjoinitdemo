import logo from "../../photos/logo.png";
export default function OfferFooter() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <div>
        <div>
          <h3>Products</h3>
          <p>Offers</p>
          <p>Top companies</p>
          <p>Geek</p>
          <p>Employer Panel</p>
          <p>Candidate Profile</p>
          <p>Pricing</p>
        </div>
        <div>
          <h3>Resources</h3>
          <p>Help</p>
          <p>Terms</p>
          <p>Privacy policy</p>
        </div>
        <div>
          <h3>About Us</h3>
          <p>About Us</p>
          <p>Career</p>
        </div>
        <div>
          <p>Follow us on social media</p>
          <img src="X" alt="logoSocialMedia" />
          <img src="X" alt="logoSocialMedia" />
          <img src="X" alt="logoSocialMedia" />
          <img src="X" alt="logoSocialMedia" />
        </div>
      </div>
    </div>
  );
}
