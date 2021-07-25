import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "firebase/init";

export const Navbar = () => {
  const { user } = useAuth();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid item sm={2}>
            <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
              <h1>Chat App</h1>
            </Link>
          </Grid>
          <Grid container justifyContent="flex-end">
            {/* 未ログイン状態 */}
            {!!user || (
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "#FFF" }}
              >
                <Button color="inherit">SignIn</Button>
              </Link>
            )}
            {/* ログイン状態 */}
            {!!user && (
              <Grid
                container
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Box mr={1}>
                  <Avatar alt="Avatar" src={user.photoURL} />
                </Box>
                <Box mr={3}>
                  <Typography align={"center"}>{user.displayName}</Typography>
                </Box>
                <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
                  <Button
                    color="inherit"
                    onClick={() => {
                      auth.signOut();
                    }}
                  >
                    SignOut
                  </Button>
                </Link>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
