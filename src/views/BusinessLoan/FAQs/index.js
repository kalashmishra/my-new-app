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

const FAQs = () => {
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
    fontSize:'medium'
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
            sm={5}
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start" },
              justifyContent: { xs: "flex-start" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "22px", sm: "26px", md: "32px" },
                  fontWeight: "bold",
                  color: "#243771",
                  textAlign: { xs: "left", xl: "left" },
                  lineHeight: "1.1",
                  margin: "0px 0px 30px",
                }}
              >
                FAQs On Business Loans
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
                 
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography sx={{ ...AccHeading }}>
                      What is a good credit score to apply for a business loan
                      in India?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Financial institutions and NBFCs usually consider a Credit
                      score of 750 or above as a good credit score for a
                      business loan.
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
                      What is the maximum repayment tenure for a business loan
                      in India?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      The maximum tenure for an unsecured business loan can be
                      up to five years. However, repayment tenure for a credit
                      facility varies from one lender to another. Hence, you
                      should get in touch with the lenders in order to know
                      their repayment terms and other details.
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
                      Can I get a business loan to start a farming business?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Yes, you can get a business loan to start a farming or
                      agriculture business. Once you make an application, submit
                      the necessary documents and get verified, you will get the
                      money to fund your business expenses.
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

export default FAQs;
