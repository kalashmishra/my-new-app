import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
 
} from "@mui/material";
import React from "react";

import Hidden from "@mui/material/Hidden";


const ShortTerm = ({scrollToTop, Link}) => {
  const linkData = [
    {
      to: "/personal-loan",
      imageSrc: process.env.PUBLIC_URL + "/assets/images/personal-loan.svg",
      label: "Personal Loan",
    },
    {
      to: "/business-loan",
      imageSrc: process.env.PUBLIC_URL + "/assets/images/business-loan.svg",
      label: "Business Loan",
    },
    {
      to: "/debt-consolidation",
      imageSrc:
        process.env.PUBLIC_URL + "/assets/images/debt-consolidation.svg",
      label: "Debt Consolidation",
    },
    {
      to: "/personal-loan-for-medical-emergency",
      imageSrc: process.env.PUBLIC_URL + "/assets/images/health.svg",
      label: "Medical",
    },
  ];
  return (
    <Box sx={{ position: "relative" }}>
      <Container maxWidth={"xl"} sx={{ padding: { md: "0 7%" } }}>
        <Grid
          container
          sx={{
            minHeight: { xs: "0vh", sm: "100vh" },
            marginTop: { xs: "50px", sm: 0 },
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row", md: "row" },
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start", lg: "flex-end" },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                marginTop: { sm: "10%", md: "0" },
              }}
            >
              <Box
                sx={{
                  padding: { xs: "16px", md: "0" },
                }}
              >
                <Typography
                  gutterBottom
                  sx={{
                    color: "#243771",
                    fontSize: {
                      xs: "26px",
                      sm: "32px",
                      md: "34px",
                      lg: "45px",
                    },
                    lineHeight: "1.2",
                    fontWeight: "900",
                    margin: "30px 0",
                    textAlign: { xs: "center", sm: "left", md: "left" },
                  }}
                >
                  Your Short Term Loan Is Just A Match Away!
                </Typography>
                <Typography
                  sx={{
                    color: "#243771",
                    fontSize: { xs: "12px", sm: "22px", md: "22px" },
                    marginBottom: "14px",
                    fontWeight: { xs: "500", sm: "700", md: "700" },
                    margin: { md: "0 0 30px" },
                    textAlign: { xs: "center", sm: "left", md: "left" },
                    lineHeight: "normal",
                  }}
                >
                  On a mission of financial inclusion for every indian
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "20px",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  alignItems: "center",
                }}
              >
                {linkData.map((link, index) => (
                  <Box
                    key={index}
                    sx={{
                      transition: "all .3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Link
                      to={link.to}
                      style={{
                        color: "#404040",
                        display: "inline-block",
                        textDecoration: "none",
                      }}
                      onClick={() => scrollToTop()}
                    >
                      <Box
                        sx={{
                          alignItems: "center",
                          background: "#243771",
                          border: "1px solid #cdced6",
                          borderRadius: "20px",
                          boxShadow: "4px 8px 20px #5cb46a4f",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-around",
                          margin: "4px",
                          height: { xs: "88px", md: "100px" },
                          padding: { xs: "8px", sm: "4px" },
                          width: { xs: "70px", sm: "100px" },
                        }}
                      >
                        <Box
                          sx={{
                            width: {
                              xs: "40%",
                              md: "60%",
                              textAlign: "center",
                            },
                          }}
                        >
                          <img
                            alt={`get ${link.label}`}
                            style={{ maxWidth: "100%", height: "auto" }}
                            src={link.imageSrc}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "9px", md: "12px" },
                            fontFamily: "Inter,sans-serif",
                            fontWeight: "700",
                            textAlign: "center",
                            color: "#ffffff",
                            textDecoration: "none !important",
                          }}
                        >
                          {link.label}
                        </Typography>
                      </Box>
                    </Link>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <Link
                  to="/get-registered/user-number"
                  onClick={() => scrollToTop()}
                >
                  <Button
                    sx={{
                      "&:hover": {
                        backgroundColor: "#243771",
                        color: "#f7d64a",
                      },
                      padding: { xs: "12px 34px 12px" },
                      boxShadow: "0px 3px 6px #00000029",
                      borderRadius: "10px",
                      backgroundColor: "#f7d64a",
                      color: "#243771",
                      marginTop: "10px",
                      fontWeight: "600",
                      transition: ".4s all ease-in-out",
                      textTransform: "capitalize ",
                      fontSize: { xs: "16px" },
                    }}
                  >
                    Get Matched Now!
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
              alignItems: "center",
              padding: { md: "32px", lg: "0" },
            }}
          >
            <Hidden smDown>
              <Box
                sx={{
                  marginTop: { xs: "30%", sm: "0" },
                  width: { sm: "100%", md: "100%" },
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={
                    process.env.PUBLIC_URL + "/assets/images/home-banner.webp"
                  }
                  alt="Get instant personal loan"
                />
              </Box>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ShortTerm;
