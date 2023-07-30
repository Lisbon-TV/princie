import React from "react";

import { Switch } from "@material-ui/core";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import StoreIcon from "@mui/icons-material/Store";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsIcon from "@mui/icons-material/Settings";
import { Badge, withStyles } from "@material-ui/core";

import logo from "../../img/logo.png";
import "./Side.css";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#ff0000",
    color: "#fff",
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))(Badge);

const Side = (_) => {
  return (
    <div className="side">
      <div className="logo">
        <img src={logo} alt="Princie logo" />
        <span className="log-position">Princie</span>
      </div>

      <ul>
        <li className="light-mode" style={{ backgroundColor: "#000000" }}>
          <DashboardIcon fontSize="small" color="primary" />
          <span className="word-position">Dashboard</span>
        </li>
        <li className="light-mode">
          <Inventory2Icon fontSize="small" />
          <span className="word-position">Product</span>
          <StyledBadge
            overlap="circular"
            variant="standard"
            badgeContent={2}
            style={{ marginLeft: "15px" }}
          />
        </li>
        <li className="light-mode">
          <StoreIcon fontSize="small" />
          <span className="word-position">Store</span>
        </li>
        <li className="light-mode">
          <SupervisedUserCircleIcon fontSize="small" />
          <span className="word-position">Visitor</span>
        </li>
        <li className="light-mode">
          <BarChartIcon fontSize="small" />
          <span className="word-position">Analytics</span>
        </li>
        <li className="light-mode">
          <NotificationsNoneIcon fontSize="small" />
          <span className="word-position">Notification </span>
          <StyledBadge
            overlap="circular"
            variant="standard"
            badgeContent={11}
            style={{ marginLeft: "15px" }}
          />
        </li>
      </ul>
      <div className="break"></div>

      <ul>
        <li className="light-mode">
          <HeadsetMicIcon fontSize="small" />
          <span className="word-position">Help Center</span>
        </li>
        <li className="light-mode">
          <SettingsIcon fontSize="small" />
          <span className="word-position">Settings</span>
        </li>
      </ul>

      <ul className="toggle-container">
        <div className="divider"></div>
        <div className="toggle-position">
          <div className="icon-position">
            <NightlightRoundOutlinedIcon fontSize="small" />
          </div>
          <div className="word-position">Dark Mode</div>
          <div className="switch-position">
            <Switch defaultChecked size="small" color="primary" />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Side;
