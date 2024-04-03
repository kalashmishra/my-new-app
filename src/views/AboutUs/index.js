import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { useDispatch } from "react-redux";
import { setLoanType } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { routeRedirection } from "../../utils/commonFunctions";
import AboutTeam from "./AboutTeam";
import MudraMentors from "./MudraMentors";
import OurCommunity from "./OurCommunity";
import WaitingFor from "./WaitingFor";
import ThreeBanners from "./ThreeBanners";

const AboutUs = () => {
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
        <title>{heading.about.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.about.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.about.canonical} />
      </Helmet> 
      <AboutTeam />
      <MudraMentors />
      <OurCommunity />
      <WaitingFor />
      <ThreeBanners />
    </>
  );
};

export default AboutUs;
