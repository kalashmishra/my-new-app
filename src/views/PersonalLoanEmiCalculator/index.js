import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { setLoanType } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
import EmiCalculator from "./EmiCalculator";
import Process from "./Process";
import Steps from "./Steps";
import FAQS from "./FAQS";
import { Container } from "@mui/material";

const PersonalLoanEmiCalculator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("loanType");
    routeRedirection(navigate);
    dispatch(setLoanType(""));

    sessionStorage.removeItem("employmentType");
  }, []);

  return (
    <>
      <Helmet>
        <title>{heading.EMIcalculate.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.EMIcalculate.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.EMIcalculate.canonical} />
      </Helmet>
      <Container maxWidth={"lg"}>
      <EmiCalculator scrollToTop={scrollToTop} Link={Link}/>
      <Process scrollToTop={scrollToTop} Link={Link}/>
      <Steps />
      <FAQS />
      </Container>
    </>
  );
};

export default PersonalLoanEmiCalculator;
