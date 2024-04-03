import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts";
import LandingPage from "../views/LandingPage";
import GetRegistered from "../views/getRegistered";
import VerifyUser from "../components/FormComponents/Verify/VerifyUser";
import UserNumber from "../components/FormComponents/UserNumber/UserNumber";

import {
  Loan,
  EmployeType,
  Salaried,
  SelfEmployedDetails,
  PersonalDetails,
  AddressDetails,
  OtherDetails,
  Submit,
  Offers,
  Marketplace,
} from "../components/index";
import NotFound from "../views/NotFound";
import BusinessLanding from "../components/FormComponents/BusinessLanding";

// With React.lazy()
const BusinessLoan = React.lazy(() => import('../views/BusinessLoan'));
const PersonalLoan = React.lazy(() => import('../views/PersonalLoan'));
const DebtConsolidation = React.lazy(() => import('../views/DebtConsolidation'));
const PersonalLoanForMedicalEmergency = React.lazy(() => import('../views/PersonalLoanForMedicalEmergency'));
const PersonalLoanForTravel = React.lazy(() => import('../views/PersonalLoanForTravel'));
const PersonalLoanForTwoWheeler = React.lazy(() => import('../views/PersonalLoanForTwoWheeler'));
const PersonalLoanForHomeRenovation = React.lazy(() => import('../views/PersonalLoanForHomeRenovation'));
const TermsAndConditions = React.lazy(() => import('../views/TermsAndConditions'));
const PrivacyPolicy = React.lazy(() => import('../views/PrivacyPolicy'));
const AboutUs = React.lazy(() => import('../views/AboutUs'));
const PersonalLoanInterestRate = React.lazy(() => import('../views/PersonalLoanInterestRate'));
const PersonalLoanEligibility = React.lazy(() => import('../views/PersonalLoanEligibility'));
const PersonalLoanEmiCalculator = React.lazy(() => import('../views/PersonalLoanEmiCalculator'));
const RouterComponent = () => {
  return (
    <>
   
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/business-loan" element={<BusinessLoan />} />
          <Route path="/personal-loan" element={<PersonalLoan />} />
          <Route path="/debt-consolidation" element={<DebtConsolidation />} />
          <Route
            path="/personal-loan-for-medical-emergency"
            element={<PersonalLoanForMedicalEmergency />}
          />
          <Route
            path="/personal-loan-for-travel"
            element={<PersonalLoanForTravel />}
          />
          <Route
            path="/personal-loan-for-two-wheeler"
            element={<PersonalLoanForTwoWheeler />}
          />
          <Route
            path="/personal-loan-for-home-renovation"
            element={<PersonalLoanForHomeRenovation />}
          />
          <Route
            path="/personal-loan-eligibility"
            element={<PersonalLoanEligibility />}
          />
          <Route
            path="/personal-loan-interest-rate"
            element={<PersonalLoanInterestRate />}
          />
          <Route
            path="/personal-loan-emi-calculator"
            element={<PersonalLoanEmiCalculator />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/get-registered"
            element={<GetRegistered classname={"welcomeform"} />}
          >
            <Route
              path="/get-registered/user-number"
              element={<UserNumber />}
            />
            <Route
              path="/get-registered/verify-user"
              element={<VerifyUser />}
            />
            <Route path="/get-registered/loan" element={<Loan />} />
            <Route
              path="/get-registered/employe-type"
              element={<EmployeType />}
            />
            <Route path="/get-registered/salaried" element={<Salaried />} />
            <Route
              path="/get-registered/selfemployed"
              element={<SelfEmployedDetails />}
            />
            <Route
              path="/get-registered/personaldetails"
              element={<PersonalDetails />}
            />
            <Route
              path="/get-registered/addressdetails"
              element={<AddressDetails />}
            />
            <Route
              path="/get-registered/otherdetails"
              element={<OtherDetails />}
            />
            <Route path="/get-registered/submit" element={<Submit />} />
          </Route>
          <Route
            path="/get-registered/offers"
            element={<Offers classname={"welcomeform"} />}
          />
          <Route
            path="/get-registered/marketplace"
            element={<Marketplace classname={"welcomeform"} />}
          />
          <Route
            path="/business-loan/get-registered"
            element={<BusinessLanding classname={"welcomeform"} />}
          />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Router>
    
    </>
  );
};

export default RouterComponent;
