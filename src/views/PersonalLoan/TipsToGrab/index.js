import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const TipsToGrab = ({ scrollToTop, GetMatchedButton, Link }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeading = {
    color: "#243771",
    fontSize: { xs: "18px", md: "22px" },
    fontWeight: "900",
  };
  const AccPara = {
    color: "#222",
    fontSize: { xs: "16px" },
  };

  const CheckCircle = {
    color: "black",
    marginRight: "10px",
  };
  return (
    <>
      <Box>
        <Container maxWidth={"xl"} sx={{ padding: "40px 0px 0px" }}>
          <Grid
            container
            spacing={2}
            sx={{ padding: { xs: "16px", md: "32px" } }}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: { xs: "center", sm: "flex-start" },
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: { sm: "90%", xl: "100%" },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: { sm: "left" },
                      color: "#243771",
                      fontSize: { xs: "24px", sm: "32px", lg: "34px" },
                      fontWeight: "900",
                      lineHeight: "1.1",
                      margin: "0 0 18px",
                    }}
                  >
                    Tips To Grab The Best Deal On Personal Loan
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: { sm: "left" },
                      color: "#404040",
                      fontSize: { xs: "16px", md: "21px" },

                      lineHeight: "1.5",
                      margin: "0 0 18px",
                    }}
                  >
                    You can follow the tips mentioned below to grab the best
                    deal on personal loan and make repayment less troublesome:
                  </Typography>
                  <Accordion
                    elevation={0}
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    sx={{
                      backgroundColor: "transparent",
                      marginTop: "20px",
                      opacity: 1,
                    }}
                  >
                    <AccordionSummary
                      sx={{ padding: 0 }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                      <Typography sx={{ ...AccHeading }}>
                        Determine the Required Credit:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccPara }}>
                        Taking a credit more than your requirement will lead you
                        to pay more interest. As it will increase the instalment
                        amount, you may face difficulties in repayment. This is
                        why, before applying to get an instant personal loan,
                        estimate the amount you will need to meet your credit
                        shortage. After this, you will not mistakenly borrow
                        less or more than required.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    sx={{
                      backgroundColor: "transparent",
                      opacity: 1,
                    }}
                  >
                    <AccordionSummary
                      sx={{ padding: 0 }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeading }}>
                        Check Your Credit Report:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccPara }}>
                        Since a personal loan is an unsecured credit facility,
                        lenders put more focus on the creditworthiness of their
                        borrowers. Credit scores and reports contain all the
                        necessary information regarding your credibility as a
                        borrower. By checking the credit score and report, you
                        can ensure that all the information mentioned there is
                        correct. In case it is not, you can raise a complaint.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    style={{ backgroundColor: "transparent", opacity: 1 }}
                  >
                    <AccordionSummary
                      sx={{ padding: 0 }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeading }}>
                        Compare Loan Offers:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccPara }}>
                        At Credmudra, there are more than 30 lenders from which
                        you can borrow. You can see that their loan offers are
                        not the same. The interest, charges and other terms can
                        vary. This is why, you should ideally check all the
                        personal loan details properly and choose one that
                        charges comparatively lower. This will help you keep
                        your cost of borrowing as low as possible.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    style={{ backgroundColor: "transparent", opacity: 1 }}
                  >
                    <AccordionSummary
                      sx={{ padding: 0 }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeading }}>
                        Choose a Suitable Tenure:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccPara }}>
                        Choosing a suitable tenure is essential for smooth
                        repayment. When the tenure is longer, you will have to
                        be ready to pay more interest on your loan. When you go
                        with a shorter tenure, your interest outgo stays low but
                        the instalment becomes high. Therefore, the tenure
                        should be optimum so that the instalment amount stays
                        within your capacity.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", sm: "flex-start" },
                      marginBottom: { xs: "20px", sm: "0" },
                      marginTop: { xs: "20px", sm: "0px" },
                    }}
                  >
                    <Link
                      onClick={scrollToTop}
                      to="/get-registered/user-number"
                    >
                      <GetMatchedButton />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "center" },
                flexDirection: "column",
                marginTop: { xs: "20px", sm: "0px" },
              }}
            >
              <Box sx={{ width: "100%" }}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/best_deal.webp"}
                  alt="Grab The Best Deal On Personal Loan"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TipsToGrab;
