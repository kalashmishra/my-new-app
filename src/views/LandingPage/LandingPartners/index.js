import React, { useEffect } from "react";
import Swiper from "swiper";
import "../../../../node_modules/swiper/css/swiper.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Card, CardMedia, Container, Typography } from "@mui/material";

const swiperData = [
  {
    image: process.env.PUBLIC_URL +
    "/assets/images/cred_client_1.png",
  },
  {
    image:  process.env.PUBLIC_URL +
    "/assets/images/cred_client_2.png",
  },
  {
    image:  process.env.PUBLIC_URL +
    "/assets/images/cred_client_3.png",
  },
  {
    image:  process.env.PUBLIC_URL +
    "/assets/images/cred_client_4.png",
  },
  {
    image:  process.env.PUBLIC_URL +
    "/assets/images/cred_client_5.png",
  },
  {
    image:  process.env.PUBLIC_URL +
    "/assets/images/cred_client_6.png",
  },
  {
    image:  process.env.PUBLIC_URL +
    "/assets/images/cred_client_7.png",
  },
  {
    image:  process.env.PUBLIC_URL +
    "/assets/images/cred_client_8.png",
  },
  {
    image:  process.env.PUBLIC_URL +
    "/assets/images/cred_client_9.png",
  },
];

const LandingPartners = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      direction: "horizontal",
      breakpoints: {
        1220: { slidesPerView: 4, spaceBetween: 200 },
        1100: { slidesPerView: 3.3, spaceBetween: 50 },
        1000: { slidesPerView: 3, spaceBetween: 0 },
        900: { slidesPerView: 2.7, spaceBetween: 0 },
        700: { slidesPerView: 2.1, spaceBetween: 0 },
        500: { slidesPerView: 1.5, spaceBetween: 0 },
        300: { slidesPerView: 1, spaceBetween: 20, dragSize: 100 },
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
  });

  return (
    <Box
      sx={{
        overflow: "hidden",
        backgroundColor: "#243771",
        marginTop: {xs:'20%',sm:'5%'},
        padding: "40px 0",
      }}
    >
      <Container sx={{ width: "100%", overflow: "visible" }}>
        <Box>
          <Typography
            sx={{
              color: "#f7d64a",
              fontSize: {
                xs: "24px",
                sm: "26px",
                md: "28",
                lg: "30px",
                xl: "32px",
              },
              fontWeight: "900",        
              marginBottom: "30px",
            }}
          >
            Our Lending Partners
          </Typography>
        </Box>
        <Box className="swiper">
          <Box
            className="swiper-wrapper"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {swiperData.map((data, index) => (
              <Box className="swiper-slide" key={`slide${index}`}>
                <Card
                  sx={{
                    width: "300px",
                    marginRight: "25px",
                    borderRadius: "10px",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: "100%", height: "auto", objectFit: "cover" }}
                    src={data.image}
                    alt={`Slide ${index}`}
                  />
                </Card>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              paddingTop: "20px",
              alignItems: "center",
            }}
          >
            <Box
              className="swiper-scrollbar"
              sx={{
                position: "initial",
                margin: "10px 0",
                width: "-webkit-fill-available",
                height: "7px",
                background: "#5166a7",
              }}
            ></Box>
            <Box sx={{ display: "flex" }}>
              <Box className="swiper-prev" sx={{ color: "#f6d549" }}>
                <KeyboardArrowLeftIcon fontSize="large" />
              </Box>
              <Box className="swiper-next" sx={{ color: "#f6d549" }}>
                <KeyboardArrowRightIcon fontSize="large" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPartners;
