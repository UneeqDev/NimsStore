import React from "react";
import { Box, styled, Typography, Stack } from "@mui/material";
import { theme } from "../pages/src/theme";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Menu,
  PersonOutline,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";

const StyledContainer = styled(Box)({
  width: "100vw",
  height: "20vh",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    height: "10vh",
  },
});
const StyledTop = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.1rem 2rem",
  flex: "1",
  [theme.breakpoints.down("md")]: {
    padding: "0.8rem 10px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1.1rem 10px",
  },
}));
const IconStyle = {
  color: "#020017fb",
  fontSize: { xs: "20px", sm: "29px" },

  fontWeight: "5px",
  // "&:hover": {
  //   fontSize: "33px",
  //   transition: "0.3s ease-in",
  // },
};
const StyledBottom = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem 3rem",

  color: theme.palette.primary.others,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledTypography = {
  fontSize: "15.5px",
  fontWeight: "200",
  color: "#020017fb",
  cursor: "pointer",
  "&:hover": {
    borderBottom: "1px solid black",
  },
};
const SearchIconStyle = {
  color: "#020017fb",
  fontSize: { xs: "20px", sm: "29px" },
  fontWeight: "30px",
  display: { xs: "none", md: "block" },
  // "&:hover": {
  //   fontSize: "33px",
  //   transition: "0.3s ease-in",
  // },
};

const SearchIcon2Style = {
  color: "#020017fb",
  fontSize: { xs: "20px", sm: "29px" },
  fontWeight: "30px",
  display: { xs: "block", md: "none" },
  // "&:hover": {
  //   fontSize: "33px",
  //   transition: "0.3s ease-in",
  // },
};
const MenuIconStyle = {
  color: "#020017fb",
  fontSize: { xs: "20px", sm: "29px" },
  fontWeight: "30px",
  display: { xs: "block", md: "none" },

  // "&:hover": {
  //   fontSize: "33px",
  //   transition: "0.3s ease-in",
  // },
};
function MenuBar() {
  return (
    <>
      <StyledContainer>
        <StyledTop direction="row">
          <Search sx={SearchIconStyle} />
          <Menu sx={MenuIconStyle} />
          <Typography
            variant="p"
            fontSize="30px"
            fontWeight="300"
            color="primary.others"
          >
            NimsStore
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Search sx={SearchIcon2Style} />
            <PersonIcon sx={IconStyle} />
            <ShoppingCartOutlinedIcon sx={IconStyle} />
          </Stack>
        </StyledTop>
        <StyledBottom spacing={3} direction="row">
          <Typography variant="p" sx={StyledTypography}>
            Home
          </Typography>
          <Typography variant="p" sx={StyledTypography}>
            Products
          </Typography>
          <Typography variant="p" sx={StyledTypography}>
            Blog
          </Typography>
          <Typography variant="p" sx={StyledTypography}>
            About Us
          </Typography>
          <Typography variant="p" sx={StyledTypography}>
            Terms and Conditions
          </Typography>
          <Typography variant="p" sx={StyledTypography}>
            Frequently Asked Questions
          </Typography>
        </StyledBottom>
      </StyledContainer>
    </>
  );
}

export default MenuBar;
