import { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import { styled, Box, Grid, Typography, Divider, Stack } from "@mui/material";
import { newproducts } from "../data/newproducts";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

const StyledContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  backgroundColor: "#f4f3f4",
  height: "auto",
  padding: "4.5rem",
  color: theme.palette.secondary.main,
  [theme.breakpoints.down("md")]: {
    padding: "4rem 2rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "4rem 15px",
  },
}));
const IconStyle = {
  fontSize: "14px",
  marginBottom: "10px",
};
var settings = {
  speed: 500,
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
  fade: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  beforeChange: (current, next) => setCurrentIndex(next),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function NewProductsSection() {
  var settings = {
    speed: 500,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
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
          sx={{
            fontSize: { xs: "23px", sm: "25px" },
            marginBottom: { xs: "2rem", md: "1rem" },
          }}
          fontWeight="bold"
          color="secondary"
        >
          New Products
        </Typography>

        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            marginTop: { xs: "2rem", md: "1rem" },
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
              {newproducts.map((product) => (
                <div key={product.id}>
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    imageUrl={product.image}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Box>
        <Grid
          container
          rowSpacing={7}
          mt={2}
          columnSpacing={2.6}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          {newproducts.map((product) => (
            <Grid item key={product.id} xs={6} md={3} sm={4}>
              <ProductCard
                name={product.name}
                price={product.price}
                imageUrl={product.image}
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </>
  );
}

export default NewProductsSection;
