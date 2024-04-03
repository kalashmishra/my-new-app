import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
import { useDispatch } from "react-redux";
import { setLoanType } from "../../redux/actions";
import CruiseThroughLife from "./CruiseThroughLife";
import EligibilityCriteriaTwoWheeler from "./EligibilityCriteriaTwoWheeler";
import DocumentsForTwoWheeler from "./DocumentsForTwoWheeler";
import KeyFeatures from "./KeyFeatures";
import StepsForTwoWheelerLoan from "./StepsForTwoWheelerLoan";
import InterestRate from "./InterestRate";
import FAQSTwoWheeler from "./FAQSTwoWheeler";
import GetMatchedButton from "../../utils/GetMatchedButton";

const PersonalLoanForTwoWheeler = () => {
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
        <title>{heading.twoWheeler.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.twoWheeler.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.twoWheeler.canonical} />
      </Helmet>

      <CruiseThroughLife />
      <EligibilityCriteriaTwoWheeler />
      <DocumentsForTwoWheeler scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <KeyFeatures scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <StepsForTwoWheelerLoan />
      <InterestRate scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FAQSTwoWheeler />
    </>
  );
};

export default PersonalLoanForTwoWheeler;
