import React from "react";
import { styled, Stack, Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import { ArrowForward } from "@mui/icons-material";

const containerStyle = {
  backgroundColor: "white",
  borderRadius: "20px",
  boxShadow: "10px 10px 10px aliceblue",
  // height: "100%",
};
const StyledImage = styled(Image)({
  objectFit: "cover",
  // height: "600px",
  borderRadius: "15px 15px 0 0",
});
function SalesCard({ name, imageUrl }) {
  return (
    <>
      <Stack direction="column" sx={containerStyle}>
        <Stack flex={4}>
          <StyledImage src={imageUrl} alt="image" />
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="row"
          flex={1}
          sx={{ padding: "1rem 0", backgroundColor: "aliceblue" }}
        >
          <Typography
            variant="p"
            fontSize="25px"
            p={1}
            color="secondary"
            fontWeight="bold"
          >
            {name}
          </Typography>

          <ArrowForward sx={{ fontSize: "25px" }} color="secondary" />
        </Stack>
      </Stack>
    </>
  );
}

export default SalesCard;
