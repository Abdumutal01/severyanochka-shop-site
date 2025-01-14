import React, { useEffect, useState } from "react";
import "./HeaderUser.scss";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Firebase from "../../FireBase";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

Firebase();

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function HeaderUser() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  console.log(auth);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        // setUser(res.user);
        localStorage.setItem("user", JSON.stringify(res.user));
      })
      .catch((err) => {
        console.error("Authentication error:", err.message);
        alert("Sign-in failed. Please try again.");
      });
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  console.log(user);

  return user ? (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          {user?.photoURL && <Avatar alt="User" src={user.photoURL} />}
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "-35px" }}
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
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  ) : (
    <button className="header__user-signIn" onClick={handleLogIn}>
      Sign In
    </button>
  );
}
