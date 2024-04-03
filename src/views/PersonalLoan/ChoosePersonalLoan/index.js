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

const ChoosePersonalLoan = ({ scrollToTop, GetMatchedButton, Link }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeadingColor = {
    color: "#F7D64A",
    fontSize: { xs: "20px", sm: "22px" },
    fontWeight: "700",
  };
  const AccParaColor = {
    color: "white",
    fontSize: { xs: "16px" },
    fontWeight: "700",
  };

  const CheckCircle = {
    marginTop: "6px",
    color: "white",
    marginRight: "10px",
  };
  return (
    <>
      <Box bgcolor="#243771">
        <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
          <Grid
            container
            bgcolor="#243771"
            spacing={2}
            sx={{ padding: { xs: "20px", md: "48px" } }}
          >
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
              }}
            >
              <Box sx={{ width: "100%" }}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/discover-smarter.webp"
                  }
                  alt="Why Choose Personal Loan from Credmudra"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: { xs: "center", sm: "flex-start" },
                  justifyContent: "center",
                  flexDirection: "column",
                  color: "white",
                  width: { sm: "100%", xl: "100%" },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      textAlign: { sm: "left" },
                      fontSize: { xs: "24px", sm: "32px", lg: "34px" },
                      color: "#f7d64a",
                      fontWeight: "900",
                    }}
                  >
                    Why Choose Personal Loan @ Credmudra?
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
                      sx={{ padding: 0 }}
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                      <Typography sx={{ ...AccHeadingColor }}>
                        Best Loan Matchmaker:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccParaColor }}>
                        As a loan matchmaker, we analyze your profile and match
                        you with the most suitable lender based on their
                        criteria. Within a few seconds we show you the lender
                        with the highest chances of approving your credit
                        request. Say goodbye to lengthy processes and get your
                        loan approval in less than 3 minutes!*
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    sx={{
                      backgroundColor: "transparent",
                    }}
                  >
                    <AccordionSummary
                      sx={{ padding: 0 }}
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Quick Loan Disbursement:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccParaColor }}>
                        Experience the convenience of getting an instant
                        personal loan through our easy application process. We
                        prioritize quick verification, allowing us to fulfill
                        our promise of 'same day disbursal'. With a remarkable
                        disbursal rate of 98%, our lending process is designed
                        to be effortless, seamless, and customer-friendly. Say
                        goodbye to lengthy waiting periods and embrace the speed
                        and efficiency of Credmudra.
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
                      sx={{ padding: 0 }}
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Affordable Interest Rate:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccParaColor }}>
                        You can get the market-best interest rate on personal
                        loans from us. The attractive interest on the credit
                        will make it much easier for you to repay. It will keep
                        the total outflowing interest low and the instalment
                        amount within your budget.
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
                      sx={{ padding: 0 }}
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Purpose-Based Loan:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccParaColor }}>
                        For the immediate requirement of small-ticket finance,
                        you can go with short-term personal loan. If you need a
                        significant amount of money, you can apply for a regular
                        personal loan. Our existing customers can also take a
                        pre-approved personal loan that comes with the facility
                        of instant approval.
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
                      sx={{ padding: 0 }}
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel5d-content"
                      id="panel5d-header"
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Easy Online Application:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccParaColor }}>
                        Visiting the offline branches of lending institutions is
                        hectic. Plus, you will have to book a schedule during
                        office hours only. Eliminate all these inconveniences by
                        applying for a personal loan with us online. So, take
                        the first step and click on the “Apply Now” button.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      sx={{ padding: 0 }}
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel6d-content"
                      id="panel6d-header"
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Flexible Repayment Period:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccParaColor }}>
                        Choose a period of repayment according to your
                        preference from the available range of up to 5 years.
                        The extensive tenure will help you ensure that the
                        instalment amount is within your repayment capacity. You
                        can use a personal loan EMI calculator to find the right
                        tenure.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      sx={{ padding: 0 }}
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel7d-content"
                      id="panel7d-header"
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Lenient Eligibility Criteria:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccParaColor }}>
                        At Credmudra, we believe in making personal loan
                        eligibility hassle-free for you. Our easy eligibility
                        criteria ensure a seamless qualification process. All
                        you need to do is fill up and submit our online
                        application form. We'll take care of the rest, matching
                        you with the lender that best suits your profile and
                        requirements. Say goodbye to complicated eligibility
                        processes and get closer to your personal loan today.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "flex-start" },
                    padding: "16px 0 16px",
                  }}
                >
                  <Link onClick={scrollToTop} to="/get-registered/user-number">
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

export default ChoosePersonalLoan;
