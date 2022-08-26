import { styled, Box, Typography, Grid, Stack } from "@mui/material";
import CollectionCard from "./CollectionCard";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { collection } from "../data/newproducts";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

const StyledContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  padding: "3rem 3rem",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f4f3f4",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 1rem",
  },
}));
const IconStyle = {
  fontSize: "14px",
  marginBottom: "10px",
};
function Collections() {
  var settings = {
    speed: 500,
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };
  const handleNext = () => {
    carouselRef.current.slickNext();
  };
  return (
    <>
      <StyledContainer>
        <Typography
          variant="p"
          fontWeight="bold"
          fontSize="25px"
          color="secondary"
          sx={{
            marginBottom: { xs: "10px", sm: "12px", md: "20px" },
            marginTop: "1rem !important",
          }}
        >
          Collections
        </Typography>

        <Box
          sx={{
            display: { xs: "block", md: "none" },
            marginTop: { xs: "5px", md: "1rem" },
          }}
        >
          <Stack direction="row" spacing={2} justifyContent="flex-end" mr={4}>
            <ArrowBackIosRounded
              color="secondary"
              sx={IconStyle}
              onClick={handlePrevious}
            />
            <ArrowForwardIosRounded
              color="secondary"
              sx={IconStyle}
              onClick={handleNext}
            />
          </Stack>
          <div>
            <Slider ref={carouselRef} {...settings}>
              {collection.map((item) => (
                <div key={item.id}>
                  <CollectionCard name={item.name} imageUrl={item.image} />
                </div>
              ))}
            </Slider>
          </div>
        </Box>

        <Grid
          container
          spacing={5}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {collection.map((item) => (
            <Grid item sm={4} key={item.id}>
              <CollectionCard name={item.name} imageUrl={item.image} />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </>
  );
}

export default Collections;
