import React from "react";
import Wrapper from "../styles/NavbarStyle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  function logoutUser() {
    localStorage.removeItem("user");
    navigate("/");
  }
  return (
    <Wrapper>
      <Link to={"/"}>
        <div className="icon">
          <h1>codeial</h1>
        </div>
      </Link>
      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav">
        <Link to={"/profile"}>
          <div className="profile">
            <img
              src="https://headshots-2.imagely.com/wp-content/uploads/sites/79/nggallery/headshot-gallery/cache/albert-dera-ILip77SbmOE-unsplash.jpg-nggid013-ngg0dyn-800x1200-00f0w010c010r110f110r010t010.jpg"
              alt="profile pic"
            />
            <p>John Doe</p>
          </div>
        </Link>
        <div className="session">
          {user.data ? (
            <p onClick={() => logoutUser()}>LOG OUT</p>
          ) : (
            <Link to={"/session"}>
              <p>LOG IN</p>
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
