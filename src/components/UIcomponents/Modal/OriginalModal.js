import * as React from "react";
import { useContext } from "react";
import AuthContext from "../../../contexts/auth-context";
import { NavLink, useHistory } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material";

const OriginalModal = (props) => {
  const authCtx = React.useContext(AuthContext);

  const theme = useTheme();

  const history = useHistory();

  const handleLogout = () => {
    props.onClose();
    authCtx.logout();
    // ???
    // history.replaceState("/signup");
  };

  const style = {
    position: "fixed",
    top: "56px",
    left: "0%",
    // transform: "translate(-50%, -50%)",
    // Original code
    // width: 400,
    width: "100%",
    // test
    minHeight: "184px",
    bgcolor: "background.default",
    border: "2px solid primary",
    boxShadow: 24,
    textAlign: "center",
    listStyle: "none",
    outline: "none",
    textDecoration: "none",
    [theme.breakpoints.up("sm")]: {
      minHeight: "271px",
    },
  };

  const closeIconStyle = {
    position: "fixed",
    top: "7%",
    left: "27px",
    color: "primary.main",
    [theme.breakpoints.up("sm")]: {
      left: "6%",
    },
  };

  const UlStyle = styled("ul")({
    padding: "1.3rem 0",
    listStyle: "none",
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      padding: "3rem 0",
    },
  });

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        // original code
        // open={open}
        open={props.isOpen}
        // original code
        // onClose={handleClose}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.isOpen}>
          <Box sx={style} className="これかいな">
            <CloseIcon sx={closeIconStyle} onClick={props.onClose} />
            <UlStyle>
              {!authCtx.isLoggedIn && (
                <NavLink
                  to="/authentication"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    display="block"
                    paddingBottom="1.2rem"
                    cursor="pointer"
                    color="primary"
                    width="50%"
                    margin="0 auto"
                  >
                    Login
                  </Typography>
                </NavLink>
              )}
              {!authCtx.isLoggedIn && (
                <NavLink
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    display="block"
                    paddingBottom="1.2rem"
                    cursor="pointer"
                    color="primary"
                    width="50%"
                    margin="0 auto"
                  >
                    Signup
                  </Typography>
                </NavLink>
              )}
              {authCtx.isLoggedIn && (
                <NavLink
                  to="/mypage"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    display="block"
                    paddingBottom="1.2rem"
                    cursor="pointer"
                    color="primary"
                    width="50%"
                    margin="0 auto"
                  >
                    My Info
                  </Typography>
                </NavLink>
              )}
              {authCtx.isLoggedIn && (
                <NavLink
                  to="/mycart"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    display="block"
                    paddingBottom="1.2rem"
                    cursor="pointer"
                    color="primary"
                  >
                    My Cart
                  </Typography>
                </NavLink>
              )}
              {authCtx.isLoggedIn && (
                <NavLink
                  to="/favorites"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    display="block"
                    paddingBottom="1.2rem"
                    cursor="pointer"
                    color="primary"
                  >
                    Favorites
                  </Typography>
                </NavLink>
              )}
              {authCtx.isLoggedIn && (
                <NavLink
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    display="block"
                    // paddingBottom="1rem"
                    cursor="pointer"
                    color="primary"
                    onClick={handleLogout}
                  >
                    Logout
                  </Typography>
                </NavLink>
              )}
            </UlStyle>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default OriginalModal;
