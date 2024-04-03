import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoanType } from "../../redux/actions";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { routeRedirection, scrollToTop, } from "../../utils/commonFunctions";
import BlHomePage from "./section1";
import WhatBusinessLoan from "./WhatBusinessLoan";
import ChooseCredmudraForBl from "./ChooseCredmudraForBl";
import FeaturesBenefitsBl from "./FeaturesBenefitsBl";
import InterestRate from "./InterestRate";
import EligibilityCriteria from "./EligibilityCriteria";
import DocumentRequired from "./DocumentRequired";
import StepsByStep from "./StepsByStep";
import WhatAreType from "./WhatAreType";
import FactorsConsider from "./FactorsConsider";
import FAQs from "./FAQs";
import GetMatchedButton from "../../utils/GetMatchedButton";

const BusinessLoan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    routeRedirection(navigate);
    localStorage.setItem("loanType", "businessLoan");
    dispatch(setLoanType("businessLoan"));
    sessionStorage.setItem("employmentType", "Self Employed");
  }, []);

  return (
    <div>
      <Helmet>
        <title>{heading.businessPage.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.businessPage.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.businessPage.canonical} />
      </Helmet>

      <BlHomePage />
      <WhatBusinessLoan  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <ChooseCredmudraForBl  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FeaturesBenefitsBl  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <InterestRate  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <EligibilityCriteria  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <DocumentRequired  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <StepsByStep />
      <WhatAreType  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FactorsConsider  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FAQs />
    </div>
  );
};

export default BusinessLoan;
