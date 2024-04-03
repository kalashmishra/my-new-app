import { Box, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import CommonUserNumber from "../../../components/FormComponents/CommonUserNumber/CommonUserNumber";

const PersonalLoanForDebtConsolidation = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          padding: {
            xs: " 50px 16px",
            sm: "50px 32px",
            md: "50px 32px",
            lg: "10px 32px",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:{xs:'40px',sm:'0px'}
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              maxWidth: "540px",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Box>
              <Typography
                gutterBottom
                sx={{
                  color: "#243771",
                  fontSize: { xs: "28px", sm: "34px", md: "40px" },
                  lineHeight: "1.3",
                  fontWeight: "900",
                }}
              >
                Personal Loan For Debt Consolidation
              </Typography>
              <Typography
                sx={{
                  color: "#10162c",
                  marginBottom: "14px",
                  fontSize: { xs: "16px" },
                }}
              >
                Debts can severely affect your financial strength and prevent
                you from saving money for future goals. To bypass such
                complications, you can consider consolidating your debt using a
                personal loan.
              </Typography>
              <Typography
                sx={{
                  color: "#10162c",
                  margin: "0px 0px 24px",
                  fontSize: { xs: "16px" },
                  opacity: 0.9,
                }}
              >
                In this regard, you can consider applying for a debt
                consolidation loan on Credmudra and reduce your financial burden
                considerably.
              </Typography>
            </Box>

            <Box sx={{ width: { sm: "90%", md: "100%" } }}>
              <Typography
                sx={{
                  marginBottom: "14px",
                  color: "#404040",
                  fontSize: "16px",
                  opacity: 0.9,
                }}
              >
                Enter your 10 digit mobile number to proceed
              </Typography>
              <CommonUserNumber />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} display={{ xs: "none", sm: "flex" }}>
          <Hidden smDown>
            <Box
              sx={{
                display: { xs: "none", sm: "flex", md: "flex", xl: "flex" },
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/debt_consolidation/pldc_top_img.webp"
                }
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="loaget Personal Loan For Debt Consolidationding"
              />
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalLoanForDebtConsolidation;
