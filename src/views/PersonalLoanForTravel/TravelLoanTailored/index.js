import { Box, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import CommonUserNumber from "../../../components/FormComponents/CommonUserNumber/CommonUserNumber";

const TravelLoanTailored = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          padding: {
            xs: " 50px 20px",
            sm: "50px 32px",
            md: "50px 32px",
            lg: "30px 32px",

          },
          marginTop:{xs:'40px',sm:'0px'},
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
              padding: { xs: "0px 10px", sm: "0px 20px" },
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
                Travel Loan Tailored To Your Dreams!
              </Typography>
              <Typography
                sx={{
                 
                  color: "#10162c",
                  marginBottom: "14px",
                  lineHeight: "normal",
                  marginTop: "30px",
                }}
              >
                Say goodbye to financial worries and bon voyage to your dream
                destination!
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
                  process.env.PUBLIC_URL +
                  "/assets/images/travelLoan/tl_top.webp"
                }
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Get Personal Loan For travel"
              />
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TravelLoanTailored;
