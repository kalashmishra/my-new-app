import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../getRegistered/index.css";
import { useSelector } from "react-redux";
import {
  selectGetFormData,
  selectIsLoading,
  selectLoanType,
} from "../../redux/selectors";
import Loader from "../../layouts/Loader/Index";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Helmet } from "react-helmet";
import headings from "../../ssr/db/headings.json";
import { scrollToTop } from "../../utils/commonFunctions";
import { FiberManualRecord } from "@mui/icons-material";

const GetRegistered = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loanType = useSelector(selectLoanType);
  const formData = useSelector(selectGetFormData);
  const hideOnSm = useMediaQuery("(max-width:600px)");
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    document.body.classList.add(props?.classname);
    return () => {
      document.body.classList.remove(props?.classname);
    };
  });
  useEffect(() => {
    const handleUnload = (event) => {
      const confirmationMessage =
        "Are you sure you want to leave? Your changes may not be saved.";
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    };
    const handleLoad = () => {
      const a = localStorage.getItem("loanType");
      if (a === "businessLoan") {
        scrollToTop();
        navigate("/business-loan");
      } else {
        scrollToTop();
        navigate("/get-registered/user-number");
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "8px",
  };
  const ListStyling = {
    padding: "0px",
    fontSize: { xs: "16px", sm: "12px" },
    margin: { xs: "0px 0px 5px" },
    fontFamily: "Inter,sans-serif",
    color: "#404040",
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Helmet>{headings.getRegister.title}</Helmet>
      <Container maxWidth={"xl"} sx={{ padding: { md: "0 7%" } }}>
        <Grid
          Container
          sx={{
            paddingTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
            },
          }}
        >
          <Grid
            item
            md={12}
            xs={12}
            lg={6}
            sx={{
              width: "100%",
            }}
          >
            <Box>
              <Container sx={{ position: "relative" }}>
                <Box
                  sx={{
                    minHeight: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "50px",
                    paddingRight: "70px",
                    [theme.breakpoints.down("lg")]: {
                      padding: "0",
                    },
                  }}
                >
                  {isLoading === true ? <Loader /> : <Outlet />}
                </Box>

                <br />
              </Container>
            </Box>
         
            {loanType === "businessLoan" ||
            formData?.employmentType === "Self Employed" ? (
              <Box
                sx={{
                  padding: "20px 11% 50px",
                  [theme.breakpoints.down("md")]: {
                    padding: "0",
                  },
                }}
              >
                {" "}
                <Container sx={{ display: "block" }}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#243771",
                      }}
                    >
                      Features of Business loan:
                    </Typography>
                    <List>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Instant Disbursal{" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Collateral-free Advances{" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Hassle-free Documentation{" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Convenient Repayment Facility{" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          No End-use Restriction Attached{" "}
                        </Typography>
                      </ListItem>
                    </List>

                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#243771",
                      }}
                    >
                      Eligibility Criteria For A Business Loan:
                    </Typography>
                    <List>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Age: 21 to 65 years old
                        </Typography>
                      </ListItem>

                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Employment type: Self-employed
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Business tenure: At least 1 year or more
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Minimum yearly turnover: Vary across lenders
                        </Typography>
                      </ListItem>

                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Credit score: 750 or more
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Business owners, individuals, entrepreneurs, MSMEs,
                          startups and self-employed professionals, such as CS,
                          CAs, architects and doctors
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Public and private limited companies, partnership
                          firms, sole proprietorships, LLPs
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Large enterprises dealing only in trading, services
                          and manufacturing sectors
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Co-operative societies, NGOs and trusts
                        </Typography>
                      </ListItem>
                    </List>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      <span
                        style={{
                          color: "#243771",
                          fontWeight: 700,
                          marginBottom: "20px",
                          fontSize: "15px",
                        }}
                      >
                        Note:
                      </span>{" "}
                      The above-mentioned details can vary from lender to lender
                      depending on their terms and conditions.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#243771",
                      }}
                    >
                      Documents Required:
                    </Typography>
                    <List>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Passport-sized photographs{" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          KYC documents, such as Aadhaar card, PAN card, driving
                          license, passport, electricity or water bills, voter
                          ID card
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          ITR Required for more than 10 Lakh Business loan*{" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Previous 1 year's bank account statement{" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Non-collateral overdraft copy (if applicable){" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Copy of business incorporation paperwork{" "}
                        </Typography>
                      </ListItem>
                    </List>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#243771",
                      }}
                    >
                      Disclaimer:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      Credmudra functions as a loan aggregator and provides
                      services on behalf of its partners, duly authorized for
                      the purpose. The registered address is B No.08 Nirupam,
                      PH-II Nirupam state, Ahmedpur kalan Hujur, Bhopal, Madhya
                      Pradesh 46202
                    </Typography>
                  </Box>
                </Container>
              </Box>
            ) : (
              <Box
                sx={{
                  padding: "20px 11% 50px",
                  [theme.breakpoints.down("md")]: {
                    padding: "0",
                  },
                }}
              >
                <Container sx={{ display: "block" }}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#243771",
                      }}
                    >
                      Features and Benefits of Personal Loans:
                    </Typography>
                    <List>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Personal loans come with no restrictions on how the
                          funds are used.
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          The loan amount can go up to Rs. 40 lakh, or even
                          higher based on the discretion of the lenders.
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Repayment tenure ranges from a minimum of 3 months to
                          a maximum of 5 years, banks/NBFCs offering longer
                          durations.
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Minimal documentation is required to apply for a
                          personal loan.
                        </Typography>
                      </ListItem>

                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Quick disbursals ensure fast access to the funds.{" "}
                        </Typography>
                      </ListItem>

                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Individuals with excellent credit profiles may qualify
                          for pre-approved or pre-qualified personal loans,
                          which come with instant disbursal.
                        </Typography>
                      </ListItem>
                    </List>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#243771",
                      }}
                    >
                      Eligibility Criteria for Personal Loans:
                    </Typography>

                    <List>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Age: 18 - 60 years{" "}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Income: Minimum Rs 15,000/month for salaried
                          applicants
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Credit Score: Preferably 750 and above as having
                          higher credit scores increase the chances of your loan
                          approval at lower interest rates
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ ...ListStyling }}>
                        <FiberManualRecord sx={{ ...CircleIcon }} />
                        <Typography
                          sx={{
                            marginLeft: "10px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "12px",
                            color: "#404040",
                          }}
                        >
                          Eligible only for individuals receiving their salary
                          in a bank account
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#243771",
                      }}
                    >
                      APR (Annual Percentage Rate) on Personal Loans
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      Credmudra isn't a lender itself but connects borrowers
                      with different lending partners. These partners offer
                      personal loans with varying APRs, typically ranging from
                      11.29% to 35%. The actual rates may depend on the
                      borrower's financial situation and loan requirements.
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      Loan terms usually range from a few weeks to a maximum of
                      60 months (5 years), but they can vary between lenders.
                      It's important for borrowers to carefully review the loan
                      agreement provided by the lender before accepting any
                      offers. This agreement includes the final APR, fees, and
                      specific terms and conditions, ensuring borrowers
                      understand their financial obligations.
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      Assume you have availed a personal loan of ₹5,00,000 lakhs
                      @ 11.50% p.a. with a repayment tenure of 5 years. The
                      processing fee charged for this loan is 1.5% of the loan
                      amount, i.e. ₹7,500. Therefore, the APR for your personal
                      loan will be 12.16%. The EMI will be ₹10,996.
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      Principal Amount: ₹5,00,000{" "}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      Interest Charges (@11.5%): ₹1,59,778{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      Loan Processing Fees (@1.5%): ₹7,500{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      EMI per month: ₹ 10,996{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      Total Amount paid after 5 Years: ₹ 6,67,278{" "}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      *Interest rate and processing fees varies as per your
                      product depending on the lender's policy.
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      <b>Disclaimer: </b> Credmudra functions as a loan
                      aggregator and provides services on behalf of its
                      partners, duly authorized for the purpose.
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      The registered address is B No.08 Nirupam, PH-II Nirupam
                      state, Ahmedpur kalan Hujur, Bhopal, Madhya Pradesh
                      462026.
                    </Typography>
                  </Box>
                </Container>
              </Box>
            )}
          </Grid>
          {hideOnSm ? (
            ""
          ) : (
            <Grid
              item
              md={12}
              xs={12}
              lg={6}
              sx={{
                width: "100%",
              }}
            >
              <Box sx={{ position: "fixed", right: "-20px", width: "50%" }}>
                <img
                  style={{
                    borderStyle: "none",
                    height: "auto",
                    maxWidth: "100%",
                    verticalAlign: "middle",
                  }}
                  src={
                    process.env.PUBLIC_URL + "/assets/images/form-new-image.png"
                  }
                  alt="Get registered"
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default GetRegistered;
