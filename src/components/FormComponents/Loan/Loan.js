import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Typography,
  TextField,
  CssBaseline,
  Grid,
  InputBase,
  Box,
  FormHelperText,
  Autocomplete,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setBankListData,
  setBusinessListData,
  setBusinessOwnedListData,
  setCompanyAddressData,
  setCompanyTypeListData,
  setFormData,
  setGenderTypesListData,
  setIndustryTypesListData,
  setIsLoading,
  setLoanReasonListData,
  setPersonalAddressData,
  setQualificationsListData,
  setResidenceTypesListData,
} from "../../../redux/actions";
import {
  selectCompanyTypeList,
  selectGetBankList,
  selectGetFormData,
  selectIndustryTypeIdList,
  selectLoanReasonList,
  selectLoanType,
} from "../../../redux/selectors";
import {
  dropOff,
  getPrePopulateFormData,
} from "../../../constant/services/credMudra/users";
import { getPincodesAddress } from "../../../constant/services/credMudra/location";
import {
  getBanks,
  getBusinessOwned,
  getBusinessTypes,
  getCompanyTypes,
  getGenderTypes,
  getIndustryTypes,
  getLoanReasons,
  getQualifications,
  getResidenceTypes,
} from "../../../constant/services/credMudra/core";
import { loanSchema } from "../../../utils/validateSchema";
import NavButton from "../../../layouts/NavButton";
import { useFormik } from "formik";
import numberToWords from "number-to-words";
import { LoanErrorFocus } from "../../../utils/errorFocus";
import { getInitialLoanValues } from "../../../utils/initialValues";
import { scrollToTop } from "../../../utils/commonFunctions";
const Loan = React.memo(() => {
  const formData = useSelector(selectGetFormData);
  const loanType = useSelector(selectLoanType);
  const IndustryTypeListData = useSelector(selectIndustryTypeIdList);
  const CompanyTypeListData = useSelector(selectCompanyTypeList);
  const BankListData = useSelector(selectGetBankList);
  const LoanReasonListData = useSelector(selectLoanReasonList);
  const [amountInWords, setAmountInWords] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setIsLoading(true));
    getLoanReasonList();
    dispatch(setIsLoading(false));
  }, []);
  const navigateToEmployeType = useCallback(() => {
    if (loanType !== "businessLoan") {
      navigate("/get-registered/employe-type");
    } else {
      dispatch(
        setFormData({
          employmentType: "Self Employed",
        })
      );
      navigate("/get-registered/selfemployed");
    }
  }, [dispatch, loanType, navigate]);

  const prePopulateFormData = useCallback(
    async (panCard) => {
      dispatch(
        setFormData({
          ...formData,
          finance: {
            panCard: panCard,
          },
        })
      );
      const data = {
        panCard: panCard,
      };
      const res = await getPrePopulateFormData(data);
      if (res?.data?.status?.code === 200) {
        const prePopulateData = {
          ...formData,
          termsAndCondition: res?.data?.data.termsAndCondition,
          employmentType: res?.data?.data.employmentType,
          panCard: res?.data?.data.panCard,
          employmentDetails: {
            ...res?.data?.data.employmentDetails,
          },
          personalInfo: {
            ...formData.personalInfo,
            firstName: res?.data?.data.personalInfo.firstName,
            lastName: res?.data?.data.personalInfo.lastName,
            genderId: res?.data?.data.personalInfo.genderId,
            dateOfBirth: res?.data?.data.personalInfo.dateOfBirth,
            qualificationId: res?.data?.data.personalInfo.qualificationId,
            maritalStatus: res?.data?.data.personalInfo.maritalStatus,
          },
          finance: {
            panCard: res?.data?.data.finance.panCard,
          },
          address: {
            ...res?.data?.data.address,
          },
          others: {
            totalEmiPaidMonthly: res.data.data.others.totalEmiPaidMonthly,
            interestedToGetCreditCard:
              res.data.data.others.interestedToGetCreditCard,
          },
        };
        dispatch(setFormData(prePopulateData));
        const personalPinCode = {
          pinCode: res?.data?.data?.employmentDetails?.pinCode,
        };
        const personalAddressDetails = await getPincodesAddress(
          personalPinCode
        );
        dispatch(
          setPersonalAddressData({
            city: personalAddressDetails?.data?.data?.city?.name,
            state: personalAddressDetails?.data?.data?.state?.name,
            country: personalAddressDetails?.data?.data?.country?.name,
          })
        );
        const companyPinCode = {
          pinCode: res?.data?.data?.employmentDetails?.pinCode,
        };
        const companyAddressDetails = await getPincodesAddress(companyPinCode);
        dispatch(
          setCompanyAddressData({
            city: companyAddressDetails?.data?.data?.city?.name,
            state: companyAddressDetails?.data?.data?.state?.name,
            country: companyAddressDetails?.data?.data?.country?.name,
          })
        );
        getCompanyTypesList();
        getIndustryTypesList();
        getAllBankList();
        getBusinessOwnedList();
        getBusinessList();
        getGenderTypesList();
        getQualificationsList();
        getResidenceTypeList();
        dispatch(setIsLoading(false));
      } else {
        const prePopulateData = {
          termsAndCondition: true,
          panCard: panCard,

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
            ...formData.personalInfo,
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

          others: {
            totalEmiPaidMonthly: 0,
            interestedToGetCreditCard: true,
          },
        };
        dispatch(setFormData(prePopulateData));
        dispatch(
          setCompanyAddressData({
            city: "",
            state: "",
            country: "",
          })
        );
        dispatch(
          setPersonalAddressData({
            city: "",
            state: "",
            country: "",
          })
        );
      }
    },
    [dispatch, formData]
  );

  const getIndustryTypesList = useCallback(async () => {
    if (IndustryTypeListData.length === 0) {
      const res = await getIndustryTypes();
      dispatch(setIndustryTypesListData(res));
    }
  }, [IndustryTypeListData, dispatch]);
  const getAllBankList = useCallback(async () => {
    if (BankListData.length === 0) {
      const res = await getBanks();
      dispatch(setBankListData(res));
    }
  }, [BankListData, dispatch]);
  const getCompanyTypesList = useCallback(async () => {
    if (CompanyTypeListData.length === 0) {
      const res = await getCompanyTypes();
      dispatch(setCompanyTypeListData(res));
    }
  }, [CompanyTypeListData, dispatch]);
  const getBusinessOwnedList = useCallback(async () => {
    if (CompanyTypeListData.length === 0) {
      const res = await getBusinessOwned();
      dispatch(setBusinessOwnedListData(res));
    }
  }, []);
  const getBusinessList = useCallback(async () => {
    if (CompanyTypeListData.length === 0) {
      const res = await getBusinessTypes();
      dispatch(setBusinessListData(res));
    }
  }, []);
  const getGenderTypesList = useCallback(async () => {
    if (CompanyTypeListData.length === 0) {
      const res = await getGenderTypes();
      dispatch(setGenderTypesListData(res));
    }
  }, []);
  const getQualificationsList = useCallback(async () => {
    if (CompanyTypeListData.length === 0) {
      const res = await getQualifications();
      dispatch(setQualificationsListData(res));
    }
  }, []);
  const getResidenceTypeList = useCallback(async () => {
    if (CompanyTypeListData.length === 0) {
      const res = await getResidenceTypes();
      dispatch(setResidenceTypesListData(res));
    }
  }, []);
  const getLoanReasonList = useCallback(async () => {
    if (LoanReasonListData.length === 0) {
      const res = await getLoanReasons();
      dispatch(setLoanReasonListData(res));
    }
  }, [LoanReasonListData, dispatch]);
  const dropOffRequest = useCallback(async () => {
    const requestData = {
      leadId: sessionStorage.getItem("leadId"),
      stage: "loan details",
      loan: {
        reason: formData?.loan?.reason,
        amount: formData?.loan?.amount,
        otherReason: formData?.loan?.otherReason,
        tenure: formData?.loan?.tenure,
      },
      panCard: formData?.panCard,
      emailId: formData?.personalInfo?.emailId,
      utm: {
        id: formData?.utm?.id,
        url: formData?.utm?.url,
        source: formData?.utm?.source,
        medium: formData?.utm?.medium,
        campaign: formData?.utm?.campaign,
        term: formData?.utm?.term,
        content: formData?.utm?.content,
        clickId: formData?.utm?.clickId,
      },
      extras: {
        browser: formData?.extras?.browser,
        operatingSystem: formData?.extras?.operatingSystem,
        ipAddress: formData?.extras?.ipAddress,
        timestamp: formData?.extras?.timestamp,
        userAgent: formData?.extras?.userAgent,
        location: formData?.extras?.location,
      },
    };
    await dropOff(requestData);
  }, [formData]);

  const handleSubmit = useCallback(async () => {
    dispatch(
      setFormData({
        leadId: sessionStorage.getItem("leadId"),
      })
    );
    dispatch(setIsLoading(true));
    await dropOffRequest();
    dispatch(setIsLoading(false));
    scrollToTop();
    navigateToEmployeType();
  }, [dispatch, dropOffRequest, navigateToEmployeType]);

  const formik = useFormik({
    initialValues: useMemo(() => getInitialLoanValues(formData), []),
    validationSchema: useMemo(() => loanSchema, []),
    onSubmit: handleSubmit,
  });

  return (
    <>
      <CssBaseline />
      <form onSubmit={formik.handleSubmit}>
        <Grid container rowGap={6}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "28px", md: "35px", lg: "36px", xl: "40px" },
              fontWeight: "bold",
              color: "#243771",
            }}
          >
            Loan Details
          </Typography>
          <Grid container rowGap={2}>
            <Grid container rowGap={1}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "16px" }, color: "#243771" }}
                >
                  Enter the Loan Amount:
                </Typography>
                <Box
                  sx={{
                    width: "90px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "2px solid #c6e5cb",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#5fb76d",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    ₹
                  </Typography>
                  <InputBase
                    id="amount"
                    name="amount"
                    sx={{ width: "80px", ml: 1, padding: 0 }}
                    value={formData?.loan?.amount}
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      if (/^\d*$/.test(e.target.value)) {
                        if (e.target.value >= 0 && e.target.value <= 1500000) {
                          dispatch(
                            setFormData({
                              loan: {
                                ...formData.loan,
                                amount: e.target.value,
                              },
                            })
                          );
                          const number = parseFloat(e.target.value);
                          if (!isNaN(number) && isFinite(number)) {
                            setAmountInWords(numberToWords.toWords(number));
                          } else {
                            setAmountInWords("");
                          }

                          formik.handleChange(e);
                        }
                      }
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ width: "100%" }}>
                <input
                  style={{
                    accentColor: "#08911f",

                    border: "none",
                    width: "100%",
                    borderRadius: "3px",
                    padding: "3px",
                  }}
                  id="amount"
                  type="range"
                  name="amount"
                  className="form-control-range slider"
                  value={formData?.loan?.amount}
                  onBlur={formik.handleBlur}
                  onChange={(e, newValue) => {
                    if (/^\d*$/.test(e.target.value)) {
                      dispatch(
                        setFormData({
                          loan: {
                            ...formData.loan,
                            amount: e.target.value,
                          },
                        })
                      );
                      const number = parseFloat(e.target.value);
                      if (!isNaN(number) && isFinite(number)) {
                        setAmountInWords(numberToWords.toWords(number));
                      } else {
                        setAmountInWords("");
                      }
                      formik.handleChange(e);
                    }
                  }}
                  min="1000"
                  max="1500000"
                  step="1000"
                />
              </Grid>
              <Grid
                container
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography sx={{ fontSize: "13px", color: "" }}>
                  1000
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "" }}>
                  1500000
                </Typography>
              </Grid>
              {formik.touched.amount && formik.errors.amount && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.amount}
                </FormHelperText>
              )}
            </Grid>
            {amountInWords ? (
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                {amountInWords?.charAt(0).toUpperCase() +
                  amountInWords?.slice(1)}{" "}
                Only
              </Typography>
            ) : (
              ""
            )}
            <Grid container rowGap={1}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "16px" }, color: "#243771" }}
                >
                  Enter the Loan Tenure:
                </Typography>
                <Box
                  sx={{
                    width: "90px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "2px solid #c6e5cb",
                  }}
                >
                  <InputBase
                    id="tenure"
                    name="tenure"
                    sx={{ ml: 1, padding: 0 }}
                    value={formData?.loan?.tenure}
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      if (
                        !isNaN(e.target.value) &&
                        !/\s/.test(e.target.value)
                      ) {
                        if (e.target.value >= 0 && e.target.value <= 60) {
                          dispatch(
                            setFormData({
                              loan: {
                                ...formData.loan,
                                tenure: e.target.value,
                              },
                            })
                          );
                          formik.handleChange(e);
                        }
                      }
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Month
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ width: "100%" }}>
                <input
                  style={{
                    accentColor: "#08911f",

                    border: "none",
                    width: "100%",
                    borderRadius: "3px",
                    padding: "3px",
                  }}
                  id="tenure"
                  name="tenure"
                  type="range"
                  className="form-control-range slider"
                  value={formData?.loan?.tenure}
                  onBlur={formik.handleBlur}
                  onChange={(event, newValue) => {
                    dispatch(
                      setFormData({
                        loan: {
                          ...formData.loan,
                          tenure: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }}
                  min="1"
                  max="60"
                  step="1"
                />
              </Grid>
              <Grid
                container
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography sx={{ fontSize: "13px", color: "" }}>
                  1 Month
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "" }}>
                  60 Months
                </Typography>
              </Grid>
              {formik.touched.tenure && formik.errors.tenure && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.tenure}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Reason For Loan*
              </Typography>
              <Autocomplete
                id="reason"
                name="reason"
                fullWidth
                disablePortal
                options={LoanReasonListData ? LoanReasonListData : ""}
                value={
                  LoanReasonListData?.find(
                    (option) => formData?.loan?.reason === option.label
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      loan: {
                        ...formData.loan,
                        reason: newValue?.label,
                      },
                    })
                  );

                  formik.setFieldValue("reason", newValue?.label);
                }}
                onBlur={formik.handleBlur}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select Loan Reason" />
                )}
              />
              {formik.touched?.reason && formik.errors?.reason && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.reason}
                </FormHelperText>
              )}
            </Grid>
            {formData?.loan?.reason === "Others" && (
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                  Other Reason For Loan*
                </Typography>
                <TextField
                  id="otherReason"
                  name="otherReason"
                  variant="outlined"
                  fullWidth
                  placeholder="Loan Reason"
                  value={formData?.loan?.otherReason}
                  onBlur={formik.handleBlur}
                  onChange={(e) => {
                    if (/^(?![ ]).*$/.test(e.target.value)) {
                      dispatch(
                        setFormData({
                          loan: {
                            ...formData.loan,
                            otherReason: e.target.value,
                          },
                        })
                      );
                    }
                    formik.handleChange(e);
                  }}
                />

                {formik?.touched?.otherReason &&
                  formik?.errors?.otherReason && (
                    <FormHelperText
                      sx={{
                        margin: 0,
                        color: "red",
                        fontSize: "14px",
                        ml: 1,
                      }}
                    >
                      {formik?.errors?.otherReason}
                    </FormHelperText>
                  )}
              </Grid>
            )}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                PAN Card Number *
              </Typography>
              <TextField
                id="panCard"
                name="panCard"
                variant="outlined"
                fullWidth
                inputProps={{ maxLength: 10 }}
                placeholder="PAN NUMBER"
                value={formData?.panCard}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  const inputValue = e.target.value.toUpperCase();
                  if (e.target.value.length <= 10) {
                    dispatch(
                      setFormData({
                        ...formData,
                        panCard: inputValue,
                      })
                    );
                  }
                  if (e.target.value?.length === 10) {
                    prePopulateFormData(inputValue);
                  }
                  formik.handleChange(e);
                }}
              />

              {formik.touched.panCard && formik.errors?.panCard && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.panCard}
                </FormHelperText>
              )}
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Email Address *
              </Typography>
              <TextField
                id="emailId"
                variant="outlined"
                name="emailId"
                fullWidth
                placeholder="abc@abc.com"
                value={formData?.personalInfo?.emailId}
                onBlur={formik.handleBlur}
                onChange={(event, newValue) => {
                  if (/^(?![ ]).*$/.test(event.target.value)) {
                    dispatch(
                      setFormData({
                        personalInfo: {
                          ...formData.personalInfo,
                          emailId: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
              />

              {formik.touched.emailId && formik.errors?.emailId && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors?.emailId}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          <NavButton ErrorFocus={() => LoanErrorFocus(formik)} />
        </Grid>
      </form>
    </>
  );
});

export default Loan;
