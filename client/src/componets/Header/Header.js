import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const Navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  function handleDropdownToggle() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/">Landing</Link>
          <Link to="/register">Register an account</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/home">Home</Link>
        </div>
        <div className="header-right">
          <div className="dropdown">
            <button
              className="dropdown-btn"
              onClick={handleDropdownToggle}
              onBlur={() => setShowDropdown(false)}
            >
              Link 3
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/" className="dropdown-link">
                  Settings (Place hoolder)
                </Link>
                <Link to="/" className="dropdown-link">
                  Info (Place hoolder)
                </Link>
                <Link to="/" className="dropdown-link">
                  Contact (Place hoolder)
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;