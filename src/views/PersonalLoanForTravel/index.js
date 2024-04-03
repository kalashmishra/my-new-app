import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { setLoanType } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
import TravelLoanTailored from "./TravelLoanTailored";
import BankThatOffer from "./BankThatOffer";
import FeaturesAndBenefitsOfPlForTravel from "./FeaturesAndBenefitsOfPlForTravel";
import FindOutWhen from "./FindOutWhen";
import DocumentRequired from "./DocumentRequired";
import StepsToApplyForTravel from "./StepsToApplyForTravel";
import WhyShouldYouConsider from "./WhyShouldYouConsider";
import ThingsToConsider from "./ThingsToConsider";
import FAQSAboutTravel from "./FAQSAboutTravel";
import GetMatchedButton from "../../utils/GetMatchedButton";

const PersonalLoanForTravel = () => {
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
        <title>{heading.travalLoan.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.travalLoan.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.travalLoan.canonical} />
      </Helmet>

      <TravelLoanTailored />
      <BankThatOffer scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FeaturesAndBenefitsOfPlForTravel />
      <FindOutWhen />
      <DocumentRequired scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <StepsToApplyForTravel />
      <WhyShouldYouConsider scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <ThingsToConsider scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FAQSAboutTravel />
    </>
  );
};

export default PersonalLoanForTravel;
