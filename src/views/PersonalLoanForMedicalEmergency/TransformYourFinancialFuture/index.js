import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const TransformYourFinancialFuture = () => {
  return (
    <>
      <Box bgcolor="#FCEFB8">
        <Container maxWidth={"xl"} sx={{ padding: "20px 0px 50px" }}>
          <Box
            sx={{
              padding: { xs: "16px", md: "32px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "36px", md: "45px" },
                 
                fontWeight: "900",
                margin: "25px 0px",
                textAlign: "center",
                color: "#243771",
                lineHeight: "normal",
              }}
            >
              Transform Your Financial Future: Sign Up For These And Discover
              Credmudra's Proven Strategies
            </Typography>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{
              padding: { xs: "10px", md: "32px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: { xs: "150px", sm: "200px", xl: "150px" },
                  position: "relative",
                  backgroundColor: "#24356C",
                  borderRadius: "10px",
                }}
              >
                <CardContent
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                       
                      fontWeight: "900",
                      margin: "0px 0px 8px",
                    }}
                  >
                    Mudra Mentors+
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                       
                      margin: "0px 0px 8px",
                      width: "65%",
                    }}
                  >
                    Engage with an extended community of Financial Advisors.
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt="Mudra Mentors"
                  image={
                    process.env.PUBLIC_URL +
                    "/assets/images/user-engagement.png"
                  }
                  sx={{
                    position: "absolute",
                    right: "15px",
                    top: "10px",
                    width: "66px",
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: { xs: "150px", sm: "200px", xl: "150px" },
                  position: "relative",
                  backgroundColor: "#24356C",
                  borderRadius: "10px",
                }}
              >
                <CardContent
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                       
                      fontWeight: "900",
                      margin: "0px 0px 8px",
                    }}
                  >
                    Resources
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                       
                      margin: "0px 0px 8px",
                      width: "65%",
                    }}
                  >
                    Know the moves that lead to Financial Freedom.
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt="Resources"
                  image={process.env.PUBLIC_URL + "/assets/images/user-engagementa.png"}
                  sx={{
                    position: "absolute",
                    right: "15px",
                    top: "10px",
                    width: "66px",
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: { xs: "150px", sm: "200px", xl: "150px" },
                  position: "relative",
                  backgroundColor: "#24356C",
                  borderRadius: "10px",
                }}
              >
                <CardContent
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                       
                      fontWeight: "900",
                      margin: "0px 0px 8px",
                    }}
                  >
                    Seek Solutions?
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                       
                      margin: "0px 0px 8px",
                      width: "65%",
                    }}
                  >
                    Let’s connect at Support@Credmudra.com
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt="Get Solution"
                  image={
                    process.env.PUBLIC_URL +
                    "/assets/images/user-engagements.png"
                  }
                  sx={{
                    position: "absolute",
                    right: "15px",
                    top: "10px",
                    width: "66px",
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TransformYourFinancialFuture;
