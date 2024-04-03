import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
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
    fontWeight: "900",  
  };

  const AccPara = {
    color: "#404040",
    fontSize: { xs: "16px" },
  };

  const CircleIcon = {
    color: "#243771",
    marginRight: "10px",
    marginTop:'5px'
  };
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "20px 0px 50px" }}>
        <Grid container sx={{ padding: { xs: "0px 20px",md:"48px" } }} spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: { xs: "center" },
              justifyContent: { xs: "center" },
              textAlign:{xs:"left",sm:"center"}
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "26px", md: "32px" },
                  fontWeight: "900",
                
                  color: "#243771",
                  textAlign: { xs: "left", xl: "left" },
                  lineHeight: "1.1",
                  margin: "0px 0px 30px",
                }}
              >
                FAQs About Personal Loan For Debt Consolidation
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              borderRadius: "10px",
            }}
          >
            <Box>
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
                    1. Is balance transfer better than debt consolidation?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ ...AccPara }}>
                    Both of these debt management facilities have their own pros
                    and cons. You must take into account all these factors while
                    choosing the suitable option. Your primary motive must be to
                    select a facility that will reduce your debt load while
                    helping you save a considerable sum of money.
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
                    2. What should I avoid while consolidating debts?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ ...AccPara }}>
                    While consolidating your existing debts, you should try to
                    avoid the following types of credits:
                    <List>
                        <ListItem>
                          <FiberManualRecord sx={{fontSize:"10px",marginRight:"10px"}}/>
                          <ListItemText primary="Loans with a high interest rate"/>
                        </ListItem>
                        <ListItem>
                          <FiberManualRecord sx={{fontSize:"10px",marginRight:"10px"}}/>
                          <ListItemText primary="Loans with high additional charges"/>
                        </ListItem>
                        <ListItem>
                          <FiberManualRecord sx={{fontSize:"10px",marginRight:"10px"}}/>
                          <ListItemText primary="Home equity loans"/>
                        </ListItem>
                        <ListItem>
                          <FiberManualRecord sx={{fontSize:"10px",marginRight:"10px"}}/>
                          <ListItemText primary="401(k) loans"/>
                        </ListItem>
                      </List>
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
                    3. Can I select tenure for repaying a personal loan for debt
                    consolidation?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ ...AccPara }}>
                    Yes. With Credmudra, you can select your loan repayment
                    tenure, i.e., from three months to two years. The
                    flexibility of repayment is a primary reason that makes us
                    one of the best short-term loan aggregators in the market.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQS;
