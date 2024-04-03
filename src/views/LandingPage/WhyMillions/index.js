import { Box, Typography } from "@mui/material";
import React from "react";
import SwiperComponent from "../Swiper";

const WhyMillions = () => {
 
  return (
    <Box sx={{ marginBottom: "5%", marginTop: { xs: "15%", sm: "0" } }}>
      <Box>
        <Box sx={{ paddingBottom: { xs: "15%", sm: "5%" } }}>
          <Typography
            sx={{
              color: "#243771",
              display: "flex",
              fontSize: { xs: "24px", md: "30px", lg: "50px" },
              fontWeight: "900",
              letterSpacing: "0",
              margin: "auto",
              opacity: 1,
              textAlign: "center",
              textTransform: "capitalize",
              width: "70%",
            }}
          >
            Why Millions Of Indians Trust Credmudra For Short Term Loans?
          </Typography>
        </Box>
        <SwiperComponent />
      </Box>
    </Box>
  );
};

export default WhyMillions;
