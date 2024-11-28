import {
  Avatar,
  Badge,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import React from "react";
import { Outlet } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SideNav from "./components/SideNav";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import user from "../images/user.jpg";

export default function Index() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <>
      <div className="d-flex header">
        <div
          style={{
            color: "#7C95FF",
            fontSize: "28px",
            fontWeight: "bold",
            margin: "7px",
            marginLeft: "20px",
            width: "55px",
          }}
        >
          <DashboardIcon sx={{ fontSize: "34px" }} />
        </div>

        <TextField
          variant="outlined"
          placeholder="Search..."
          sx={{
            width: "250px", // Set the width of the input
            height: "35px", // Set the height of the input
            marginTop: "12px",
            color: "white",

            backgroundColor: "#2A2B30",
            "& .MuiOutlinedInput-root": {
              height: "100%", // Ensures the input respects the defined height
              color: "white",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />

        <div className="d-flex justify-content-end w-100">
          <div className=" my-1 ">
            <IconButton
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>

          <div className="">
            <Tooltip title="My Profile" placement="bottom-end">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar src={user}></Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <AccountBoxIcon className="mx-2" />
                  Profile
                </Typography>
              </MenuItem>

              <MenuItem>
                <Typography textAlign="center">
                  <LogoutIcon className="mx-2" /> Logout
                </Typography>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      <div className="d-flex ">
        <div className={"sidenav-small"}>
          <SideNav></SideNav>
        </div>

        <div
          className="scrollable-container"
          style={{
            width: "99%",
          }}
        >
          <div
            className="scrollable-container "
            style={{
              minHeight: "89vh",
              maxHeight: "89vh",
              // padding: "10px",
              // paddingLeft: "12px",
              // paddingRight: "12px",
            }}
          >
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
