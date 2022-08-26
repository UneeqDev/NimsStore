import { Box, Grid, styled, Typography, Stack } from "@mui/material";
// import { feauturedproducts } from "../data/feauturedproducts";
// import ProductCard from "./ProductCard";
import Image1 from "../assets/NewProducts/Lady2.jpg";
import Image2 from "../assets/NewProducts/Lady1.jpg";
import Image3 from "../assets/NewProducts/Lady3.jpg";
import Image from "next/image";

const StyledContainer = styled(Box)(({ theme }) => ({
  width: "100vw",

  backgroundColor: theme.palette.primary.main,
  padding: "3rem 3rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
const gridContainer = {
  // display: "flex",
  // flexDirection: "row",
  // backgroundColor: "green",
};
const StyledImage = styled(Image)({
  borderRadius: "15px 15px 0 0",
});

// const gridContainer = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr 1fr ",
//   // gridAutoRows: "minmax(100px,auto)",
//   gridGap: "2em",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const gridItem = {
//   // gridColumn: "3",
//   // backgroundColor: "white",
//   borderRadius: "20px",
// };
// const gridItem2 = {
//   // gridColumn: "3",
//   // backgroundColor: "white",
//   borderRadius: "20px",
// };
// const gridItem3 = {
//   gridColumn: "3/1",
//   gridRow: "3/1",
//   gridColumnStart: "3",
//   gridColumnEnd: "1",
//   // backgroundColor: "white",
//   borderRadius: "20px",
// };
function FeauturedProducts() {
  return (
    <>
      <StyledContainer>
        <Typography
          variant="p"
          fontSize="28px"
          color="secondary"
          fontWeight="bold"
          mb={4}
        >
          Feautured Products
        </Typography>
        <Box sx={gridContainer}>
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },

              gap: "2rem",
            }}
          >
            <Stack
              flex={1}
              sx={{
                flexDirection: "column",
                gap: "1rem",

                // backgroundColor: "yellow",
              }}
            >
              <Stack direction="column" sx={{ borderRadius: "15px" }} flex={1}>
                <StyledImage objectFit="contain" alt="image" src={Image1} />
                <Stack
                  direction="column"
                  alignItems="center"
                  p={2}
                  backgroundColor="white"
                  borderRadius="0 0 15px 15px"
                >
                  <Typography variant="p" fontSize="16px" color="secondary">
                    Blonde Straight Wig
                  </Typography>
                  <Typography variant="p" fontSize="18px" color="secondary">
                    #55,000.00 NGN
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="column" flex={1}>
                <StyledImage objectFit="contain" alt="image" src={Image2} />
                <Stack
                  direction="column"
                  alignItems="center"
                  p={2}
                  backgroundColor="white"
                  color="secondary"
                  borderRadius="0 0 15px 15px"
                >
                  <Typography variant="p" fontSize="16px" color="secondary">
                    Blonde Straight Wig
                  </Typography>
                  <Typography variant="p" fontSize="18px" color="secondary">
                    #55,000.00 NGN
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack flex={2}>
              <Stack direction="column">
                <StyledImage objectFit="contain" alt="image" src={Image3} />
                <Stack
                  direction="column"
                  alignItems="center"
                  p={5}
                  borderRadius="0 0 15px 15px"
                  backgroundColor="white"
                  color="secondary"
                >
                  <Typography variant="p" fontSize="16px" color="secondary">
                    Blonde Straight Wig
                  </Typography>
                  <Typography variant="p" fontSize="18px" color="secondary">
                    #55,000.00 NGN
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* <Box sx={gridContainer}>
          <Box sx={gridItem}>
            <Stack direction="column">
              <Image objectFit="contain" alt="image" src={Image1} />
              <Stack
                direction="column"
                alignItems="center"
                sx={{ padding: "1rem 0" }}
              >
                <Typography variant="p" fontSize="16px">
                  Blonde Straight Wig
                </Typography>
                <Typography variant="p" fontSize="18px">
                  #55,000.00 NGN
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box sx={gridItem2}>
            <Stack direction="column">
              <Image objectFit="contain" alt="image" src={Image2} />
              <Stack direction="column" alignItems="center">
                <Typography variant="p" fontSize="16px">
                  Blonde Straight Wig
                </Typography>
                <Typography variant="p" fontSize="18px">
                  #55,000.00 NGN
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box sx={gridItem3}>
            <Stack direction="column">
              <Image alt="image" src={Image3} />
              <Stack direction="column" alignItems="center">
                <Typography variant="p" fontSize="16px">
                  Blonde Straight Wig
                </Typography>
                <Typography variant="p" fontSize="18px">
                  #55,000.00 NGN
                </Typography>
              </Stack>
            </Stack>
          </Box> */}

        {/* {feauturedproducts.map((product) => {
            <Grid item key={product.id} xs={}>
              <ProductCard
                name={product.name}
                price={product.price}
                imageUrl={product.image}
              />
            </Grid>;
          })} */}
        {/* </Box> */}
      </StyledContainer>
    </>
  );
}

export default FeauturedProducts;
