import { Box, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import CommonUserNumber from "../../../components/FormComponents/CommonUserNumber/CommonUserNumber";

const ExperienceTheJoy = () => {
  return (
    <Box>
     
      <Grid
        container
        sx={{
          
          padding: { xs: " 50px 20px",sm: "50px 32px", md: "50px 32px",lg: "30px 32px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:{xs:'40px', sm:'0px'}
         
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

                  maxWidth: "540px",
                  fontSize: { xs: "26px", sm: "34px", md: "34px", lg: "38px" },
                  lineHeight: "1.2",
                  fontWeight: "900",
                }}
              >
                Experience The Joy Of Home Transformation.
              </Typography>
              <Typography
                sx={{
                 
                  color: "#10162c",
                  fontSize: { xs: "16px", sm: "18px" },
                  marginBottom: "14px",
                  lineHeight:'1.5'
                 
                }}
              >
                Revamp, Refresh, and Revitalize Your Home with Our Home
                Improvement Loan.
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
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/images/pl_hr_top.jpg"}
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="Apply for home renovation"
            />
          </Box>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceTheJoy;
