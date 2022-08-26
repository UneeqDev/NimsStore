import React from "react";
import { Box, Button, Stack, styled, Typography } from "@mui/material";
// import BgImage from "../assets/HeroImage1.jpg";
import Image from "next/image";
import { theme } from "../pages/src/theme";
import { ArrowForward } from "@mui/icons-material";

const StyledContainer = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  display: "flex",
  flexDirection: "row",
  position: "relative",
  backgroundColor: "#f2eee6",

  marginTop: "1rem",

  [theme.breakpoints.down("md")]: {
    height: "70vh",
  },
});

const LeftStack = styled(Stack)({
  flex: "1",
  height: "100%",
});

const RightStack = styled(Stack)({
  flex: "2.5",
  height: "100%",
  //   backgroundColor: "red",
  backgroundImage: "url(/Model5.png)",
  // backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  borderRadius: "15px",
  backgroundSize: "contain",
});

const StyledImage = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
  width: "400px",
  height: "100px",
  color: "white",
  borderRadius: "15px",
  fontSize: "16px",
  position: "absolute",
  bottom: "0px",
  zIndex: "10000",
  marginRight: "auto",
  marginLeft: "auto",
  right: "0",
  left: "0",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
  },
}));
export default function HeroSection() {
  return (
    <>
      <StyledContainer>
        <LeftStack sx={{ display: { xs: "none", md: "block" } }}>hi</LeftStack>
        <RightStack>
          {/* <StyledImage src={BgImage} alt="bgImage" /> */}
        </RightStack>
        <Card>
          <Typography
            variant="p"
            fontSize="26px"
            color="secondary"
            fontWeight="bold"
          >
            Its New and Just For You!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ArrowForward />}
          >
            Start Stopping
          </Button>
        </Card>
      </StyledContainer>
    </>
  );
}
