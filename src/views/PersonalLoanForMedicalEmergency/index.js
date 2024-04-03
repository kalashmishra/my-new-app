import React, { useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { setLoanType } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
import PersonalLoanForMedicalEmergenciesPage1 from "./PlForMedicalEmergenciesPage1";
import PlForMedicalEmergenciesPage2 from "./PlForMedicalEmergenciesPage2";
import LendersThatOffer from "./LendersThatOffer";
import FeaturesBenefitsOfMedicalLoan from "./FeaturesAndBenefitsOfMedicalLoan";
import MedicalLoanEligibility from "./MedicalLoanEligibility";
import FactorsAffecting from "./FactorsAffecting";
import DocumentsRequiredForMedical from "./DocumentsRequiredForMedical";
import StepsToApply from "./StepsToApply";
import WhyDoesTaking from "./WhyDoesTaking";
import FAQSOnPersonalLoan from "./FAQSOnPersonalLoan";
import TransformYourFinancialFuture from "./TransformYourFinancialFuture";
import GetMatchedButton from "../../utils/GetMatchedButton";

const PersonalLoanForMedicalEmergency = () => {
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
        <title>{heading.medicalEmergency.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.medicalEmergency.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.medicalEmergency.canonical} />
      </Helmet>
      <PersonalLoanForMedicalEmergenciesPage1 />
      <PlForMedicalEmergenciesPage2 scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <LendersThatOffer scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FeaturesBenefitsOfMedicalLoan />
      <MedicalLoanEligibility scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FactorsAffecting scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <DocumentsRequiredForMedical scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <StepsToApply />
      <WhyDoesTaking />
      <FAQSOnPersonalLoan />
      <TransformYourFinancialFuture />
    </>
  );
};

export default PersonalLoanForMedicalEmergency;
