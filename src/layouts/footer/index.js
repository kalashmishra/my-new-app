import React, { useState } from "react";
import { Subscribe } from "../../constant/services/credMudra";
import { scrollToTop } from "../../utils/commonFunctions";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    border: "none",
    backgroundColor: "#fff",
    color: "#666666",
    textAlign: "center",
    textTransform: "capitalize",
    width: "100%",
  },
  
  "& .MuiInputBase-input": {
    textAlign: "center",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
   
  },
  "& .css-1v4ccyo":{
    borderRadius:"0px"
  },
  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
    padding:'14px 14px  !important'
  },
  "& .css-1x5jdmq":{
    padding:'14px 14px  !important'
  }
});
const Footer = () => {
  const location = useLocation();
  const [displayThanks, setDisplayThanks] = useState(false);
  const [LoadingButton, setLoadingButton] = useState(false);


  const handleSubmit = async (e) => {
    setLoadingButton(true);
    e.preventDefault();
    const data = {
      email: e.target.email.value,
    };
    const res = await Subscribe(data);
    setInterval(() => {
      setLoadingButton(false);
      if (res?.data?.status.code === 200) {
        setDisplayThanks(true);
      }
    }, 1500);
  };

  const listItemStyling = {
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Inter,sans-serif",
    fontWeight: "700",
    paddingLeft: "0",
    "& > a": {
      textDecoration: "none",
      color: "#fff",
      "&:hover": {
        color: "#fff",
      },
    },
  };
  return (
    !location.pathname.startsWith("/get-registered") &&
    !location.pathname.startsWith("/business-loan/get-registered") && (
      <Box>
        <Box sx={{ backgroundColor: "#141414", padding: "45px 15px 45px 0" }}>
          <Container maxWidth={"xl"}>
            <Grid
              container
              spacing={2}
              sx={{
                padding: { md: "0 7%" },
                display: "flex",
                flexDirection: { xs: "column", sm: "row", flexWrap: "wrap" },
              }}
            >
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <Box>
                  <Box sx={{ marginBottom: "28px" }}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/credmudra_logo_new.webp"
                      }
                      alt="Credmudra"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#f7d64a",
                      fontSize: "25px",
                      fontWeight: "900",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#f7d64a",
                        fontSize: "20px",
                        fontWeight: "900",
                      }}
                    >
                      4.9
                    </Typography>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </Box>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "14px",
                      fontWeight: "700",
                      marginBottom: "30px",
                    }}
                  >
                    Rated by our customer
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "18px",
                        fontWeight: "700",
                        marginBottom: "10px",
                      }}
                    >
                      Follow Us On-
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                        color: "#f7d64a",
                        " & > a": {
                          textDecoration: "none",
                          color: "#f7d64a",
                          "&:hover": {
                            color: "#f7d64a",
                          },
                        },
                      }}
                    >
                      <Link
                        title="Facebook"
                        to="https://www.facebook.com/credmudra"
                        target="_blank"
                      >
                        <FacebookOutlinedIcon />
                      </Link>
                      <Link
                        title="Twitter"
                        to="https://twitter.com/Credmudra?t=Gaww4U3bGpfn5Hg1dw7N1A&amp;s=09"
                        target="_blank"
                      >
                        <TwitterIcon />
                      </Link>
                      <Link
                        title="Instagram"
                        to="https://www.instagram.com/credmudra/"
                      >
                        <InstagramIcon />
                      </Link>
                      <Link
                        title="Youtube"
                        to="https://www.youtube.com/@Credmudra"
                      >
                        <YouTubeIcon />
                      </Link>
                      <Link
                        title="Linked In"
                        target="_blank"
                        to="https://www.linkedin.com/company/credmudra/?originalSubdomain=in"
                      >
                        <LinkedInIcon />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2}>
                <Box>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    Our Company
                  </Typography>
                  <List sx={{ paddingTop: "16px" }}>
                    <ListItem sx={{ ...listItemStyling }}>
                      <Link to="/about-us" onClick={() => scrollToTop()}>
                        About Us
                      </Link>
                    </ListItem>
                    <ListItem sx={{ ...listItemStyling }}>
                      <Link
                        to="/terms-and-conditions"
                        onClick={() => scrollToTop()}
                      >
                        Terms and Condition
                      </Link>
                    </ListItem>
                    <ListItem sx={{ ...listItemStyling }}>
                      <Link to="/privacy-policy" onClick={() => scrollToTop()}>
                        Privacy Policy
                      </Link>
                    </ListItem>
                    <ListItem sx={{ ...listItemStyling }}>
                      <Link target="_blank" to="https://credmudra.com/blog/">
                        Blog
                      </Link>
                    </ListItem>
                    <ListItem sx={{ ...listItemStyling }}>
                      <Link target="_blank" to="https://careers.credmudra.com/">
                        Careers
                      </Link>
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <Box>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontFamily: "Inter,sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Contact With Us
                  </Typography>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "12px",
                      fontFamily: "Inter,sans-serif",
                      fontWeight: "700",
                      padding: "20px 30px 20px 0",
                    }}
                  >
                    Mumbai Location: <br />
                    912 SURESHWARI TECHNO IT PARK PREMISES VILLAGE EKSAR, LINK
                    ROAD BORIVALI (W) Mumbai, 400092
                  </Typography>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "12px",
                      fontFamily: "Inter,sans-serif",
                      fontWeight: "700",
                      padding: "20px 30px 20px 0",
                    }}
                  >
                    Bhopal Location: <br />B NO. 8 NIRUPAM, PH-II, NIRUPAM
                    ESTATE, AHMEDPUR KALAN, HUZUR, BHOPAL, Madhya Pradesh,
                    India, 462026
                  </Typography>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "12px",
                      fontFamily: "Inter,sans-serif",
                      fontWeight: "700",
                      padding: "20px 30px 20px 0",
                    }}
                  >
                    Contact Email: <br />
                    Support@credmudra.com
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/footer_startup.png"
                    }
                    alt="Startupindia"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontFamily: "Inter,sans-serif",
                      fontWeight: "700",
                      padding: "0 20px 10px 0",
                    }}
                  >
                    Join Our Newsletter
                  </Typography>

                  <Box>
                    <Box
                      sx={{
                        maxWidth: "680px",
                        margin: "10px 0",
                        textAlign: "center",
                        position: "relative",
                        zIndex: 2,
                        paddingLeft: "0px",
                        display: "flex",
                        alignItems: "center",
                        
                      }}
                    >
                      <form onSubmit={handleSubmit}>
                        <CustomTextField
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          required
                        />

                        <Button
                        type="submit"
                          sx={{
                            minHeight: "51px",
                            borderRadius: "0",
                            color: "#243771",
                            fontWeight: 800,
                            background: "#f7d64a 0% 0% no-repeat padding-box",
                            fontSize: { xs: "10px", sm: "10px", xl: "14px" },
                            textTransform: "uppercase",
                            transition: "0.4s all ease-in-out",
                            "&:hover": {
                              background: "#243771",
                              color: "#f7d64a",
                            },
                          }}
                        >
                          Subscribe Now
                        </Button>
                      </form>
                    </Box>
                    <Box
                      sx={{
                        color: "#ffffff",
                        fontSize: "18px",
                        fontFamily: "Inter,sans-serif",
                        fontWeight: "300",
                        padding: "20px 20px 20px 0",
                      }}
                    >
                      <Typography sx={{ color: "#ffffff" }}>
                        * Will send you weekly updates for your better finance
                        management.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ borderTop: "1px solid #f7d64a" }}>
          <Container maxWidth={"xl"}>
            <Box textAlign="center" sx={{ width: "100%", margin: "0 0 auto" }}>
              <Typography
                sx={{
                  padding: "10px",
                  color: "#404040",
                  fontSize: "16px",
                  fontFamily: "Inter,sans-serif",
                  fontWeight: "300",
                }}
              >
                Copyright @ Credmudra 2023. All Rights Reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    )
  );
};
export default Footer;
