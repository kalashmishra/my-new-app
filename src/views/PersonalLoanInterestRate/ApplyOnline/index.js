import React from "react";
import { Grid, Typography, Button, Box} from "@mui/material";


const ApplyOnline = ({scrollToTop, Link}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#10162c",
        overflow: "hidden",
        position: "relative",
        marginTop: {xs:'15%', sm:'3%'},
        marginBottom: "5%",
        
      }}
    >
      <Box  sx={{ padding: {xs:"20px 0px 40px",sm:"20px 0px 40px",md:'20px 30px 40px'} }}>
        <Grid container alignItems={"center"} spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
             
            }}
          >
            <Typography
              sx={{
                color: " #fff!important",
                fontSize: { xs: "24px", sm: "40px" },
                fontWeight: "900",
                lineHeight: "1.4",
               
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Apply For A Personal Loan Online With{" "}
              <Typography
                component={"span"}
                sx={{
                  color: "#f7d64a",
                  fontSize: { xs: "24px", sm: "40px" },
                  fontWeight: "900",
                  lineHeight: "1.4",
                  
                }}
              >
                Minimum Documentation
              </Typography>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "space-between",
                lg: "space-around",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                onClick={() => scrollToTop()}
                to="/get-registered/user-number"
              >
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "#243788",
                      color: "#F7D64A",
                    },
                    padding: "14px 30px",
                    boxShadow: "0px 3px 6px #00000029",
                    borderRadius: "10px",
                    border: "1px solid #F7D64A",
                    backgroundColor: "#F7D64A",
                    color: "#243788",
                    marginLeft: { md: "8px" },
                    fontWeight: "900",
                    transition: ".4s all ease-in-out",
                    textTransform: "capitalize ",
                  }}
                >
                  Apply Now
                </Button>
              </Link>
            </Box>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/ple_banner_img.webp"
                }
                alt="Personal Loan interest rate"
                style={{
                  position: "absolute",
                  maxWidth: "319px",
                  bottom: "0",
                  right: "-4%",
                }}
              />
            </Box>
          
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ApplyOnline;
