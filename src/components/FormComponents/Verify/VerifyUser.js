import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Typography,
  CssBaseline,
  Grid,
  InputBase,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectGetFormData } from "../../../redux/selectors";
import { ValidateOtp, sendOpt } from "../../../constant/services/credMudra";
import { setIsLoading } from "../../../redux/actions";
import NavButton from "../../../layouts/NavButton";
import { verifyUserSchema } from "../../../utils/validateSchema";
import { VerifyUserErrorFocus } from "../../../utils/errorFocus";
import { getInitialVerifyUserValues } from "../../../utils/initialValues";
import { scrollToTop } from "../../../utils/commonFunctions";

const VerifyUser = React.memo(() => {
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();
  const navigateToLoanForm = useCallback(() => {
    navigate("/get-registered/loan");
  }, [navigate]);

  const formData = useSelector(selectGetFormData);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = useCallback(
    async (val) => {
      const anonymousId = sessionStorage.getItem("anonymousId") || "";
      let currentTimer = 60;

      const timerInterval = setInterval(() => {
        currentTimer -= 1;
        setTimer(currentTimer);

        if (currentTimer <= 0) {
          clearInterval(timerInterval);
        }
      }, 1000);

      if (val === true) {
        const requestData = {
          contactNo: formData.contactNo,
          resend: true,
          anonymousId: anonymousId || "",
        };
        dispatch(setIsLoading(true));
        const res = await sendOpt(requestData);
        dispatch(setIsLoading(false));
      }
    },
    [dispatch, formData.contactNo]
  );
  useEffect(() => {
    handleChange();
  }, []);

  const handleClickButton = useCallback(() => {
    const confirmed = window.confirm("Changes you made may not be saved.");
    if (confirmed) {
      navigate(-1);
    }
  }, [navigate]);

  const handleSubmit = useCallback(
    async (verifyOtp) => {
      const requestData = {
        contactNo: formData.contactNo,
        otp: verifyOtp,
      };
      const res = await ValidateOtp(requestData);
      const responseData = res?.data?.data;
      if (res?.data.status.code === 200) {
        sessionStorage.setItem("accessToken", responseData.token.accessToken);
        sessionStorage.setItem("refreshToken", responseData.token.refreshToken);
        sessionStorage.setItem("leadId", responseData.leadId);
        scrollToTop();
        navigateToLoanForm();
      }
      if (res?.data.status.code === 400) {
        setErrors({ verifyOtp: "Invalid OTP" });
      }
    },
    [formData.contactNo, navigateToLoanForm]
  );

  const formik = useFormik({
    initialValues: useMemo(() => getInitialVerifyUserValues(), []),
    validationSchema: useMemo(() => verifyUserSchema, []),
    onSubmit: useCallback(
      (values) => {
        handleSubmit(values.verifyOtp);
      },
      [handleSubmit]
    ),
  });

  return (
    <>
      <CssBaseline />
      <form onSubmit={formik.handleSubmit}>
        <Grid container rowGap={4}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "28px", md: "35px", lg: "36px", xl: "40px" },
              fontWeight: "900",
              color: "#243771",
            }}
          >
            Verify Mobile
          </Typography>

          <Grid container rowGap={2}>
            <Typography sx={{ fontSize: "15px", color: "#262250" }}>
              Enter 6 digit OTP received on your mobile
              <b> {formData.contactNo} </b>
              <Link
                style={{ textDecoration: "none", color: "#5cb46a" }}
                to={""}
                onClick={handleClickButton}
              >
                change?
              </Link>
            </Typography>
            <Grid
              container
              alignItems={"center"}
              sx={{ border: "1px solid", width: "100%", borderRadius: "7px" }}
            >
              <Grid
                item
                xs={9}
                sm={10}
                md={9.7}
                lg={9.5}
                sx={{ p: "10px", width: "80%" }}
              >
                <InputBase
                  fullWidth
                  id="verifyOtp"
                  autoFocus
                  name="verifyOtp"
                  type="tel"
                  // inputProps={{ autoComplete: "off" }}
                  value={formik.values.verifyOtp}
                  onChange={(e) => {
                    if (
                      /^\d*$/.test(e.target.value) &&
                      e.target.value.length <= 6
                    ) {
                      setErrors({ verifyOtp: "" });
                      formik.handleChange(e);
                    }
                  }}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              {timer > 0 ? (
                <Grid
                  item
                  xs={3}
                  md={2}
                  sm={2}
                  lg={2.5}
                  textAlign={"center"}
                  sx={{
                    backgroundColor: "#5ab56b00 0% 0% no-repeat padding-box",
                    fontSize: "13px",
                  }}
                >
                  {timer} seconds
                </Grid>
              ) : (
                <Grid
                  item
                  xs={3}
                  md={2.3}
                  sm={2}
                  lg={2.5}
                  textAlign={"center"}
                  sx={{
                    backgroundColor: "#5ab56b00 0% 0% no-repeat padding-box",
                    fontSize: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "none",
                      color: "#243771",
                      cursor: "pointer",
                    }}
                    onClick={() => handleChange(true)}
                  >
                    Resend?
                  </Typography>
                </Grid>
              )}
            </Grid>
            {errors?.verifyOtp && (
              <FormHelperText
                sx={{
                  margin: 0,
                  color: "red",
                  fontSize: "14px",
                  ml: 1,
                }}
              >
                {errors.verifyOtp}
              </FormHelperText>
            )}
            {formik.errors.verifyOtp && (
              <FormHelperText
                sx={{
                  margin: 0,
                  color: "red",
                  fontSize: "14px",
                  ml: 1,
                }}
              >
                {formik.errors.verifyOtp}
              </FormHelperText>
            )}
            <Grid item xs={12} display={"flex"} alignItems={"flex-start"}>
              <i
                className="fa-solid fa-circle-info"
                style={{ fontSize: "14px", padding: 4, color: "#262250" }}
              ></i>

              <Typography
                sx={{ color: "#666", fontSize: "14px", color: "#262250" }}
              >
                Credmudra agents will never ask you to transfer money or OTP for
                verification or any other services
              </Typography>
            </Grid>
          </Grid>

          <NavButton ErrorFocus={() => VerifyUserErrorFocus(formik)} />
        </Grid>
      </form>
    </>
  );
});

export default VerifyUser;
