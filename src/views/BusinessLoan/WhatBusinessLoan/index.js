import { Box, Grid, Typography } from "@mui/material";
import React from "react";


const WhatBusinessLoan = ({ scrollToTop, GetMatchedButton, Link }) => {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          
        }}
        bgcolor="#FCEFD8"
      >
        <Grid
          item
          xs={12}
          sm={6}
          bgcolor="#FCEFD8"
          sx={{ padding: { xs: "30px 16px 0px", sm: " 0px" } }}
        >
        
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: { sm: "40% 4% 10%", md: "10% 4% 10% 0%", lg: "0% 0%" },
            }}
          >
            <img
              alt="What are Business Loans"
              style={{ width: "100%" }}
              src={process.env.PUBLIC_URL + "/assets/images/what_are_bl.webp"}
            />
          </Box>
         
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          bgcolor="#FCEFD8"
          sx={{ padding: { xs: "16px", sm: "0" } }}
        >
          <Box
            sx={{
              margin: {
                sm: "10% 5% 10%",
                lg: "15% 0% 0% 10%",
                xl: "15% 25% 0% 10%",
              },
              paddingRight:"20px"
              
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "28px", lg: "38px" },
                fontWeight: "600",
                
                color: "#243771",
                margin: { xs: "0px 0px 12px", lg: "0px 0px 28px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.1",
              }}
            >
              What are Business Loans?
            </Typography>
            <Typography 
              sx={{
                fontSize: { xs: "18px", sm: "20px" },
              opacity:0.7,
                color: "#404040",
                margin: "0px 0px 24px",
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.5",
                fontWeight: "100",
              }}
            >
              A business loan is a type of unsecured credit instrument that
              business owners can apply for in order to fund planned as well as
              urgent business-related expenses.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "20px" },
                opacity:0.7,
                color: "#404040",
                margin: "0px 0px 24px",
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.5",
                fontWeight: "100",
              }}
            >
              Further, leading financial institutions and NBFCs offer business
              loans at competitive interest rates and do not demand any
              collateral against the borrowed sum.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "left" },
                justifyContent: { xs: "center", sm: "left" },
              
              }}
            >
              <Link onClick={() => scrollToTop()}
                  to="/business-loan/get-registered"
                >
              <GetMatchedButton />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WhatBusinessLoan;
