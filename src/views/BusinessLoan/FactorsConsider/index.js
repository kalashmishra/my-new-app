import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";


const FactorsConsider = ({ scrollToTop, GetMatchedButton, Link }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeadingColor = {
    color: "#243771",
    fontSize: { sm: "1rem", md: "1.5rem" },
    fontWeight: "bold",
  };
  const CheckCircle = {
    marginTop: "6px",
    color: "#000",
    marginRight: "10px",
  };
  return (
    <>
      <Box>
        <Container maxWidth={"xl"} sx={{ padding: "40px 0px 0px" }}>
          <Grid container sx={{ padding: { xs: "10px", md: "32px" } }}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/bl_acc3.webp"}
                    alt="best business loan for your firm"
                    style={{
                      width: "80%",
                      height: "100%",
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "center",
                  flexDirection: "column",
                  color: "white",
                  marginTop: "20px",
                }}
              >
                <Box
                  sx={{
                    width: { sm: "90%", xl: "100%" },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: { xs: "24px", sm: "24px", lg: "34px" },
                      color: "#243771",
                      fontWeight: "900",
                      paddingBottom: "10px",
                      lineHeight: "normal",
                    }}
                  >
                    Factors To Consider Before Taking A Business Loan
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", sm: "16px", md: "22px" },

                      color: "#7D7D7D",
                      margin: "0px 0px 24px",
                      textAlign: "left",

                      lineHeight: "1.5",
                    }}
                  >
                    You must take into account several essential factors while
                    you decide on the best business loan for your firm.
                  </Typography>
                  <Accordion
                    elevation={0}
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    sx={{
                      backgroundColor: "transparent",
                      marginTop: "20px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      sx={{ padding: 0 }}
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                      <Typography sx={{ ...AccHeadingColor }}>
                        Purpose of the Loan
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        In order to make the best use of borrowed money, you
                        must know your financial needs before applying for
                        credit.
                        <br />
                        <br />
                        For example, you must determine what equipment you need
                        to buy if you are opting for a loan to upgrade your
                        business. This will help you determine the exact amount
                        you need and what type of business loan you should opt
                        for.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                      sx={{ padding: 0 }}
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Interest Rates and Other Costs
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        To get the best deal, you must compare the interest
                        rates offered by different lenders. Based on the
                        comparison, choose a lender that offers the lowest
                        interest rate.
                        <br />
                        <br />
                        Further, you should keep an eye out for additional
                        costs, such as processing charges, foreclosure fees,
                        etc. These costs add up to the total loan amount.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                      sx={{ padding: 0 }}
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Repayment Schedule
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Make sure you know all the repayment terms of the credit
                        you are applying for. Factors, such as business loan
                        length, repayment schedule and charges associated with
                        early and late payments should be known by every
                        borrower.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                      sx={{ padding: 0 }}
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Company Cash Flow
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Assess your business's cash flow in order to determine
                        your repayment capability. This will help you make a
                        repayment plan and save from a financial burden.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5d-content"
                      id="panel5d-header"
                      sx={{ padding: 0 }}
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Lender's Reputation
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Do thorough research about the financial institution or
                        NBFC you are choosing. Learn about the lender's
                        reputation in the market, customer service, etc. You can
                        look for ratings and reviews from previous borrowers in
                        order to learn more about a financial institution.
                        <br />
                        <br />
                        Credmudra has partnered with some of the leading
                        business loan providers in India. With our user-friendly
                        interface and paperless loan application process, take a
                        step closer to reaching your business goals.
                        Nevertheless, if you face any issues while applying for
                        a loan from our portal, contact our Mudra Mentors to
                        receive comprehensive assistance.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "left" },
                    padding: "16px 0 16px",
                  }}
                >
                  <Link
                    onClick={() => scrollToTop()}
                    to="/business-loan/get-registered"
                  >
                    <GetMatchedButton />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FactorsConsider;
