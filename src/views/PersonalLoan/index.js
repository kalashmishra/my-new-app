import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { setLoanType } from "../../redux/actions";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";

import PlHomePage from "./PlHomePage";
import PlDescriptionPage from "./PlDescriptionPage";
import GetPersonalLoan from "./GetPersonalLoan";
import InterestRate from "./InterestRate";
import ChoosePersonalLoan from "./ChoosePersonalLoan";
import WhyIsPlBetter from "./WhyIsPlBetter";
import SimpleCriteria from "./SimpleCriteria";
import DocumentsYouNeed from "./DocumentsYouNeed";
import PersonalLoanFees from "./PersonalLoanFees";
import StepByStep from "./StepByStep";
import WhenShouldYouAvoid from "./WhenShouldYouAvoid";
import WhenShouldYouTake from "./WhenShouldYouTake";
import TipsToAvoidPl from "./TipsToAvoidPl";
import HowWillLenders from "./HowWillLenders";
import TipsToGrab from "./TipsToGrab";
import FAQS from "./FAQS";
import TransformYourFinancial from "./TransformYourFinancial";
import GetMatchedButton from "../../utils/GetMatchedButton";

const PersonalLoan = () => {
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
        <title>{heading.personalLoan.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.personalLoan.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.personalLoan.canonical} />
      </Helmet>
      <PlHomePage />
      <PlDescriptionPage />
      <GetPersonalLoan  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link} />
      <InterestRate />
      <ChoosePersonalLoan  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <WhyIsPlBetter scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <SimpleCriteria />
      <DocumentsYouNeed  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <PersonalLoanFees  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <StepByStep />
      <WhenShouldYouAvoid  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <WhenShouldYouTake scrollToTop={scrollToTop}  GetMatchedButton={GetMatchedButton} Link={Link}/>
      <TipsToAvoidPl scrollToTop={scrollToTop}  GetMatchedButton={GetMatchedButton} Link={Link}/>
      <HowWillLenders />
      <TipsToGrab  scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FAQS />
      <TransformYourFinancial />
    </>
  );
};

export default PersonalLoan;
