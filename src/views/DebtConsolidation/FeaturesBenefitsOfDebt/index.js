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

  const FeaturesBenefitsOfDebt = ({ scrollToTop, GetMatchedButton, Link }) => {
    const [expanded, setExpanded] = React.useState("panel1");
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    const AccHeading = {
      color: "#243771",
      fontSize: { xs: "18px", md: "22px" },
      fontWeight: "900",
      padding: { md: "16px 20px 16px 0px" },
    };
    const AccPara = {
      color: "#404040",
      fontSize: { xs: "16px" },
      font: "normal normal normal 16px/22px Inter",
      padding: { xs: "2px 20px 16px" }, 
    };
    const CheckCircle = {
      marginTop: { md: "20px" },
      marginRight: "10px",
     
    };
    return (
      <Box>
        <Container maxWidth={"xl"} sx={{ padding: "40px 0px 50px" }}>
          <Grid
            container
            spacing={2}
            sx={{ padding: { xs: "20px", md: "48px" } }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: { sm: "100%", xl: "100%" },
                }}
              >
                <Typography
                  sx={{
                    textAlign: { xs: "left" },
                    color: "#243771",
                    fontSize: { xs: "24px", sm: "24px", lg: "34px" },         
                    fontWeight: "900",
                    lineHeight: "1.1",
                    margin: "0 0 18px",
                  }}
                >
                  Features And Benefits Of Debt Consolidation Loan
                </Typography>
                <Typography
                  sx={{
                    textAlign: { sm: "left" },
                    color: "#404040",
                    fontSize: { xs: "16px", md: "21px" },
                  
                    
                    lineHeight: "1.5",
                    margin: "0 0 18px",
                  }}
                >
                  Here are the features and benefits that make debt consolidation
                  loans a viable option to manage finances:
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
                    sx={{ padding: "0" }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                    <Typography sx={{ ...AccHeading }}>
                      Seamless loan approval
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      If you apply for a personal loan to consolidate your ongoing
                      debts, chances are, the lender may process your loan
                      application in just a few hours. After you make an
                      application, the lending partner will review your
                      application, check your credit score and verify your
                      documents. You will receive the loan amount within the
                      shortest waiting time if your loan application passes all
                      the criteria set by the lender.
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
                   
                    sx={{ padding: "0" }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                    <Typography sx={{ ...AccHeading }}>
                      Collateral-free credit facility
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Unlike other secured credit facilities, you will not have to
                      keep your assets as collateral in order to opt for a
                      personal loan for debt consolidation purposes. You will be
                      able to get the required sum using your CIBIL score.
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
                   
                    sx={{ padding: "0" }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
  
                    <Typography sx={{ ...AccHeading }}>
                      Flexible repayment terms
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Choosing the repayment term is one of the biggest advantages
                      of opting for a personal loan for debt consolidation. You
                      can select loan repayment tenure between 3 months to 2 years
                      per your financial strength.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
  
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
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
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              sx={{
                
                display: "flex",
                alignItems: { xs: "center" },
                justifyContent: { xs: "center", sm: "flex-start", lg: "center" },
                flexDirection: "column",
                color: "white",
                padding: { xl: "30px" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  marginTop:'20px'
                }}
              >
                <img
                  src={ process.env.PUBLIC_URL +
                    "/assets/images/debt_consolidation/pldc1_acc.webp"}
                  alt="Benefits Of Debt Consolidation Loan"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default FeaturesBenefitsOfDebt;
  