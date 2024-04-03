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

const TipsToAvoidPl = ({ scrollToTop, GetMatchedButton, Link }) => {
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
    <Box bgcolor="#243771">
      <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
        <Grid
          container
          bgcolor="#243771"
          sx={{ padding: { xs: "16px", md: "32px" } }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "center" },
                flexDirection: "column",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/avoid_loan.webp"
                  }
                  alt="Avoid Personal Loan Request Rejection"
                  style={{
                    width: "100%",
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
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
                marginTop: { xs: "20px", sm: "0px" },
              }}
            >
              <Box
                sx={{
                  width: { sm: "100%", xl: "100%" },
                }}
              >
                <Typography
                  sx={{
                    textAlign: { sm: "left" },

                    fontSize: { xs: "24px", sm: "32px", lg: "34px" },
                    color: "#f7d64a",
                    fontWeight: "900",
                    lineHeight: "normal",
                  }}
                >
                  Tips To Avoid Personal Loan Request Rejection
                </Typography>
                <Typography
                  sx={{
                    textAlign: { sm: "left" },
                    fontSize: { xs: "16px" },
                    color: "#fff",
                    marginTop: { xs: "20px", sm: "20px" },
                  }}
                >
                  There are a few aspects you need to stay mindful of to ensure
                  that the lender does not reject your request for credit:
                </Typography>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{
                    backgroundColor: "transparent",
                    marginTop: "20px",
                  }}
                  elevation={0}
                >
                  <AccordionSummary
                    sx={{ padding: 0 }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                    <Typography sx={{ ...AccHeadingColor }}>
                      Submit All the Required Documents
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccParaColor }}>
                      Ensure that you provide all the necessary documents
                      carefully. If any paper goes missing, it can lead to the
                      rejection of your loan request. In such a scenario, you
                      can convey the same to your lender. They may ask you to
                      submit an alternative document.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  sx={{
                    backgroundColor: "transparent",
                  }}
                  elevation={0}
                >
                  <AccordionSummary
                    sx={{ padding: 0 }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeadingColor }}>
                      Meet the Eligibility Criteria
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccParaColor }}>
                      Lenders ensure that you meet all parameters of the
                      eligibility criteria before approving the personal loan.
                      These parameters include the minimum income, age limit,
                      credit score, citizenship, etc. When you meet these
                      standards, lenders get assurance that you can repay
                      positively.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  sx={{ backgroundColor: "transparent" }}
                  elevation={0}
                >
                  <AccordionSummary
                    sx={{ padding: 0 }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeadingColor }}>
                      Correctly Fill in the Form
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccParaColor }}>
                      You should not make any incorrect entries on your loan
                      application form. The information mentioned in the form
                      and the information stated in your documents must match.
                      In case they do not, the lender may ask you to repeat the
                      loan application process.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  sx={{ backgroundColor: "transparent" }}
                  elevation={0}
                >
                  <AccordionSummary
                    sx={{ padding: 0 }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeadingColor }}>
                      Keep a Low Debt-to-Income Ratio
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccParaColor }}>
                      A high debt-to-income ratio can lead to the rejection of
                      your credit request as it suggests that most of your
                      income goes to paying EMIs and it will be difficult for
                      you to repay a new loan. So, you need to repay your
                      existing loans first to earn the confidence of your lender
                      about your repayment potential.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                  sx={{ backgroundColor: "transparent" }}
                  elevation={0}
                >
                  <AccordionSummary
                    sx={{ padding: 0 }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel5d-content"
                    id="panel5d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeadingColor }}>
                      Get a Co-Borrower
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccParaColor }}>
                      In case you do not meet one or more of the eligibility
                      parameters, what you can do to avoid rejection on your
                      personal loan application is apply with a co-borrower.
                      However, you need to ensure that the co-borrower meets the
                      eligibility standards.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "center" },
                  justifyContent: { xs: "center", sm: "flex-start" },
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
  );
};

export default TipsToAvoidPl;
