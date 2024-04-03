import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { useDispatch } from "react-redux";
import { setLoanType } from "../../redux/actions";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
import ExperienceTheJoy from "./ExperienceTheJoy";
import BenefitsPersonalLoan from "./BenefitsPersonalLoan";
import EligibilityCriteria from "./EligibilityCriteria";
import DocumentRequired from "./DocumentRequired";
import ApplyForPersonalLoan from "./ApplyForPersonalLoan";
import FinancialInstitution from "./FinancialInstitution";
import FAQs from "./FAQs";
import WhyChooseCredmudra from "./WhyChooseCredmudra";
import GetMatchedButton from "../../utils/GetMatchedButton";

const PersonalLoanForHomeRenovation = () => {
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
        <title>{heading.homeRenovation.title}</title>``
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.homeRenovation.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.homeRenovation.canonical} />
      </Helmet>
      <ExperienceTheJoy />
      <BenefitsPersonalLoan scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <EligibilityCriteria />
      <DocumentRequired scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <ApplyForPersonalLoan />
      <WhyChooseCredmudra />
      <FinancialInstitution scrollToTop={scrollToTop} GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FAQs />
    </>
  );
};

export default PersonalLoanForHomeRenovation;
