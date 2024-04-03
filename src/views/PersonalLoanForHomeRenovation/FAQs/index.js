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
    color: "#243771",
    marginRight: "10px",
    marginTop: "5px",
  };
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "0px 0px 50px" }}>
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
              alignItems: { xs: "flex-start" },
              justifyContent: { xs: "flex-start" },
              width:{xs:'100%'}
            }}
            
          >
            <Box sx={{width:{xs:'100%',sm:'80%'}}}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "26px", md: "32px" },
                  fontWeight: "900",
                 

                  color: "#243771",
                  textAlign: { xs: "left", xl: "left" },
                  lineHeight: "1.1",
                 
                }}
              >
                Faqs On Personal Loans For Home Renovation
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
                      Can I use a personal loan for my house renovation?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Yes, you can use the borrowed sum of money for any
                      purpose, including your home renovation-related expenses.
                      The bank or NBFC will not imply any restriction or
                      obligation on the usage of the borrowed money.
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
                      Is a personal loan for home improvement tax deductible?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Yes, under Section 24(B) of the Income Tax Act of 1961,
                      you can claim a tax deduction of up to ₹ 30,000 per annum
                      on the interest you pay for a personal loan for home
                      renovation.
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
                      Are part payments allowed in a personal loan?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Some of the leading financial institutions offer part
                      payment facilities. However, in order to know your
                      lender-specific guidelines, consider reading the loan
                      agreement or getting in touch with the lender directly.
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
