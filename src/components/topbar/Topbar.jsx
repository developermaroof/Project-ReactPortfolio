import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Maroof.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+92 3153048864</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>developermaroof@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
