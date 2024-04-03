import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const StepByStepProcess = () => {
  const CardData = [
    {
      step: "STEP 1",
      title: "Provide Mobile Number And OTP",
      label: "enter your mobile and get otp",
      description:
        "You will first need to enter your mobile number and verify it by providing the OTP received on it.",
      image: process.env.PUBLIC_URL + "/assets/images/plf_1.webp",
      align: "right",
    },
    {
      step: "STEP 2",
      title: "State Your Loan Requirements",
      label: "Mention the loan amount",
      description:
        "Mention the loan amount you will need along with a convenient repayment period. Enter your PAN card and email ID.",
      image: process.env.PUBLIC_URL + "/assets/images/plf_2.webp",
      align: "center",
    },
    {
      step: "STEP 3",
      title: "Declare Employment Details",
      label: "give employement detail",
      description:
        "Select the type of your employment and enter other relevant information regarding your profession.",
      image: process.env.PUBLIC_URL + "/assets/images/plf_3.webp",
      align: "left",
    },
    {
      step: "STEP 4",
      title: "Enter Personal, Income,Residential And Other Details",
      label: "Enter Personal, Income, Residential And Other Details",
      description:
        "Give necessary inputs like gross annual income, savings account details, name, date of birth, present address, etc. Disclose your present debt obligations.",
      image: process.env.PUBLIC_URL + "/assets/images/plf_4.webp",
      align: "center",
    },
    {
      step: "STEP 5",
      title: "Submit Loan Request",
      label: "Submit loan request",
      description:
        "Click the ‘Submit’ button after putting the tick mark on the declaration box.",
      image: process.env.PUBLIC_URL + "/assets/images/plf_5.webp",
      align: "center",
    },
  ];

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "0px 0px 0px" }}>
        <Grid container sx={{ padding: { xs: "0px 20px", sm: "48px" } }}>
          <Grid item sm={12}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  lineHeight: { xs: "1.1", md: "1.5" },
                  marginBottom: "25px",
                  fontSize: { xs: "24px", sm: "30px", md: "40px" },
                  color: "#243771",
                  fontWeight: "900",
                  textAlign: "center",
                  margin: { sm: "0px 0px 28px", md: "0px 100px 28px" },
                }}
              >
                Step-By-Step Process To Apply For Debt Consolidation Loan
              </Typography>
              <Typography
                sx={{
                  lineHeight: { xs: "1.1", sm: "1.5" },
                  marginBottom: "25px",
                  fontSize: { xs: "16px", sm: "20px" },
                  color: "#243771",
                  margin: { sm: "0px 0px 100px", md: "0px 40px 100px" },
                }}
              >
                Here is the stepwise process you need to follow to apply for a
                Debt Consolidation loan online through Credmudra:
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center" }}
          spacing={2}
        >
          {CardData.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <Card
                  elevation={0}
                  sx={{
                    maxWidth: "50%",
                    minWidth: "300px",
                    minHeight: "360px",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  <CardActionArea>
                    <Box>
                      <img
                        alt={step.label}
                        src={step.image}
                        style={{
                          marginBottom: "45px",
                        }}
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        sx={{
                          opacity: ".5",
                          lineHeight: ".1",
                          marginTop: "5px",
                          zIndex: "2",
                          fontSize: "52px",
                          color: "#e4e4e4",
                          fontWeight: "900",
                        }}
                      >
                        {step.step}
                      </Typography>
                      <Typography
                        sx={{
                          lineHeight: { xs: "1.1", sm: "1.5" },
                          marginBottom: "25px",
                          fontSize: { xs: "21px" },
                          color: "#243771",
                          fontWeight: "900",
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        sx={{
                          lineHeight: "1.5",
                          marginBottom: "25px",
                          fontSize: { xs: "16px" },
                          color: "#404040",
                        }}
                      >
                        {step.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StepByStepProcess;
