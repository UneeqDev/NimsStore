import React from "react";
import { styled, Stack, Typography, Box } from "@mui/material";
import Image from "next/image";

const containerStyle = {
  backgroundColor: "white",
  borderRadius: "20px",
  height: { xs: "270px", sm: "380px" },
  boxShadow: "10px 10px 10px aliceblue",
  marginRight: { xs: "8px", sm: "0" },
};
const StyledImage = styled(Image)({
  objectFit: "cover",

  borderRadius: "15 15px 0 0px",
});
function ProductCard({ name, price, imageUrl }) {
  return (
    <>
      <Stack direction="column" sx={containerStyle}>
        <Stack flex={2.6} height="80%">
          <StyledImage src={imageUrl} alt="image" />
        </Stack>
        <Stack
          flex={1}
          height="20%"
          alignItems="center"
          direction="column"
          sx={{ padding: "1rem 0" }}
        >
          <Typography variant="p" fontSize="16px" p={1} color="secondary">
            {name}
          </Typography>
          <Typography variant="p" fontSize="18px">
            {price}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default ProductCard;
