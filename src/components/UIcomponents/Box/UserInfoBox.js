import React, { useState, useEffect, Fragment } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const UserInfoBox = (props) => {
  const [icon, setIcon] = useState();
  const [isShow, setIsShow] = useState(false);

  const selectIconType = (val) => {
    if (val === "Username") setIcon(<AccountCircleIcon />);
    if (val === "Address") setIcon(<LocationOnIcon />);
    if (val === "Email") setIcon(<EmailIcon />);
    if (val === "Password") setIcon(<LockIcon />);
  };

  const handleEditUserInfo = () => {
    console.log("Edit btn clicked!");
    setIsShow(!isShow);
  };

  useEffect(() => {
    selectIconType(props.label);
  }, []);

  let testing = isShow === true ? "block" : "none";

  const style = {
    display: testing,
  };

  return (
    <Fragment>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="white"
        padding="0.5rem 1rem"
        borderRadius="8px"
        marginBottom={1}
      >
        <Box display="flex" alignItems="center">
          <Box>{icon}</Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Typography variant="h5" component="h5">
              {props.label}
            </Typography>
            <Typography variant="body1" component="p" width="100%">
              {props.val}
            </Typography>
          </Box>
        </Box>
        <Box>
          <EditIcon onClick={handleEditUserInfo} />
        </Box>
      </Box>
      <Box sx={style}>
        <Typography variant="h4" component="h4" color="white">
          Edit UserInfo
        </Typography>
      </Box>
    </Fragment>
  );
};

export default UserInfoBox;
