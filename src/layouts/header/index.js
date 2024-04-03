import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utils/commonFunctions";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  const theme = useTheme();
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const [showBox, setShowBox] = useState(false);
  const [menuBox, setMenuBox] = useState(false);
  const [mobilePersonalLoanDropdown, setMobilePersonalLoanDropdown] =
    useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleElement = (element) => {
    if (window.innerWidth <= 991) {
      if (element === "menu") {
        setIsMenuVisible(!isMenuVisible);
      } else if (element === "dropdown") {
        setIsDropdownVisible(!isDropdownVisible);
      }
    }
  };
  const handleMobilePersonalLoanClick = () => {
    setMobilePersonalLoanDropdown(!mobilePersonalLoanDropdown);
  };
  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
    setIsDropdownVisible(true);
    scrollToTop();
  };
  const isPathAvailable = window.location.href.includes("/get-registered");

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/");
  };

  const handlePersonalLoanHover = () => {
    setShowBox(true);
  };

  const handlePersonalLoanMouseLeave = () => {
    setShowBox(false);
  };

  return (
    <>
      {isPathAvailable === false && (
        <>
          <Box>
            <AppBar
              sx={{
                boxShadow: "none",
                backgroundColor: "black",
              }}
            >
              <Container maxWidth="xl" sx={{ padding: { md: "0 4.3%" } }}>
                <Toolbar sx={{ paddingX: { xs: 0 } }}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                    paddingX={{ xs: "0px", sm: "24px", md: "48px" }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: { xs: "150px", sm: "170px", md: "200px" },
                        cursor: "pointer",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/credmudra_logo_new.webp"
                      }
                      alt="CredMudra Logo"
                      onClick={handleLogoClick}
                    />
                    <Stack
                      direction="row"
                      spacing={6}
                      sx={{
                        display: { xs: "none", sm: "none", md: "flex" },
                        cursor: "pointer",
                      }}
                    >
                      <Link
                        style={{
                          color: "white",
                          fontWeight: "500",
                          fontSize: "16",
                          textDecoration: "none",
                        }}
                        to="/business-loan"
                        onClick={() => {
                          setIsMenuVisible(!isMenuVisible);
                          scrollToTop();
                        }}
                      >
                        Business Loan
                      </Link>
                      <Link
                        style={{
                          color: "white",
                          fontWeight: "500",
                          fontSize: "16",
                          textDecoration: "none",
                          display: "flex",
                        }}
                        onMouseEnter={handlePersonalLoanHover}
                      >
                        Personal Loan
                        <KeyboardArrowDownOutlinedIcon
                          sx={{ height: "20px", width: "20px" }}
                        />
                      </Link>
                      <Link
                        style={{
                          color: "white",
                          fontWeight: "500",
                          fontSize: "16",
                          textDecoration: "none",
                        }}
                        target="_blank"
                        to="https://credmudra.com/blog/"
                      >
                        Blogs
                      </Link>
                    </Stack>
                    <Box
                      sx={{
                        display: { xs: "flex", md: "none" },
                        height: { xs: "33px", sm: "36px" },
                        width: { xs: "38px", sm: "42px" },
                        bgcolor: "#F7D64A",
                        borderRadius: "2px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <MenuIcon
                        fontSize="large"
                        sx={{ color: "#000" }}
                        onClick={() => setMenuBox(!menuBox)}
                      />
                    </Box>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
          </Box>
          {showBox && (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                height: "230px",
                width: { md: "950px", lg: "1150px", xl: "1400px" },
                backgroundColor: "#000",
                position: "fixed",
                top: "64px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 9999,
              }}
              onMouseEnter={handlePersonalLoanHover}
              onMouseLeave={handlePersonalLoanMouseLeave}
            >
              <Grid Container sx={{ display: "flex", width: "100%" }}>
                <Grid
                  item={4}
                  sx={{
                    bgcolor: "#000",
                    width: "33%",
                    padding: "20px 100px 0 30px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#F7D64A",
                      fontWeight: 900,
                      paddingBottom: "10px",
                    }}
                    variant="h5"
                  >
                    Personal Loan
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    Experience The Convenience Of Getting An Instant Personal
                    Loan Through Our Easy Application Process.
                  </Typography>
                </Grid>
                <Grid
                  item={4}
                  sx={{
                    bgcolor: "#000",
                    width: "33%",
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "30px",
                  }}
                >
                  <Link
                    to="/personal-loan"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      cursor: "pointer",
                      textTransform: "capitalize",
                    }}
                  >
                    Personal Loan
                  </Link>
                  <Link
                    to="/debt-consolidation"
                    style={{
                      color: "#fff",
                      paddingTop: "10px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Personal Loan For Debt Consolidation
                  </Link>
                  <Link
                    to="/personal-loan-for-medical-emergency"
                    style={{
                      color: "#fff",
                      paddingTop: "10px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Personal Loan For Medical Emergencies
                  </Link>
                  <Link
                    to="/personal-loan-for-travel"
                    style={{
                      color: "#fff",
                      paddingTop: "10px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Personal Loan For Travel
                  </Link>
                  <Link
                    to="/personal-loan-for-two-wheeler"
                    style={{
                      color: "#fff",
                      paddingTop: "10px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Personal Loan For Two Wheeler
                  </Link>
                </Grid>
                <Grid
                  item={4}
                  sx={{
                    bgcolor: "#000",
                    width: "33%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link
                    to="/personal-loan-for-home-renovation"
                    style={{
                      color: "#fff",
                      paddingTop: "60px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Personal Loan For Home Renovation
                  </Link>
                  <Link
                    to="/personal-loan-eligibility"
                    style={{
                      color: "#fff",
                      paddingTop: "10px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Personal Loan Eligibility
                  </Link>
                  <Link
                    to="/personal-loan-interest-rate"
                    style={{
                      color: "#fff",
                      paddingTop: "10px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Personal Loan Interest Rate
                  </Link>
                  <Link
                    to="/personal-loan-emi-calculator"
                    style={{
                      color: "#fff",
                      paddingTop: "10px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Personal Loan EMI Calculator
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
          {menuBox && (
            <Box
              sx={{
                position: "fixed",
                zIndex: "99",
                width: "100%",
                height: "auto",
                bgcolor: "#000",
                marginTop: { xs: "56px", sm: "64px" },
                display: { xs: "flex", md: "none" },
                maxHeight: "calc(100vh - 64px)",
                overflowY: "auto",
              }}
            >
              <List sx={{ width: "100%" }}>
                <ListItem
                  sx={{
                    borderTop: "1px solid #F6D549",
                    borderBottom: "1px solid #F6D549",
                    paddingY: "10px",
                  }}
                  onClick={() => {
                    setMenuBox(!menuBox);
                    scrollToTop();
                    navigate("/business-loan");
                  }}
                >
                  <Typography sx={{ color: "white", fontSize: "17px" }}>
                    Business Loan
                  </Typography>
                </ListItem>
                <Accordion
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    fontSize: "17px",
                  }}
                  onChange={handleMobilePersonalLoanClick}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ color: "#F6D549", fontSize: "20px" }}
                      />
                    }
                    sx={{ maxHeight: "48px", marginY: "0px" }}
                  >
                    <Typography sx={{ color: "white", fontSize: "17px" }}>
                      Personal Loan
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ borderTop: "1px solid #F6D549" }}>
                    <Box
                      sx={{
                        bgcolor: "#000",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#F7D64A",
                          fontWeight: 900,

                          paddingBottom: "10px",
                          textAlign: { xs: "left", sm: "center" },
                        }}
                        variant="h5"
                      >
                        Personal Loan
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          textAlign: { xs: "left", sm: "center" },
                        }}
                      >
                        Experience The Convenience Of Getting An Instant
                        Personal Loan Through Our Easy Application Process.
                      </Typography>
                    </Box>
                    <Grid
                      container
                      sx={{
                        display: "flex",

                        justifyContent: "space-around",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { sm: "30px" },
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        sx={{
                          bgcolor: "#000",
                          display: "flex",
                          flexDirection: "column",
                          paddingTop: "30px",
                        }}
                      >
                        <Link
                          to="/personal-loan"
                          onClick={() => {
                            setMenuBox(!menuBox);
                            scrollToTop();
                          }}
                          style={{
                            color: "#fff",

                            textDecoration: "none",
                            cursor: "pointer",
                            textTransform: "capitalize",
                          }}
                        >
                          Personal Loan
                        </Link>
                        <Link
                          to="/debt-consolidation"
                          onClick={() => {
                            setMenuBox(!menuBox);
                            scrollToTop();
                          }}
                          style={{
                            color: "#fff",

                            paddingTop: "10px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                        >
                          Personal Loan For Debt Consolidation
                        </Link>
                        <Link
                          to="/personal-loan-for-medical-emergency"
                          onClick={() => {
                            setMenuBox(!menuBox);
                            scrollToTop();
                          }}
                          style={{
                            color: "#fff",

                            paddingTop: "10px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                        >
                          Personal Loan For Medical Emergencies
                        </Link>
                        <Link
                          to="/personal-loan-for-travel"
                          onClick={() => {
                            setMenuBox(!menuBox);
                            scrollToTop();
                          }}
                          style={{
                            color: "#fff",

                            paddingTop: "10px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                        >
                          Personal Loan For Travel
                        </Link>
                        <Link
                          to="/personal-loan-for-two-wheeler"
                          onClick={() => {
                            setMenuBox(!menuBox);
                            scrollToTop();
                          }}
                          style={{
                            color: "#fff",

                            paddingTop: "10px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                        >
                          Personal Loan For Two Wheeler
                        </Link>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        sx={{
                          bgcolor: "#000",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Link
                          to="/personal-loan-for-home-renovation"
                          onClick={() => {
                            setMenuBox(!menuBox);
                            scrollToTop();
                          }}
                          style={{
                            color: "#fff",

                            paddingTop: "60px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                        >
                          Personal Loan For Home Renovation
                        </Link>
                        <Link
                          to="/personal-loan-eligibility"
                          onClick={() => {
                            setMenuBox(!menuBox);
                            scrollToTop();
                          }}
                          style={{
                            color: "#fff",

                            paddingTop: "10px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                        >
                          Personal Loan Eligibility
                        </Link>
                        <Link
                          to="/personal-loan-interest-rate"
                          onClick={() => {
                            setMenuBox(!menuBox);
                            scrollToTop();
                          }}
                          style={{
                            color: "#fff",

                            paddingTop: "10px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                        >
                          Personal Loan Interest Rate
                        </Link>
                        <Link
                          to="/personal-loan-emi-calculator"
                          onClick={() => {
                            setMenuBox(!menuBox);
                            scrollToTop();
                          }}
                          style={{
                            color: "#fff",

                            paddingTop: "10px",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                        >
                          Personal Loan EMI Calculator
                        </Link>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                <ListItem
                  sx={{
                    color: "white",
                    fontSize: "17px",
                    paddingY: "10px",
                    borderTop: "1px solid #F6D549",
                    borderBottom: "1px solid #F6D549",
                  }}
                >
                  <Link to="https://credmudra.com/blog/" style={{ textDecoration: "none" }}>
                    <Typography sx={{ color: "white", fontSize: "17px" }}>
                      Blogs
                    </Typography>
                  </Link>
                </ListItem>
              </List>
            </Box>
          )}
        </>
      )}

      {isPathAvailable && (
        <Box>
          <AppBar
            sx={{
              backgroundColor: "black",
              flexWrap: "nowrap",
              boxShadow: "0 2px 4px #0000001a",
              left: 0,
              position: "fixed",
              top: 0,
              width: "100%",
              zIndex: 999,
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              padding: 0,
            }}
          >
            <Container
              maxWidth="xl"
              sx={{
                padding: { md: "0 4.3%" },
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "inherit",
              }}
            >
              <Toolbar sx={{ paddingX: { xs: 0 }, width: "100%" }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                  paddingX={{ xs: "0px", sm: "24px", md: "48px" }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: "150px", sm: "170px", md: "200px" },
                      cursor: "pointer",
                    }}
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/credmudra_logo_new.webp"
                    }
                    alt="credmudra logo"
                    onClick={handleLogoClick}
                  />
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      alignItems: "end",
                      [theme.breakpoints.down("sm")]: {
                        flexDirection: "column-reverse",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        margin: "0 15px 0 0",
                        maxWidth: "270px",
                        textAlign: "end",
                        [theme.breakpoints.down("sm")]: {
                          margin: 0,
                          fontSize: "10px",
                        },
                      }}
                    >
                      Recognition as a startup by <br /> Government of India
                    </Typography>

                    <CardMedia
                      component="img"
                      sx={{
                        width: { xs: "80px", sm: "170px", md: "200px" },
                        cursor: "pointer",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/startup_india_logo.svg"
                      }
                      alt="startup india logo"
                    />
                  </Stack>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      )}
    </>
  );
};

export default Header;
