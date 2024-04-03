import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FiberManualRecord } from "@mui/icons-material";

const FAQSOnPersonalLoan = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeading = {
    color: "#243771",
    fontSize: { xs: "20px", sm: "22px" },
    fontWeight: "700",
     
  };

  const AccPara = {
    color: "#404040",
    fontSize: { xs: "16px" },
     
  };

  const CircleIcon = {
    marginTop: "6px",
    color: "#243771",
    marginRight: "10px",
  };
  return (
    <>
      <Container maxWidth={"xl"} sx={{ padding: "20px 0px 50px" }}>
        <Grid
          container
          sx={{ padding: { xs: "20px", md: "48px" } }}
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={5}
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: { xs: "flex-start", sm: "center" },
            }}
          >
            <Box sx={{ width: { sm: "100%" }, marginRight: { md: "10%" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "26px", md: "32px" },
                  fontWeight: "900",
                  fontFamily: "Inter,sans-serif",

                  color: "#243771",
                  textAlign: { xs: "left", xl: "left" },
                  lineHeight: "1.1",
                  margin: "0px 0px 30px",
                }}
              >
                FAQs On Personal Loan For Medical Emergencies
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                borderRadius: "10px",
                fontFamily: "Inter,sans-serif",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{
                    backgroundColor: "#FCEFB8",
                    marginTop: "20px",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    borderRadius: "10px",
                    border: "none !important",
                  }}
                  elevation={0}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <FiberManualRecord sx={{ ...CircleIcon }} />

                    <Typography sx={{ ...AccHeading }}>
                      Do borrowers need to pay a down payment to avail of a
                      personal medical loan?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      No, there is no need to make any deposit or down payment
                      to obtain a personal medical loan.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  border={"none"}
                  sx={{
                    backgroundColor: "#FCEFB8",
                    marginTop: "20px",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    borderRadius: "10px",
                    "&::before": {
                      backgroundColor: "rgb(0 0 0 / 0%)",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <FiberManualRecord sx={{ ...CircleIcon }} />

                    <Typography sx={{ ...AccHeading }}>
                      Can I still obtain a personal medical loan with an average
                      credit score?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Obtaining a personal medical loan with an average credit
                      score will vary depending on the lender’s terms and
                      conditions. It is generally advisable to maintain a credit
                      score above 750 to obtain a reasonable interest rate.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  sx={{
                    backgroundColor: "#FCEFB8",
                    marginTop: "20px",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    borderRadius: "10px",
                    "&::before": {
                      backgroundColor: "rgb(0 0 0 / 0%)",
                    },
                  }}
                  elevation={0}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <FiberManualRecord sx={{ ...CircleIcon }} />

                    <Typography sx={{ ...AccHeading }}>
                      Does the lending institution have any say in determining
                      the type of treatment prescribed?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      No, the lending organisation has no say or role in
                      deciding what type of treatment you should be provided
                      with.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  sx={{
                    backgroundColor: "#FCEFB8",
                    marginTop: "20px",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    borderRadius: "10px",
                    "&::before": {
                      backgroundColor: "rgb(0 0 0 / 0%)",
                    },
                  }}
                  elevation={0}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <FiberManualRecord sx={{ ...CircleIcon }} />

                    <Typography sx={{ ...AccHeading }}>
                      How is the interest rate and loan repayment tenure
                      determined for a personal medical loan?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      The interest rate and loan repayment tenure are determined
                      based on the borrower’s loan requirements, eligibility
                      criteria, and the lender’s terms and conditions.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                  sx={{
                    backgroundColor: "#FCEFB8",
                    marginTop: "20px",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    borderRadius: "10px",
                    "&::before": {
                      backgroundColor: "rgb(0 0 0 / 0%)",
                    },
                  }}
                  elevation={0}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5d-content"
                    id="panel5d-header"
                  >
                    <FiberManualRecord sx={{ ...CircleIcon }} />

                    <Typography sx={{ ...AccHeading }}>
                      Is there a waiting period for personal medical loans, as
                      there is with health insurance?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      No, unlike health insurance policies, there is no waiting
                      period when availing of a personal medical loan.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                  sx={{
                    backgroundColor: "#FCEFB8",
                    marginTop: "20px",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    borderRadius: "10px",
                    "&::before": {
                      backgroundColor: "rgb(0 0 0 / 0%)",
                    },
                  }}
                  elevation={0}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6d-content"
                    id="panel6d-header"
                  >
                    <FiberManualRecord sx={{ ...CircleIcon }} />

                    <Typography sx={{ ...AccHeading }}>
                      Are there any restrictions on the type of treatments that
                      can be funded by medical loans?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      No, there are no restrictions on the type of treatments
                      where you can use a medical loan. Thus, medical loans can
                      be used to finance any kind of medical expense.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FAQSOnPersonalLoan;
