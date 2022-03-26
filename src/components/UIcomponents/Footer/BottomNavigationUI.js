import * as React from "react";
import { useContext } from "react";
import CartContext from "../../../contexts/cart-context";
import { Link as RouterLink } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";

const BottomNavigationUI = () => {
  const cartCtx = useContext(CartContext);

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        height: "auto",
        position: "fixed",
        bottom: 0,
        backgroundColor: "primary.main",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label=""
        value="MyPage"
        component={RouterLink}
        to="/"
        icon={<HomeIcon />}
        sx={{ padding: "0.8rem 0" }}
      />
      {/* <NavLink to="/mypage"> */}
      {/* </NavLink> */}
      <BottomNavigationAction
        label=""
        value="favorites"
        component={RouterLink}
        to="/favorites"
        icon={<FavoriteIcon />}
        sx={{ padding: "0.8rem 0" }}
      />
      <BottomNavigationAction
        label=""
        value="MyCart"
        component={RouterLink}
        to="/mycart"
        icon={<ShoppingCartIcon />}
        sx={{ padding: "0.8rem 0" }}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationUI;
