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

const FAQSTwoWheeler = () => {
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
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "20px 0px 50px" }}>
        <Grid
          container
          sx={{ padding: { xs: "20px", md: "48px" } }}
          spacing={2}
          alignItems={"center"}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: { xs: "center" },
              justifyContent: { xs: "flex-start" },
            }}
          >
            <Box sx={{ width: { sm: "80%", md: "70%", xl: "60%" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "26px", md: "32px" },
                  fontWeight: "900",
                 
                  color: "#243771",
                  textAlign: { xs: "left" },
                  lineHeight: "1.1",
                  margin: "0px 0px 30px",
                }}
              >
                FAQs About Personal Loan For Two Wheeler
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
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
                      Where to find the best personal loan offer for a
                      two-wheeler?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      You may reach out to Credmudra mentors for a one-on-one
                      discussion on how to negotiate for the best interest rate.
                      We have a bunch of reputed lenders offering the lowest
                      interest on personal loans.
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
                      Can I get a bike loan if my CIBIL score is 650?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Credit score requirements tend to vary from one lender to
                      another. However, there remains a significant chance of
                      grabbing a personal loan with 650 CIBIL score but in
                      exchange of higher interest rates.
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
                      What is the minimum salary for a loan from Credmudra?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      You can opt for a loan even if you are currently employed
                      with a salary of Rs. 9000. The only reason a lender asks
                      for your monthly income is to determine your repaying
                      capacity after taking the loan.
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
                      How many years is a bike loan?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Depending on the lender’s policies, a two-wheeler loan
                      typically exceeds no more than 5 years. Many financing
                      companies allow you to make partial prepayments at
                      occasional intervals to bring down the interest rates in
                      exchange for some foreclosure charges.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQSTwoWheeler;
