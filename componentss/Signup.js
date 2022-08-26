import { Stack, Typography, Box, styled } from "@mui/material";
// import BgImage from "../public/SignupImage.png";

const StyledContainer = {
  width: "100vw",
  height: { xs: "auto", md: "45vh" },
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  gap: "0",
  //   height: { xs: "auto", md: "45vh" },
  //   backgroundColor: "red",
};

const LeftStack = {
  width: { xs: "100%", md: "50%" },
  height: "45vh",
  // backgroundImage: `url${BgImage}`,
  backgroundImage: "url(/SignupImage.png)",
  // backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};
const RightStack = styled(Stack)(({ theme }) => ({
  flex: "1",
  justifyContent: "center",
  padding: "2rem",
  backgroundColor: theme.palette.primary.main,
}));
const InputContainer = {
  width: "60%",
  height: "30px",
  backgroundColor: "yellow",
};
function Signup() {
  return (
    <>
      <Box sx={StyledContainer}>
        <Box sx={LeftStack}></Box>
        <RightStack direction="column" spacing={4}>
          <Typography
            variant="p"
            color="white"
            fontSize="30px"
            fontWeight="bold"
          >
            Feel Like a Diva. Be a Diva. SignUp!
          </Typography>
          <Typography variant="p" color="primary.lightPink">
            Be the first to hear about our exclusive sales,coupon codes and new
            arrivals
          </Typography>
          <Box sx={InputContainer}></Box>
        </RightStack>
      </Box>
      ;
    </>
  );
}

export default Signup;
