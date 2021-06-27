import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { logout } from "../../../../store/action/auth";
const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  return (
    <div id="navbar" className="card-shadow">
      <h2>Chat.io</h2>
      <div id="profile-menu">
        <img width="50" height="50" src={user.avatar} alt="avatar"></img>
        <p>{user.name}</p>
        <FontAwesomeIcon onClick={()=>setShowProfileOptions(!showProfileOptions)} icon="caret-down" className="fa-icon" />
        {showProfileOptions && (
          <div id="profile-options">
            <span>Update profile</span>
            <p onClick={()=>dispatch(logout())}> Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
