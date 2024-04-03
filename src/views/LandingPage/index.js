import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../node_modules/swiper/css/swiper.css";
import "./slider.css";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { useDispatch } from "react-redux";
import { setLoanType } from "../../redux/actions";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
import ShortTerm from "./ShortTerm";
import WhyMillions from "./WhyMillions";
import ResponsibleCredit from "./ResponsibleCredit";
import LandingPartners from "./LandingPartners";
import LatestBlog from "./LatestBlog";
import AvoidPitfalls from "./AvoidPitfalls";

const LandingPage = () => {
  const navigate = useNavigate();

 

  const dispatch = useDispatch();

  useEffect(() => {
    routeRedirection(navigate);
    localStorage.removeItem("loanType");
    sessionStorage.removeItem("employmentType");
    dispatch(setLoanType(""));
  }, []);

  return (
    <>
      <Helmet>
        <title>{heading.landingPage.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.landingPage.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.landingPage.canonical} />
      </Helmet>
      <ShortTerm scrollToTop={scrollToTop} Link={Link}/>
      <WhyMillions />
      <ResponsibleCredit scrollToTop={scrollToTop} Link={Link}/>
      <LandingPartners />
      <LatestBlog />
      <AvoidPitfalls />
      
    </>
  );
};

export default LandingPage;
