import * as React from "react";
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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ChooseCredmudraForBl = ({ scrollToTop, GetMatchedButton, Link }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeading = {
    color: "#243771",
    fontSize: { xs: "18px", md: "22px" },
    fontWeight: "900",
  };
  const AccPara = {
    color: "#222",
    fontSize: { xs: "16px" },
  };

  const CheckCircle = {
    color: "black",
    marginRight: "10px",
  };
  return (
    <>
      <Container maxWidth={"xl"} sx={{ padding: "40px 0px 0px" }}>
        <Grid
          container
          sx={{ padding: { xs: "10px", md: "32px" } }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "left",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{ 
                  width: { sm: "90%", xl: "100%" },
                }}
              >
                <Typography
                  sx={{
                    textAlign: { sm: "left" },
                    color: "#243771",
                    fontSize: { xs: "24px", sm: "32px", lg: "34px" },                
                    fontWeight: "800",
                    lineHeight: "1.1",
                    margin: "0 0 18px",
                  }}
                >
                  Choose Credmudra For The Best Business Loan
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
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    sx={{ padding: 0 }}
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                    <Typography sx={{ ...AccHeading }}>
                      Prompt Loan Disbursal
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      With us, the TAT of borrowing a business loan is reduced
                      to meet your financial requirements without wasting time.
                      We promise to sanction and disburse the loan amount the
                      same day.
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
                    sx={{ display: "flex", alignItems: "center", padding: 0 }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      Loan Match Making
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Just apply for the loan, submit necessary papers and
                      relax. We will do the rest. Finding the right lending
                      partner that matches your requirements is what we do. And
                      we do it best.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  elevation={0}
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  sx={{
                    backgroundColor: "transparent",
                  }}
                >
                  <AccordionSummary
                    sx={{ display: "flex", alignItems: "center", padding: 0 }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      Easy Application
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Our application process is user-friendly and seamless. You
                      only need to furnish your mobile phone number, required
                      details and mention your loan requirements.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  elevation={0}
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  sx={{
                    backgroundColor: "transparent",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                    sx={{ display: "flex", alignItems: "center", padding: 0 }}
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      Loan Tenure at your Discretion
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Choose the loan tenure per your convenience. Just ensure
                      the chosen EMI is within your repayment capacity.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "left" },
                    marginTop:{xs:'20px', sm:'0px'}
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
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
                marginTop:{xs:'30px', sm:'0px'}
               
              }}
            >
             
               <Box sx={{ width: "100%",  }} paddingLeft={{ md: "50px" }} >
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/bl_acc1.webp"}
                  alt="Choose Credmudra For The Best Business Loan"
                  style={{ width: "100%" }}
                />
              </Box>
            

            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ChooseCredmudraForBl;
