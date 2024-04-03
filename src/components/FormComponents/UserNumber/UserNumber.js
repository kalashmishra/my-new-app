import React, { useCallback, useMemo } from "react";
import {
  Typography,
  Grid,
  CssBaseline,
  Box,
  Checkbox,
  InputBase,
  FormHelperText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, setIsLoading } from "../../../redux/actions";
import { sendOpt } from "../../../constant/services/credMudra";
import { selectGetFormData } from "../../../redux/selectors";
import NavButton from "../../../layouts/NavButton";
import { useFormik } from "formik";
import { userNumberSchema } from "../../../utils/validateSchema";
import { UserNumberErrorFocus } from "../../../utils/errorFocus";
import { getInitialUserNumberValues } from "../../../utils/initialValues";
import { scrollToTop } from "../../../utils/commonFunctions";

const UserNumber = React.memo(() => {
  const formData = useSelector(selectGetFormData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToVerify = useCallback(() => {

    navigate("/get-registered/verify-user");
  }, [navigate]);

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
    scrollToTop()
    navigateToVerify();

  }, [formData.contactNo, dispatch, navigateToVerify]);

  const formik = useFormik({
    initialValues: useMemo(() => getInitialUserNumberValues(formData), []),
    validationSchema: useMemo(() => userNumberSchema, []),
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
              fontWeight: "900",
              color:'#243771'
            }}
          >
            Welcome to Credmudra
          </Typography>
          <Grid container rowGap={1}>
            <Typography sx={{ fontSize: { md: "16px", xs: "15px" } }}>
              Enter your 10 digit mobile number to proceed: *
            </Typography>
            <Box
              sx={{
                border: "1px solid",
                width: "100%",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ borderRight: "1px solid", padding: 1.5 }}
                textAlign={"center"}
              >
                🇮🇳 +91
              </Typography>
              <Box sx={{ p: "10px", width: "70%" }}>
                <InputBase
                  type="tel"
                  name="contactNo"
                  id="contactNo"
                  sx={{ ml: 1 }}
                  placeholder="XXXXXXXXXX"
                  fullWidth
                  value={formData.contactNo}
                  onChange={(e) => {
                    if (
                      /^\d*$/.test(e.target.value) &&
                      e.target.value.length <= 10
                    ) {
                      dispatch(
                        setFormData({
                          contactNo: e.target.value,
                        })
                      );
                      formik.handleChange(e);
                    }
                  }}
                />
              </Box>
            </Box>
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

            <Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
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
                  <Link  style={{ color:'#1976D2' }} to={"/privacy-policy"}> Privacy Policy </Link> and
                  <Link  style={{ color:'#1976D2' }}to={"/terms-and-conditions"}>
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
          </Grid>
          <>
            <NavButton ErrorFocus={() => UserNumberErrorFocus(formik)} />
          </>
        </Grid>
      </form>
    </>
  );
});

export default UserNumber;
