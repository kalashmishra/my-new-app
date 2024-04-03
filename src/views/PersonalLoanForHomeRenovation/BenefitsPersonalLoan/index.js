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


const BenefitsPersonalLoan = ({scrollToTop,Link, GetMatchedButton}) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeadingColor = {
    color: "#243771",
    fontSize: { xs: "20px", sm: "22px" },
    fontWeight: "700",
  };
  const AccParaColor = {
    color: "#000",
    fontSize: { xs: "16px" },
  };

  const CheckCircle = {
    marginTop: "6px",
    color: "black",
    marginRight: "10px",
  };
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "10px 0px 50px" }}>
        <Grid container sx={{ paddingX: { xs: "16px" } }}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
                flexDirection: "column",
              }}
            >
              <Box sx={{ width: "80%" }}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/pl_hr_acc1.jpg"}
                  alt="Benefits Of House Renovation loan"
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
                marginTop: "20px",
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
                    lineHeight: "normal",
                    fontSize: { xs: "24px", sm: "24px", lg: "34px" },

                    color: "#243771",
                    fontWeight: "900",
                  }}
                >
                  Benefits Of Personal Loan For House Renovation
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
                    expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                    <Typography sx={{ ...AccHeadingColor }}>
                      Quick loan approvals
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccParaColor }}>
                      When you fulfil all the eligibility criteria and submit
                      the necessary paperwork, there are chances that the lender
                      may sanction your loan application faster as compared to
                      other loans. This feature enables you to receive the loan
                      amount instantly.
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
                    expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeadingColor }}>
                      No need for any collateral
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccParaColor }}>
                      Unlike any other credit option, you do not have to
                      mortgage or pledge any asset to get a loan for home
                      improvement. The lender will sanction your request based
                      on your eligibility and credit score.
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
                    expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                    <Typography sx={{ ...AccHeadingColor }}>
                      Flexible repayment terms
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccParaColor }}>
                      One of the most beneficial aspects of a loan for home
                      improvement is that you can choose a repayment plan as per
                      your financial capacity. Borrowers can select repayment
                      tenure between three months to two years as per their
                      financial strength.
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
                <Link
                  onClick={() => scrollToTop()}
                  to="/get-registered/user-number"
                >
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

export default BenefitsPersonalLoan;
