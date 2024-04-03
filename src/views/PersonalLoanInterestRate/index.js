import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { setLoanType } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
import ApplyOnline from "./ApplyOnline";
import { Container } from "@mui/material";
import GetPersonalLoan from "./GetPersonalLoan";

const PersonalLoanInterestRate = () => {
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
        <title>{heading.InterestRate.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.InterestRate.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.InterestRate.canonical} />
      </Helmet>
      <Container maxWidth={"lg"}>
        <ApplyOnline scrollToTop={scrollToTop} Link={Link}/>
        <GetPersonalLoan scrollToTop={scrollToTop} Link={Link}/>
      </Container>
    </>
  );
};

export default PersonalLoanInterestRate;
