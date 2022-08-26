import { Typography, styled, Box } from "@mui/material";
import React from "react";

const StyledContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  display: "flex",
  height: "28vh",
  padding: "4.5rem",
  marginBottom: "2rem",
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.main,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  flexDirection: "column",
  gap: "3",
}));

function SubSection() {
  return (
    <>
      <StyledContainer>
        <Typography variant="p" fontWeigth="bold" fontSize="30px" p={2}>
          NIMSTORE
        </Typography>
        <Typography variant="p" fontSize="20px" pb={3}>
          Shop Fashion aceessories and beauty products all in one place
        </Typography>
      </StyledContainer>
    </>
  );
}

export default SubSection;
