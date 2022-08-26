import { Box, styled } from "@mui/material";

const StyledContainer = styled(Box)({
  width: "100vw",
  height: "10vh",
  display: "flex",
  flexDirection: "column",
});
const StyledTop = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.others,
  width: "100%",
  height: "55%",
  color: "white",
  fontSize: "16px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13.4px",
  },
}));
const StyledBottom = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  height: "45%",
  color: "black",
  fontSize: "16px",
  textAlign: "center",
  padding: "1rem 10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13.8px",
    padding: "1.2rem 10px",
  },
}));

function Header() {
  return (
    <>
      <StyledContainer>
        <StyledTop>
          New Markdown added weekly, click here to save up to 50% OFF!
        </StyledTop>
        <StyledBottom>
          {" "}
          Free nationwide shipping for all orders above N30,000 | use code:
          FREESHIPPING{" "}
        </StyledBottom>
      </StyledContainer>
    </>
  );
}

export default Header;
