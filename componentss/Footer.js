import { styled, Typography, Box, TextField } from "@mui/material";
const StyledContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  backgroundColor: theme.palette.primary.main,
  // backgroundColor: "aliceblue",
  display: "flex",
  alignItems: "center",
  justfyContent: "center",
  flexDirection: "column",
  marginTop: "3rem",
  color: theme.palette.secondary.main,
}));

function Footer() {
  return (
    <>
      <StyledContainer>
        <Typography variant="p" fontWeight="bold" fontSize="30px" p={2}>
          Subscribe to our emails
        </Typography>
        <Typography variant="p" fontSize="15px" p={2} textAlign="center">
          Join our email list for exclusive offers and the latest news
        </Typography>
        <TextField
          variant="outlined"
          required
          placeholder="email"
          type="email"
          mb={3}
        />
      </StyledContainer>
    </>
  );
}

export default Footer;
