import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";

export default function SideNav() {
  const routes = [
    { path: "Users", logo: <GroupIcon />, isAdmin: false },
    { path: "employees", logo: <ContactEmergencyIcon />, isAdmin: true },
    { path: "profile", logo: <AccountBoxIcon />, isAdmin: true },
    { path: "settings", logo: <SettingsIcon />, isAdmin: true },
  ];
  return (
    <div className="sidenav ">
      <div>
        <Link
          to={"/"}
          style={{
            fontSize: "16px",
            color: "#7C95FF",
          }}
        >
          <Box
            sx={{
              mx: 1,
              p: 1,
            }}
          >
            <WidgetsIcon />
          </Box>
        </Link>
        {routes.map((data, index) => {
          return (
            <div key={index} className="menu-items">
              <Link
                to={"/"}
                style={{
                  fontSize: "16px",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    m: 1,
                    p: 1,
                  }}
                  index={index}
                >
                  <span> {data?.logo}</span>
                </Box>
              </Link>
            </div>
          );
        })}
      </div>

      <div>
        <LogoutIcon sx={{ mb: 2 }} />
      </div>
    </div>
  );
}
