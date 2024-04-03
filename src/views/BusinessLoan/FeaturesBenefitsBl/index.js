import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
 
  Hidden,
 
  Typography,
} from "@mui/material";
import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";


const FeaturesBenefitsBl = ({ scrollToTop, GetMatchedButton, Link }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeadingColor = {
    color: "#243771",
    fontSize: { sm: "1rem", md: "1.5rem" },
    fontWeight: "bold",
  };
  const CheckCircle = {
    marginTop: "6px",
    color: "#000",
    marginRight: "10px",
  };
  return (
    <>
      <Box>
        <Container maxWidth={"xl"} sx={{ padding: "30px 0px 0px" }}>
          <Grid container sx={{ padding: { xs: "10px", md: "32px" } }}>
          
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
               <Hidden smDown>
                <Box sx={{ width: "100%", display: "flex",
                  alignItems: "center",
                  justifyContent: "center", }}>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/bl_acc2.webp"}
                    alt="Business Loan features and benefits"
                    style={{
                      width: "80%",
                      height: "100%",
                    }}
                  />
                </Box>
                </Hidden>
              </Box>
            </Grid>
         
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "center",
                  flexDirection: "column",
                  color: "white",
                  marginTop:{xs:'20px',sm:'0px'}
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
                      fontSize: { xs: "24px", sm: "32px", lg: "34px" },              
                      color: "#243771",
                      fontWeight: "900",
                      paddingBottom: "10px",
                      lineHeight:'normal'
                    }}
                  >
                    Features And Benefits Of A Business Loan
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", sm: "16px",md:'22px' },
                     
                      color: "#7D7D7D",
                      margin: "0px 0px 24px",
                      textAlign: { xs: "left", sm: "left" },
                     
                      lineHeight: "1.4",
                    }}
                  >
                    If you are planning to apply for a business loan, you must
                    know the following features and benefits of this credit
                    facility:
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
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      sx={{ padding: 0 }}
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                      <Typography sx={{ ...AccHeadingColor }}>
                        Instant Disbursal
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        The requested sum of money gets credited to your account
                        real quick once the application and documents are
                        verified successfully. If you choose Credmudra, the wait
                        time is minimal. Moreover, you can get the amount
                        credited the same day.
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
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                      sx={{ padding: 0 }}
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Collateral-free Advances
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        As unsecured loans, financial institutions do not ask
                        for any collateral while sanctioning the loan
                        application.
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
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                      sx={{ padding: 0 }}
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                      <Typography sx={{ ...AccHeadingColor }}>
                        Hassle-free Documentation
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Only a handful of documents are needed while sanctioning
                        business loan applications.
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
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                      sx={{ padding: 0 }}
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                      <Typography sx={{ ...AccHeadingColor }}>
                        Purpose-Based Loan:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
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
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5d-content"
                      id="panel5d-header"
                      sx={{ padding: 0 }}
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                      <Typography sx={{ ...AccHeadingColor }}>
                        Easy Online Application:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
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
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel6d-content"
                      id="panel6d-header"
                      sx={{ padding: 0 }}
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Flexible Repayment Period:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
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
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel7d-content"
                      id="panel7d-header"
                      sx={{ padding: 0 }}
                    >
                      <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                      <Typography sx={{ ...AccHeadingColor }}>
                        Lenient Eligibility Criteria:
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
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
                    justifyContent: { xs: "center", sm: "left" },
                    padding: "16px 0 16px",
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FeaturesBenefitsBl;
