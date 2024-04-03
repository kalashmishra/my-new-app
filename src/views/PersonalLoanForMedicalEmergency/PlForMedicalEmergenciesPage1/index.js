import { Box, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import CommonUserNumber from "../../../components/FormComponents/CommonUserNumber/CommonUserNumber";

const PersonalLoanForMedicalEmergenciesPage1 = () => {
  return (
    <Box>
   

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
                Personal Loan For Medical Emergency
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter,sans-serif",
                  color: "#10162c",
                  marginBottom: "14px",
                  fontSize: { xs: "16px", sm: "18px" },
                }}
              >
                Medical emergencies can be a source of immense anxiety,
                particularly if you are caught off-guard.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: { xs: "16px", sm: "18px" },
                  color: "#10162c",
                  marginBottom: "14px",
                  opacity:0.8
                 
                }}
              >
                In such situations, CredMudra’s personal medical loan can help
                you and your loved ones stay protected regardless of your
                financial circumstance.
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
                process.env.PUBLIC_URL + "/assets/images/medical/pl_me_top.webp"
              }
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="Get Personal Loan For Medical Emergency"
            />
          </Box>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalLoanForMedicalEmergenciesPage1;
