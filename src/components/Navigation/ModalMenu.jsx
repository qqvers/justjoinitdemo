import { forwardRef } from "react";
import { jobData } from "../../data";
import { ReactComponent as IconProfile } from "../../photos4_menu/profile.svg";
import { ReactComponent as IconSettings } from "../../photos4_menu/settings.svg";
import { ReactComponent as IconLogout } from "../../photos4_menu/logout.svg";
import { ReactComponent as IconOffers } from "../../photos4_menu/offers.svg";
import { ReactComponent as IconTopCompanies } from "../../photos4_menu/topcompanies.svg";
import { ReactComponent as IconGeek } from "../../photos4_menu/geek.svg";
import { ReactComponent as IconProgramAmbassadors } from "../../photos4_menu/program.svg";
import { ReactComponent as IconJustJoinGames } from "../../photos4_menu/justjoingames.svg";
import { ReactComponent as IconPressRoom } from "../../photos4_menu/pressroom.svg";
import { ReactComponent as IconReport } from "../../photos4_menu/report_terms.svg";
import { ReactComponent as IconCareer } from "../../photos4_menu/career.svg";
import { ReactComponent as IconHelp } from "../../photos4_menu/help.svg";
import { ReactComponent as IconTerms } from "../../photos4_menu/report_terms.svg"; // Assuming there was a typo and it should be report_terms.svg

const ModalMenu = forwardRef(function ModalMenu({ handleSelect }, ref) {
  return (
    <dialog ref={ref} onClick={handleSelect} className="modal_menu_dialog">
      <div className="modal_menu_top_wrapper">
        <button className="modal_menu_close">X</button>
        <span>Menu</span>
      </div>

      <ul>
        <li>
          <IconProfile />
          <span>My profile</span>
        </li>
        <li>
          <IconSettings />
          <span> Settings</span>
        </li>
        <li>
          <IconLogout />
          <span> Log out</span>
        </li>
        <li>
          <IconOffers />
          <span>Offers</span>
        </li>
        <li>
          <IconTopCompanies />
          <span>Top Companies</span>
        </li>
        <li>
          <IconGeek />
          <span>Geek</span>
        </li>
        <li>
          <IconProgramAmbassadors />
          <span>Program Ambasadorski</span>
        </li>
        <li>
          <IconJustJoinGames />
          <span>Just Join Games</span>
        </li>
        <li>
          <IconPressRoom />
          <span> Press Room</span>
        </li>
        <li>
          <IconReport />
          <span> Report</span>
        </li>
        <li>
          <IconCareer />
          <span> Career</span>
        </li>
        <li>
          <IconHelp />
          <span> Help</span>
        </li>
        <li>
          <IconTerms />
          <span> Terms</span>
        </li>
      </ul>
      <div className="footer_social_media" style={{ textAlign: "center" }}>
        <p>Follow us on social media</p>
        <img src={jobData[4].logo} alt="logoSocialMedia" />
        <img src={jobData[5].logo} alt="logoSocialMedia" />
        <img src={jobData[7].logo} alt="logoSocialMedia" />
        <img src={jobData[8].logo} alt="logoSocialMedia" />
      </div>
    </dialog>
  );
});

export default ModalMenu;
