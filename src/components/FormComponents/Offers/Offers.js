import React, { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setFormData } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { GoogleExitImpression } from "../../../constant/services/credMudra/users";
import { routeRedirection } from "../../../utils/commonFunctions";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
const Offers = React.memo((props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employTypes = sessionStorage.getItem("employmentType") || "";
  useEffect(() => {
    document.body.classList.add(props?.classname);
    return () => {
      document.body.classList.remove(props?.classname);
    };
  }, []);
  useEffect(() => {
    dispatch(
      setFormData({
        leadId: "",
        stage: "",
        contactNo: "",
        termsAndCondition: true,
        loan: {
          reason: null,
          amount: 1000,
          tenure: 1,
        },

        panCard: "",
        emailId: "",

        employmentType: "",

        employmentDetails: {
          companyTypeId: "",
          industryTypeId: "",
          companyName: "",
          designation: "",
          address: "",
          pinCode: "",
          countryId: "",
          stateId: "",
          cityId: "",
          yearsWorkingIn: "",
          businessTypeId: "",
          professionTypeId: "",
          turnover: "",
          monthlyProfit: "",
          income: "",
          salaryMode: "",
          bankId: "",
          currentAccountBankId: "",
          savingAccountBankId: "",
          businessOwnedId: "",
          gst: "",
        },
        personalInfo: {
          emailId: "",
          firstName: "",
          lastName: "",
          genderId: "",
          dateOfBirth: "",
          qualificationId: "",
          maritalStatus: "",
        },
        address: {
          addressLine1: "",
          addressLine2: "",
          pinCode: "",
          countryId: "",
          stateId: "",
          cityId: "",
          residenceTypeId: "",
          yearsLivingIn: "",
        },
        finance: {
          panCard: "",
        },
        others: {
          totalEmiPaidMonthly: 0,
          interestedToGetCreditCard: true,
        },
        utm: {
          id: "",
          url: "",
          source: "",
          medium: "",
          campaign: "",
          term: "",
          content: "",
          clickId: "",
        },
      })
    );
  }, []);
  useEffect(() => {
    googleImpression();
  }, []);
  useEffect(() => {
    localStorage.removeItem("loanType");
    window.onpopstate = () => {
      navigate("/");
    };
  }, []);
  const googleImpression = useCallback(async () => {
    const data = {
      leadId: sessionStorage.getItem("leadId"),
    };
    const res = await GoogleExitImpression(data);
  }, []);

  useEffect(() => {
    routeRedirection(navigate);
  }, []);

  const cardStyling = {
    border: "1px solid #243771",
    borderRadius: "5px",
    boxShadow: "0 3px 6px #0000001c",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all .4s ease",
    width: { xs: "100%", sm: "45%", md: "45%", lg: "40%" },
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 3px 6px #243788",
      background: " #ffeb99",
    },
  };

  const cardHeadingStyling = {
    fontSize: "18px",
    fontWeight: "900",
    fontFamily: "Inter,sans-serif",
    color: "#243771",
    lineHeight: "1.2",
  };

  const cardButtonStyling = {
    background: "#243788",
    borderRadius: "5px",
    color: "#f7d64a",
    display: "inline-block",
    fontSize: "13px",
    padding: "7px 15px",
    textDecoration: "none",
    transition: "all .4s ease",
    fontFamily: "Inter,sans-serif",
    "&:hover": {
      transition: "all .4s ease",
      background: "#243788",
      color: "#f7d64a",
      fontWeight: "700",
    },
  };
  return (
    <>
      {employTypes === "Self Employed" ? (
        <Box sx={{ padding: "40px 0" }}>
          <Container
            maxWidth={"xl"}
            sx={{ padding: { xs: "0 5%", sm: "0 9%", md: "0 7.7%" } }}
          >
            <Grid
              container
              sx={{ display: "flex" }}
              spacing={{ xs: 12, md: 4 }}
            >
              <Grid item xs={12} md={7}>
                <Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "24px", md: "28px" },
                        fontWeight: "900",        
                        color: "#243771",
                      }}
                    >
                      Congratulations
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "16px" },
                        color: "#243771",
                        marginBottom: "55px",
                      }}
                    >
                      Your application has been submitted successfully. Based on
                      your information, we recommended suitable offers for you
                      from our partners.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "20px" },
                        color: "#243771",
                        marginBottom: "15px",
                      }}
                    >
                      Sponsored Ads-
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}
                    >
                      <Card
                        sx={{
                          ...cardStyling,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{
                              ...cardHeadingStyling,
                            }}
                          >
                            Self Employed Home Loans
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                          }}
                        >
                          <Link
                            to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1=${
                              JSON.parse(Cookies.get("utms"))?.id || ""
                            }&tg2=${
                              JSON.parse(Cookies.get("utms"))?.source || ""
                            }&tg3=${
                              JSON.parse(Cookies.get("utms"))?.medium || ""
                            }&tg4=${
                              JSON.parse(Cookies.get("utms"))?.campaign || ""
                            }&tg5=${
                              JSON.parse(Cookies.get("utms"))?.term || ""
                            }&txt=Self Employed Home Loans&src=dp`}
                          >
                            <Button
                              sx={{
                                ...cardButtonStyling,
                              }}
                            >
                              Request Loan Now
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                      <Card
                        sx={{
                          ...cardStyling,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{
                              ...cardHeadingStyling,
                            }}
                          >
                            Personal Loan For Self Employed
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                          }}
                        >
                          <Link
                            to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1=${
                              JSON.parse(Cookies.get("utms"))?.id || ""
                            }&tg2=${
                              JSON.parse(Cookies.get("utms"))?.source || ""
                            }&tg3=${
                              JSON.parse(Cookies.get("utms"))?.medium || ""
                            }&tg4=${
                              JSON.parse(Cookies.get("utms"))?.campaign || ""
                            }&tg5=${
                              JSON.parse(Cookies.get("utms"))?.term || ""
                            }&txt=Personal Loan For Self Employed&src=dp`}
                          >
                            <Button
                              sx={{
                                ...cardButtonStyling,
                              }}
                            >
                              Request Loan Now
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                      <Card
                        sx={{
                          ...cardStyling,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{
                              ...cardHeadingStyling,
                            }}
                          >
                            Funding for Small Businesses
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                          }}
                        >
                          <Link
                            to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1=${
                              JSON.parse(Cookies.get("utms"))?.id || ""
                            }&tg2=${
                              JSON.parse(Cookies.get("utms"))?.source || ""
                            }&tg3=${
                              JSON.parse(Cookies.get("utms"))?.medium || ""
                            }&tg4=${
                              JSON.parse(Cookies.get("utms"))?.campaign || ""
                            }&tg5=${
                              JSON.parse(Cookies.get("utms"))?.term || ""
                            }&txt=Funding for Small Businesses&src=dp`}
                          >
                            <Button
                              sx={{
                                ...cardButtonStyling,
                              }}
                            >
                              Request Loan Now
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                      <Card
                        sx={{
                          ...cardStyling,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{
                              ...cardHeadingStyling,
                            }}
                          >
                            Starting Small Business Ideas
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                          }}
                        >
                          <Link
                            to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1=${
                              JSON.parse(Cookies.get("utms"))?.id || ""
                            }&tg2=${
                              JSON.parse(Cookies.get("utms"))?.source || ""
                            }&tg3=${
                              JSON.parse(Cookies.get("utms"))?.medium || ""
                            }&tg4=${
                              JSON.parse(Cookies.get("utms"))?.campaign || ""
                            }&tg5=${
                              JSON.parse(Cookies.get("utms"))?.term || ""
                            }&txt=Starting Small Business Ideas&src=dp`}
                          >
                            <Button
                              sx={{
                                ...cardButtonStyling,
                              }}
                            >
                              Request Loan Now
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                      <Card
                        sx={{
                          ...cardStyling,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{
                              ...cardHeadingStyling,
                            }}
                          >
                            Loans for Self Employed with Bad Credit
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                          }}
                        >
                          <Link
                            to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1=${
                              JSON.parse(Cookies.get("utms"))?.id || ""
                            }&tg2=${
                              JSON.parse(Cookies.get("utms"))?.source || ""
                            }&tg3=${
                              JSON.parse(Cookies.get("utms"))?.medium || ""
                            }&tg4=${
                              JSON.parse(Cookies.get("utms"))?.campaign || ""
                            }&tg5=${
                              JSON.parse(Cookies.get("utms"))?.term || ""
                            }&txt=Loans for Self Employed with Bad Credit&src=dp`}
                          >
                            <Button
                              sx={{
                                ...cardButtonStyling,
                              }}
                            >
                              Request Loan Now
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                      <Card
                        sx={{
                          ...cardStyling,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{
                              ...cardHeadingStyling,
                            }}
                          >
                            Loans for Small Businesses
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                          }}
                        >
                          <Link
                            to={`https://search.zaptkg.com/c/qBA5K6p01776oElY?tg1=${
                              JSON.parse(Cookies.get("utms"))?.id || ""
                            }&tg2=${
                              JSON.parse(Cookies.get("utms"))?.source || ""
                            }&tg3=${
                              JSON.parse(Cookies.get("utms"))?.medium || ""
                            }tg4=${
                              JSON.parse(Cookies.get("utms"))?.campaign || ""
                            }tg5=${
                              JSON.parse(Cookies.get("utms"))?.term || ""
                            }&txt=Loans for Small Businesses&src=dp`}
                          >
                            <Button
                              sx={{
                                ...cardButtonStyling,
                              }}
                            >
                              Request Loan Now
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/form-new-image.png"
                    }
                    alt="form-bnr"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ) : (
        <Box sx={{ padding: "40px 0" }}>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/wave.svg"}
            alt="wave"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "50%",
              zIndex: "-1",
            }}
          />
          <Container
            maxWidth={"xl"}
            sx={{ padding: { xs: "0 5%", sm: "0 9%", md: "0 7.7%" } }}
          >
            <Grid
              container
              sx={{ display: "flex" }}
              spacing={{ xs: 12, md: 4 }}
            >
              <Grid item xs={12} md={7}>
                <Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "24px", md: "28px" },
                        fontWeight: "900",
                        fontFamily: "Inter,sans-serif",
                        color: "#243771",
                      }}
                    >
                      Congratulations
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "16px" },
                        fontWeight: "lighter",
                        fontFamily: "Inter,sans-serif",
                        color: "#243771",
                        marginBottom: "55px",
                      }}
                    >
                      Your application has been submitted successfully. Based on
                      your information, we recommended suitable offers for you
                      from our partners.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "20px" },
                        fontWeight: "lighter",
                        fontFamily: "Inter,sans-serif",
                        color: "#243771",
                        marginBottom: "15px",
                      }}
                    >
                      Sponsored Ads-
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}
                    >
                      <Card
                        sx={{
                          ...cardStyling,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{
                              ...cardHeadingStyling,
                            }}
                          >
                            Get Personal Loan For Self Employed
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                          }}
                        >
                          <Link
                            to={`https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=${
                              JSON.parse(Cookies.get("utms"))?.id || ""
                            }&tg2=${
                              JSON.parse(Cookies.get("utms"))?.source || ""
                            }&tg3=${
                              JSON.parse(Cookies.get("utms"))?.medium || ""
                            }&tg4=${
                              JSON.parse(Cookies.get("utms"))?.campaign || ""
                            }&tg5=${
                              JSON.parse(Cookies.get("utms"))?.term || ""
                            }&txt=Get Personal Loan For Self Employed&src=dp`}
                          >
                            <Button
                              sx={{
                                ...cardButtonStyling,
                              }}
                            >
                              Request Loan Now
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                      <Card
                        sx={{
                          ...cardStyling,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{
                              ...cardHeadingStyling,
                            }}
                          >
                            Get Personal Loan For Bad Credit
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                          }}
                        >
                          <Link
                            to={`https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=${
                              JSON.parse(Cookies.get("utms"))?.id || ""
                            }&tg2=${
                              JSON.parse(Cookies.get("utms"))?.source || ""
                            }&tg3=${
                              JSON.parse(Cookies.get("utms"))?.medium || ""
                            }&tg4=${
                              JSON.parse(Cookies.get("utms"))?.campaign || ""
                            }&tg5=${
                              JSON.parse(Cookies.get("utms"))?.term || ""
                            }&txt=Get Personal Loan For Bad Credit&src=dp`}
                          >
                            <Button
                              sx={{
                                ...cardButtonStyling,
                              }}
                            >
                              Request Loan Now
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                      <Card
                        sx={{
                          ...cardStyling,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{
                              ...cardHeadingStyling,
                            }}
                          >
                            Get Personal Loan For Housewife
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                          }}
                        >
                          <Link
                            to={`https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=${
                              JSON.parse(Cookies.get("utms"))?.id || ""
                            }&tg2=${
                              JSON.parse(Cookies.get("utms"))?.source || ""
                            }&tg3=${
                              JSON.parse(Cookies.get("utms"))?.medium || ""
                            }&tg4=${
                              JSON.parse(Cookies.get("utms"))?.campaign || ""
                            }&tg5=${
                              JSON.parse(Cookies.get("utms"))?.term || ""
                            }&txt=Get Personal Loan For Housewife&src=dp`}
                          >
                            <Button
                              sx={{
                                ...cardButtonStyling,
                              }}
                            >
                              Request Loan Now
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                      <Card
                        sx={{
                          ...cardStyling,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{
                              ...cardHeadingStyling,
                            }}
                          >
                            Get Personal Loan For Students
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                          }}
                        >
                          <Link
                            to={`https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=${
                              JSON.parse(Cookies.get("utms"))?.id || ""
                            }&tg2=${
                              JSON.parse(Cookies.get("utms"))?.source || ""
                            }&tg3=${
                              JSON.parse(Cookies.get("utms"))?.medium || ""
                            }&tg4=${
                              JSON.parse(Cookies.get("utms"))?.campaign || ""
                            }&tg5=${
                              JSON.parse(Cookies.get("utms"))?.term || ""
                            }&txt=Get Personal Loan For Students&src=dp`}
                          >
                            <Button
                              sx={{
                                ...cardButtonStyling,
                              }}
                            >
                              Request Loan Now
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                      <Card
                        sx={{
                          ...cardStyling,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{
                              ...cardHeadingStyling,
                            }}
                          >
                            Get Personal Loan For Doctors
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                          }}
                        >
                          <Link
                            to={`https://search.zaptkg.com/c/PJmAeN7B1L56yLjx?tg1=${
                              JSON.parse(Cookies.get("utms"))?.id || ""
                            }&tg2=${
                              JSON.parse(Cookies.get("utms"))?.source || ""
                            }&tg3=${
                              JSON.parse(Cookies.get("utms"))?.medium || ""
                            }&tg4=${
                              JSON.parse(Cookies.get("utms"))?.campaign || ""
                            }&tg5=${
                              JSON.parse(Cookies.get("utms"))?.term || ""
                            }&txt=Get Personal Loan For Doctors&src=dp`}
                          >
                            <Button
                              sx={{
                                ...cardButtonStyling,
                              }}
                            >
                              Request Loan Now
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/form-new-image.png"
                    }
                    alt="form-bnr"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
});
export default Offers;
