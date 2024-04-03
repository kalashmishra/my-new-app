import React, { useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { setLoanType } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
import PersonalLoanForDebtConsolidation from "./PersonalLoanForDebtConsolidation";
import DebtConsolidationLoan from "./DebtConsolidationLoan";
import FeaturesBenefitsOfDebt from "./FeaturesBenefitsOfDebt";
import EligibilityCriteria from "./EligibilityCriteria";
import DocumentsRequiredToApply from "./DocumentsRequiredToApply";
import StepByStepProcess from "./StepByStepProcess";
import WillConsolidatingDebt from "./WillConsolidatingDebt";
import TopThreeThings from "./TopThreeThings";
import KnowTheRight from "./KnowTheRight";
import DebtConsolidationVsBalance from "./DebtConsolidationVsBalance";
import FAQS from "./FAQS";
import GetMatchedButton from "../../utils/GetMatchedButton";

const DebtConsolidation = () => {
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
        <title>{heading.debtConsolidation.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.debtConsolidation.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.debtConsolidation.canonical} />
      </Helmet>
      <PersonalLoanForDebtConsolidation />
      <DebtConsolidationLoan  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FeaturesBenefitsOfDebt  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <EligibilityCriteria />
      <DocumentsRequiredToApply  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <StepByStepProcess />
      <WillConsolidatingDebt  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <TopThreeThings  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <KnowTheRight  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link} />
      <DebtConsolidationVsBalance  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FAQS />
    </>
  );
};

export default DebtConsolidation;
