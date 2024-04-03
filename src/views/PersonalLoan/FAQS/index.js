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

import { FiberManualRecord } from "@mui/icons-material";

const FAQS = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeading = {
    color: "#243771",
    fontSize: { xs: "20px", sm: "22px" },
    fontFamily: "normal normal 700 20px/24px Inter",
    fontWeight: "700",
  };
  const AccPara = {
    color: "#333333",
    fontFamily: "normal normal normal 16px/22px Inter",
    fontSize: { xs: "16px" },
  };

  const CheckCircle = {
    marginTop: "6px",
    color: "#243771",
    marginRight: "10px",
    fontWeight: "400",
  };
  return (
    <>
      <Box>
        <Container maxWidth={"xl"} sx={{ padding: "20px 0px 0px" }}>
          <Grid
            container
            sx={{
              padding: { xs: "16px", md: "32px" },
            }}
            spacing={2}
            alignContent={"center"}
          >
            <Grid
              item
              xs={12}
              sm={5}
              sx={{
                display: "flex",
                alignItems: { xs: "center" },
                justifyContent: { xs: "flex-start" },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "24px", sm: "26px", md: "32px" },
                    fontWeight: "900",

                    color: "#243771",
                    margin: "0px 0px 30px",
                  }}
                >
                  FAQs On Personal Loan
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  borderRadius: "10px",
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
                      <FiberManualRecord sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeading }}>
                        How can I calculate the instalment amount of my personal
                        loan?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccPara }}>
                        You can calculate the instalment amount of your personal
                        loan by using an online personal loan calculator. In
                        this tool, you will simply have to put in your loan
                        amount, tenure, and the applicable interest rate.
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
                      <FiberManualRecord sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeading }}>
                        What should I do if some lender rejects my request for a
                        personal loan?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccPara }}>
                        If any lending institution rejects your loan
                        application, you need to first make a query about the
                        reason. Sometimes, they can reject the request for
                        credit due to missing certain documents or filling in
                        the application form incorrectly. In such a scenario,
                        you can reapply. However, if a poor credit score is a
                        reason for rejection, you should consider taking
                        measures to improve this score.
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
                      <FiberManualRecord sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeading }}>
                        Can I get tax benefits on a personal loan?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccPara }}>
                        No, a personal loan does not come with the benefit of a
                        tax deduction.
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
                      <FiberManualRecord sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeading }}>
                        Do we have the option to foreclose my personal loan
                        after 2-3 months of repayment?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ ...AccPara }}>
                        Provisions for foreclosing a loan are different across
                        lenders. Generally, lenders let you foreclose a personal
                        loan after 6-12 months. Go through the terms and
                        conditions of your chosen lender to know about this
                        provision.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FAQS;
