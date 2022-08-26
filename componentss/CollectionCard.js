import React from "react";
import { styled, Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import { ArrowForward } from "@mui/icons-material";

const containerStyle = {
  backgroundColor: "white",
  borderRadius: "20px",
  boxShadow: "10px 10px 10px aliceblue",
  height: "430px",
};
const StyledImage = styled(Image)({
  objectFit: "cover",
  height: "430px",
  borderRadius: "15px 15px 0 0",
});
function ProductCard({ name, imageUrl }) {
  return (
    <>
      <Stack direction="column" sx={containerStyle}>
        <Stack flex={2.6} height="85%">
          <StyledImage src={imageUrl} alt="image" />
        </Stack>
        <Stack
          flex={1}
          height="15%"
          alignItems="center"
          justifyContent="center"
          direction="row"
          sx={{ padding: "1rem 0", backgroundColor: "aliceblue" }}
        >
          <Typography variant="p" fontSize="16px" p={1} color="secondary">
            {name}
          </Typography>

          <ArrowForward sx={{ fontSize: "16px" }} color="secondary" />
        </Stack>
      </Stack>
    </>
  );
}

export default ProductCard;
