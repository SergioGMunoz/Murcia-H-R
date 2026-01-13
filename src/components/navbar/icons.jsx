import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

export const Icons = () => {
  return (
    <div className="flex-container">
      {/* Hotels LINK */}
      <Link to="/" className="nav-link">
        <div className="nav-item">
          <SearchIcon className="mui-icon" />
          <span className="nav-text">Hoteles</span>
        </div>
      </Link>

      {/* About me */}
      <a
        href="https://github.com/SergioGMunoz"
        target="_blank"
        className="nav-link"
      >
        <div className="nav-item">
          <GitHubIcon className="mui-icon" />
          <span className="nav-text">Sobre el desarrollador</span>
        </div>
      </a>
    </div>
  );
};
