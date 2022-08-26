import { Sales } from "../data/newproducts";
import { Box, Button, styled, Typography } from "@mui/material";
import SalesCard from "./SalesCard";
const StyledContainer = styled(Box)({
  width: "100vw",
  // height: "150vh",
  padding: "1rem",
  margin: "1rem 0",
  backgroundColor: "#f4f3f4",
});
function Sale() {
  return (
    <>
      <StyledContainer>
        <Typography
          variant="p"
          fontWeight="bold"
          sx={{ fontSize: { md: "30px", sm: "25px", xs: "24px" } }}
          gutterBottom
          color="secondary"
        >
          Limited Time Clearance - Up To 60% Off
        </Typography>
        {Sales.map((item) => (
          <Box key={item.id} sx={{ height: "100%" }} mt={2}>
            <SalesCard name={item.name} imageUrl={item.image} />
          </Box>
        ))}
      </StyledContainer>
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          jusitfyContent: "center",
          width: "100vw",
          height: "10vh",
          backgroundColor: "red",
        }}
      >
        <Button
          color="primary"
          variant="contained"
          size="small"
          sx={{ marginTop: "2rem !important" }}
        >
          View All
        </Button>
      </Box> */}
    </>
  );
}
export default Sale;
