import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { setLoanType } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
import { Container } from "@mui/material";
import ApplyForPersonalLoanOnline from "./ApplyForPersonalLoanOnline";
import CheckYourEligibility from "./CheckYourEligibility";

const PersonalLoanEligibility = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem("loanType");
    routeRedirection(navigate);
    dispatch(setLoanType(""));

    sessionStorage.removeItem("employmentType");
  }, []);

  return (
    <>
      <Helmet>
        <title>{heading.Eligibility.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.Eligibility.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.Eligibility.canonical} />
      </Helmet>
      <Container maxWidth={"lg"} >
        <ApplyForPersonalLoanOnline scrollToTop={scrollToTop} Link={Link}/>
        <CheckYourEligibility scrollToTop={scrollToTop} Link={Link}/>
      </Container>
    </>
  );
};

export default PersonalLoanEligibility;
