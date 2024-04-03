import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Typography,
  TextField,
  Autocomplete,
  Grid,
  CssBaseline,
  FormHelperText,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import {
  setBankListData,
  setBusinessListData,
  setBusinessOwnedListData,
  setCompanyAddressData,
  setFormData,
  setIndustryTypesListData,
  setIsLoading,
  setPinCodeError,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBusinessOwnedList,
  selectBusinessTypeList,
  selectCompanyAddress,
  selectGetBankList,
  selectGetFormData,
  selectIndustryTypeIdList,
  selectLoanType,
  selectPinCodeError,
} from "../../../redux/selectors";
import {
  getBanks,
  getBusinessOwned,
  getBusinessTypes,
  getIndustryTypes,
} from "../../../constant/services/credMudra/core";
import { dropOff } from "../../../constant/services/credMudra/users";
import { getPincodesAddress } from "../../../constant/services/credMudra/location";
import NavButton from "../../../layouts/NavButton";
import { useFormik } from "formik";
import numberToWords from "number-to-words";
import { SelfEmployedDetailsSchema } from "../../../utils/validateSchema";
import { SelfEmployedDetailsErrorFocus } from "../../../utils/errorFocus";
import { getInitialSelfEmployedValues } from "../../../utils/initialValues";
import { scrollToTop } from "../../../utils/commonFunctions";
const SelfEmployedDetails = React.memo(() => {
  const loanType = useSelector(selectLoanType);
  const formData = useSelector(selectGetFormData);
  const BusinessOwnedListData = useSelector(selectBusinessOwnedList);
  const BusinessTypeListData = useSelector(selectBusinessTypeList);
  const IndustryTypeListData = useSelector(selectIndustryTypeIdList);
  const BankListData = useSelector(selectGetBankList);
  const CompanyAddressData = useSelector(selectCompanyAddress);
  const [monthlyProfitInWords, setMonthlyProfitInWords] = useState();
  const [turnoverInWords, setTurnoverInWords] = useState();
  const PinCodeErrorData = useSelector(selectPinCodeError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Year = [
    { label: "1 Year", value: "1 Year" },
    { label: "1-2 Years", value: "1-2 Years" },
    { label: "3 Years", value: "3 Years" },
    { label: "3-5 Years", value: "3-5 Years" },
    { label: "5+ Years", value: "5+ Years" },
  ];

  const navigateToPersonalDetails = useCallback(async () => {
    navigate("/get-registered/personaldetails");
  }, [navigate]);

  const getBusinessOwnedList = useCallback(async () => {
    if (BusinessOwnedListData.length === 0) {
      const res = await getBusinessOwned();
      dispatch(setBusinessOwnedListData(res));
    }
  }, [BusinessOwnedListData, dispatch]);

  const getBusinessList = useCallback(async () => {
    if (BusinessTypeListData.length === 0) {
      const res = await getBusinessTypes();
      dispatch(setBusinessListData(res));
    }
  }, [BusinessTypeListData, dispatch]);

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

  useEffect(() => {
    dispatch(setIsLoading(true));
    getBusinessOwnedList();
    getBusinessList();
    getIndustryTypesList();
    getAllBankList();
    dispatch(setIsLoading(false));
  }, []);

  const getAddress = useCallback(
    async (event) => {
      if (
        /^\d*$/.test(event.target.value) &&
        event.target.value.length <= 6 &&
        event.target.value !== "000000"
      ) {
        dispatch(
          setPinCodeError({
            ...PinCodeErrorData,
            companyPincode: "",
          })
        );
        dispatch(
          setFormData({
            employmentDetails: {
              ...formData.employmentDetails,
              pinCode: event.target.value,
            },
          })
        );
        if (event.target.value?.length === 6) {
          dispatch(
            setPinCodeError({
              ...PinCodeErrorData,
              companyPincode: "",
            })
          );
          const data = {
            pinCode: event.target.value,
          };
          const res = await getPincodesAddress(data);
          if (res?.data?.status.code === 404) {
            dispatch(
              setPinCodeError({
                ...PinCodeErrorData,
                companyPincode: "Pin code does not exists",
              })
            );
          } else {
            dispatch(
              setPinCodeError({
                ...PinCodeErrorData,
                companyPincode: "",
              })
            );
          }
          dispatch(
            setFormData({
              employmentDetails: {
                ...formData.employmentDetails,
                pinCode: event.target.value,
                cityId: res?.data?.data?.city?.id,
                stateId: res?.data?.data?.state?.id,
                countryId: res?.data?.data?.country?.id,
              },
            })
          );
          dispatch(
            setCompanyAddressData({
              city: res?.data?.data?.city?.name,
              state: res?.data?.data?.state?.name,
              country: res?.data?.data?.country?.name,
            })
          );
        } else {
          dispatch(
            setFormData({
              employmentDetails: {
                ...formData.employmentDetails,
                pinCode: event.target.value,
                cityId: "",
                stateId: "",
                countryId: "",
              },
            })
          );
          dispatch(
            setCompanyAddressData({
              city: "",
              state: "",
              country: "",
            })
          );
        }
      }
    },
    [PinCodeErrorData, formData, dispatch]
  );

  const dropOffRequest = useCallback(async () => {
    const requestData = {
      leadId: sessionStorage.getItem("leadId"),
      stage: "employment details",
      employmentDetails: {
        companyTypeId: formData?.employmentDetails?.companyTypeId,
        industryTypeId: formData?.employmentDetails?.industryTypeId,
        companyName: formData?.employmentDetails?.companyName,
        designation: formData?.employmentDetails?.designation,
        address: formData?.employmentDetails?.address,
        pinCode: formData?.employmentDetails?.pinCode,
        countryId: formData?.employmentDetails?.countryId,
        stateId: formData?.employmentDetails?.stateId,
        cityId: formData?.employmentDetails?.cityId,
        yearsWorkingIn: formData?.employmentDetails?.yearsWorkingIn,
        businessTypeId: formData?.employmentDetails?.businessTypeId,
        professionTypeId: formData?.employmentDetails?.professionTypeId,
        turnover: formData?.employmentDetails?.turnover,
        monthlyProfit: formData?.employmentDetails?.monthlyProfit,
        income: formData?.employmentDetails?.income,
        salaryMode: formData?.employmentDetails?.salaryMode,
        bankId: formData?.employmentDetails?.bankId,
        currentAccountBankId: formData?.employmentDetails?.currentAccountBankId,
        savingAccountBankId: formData?.employmentDetails?.savingAccountBankId,
        businessOwnedId: formData?.employmentDetails?.businessOwnedId,
        gst: formData?.employmentDetails?.gst,
      },
      employmentType: formData?.employmentType,
      loan: {
        reason: formData?.loan?.reason,
        otherReason: formData?.loan?.otherReason,
        amount: formData?.loan?.amount,
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
  const handleSubmit = useCallback(() => {
    dispatch(
      setFormData({
        employmentDetails: {
          ...formData.employmentDetails,
          salaryMode: "Bank Transfer",
          income: "0",
        },
      })
    );
    if (PinCodeErrorData?.companyPincode === "") {
      dropOffRequest();
      scrollToTop();
      navigateToPersonalDetails();
    } else {
      document.getElementById("pinCode").focus();
    }
  }, [formData, PinCodeErrorData, dropOffRequest, navigateToPersonalDetails]);

  const handlePrev = useCallback(() => {
    if (loanType === "businessLoan") {
      navigate("/get-registered/loan");
    } else {
      navigate("/get-registered/employe-type");
    }
  }, [loanType, navigate]);

  const formik = useFormik({
    initialValues: useMemo(() => getInitialSelfEmployedValues(formData), []),
    validationSchema: useMemo(() => SelfEmployedDetailsSchema, []),
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
            Employment Details
          </Typography>

          <Grid container rowGap={2}>
            <Typography varient="h6" sx={{ color: "green" }}>
              Business
            </Typography>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Business Run By*{" "}
              </Typography>
              <Autocomplete
                id="businessOwnedId"
                name="businessOwnedId"
                disablePortal
                options={BusinessOwnedListData}
                value={
                  BusinessOwnedListData?.find(
                    (option) =>
                      formData?.employmentDetails?.businessOwnedId ===
                      option.value
                  )?.label
                }
                onBlur={formik.handleBlur}
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        businessOwnedId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("businessOwnedId", newValue);
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} placeholder="Please Select" />
                )}
              />
              {formik.touched?.businessOwnedId &&
                formik.errors?.businessOwnedId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.businessOwnedId}
                  </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                How many years have you been working at your current Business?*
              </Typography>
              <Autocomplete
                disablePortal
                id="yearsWorkingIn"
                name="yearsWorkingIn"
                options={Year}
                fullWidth
                onBlur={formik.handleBlur}
                value={formData?.employmentDetails?.yearsWorkingIn}
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        yearsWorkingIn: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("yearsWorkingIn", newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Please Select" />
                )}
              />
              {formik.touched?.yearsWorkingIn &&
                formik.errors?.yearsWorkingIn && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.yearsWorkingIn}
                  </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Business Type*
              </Typography>
              <Autocomplete
                disablePortal
                onBlur={formik.handleBlur}
                id="businessTypeId"
                name="businessTypeId"
                options={BusinessTypeListData ? BusinessTypeListData : ""}
                fullWidth
                value={
                  BusinessTypeListData?.find(
                    (option) =>
                      formData?.employmentDetails?.businessTypeId ===
                      option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        businessTypeId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("businessTypeId", newValue);
                }}
                renderInput={(params) => (
                  <TextField placeholder="Please Select" {...params} />
                )}
              />
              {formik.touched?.businessTypeId &&
                formik.errors?.businessTypeId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.businessTypeId}
                  </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Industry
              </Typography>
              <Autocomplete
                disablePortal
                onBlur={formik.handleBlur}
                id="industryTypeId"
                name="industryTypeId"
                options={IndustryTypeListData ? IndustryTypeListData : ""}
                fullWidth
                value={
                  IndustryTypeListData?.find(
                    (option) =>
                      formData?.employmentDetails?.industryTypeId ===
                      option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        industryTypeId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("industryTypeId", newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Please Select..." />
                )}
              />
              {formik.touched?.industryTypeId &&
                formik.errors?.industryTypeId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.industryTypeId}
                  </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Company Name
              </Typography>
              <TextField
                variant="outlined"
                id="companyName"
                name="companyName"
                fullWidth
                onBlur={formik.handleBlur}
                placeholder="Enter Your Company Name"
                value={formData?.employmentDetails?.companyName}
                onChange={(event, newValue) => {
                  if (/^(?![ ]).*$/.test(event.target.value)) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          companyName: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
              />

              {formik.touched?.companyName && formik.errors?.companyName && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.companyName}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Company Address
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                id="address"
                onBlur={formik.handleBlur}
                name="address"
                placeholder="Enter the Company address"
                value={formData?.employmentDetails?.address}
                onChange={(event, newValue) => {
                  if (
                    /^(?![^A-Za-z0-9])[A-Za-z0-9\s,-/]*$/.test(
                      event.target.value
                    )
                  ) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          address: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
              />
              {formik.touched?.address && formik.errors?.address && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.address}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} sx={{ color: "#243771" }}>
              <TextField
                onBlur={formik.handleBlur}
                variant="outlined"
                fullWidth
                id="pinCode"
                name="pinCode"
                placeholder="Enter the Company Pincode"
                value={formData?.employmentDetails?.pinCode}
                onChange={(event) => {
                  getAddress(event);
                  formik.handleChange(event);
                }}
              />
              {formik.touched?.pinCode && formik.errors?.pinCode && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.pinCode}
                </FormHelperText>
              )}
              {PinCodeErrorData?.companyPincode ? (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {PinCodeErrorData?.companyPincode}
                </FormHelperText>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="cityId"
                name="cityId"
                disabled
                placeholder="City"
                value={CompanyAddressData?.city}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="stateId"
                name="stateId"
                disabled
                placeholder="State"
                value={CompanyAddressData?.state}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                disabled
                id="countryId"
                name="countryId"
                placeholder="Country"
                value={CompanyAddressData?.country}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Designation
              </Typography>
              <TextField
                onBlur={formik.handleBlur}
                variant="outlined"
                fullWidth
                id="designation"
                name="designation"
                placeholder="Enter Your Designation"
                value={formData?.employmentDetails?.designation}
                onChange={(event, newValue) => {
                  if (/^(?![ ]).*$/.test(event.target.value)) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          designation: event.target.value,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
              />
              {formik.touched?.designation && formik.errors?.designation && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.designation}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Gross Annual Sales/Turnover *
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                onBlur={formik.handleBlur}
                id="turnover"
                name="turnover"
                placeholder="Enter Annual Turnover"
                value={formData?.employmentDetails?.turnover}
                onChange={(e, newValue) => {
                  if (
                    /^\d*$/.test(e.target.value) &&
                    e.target.value.length <= 10
                  ) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          turnover: e.target.value,
                        },
                      })
                    );
                    const number = parseFloat(e.target.value);
                    if (!isNaN(number) && isFinite(number)) {
                      setTurnoverInWords(numberToWords.toWords(number));
                    } else {
                      setTurnoverInWords("");
                    }
                    formik.handleChange(e);
                  }
                }}
              />
              {formik.touched?.turnover && formik.errors?.turnover && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.turnover}
                </FormHelperText>
              )}
              {turnoverInWords ? (
                <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                  {turnoverInWords?.charAt(0).toUpperCase() +
                    turnoverInWords?.slice(1)}{" "}
                  Only
                </Typography>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Monthly Profit
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                onBlur={formik.handleBlur}
                id="monthlyProfit"
                name="monthlyProfit"
                placeholder="Enter Your Monthly Profit"
                value={formData?.employmentDetails?.monthlyProfit}
                onChange={(e, newValue) => {
                  if (
                    /^\d*$/.test(e.target.value) &&
                    e.target.value.length <= 7
                  ) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          monthlyProfit: e.target.value,
                        },
                      })
                    );
                    const number = parseFloat(e.target.value);
                    if (!isNaN(number) && isFinite(number)) {
                      setMonthlyProfitInWords(numberToWords.toWords(number));
                    } else {
                      setMonthlyProfitInWords("");
                    }
                    formik.handleChange(e);
                  }
                }}
              />
              {formik.touched?.monthlyProfit &&
                formik.errors?.monthlyProfit && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.monthlyProfit}
                  </FormHelperText>
                )}
              {monthlyProfitInWords ? (
                <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                  {monthlyProfitInWords?.charAt(0).toUpperCase() +
                    monthlyProfitInWords?.slice(1)}{" "}
                  Only
                </Typography>
              ) : (
                ""
              )}
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                GST{" "}
                {formData?.employmentDetails?.turnover >= 2000000 && (
                  <span style={{ color: "#243771" }}>*</span>
                )}
              </Typography>
              <TextField
                variant="outlined"
                id="gst"
                name="gst"
                fullWidth
                onBlur={formik.handleBlur}
                inputProps={{ maxLength: 15 }}
                placeholder="Enter GST Number"
                value={formData?.employmentDetails?.gst}
                onChange={(event, newValue) => {
                  const inputValue = event.target.value.toUpperCase();
                  if (event.target.value.length <= 15) {
                    dispatch(
                      setFormData({
                        employmentDetails: {
                          ...formData.employmentDetails,
                          gst: inputValue,
                        },
                      })
                    );
                    formik.handleChange(event);
                  }
                }}
              />

              {formik.touched?.gst && formik.errors?.gst && (
                <FormHelperText
                  sx={{
                    margin: 0,
                    color: "red",
                    fontSize: "14px",
                    ml: 1,
                  }}
                >
                  {formik.errors.gst}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Business/Current Account Is With? *
              </Typography>
              <Autocomplete
                disablePortal
                id="currentAccountBankId"
                name="currentAccountBankId"
                onBlur={formik.handleBlur}
                options={BankListData ? BankListData : ""}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} placeholder="Please Select" />
                )}
                value={
                  BankListData?.find(
                    (option) =>
                      formData?.employmentDetails?.currentAccountBankId ===
                      option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        currentAccountBankId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("currentAccountBankId", newValue);
                }}
              />
              {formik.touched?.currentAccountBankId &&
                formik.errors?.currentAccountBankId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.currentAccountBankId}
                  </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "#243771" }}>
                Primary/Savings Bank Account Is With? *
              </Typography>
              <Autocomplete
                disablePortal
                id="savingAccountBankId"
                name="savingAccountBankId"
                onBlur={formik.handleBlur}
                options={BankListData ? BankListData : ""}
                fullWidth
                value={
                  BankListData?.find(
                    (option) =>
                      formData?.employmentDetails?.savingAccountBankId ===
                      option.value
                  )?.label
                }
                onChange={(event, newValue) => {
                  dispatch(
                    setFormData({
                      employmentDetails: {
                        ...formData.employmentDetails,
                        savingAccountBankId: newValue?.value,
                      },
                    })
                  );
                  formik.setFieldValue("savingAccountBankId", newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Please Select" />
                )}
              />
              {formik.touched?.savingAccountBankId &&
                formik.errors?.savingAccountBankId && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.savingAccountBankId}
                  </FormHelperText>
                )}
            </Grid>
          </Grid>
          <>
            <NavButton
              handlePrev={handlePrev}
              ErrorFocus={() => SelfEmployedDetailsErrorFocus(formik)}
            />
          </>
        </Grid>
      </form>
    </>
  );
});

export default SelfEmployedDetails;
