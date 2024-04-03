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

const ThreeBanners = () => {
  return (
    <Box bgcolor="#FCEFB8">
      <Container
        maxWidth={"xl"}
        sx={{ padding: { xs: "60px 16px", md: "60px 6.5%" } }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
                  process.env.PUBLIC_URL + "/assets/images/user-engagements.png"
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
                  process.env.PUBLIC_URL + "/assets/images/user-engagement.png"
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
  );
};

export default ThreeBanners;
