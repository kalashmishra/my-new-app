import { Box, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import CommonUserNumber from "../../../components/FormComponents/CommonUserNumber/CommonUserNumber";

const BlHomePage = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Grid
        container
        sx={{

          padding: { xs: " 50px 20px",sm: "50px 32px", md: "50px 32px",lg: "10px 32px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:{xs:'40px',sm:'0px'}
        
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              maxWidth: "540px",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Box>
              <Typography
                gutterBottom
                sx={{
                  color: "#243771",
                  fontSize: { xs: "26px", sm: "34px", md: "34px", lg: "38px" },
                  lineHeight: "1.2",
                  fontWeight: "900",
                }}
              >
                We Provide Funds For All Your Business Needs
              </Typography>
              <Typography
                sx={{
                 
                  color: "#10162c",
                  fontSize: { xs: "16px", sm: "18px" },
                  marginBottom: "14px",
                  fontWeight: "100",
                  padding:{xs:"10px",sm:'0px'}
               
                }}
              >
                Empowering Businesses to Thrive and Grow with our Innovative and
                Tailored Financing Solutions
              </Typography>
            </Box>

            <Box sx={{ width: { sm: "90%", md: "100%" } }}>
              <Typography
                sx={{
                  marginBottom: "14px",
                  color: "#404040",
                  fontSize: "14px",              
                }}
              >
                Enter your 10 digit mobile number to proceed
              </Typography>
              <CommonUserNumber />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} display={{ xs: "none", sm: "flex" }}>
          <Hidden smDown>
          <Box
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", xl: "flex" },
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/business_loan_top.webp"
              }
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="Get business loan"
            />
          </Box>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlHomePage;
