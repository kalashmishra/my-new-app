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

const TopThreeThings = ({ scrollToTop, GetMatchedButton, Link }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeading = {
    color: "#243771",
    fontSize: { xs: "18px", sm: "16px", md: "22px" },
    fontWeight: "900",
  };
  const AccPara = {
    fontSize: { xs: "16px" },
  };

  const CheckCircle = {
    marginTop: "6px",
    marginRight: "10px",
  };
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "20px 0px 50px" }}>
        <Grid
          container
          sx={{ padding: { xs: "20px", md: "48px" } }}
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: { xs: "center", sm: "center" },
              justifyContent: "center",
            }}
          >
            <Box>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/debt_consolidation/pldc_2acc.webp"
                }
                alt="Things To Consider When Choosing Debt Consolidation loan"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
              color: "white",
            }}
          >
            <Box sx={{ width: { xl: "95%" } }}>
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "24px", md: "32px" },
                  color: "#243771",
                  fontWeight: "900",
                  lineHeight: { xs: "1.3", md: "1.1" },
                  margin: "0px 0px 18px",
                }}
              >
                Top 3 Things to Consider When Choosing a Personal Loan for Debt
                Consolidation
              </Typography>
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "16px", md: "21px" },
                  color: "#404040",
                 
                  lineHeight: "1.3",
                  margin: "0px 0px 24px",
                }}
              >
                Though a debt consolidation loan can help reduce your financial
                burden, willing applicants must always be careful with such
                financial decisions. Simple misses can negatively affect your
                finances.
              </Typography>
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "16px", md: "21px" },
                  color: "#404040",
                  fontWeight: "300",
                  lineHeight: "1.3",
                  margin: "0px 0px 24px",
                }}
              >
                Here are some pointers to take note of:
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
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                  <Typography sx={{ ...AccHeading }}>
                    Never opt for a loan without thorough market research
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ ...AccPara }}>
                    If you do not research or plan your debt consolidation loan
                    properly before applying, it can negatively affect your
                    finances. This instance can be truer if you are someone who
                    cannot manage finances properly. Therefore, to avoid such
                    complications and reap the maximum benefits of a debt
                    consolidation loan, it is best to make a repayment plan
                    before applying for credit.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                elevation={0}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                sx={{
                  backgroundColor: "transparent",
                  marginTop: "20px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                  sx={{ padding: "0" }}
                >
                  <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                  <Typography sx={{ ...AccHeading }}>
                    Always compare different credit options
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ ...AccPara }}>
                    Most people apply for a personal loan for debt consolidation
                    to save some money that they would otherwise have to spend
                    on repaying multiple other debts. However, if you do not
                    research properly and compare all the credit options, debt
                    consolidation might not serve the purpose of building your
                    savings.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                elevation={0}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                sx={{
                  backgroundColor: "transparent",
                  marginTop: "20px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                  sx={{ padding: "0" }}
                >
                  <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                  <Typography sx={{ ...AccHeading }}>
                    Know the prepayment charges for maximum savings
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ ...AccPara }}>
                    A debt consolidation loan helps you to close ongoing loans.
                    This means you may have to pay some pre-closure charges to
                    the existing lender. These fees add up the total expenses.
                    Hence, you must enquire with your existing lender about
                    these pre-closure charges and then apply for a new debt
                    consolidation loan.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "16px", md: "21px" },
                  color: "#404040",
                  fontWeight: "300",
                  lineHeight: "1.3",
                  margin: "0px 0px 24px",
                }}
              >
                Hence, you must enquire with your existing lender about these
                pre-closure charges and then apply for a new debt consolidation
                loan.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "center", sm: "flex-start" },
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

export default TopThreeThings;
