import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOpt } from "../../../constant/services/credMudra";
import { selectGetFormData } from "../../../redux/selectors";
import { setFormData, setIsLoading } from "../../../redux/actions";
import { useFormik } from "formik";
import { UserNumberErrorFocus } from "../../../utils/errorFocus";
import { getInitialUserNumberValues } from "../../../utils/initialValues";
import { userNumberSchema } from "../../../utils/validateSchema";
import { scrollToTop } from "../../../utils/commonFunctions";

const CommonUserNumber = React.memo(() => {
  const formData = useSelector(selectGetFormData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToVerify = useCallback(() => {
    navigate("/get-registered/verify-user");
  }, [navigate]);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleSubmit = useCallback(async () => {
    const anonymousId = sessionStorage.getItem("anonymousId") || "";
    const requestData = {
      contactNo: formData.contactNo,
      resend: false,
      anonymousId: anonymousId || "",
    };
    dispatch(setIsLoading(true));
    const res = await sendOpt(requestData);
    dispatch(setIsLoading(false));
    scrollToTop();
    navigateToVerify();
  }, [formData.contactNo, dispatch, navigateToVerify]);

  const formik = useFormik({
    initialValues: useMemo(() => getInitialUserNumberValues(formData), []),
    validationSchema: useMemo(() => userNumberSchema, []),
    onSubmit: handleSubmit,
  });

  return (
    <form name="mobile_form" onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: { md: "450px" },
        }}
      >
        <Box>
          <TextField
            placeholder="XXXXXXXXXX"
            onChange={(e) => {
              if (/^\d*$/.test(e.target.value) && e.target.value.length <= 10) {
                dispatch(
                  setFormData({
                    contactNo: e.target.value,
                  })
                );
                formik.handleChange(e);
              }
            }}
            name="contactNo"
            id="contactNo"
            value={formData.contactNo}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{
                    fontWeight: 900,
                    paddingRight: "15px",
                    opacity: 2,
                  }}
                >
                  <span></span>🇮🇳 +91
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "#fff",
              // border: "1px solid #F7D64A",
              width: { xs: "100%", md: "285px" },
              borderRadius: "8px",
              "& input": {
                fontSize: "16px",
                border: "none",
              },
              "& fieldset": {
                borderColor: "#F7D64A",
              },
            }}
          />
          {formik.touched.contactNo && formik.errors.contactNo && (
            <FormHelperText
              sx={{
                margin: 0,
                color: "red",
                fontSize: "14px",
                ml: 1,
              }}
            >
              {formik.errors.contactNo}
            </FormHelperText>
          )}
        </Box>
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "#243788",
              color: "#F7D64A",
            },
            padding: "14px 18px",
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: "10px",
            border: "1px solid #F7D64A",
            backgroundColor: "#F7D64A",
            color: "#243788",
            marginLeft: { md: "8px" },
            fontWeight: "900",
            fontSize:{xs:'16px'},
            transition: ".4s all ease-in-out",
            textTransform: "capitalize ",
            marginTop: { xs: "16px", md: "0px" },
            height: "56px",
          }}
          type="submit"
          onClick={() => UserNumberErrorFocus(formik)}
        >
          Apply Now
        </Button>
      </Box>
      {/* <Box display="flex" alignItems="flex-start" sx={{ width: "90%" }}>
        <Checkbox
          {...label}
          defaultChecked
          sx={{ marginTop: "12px" }}
          id="termsAndCondition"
          name="termsAndCondition"
          onChange={(e) => {
            dispatch(
              setFormData({
                termsAndCondition: e.target.checked,
              })
            );
            formik.setFieldValue("termsAndCondition", e.target.checked);
          }}
          onBlur={formik.handleBlur}
          checked={formData.termsAndCondition}
        />
        <Typography
          marginTop="20px"
          textAlign="justify"
          sx={{
            color: "#999",
            fontSize: "13px",
            lineHeight: "1.5",
            fontFamily: "Inter,sans-serif",
          }}
        >
          By continuing, I agree to Credmudra's Privacy Policy and Terms &
          Conditions and receive communication from Credmudra via SMS, E-mail,
          and WhatsApp.
        </Typography>
      </Box>
      {formik.touched.termsAndCondition && formik.errors.termsAndCondition && (
        <FormHelperText
          sx={{
            margin: 0,
            color: "red",
            fontSize: "14px",
            ml: 1,
          }}
        >
          {formik.errors.termsAndCondition}
        </FormHelperText>
      )} */}
        <Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop:'20px'
                }}
              >
                <Checkbox
                  id="termsAndCondition"
                  name="termsAndCondition"
                  onChange={(e) => {
                    dispatch(
                      setFormData({
                        termsAndCondition: e.target.checked,
                      })
                    );
                    formik.setFieldValue("termsAndCondition", e.target.checked);
                  }}
                  onBlur={formik.handleBlur}
                  checked={formData.termsAndCondition}
                />
                <Typography sx={{ color: "#666", fontSize: "13px" }}>
                  By continuing, I agree to Credmudra's
                  <Link style={{textDecoration:'none',color:'#243788'}} to={"/privacy-policy"}> Privacy Policy </Link> and
                  <Link style={{textDecoration:'none', color:'#243788'}} to={"/terms-and-conditions"}>
                    {" "}
                    Terms & Conditions{" "}
                  </Link>{" "}
                  and receive communication from Credmudra via SMS, E-mail, and
                  WhatsApp.
                </Typography>
              </Box>
              {formik.touched.termsAndCondition &&
                formik.errors.termsAndCondition && (
                  <FormHelperText
                    sx={{
                      margin: 0,
                      color: "red",
                      fontSize: "14px",
                      ml: 1,
                    }}
                  >
                    {formik.errors.termsAndCondition}
                  </FormHelperText>
                )}
            </Grid>
    </form>
    // <>
    //   <span className="form_disc">
    //     Enter your 10 digit mobile number to proceed
    //   </span>
    //   <form name="mobile_form" onSubmit={formik.handleSubmit}>
    //     <div className="pl_mobile_form mobile_form">
    //       <div className="mobile_input_wrapper">
    //         <div className="mno-responsive">
    //           <span>🇮🇳 +91 </span>
    //           <input
    //             type="tel"
    //             autoFocus
    //             name="contactNo"
    //             id="contactNo"
    //             placeholder="XXXXXXXXXX"
    //             maxLength="10"
    //             onChange={(e) => {
    //               if (
    //                 /^\d*$/.test(e.target.value) &&
    //                 e.target.value.length <= 10
    //               ) {
    //                 dispatch(
    //                   setFormData({
    //                     contactNo: e.target.value,
    //                   })
    //                 );
    //                 formik.handleChange(e);
    //               }
    //             }}
    //             value={formData.contactNo}
    //           />
    //           <button
    //             type="submit"
    //             onClick={() => UserNumberErrorFocus(formik)}
    //             className="mobile_submit sendOtp"
    //           >
    //             Apply Now
    //           </button>
    //         </div>
    //         {formik.touched.contactNo && formik.errors.contactNo && (
    //           <FormHelperText
    //             sx={{
    //               margin: 0,
    //               color: "red",
    //               fontSize: "14px",
    //               ml: 1,
    //             }}
    //           >
    //             {formik.errors.contactNo}
    //           </FormHelperText>
    //         )}
    //       </div>
    //       <label className="form-check-label" style={{ paddingTop: "8px" }}>
    //         <div className="squaredThree">
    //           <input
    //             type="checkbox"
    //             id="termsAndCondition"
    //             name="termsAndCondition"
    //             onChange={(e) => {
    //               dispatch(
    //                 setFormData({
    //                   termsAndCondition: e.target.checked,
    //                 })
    //               );
    //               formik.setFieldValue("termsAndCondition", e.target.checked);
    //             }}
    //             onBlur={formik.handleBlur}
    //             checked={formData.termsAndCondition}
    //           />
    //           <label htmlFor="termsAndCondition"></label>
    //         </div>
    //         By continuing, I agree to Credmudra's
    //         <Link to="/privacy-policy">Privacy Policy</Link> and
    //         <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
    //         and receive communication from Credmudra via SMS, E-mail, and
    //         WhatsApp.
    //       </label>
    //       {formik.touched.termsAndCondition &&
    //         formik.errors.termsAndCondition && (
    //           <FormHelperText
    //             sx={{
    //               margin: 0,
    //               color: "red",
    //               fontSize: "14px",
    //               ml: 1,
    //             }}
    //           >
    //             {formik.errors.termsAndCondition}
    //           </FormHelperText>
    //         )}
    //     </div>
    //   </form>
    // </>
  );
});

export default CommonUserNumber;
