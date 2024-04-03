import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { useDispatch, useSelector } from "react-redux";
import { selectGetFormData } from "../redux/selectors";
import { setFormData } from "../redux/actions";
import Bowser from "bowser";
import { anonymousUser, GetIPAddress } from "../constant/services/credMudra";
import Cookies from "js-cookie";
import { Grid } from "@mui/material";

const Layout = () => {
  
  const location = useLocation();
  const dispatch = useDispatch();
  const formData = useSelector(selectGetFormData);
  const anonymousId = sessionStorage.getItem("anonymousId");

  const getQueryParam = (name) => {
    const params = new URLSearchParams(location.search);
    return params.get(name);
  };

  const currentPath = location.pathname;

  const extraDetails = async () => {
    const ip = await GetIPAddress();
    const browser = Bowser.getParser(navigator.userAgent);
    let position = null;
    try {
      position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    } catch (error) {}
    dispatch(
      setFormData({
        extras: {
          ...formData.extras,
          browser:
            browser?.parsedResult.browser.name +
            " " +
            browser?.parsedResult.browser.version,
          operatingSystem: browser?.parsedResult.os.name,
          ipAddress: ip,
          userAgent: "",
          location: "",
          timestamp: position?.timestamp,
        },
      })
    );
  };

  const set_utm = () => {
    const utm_id = getQueryParam("utm_id");
    const utm_url = getQueryParam("utm_url");
    const utm_source = getQueryParam("utm_source");
    const utm_medium = getQueryParam("utm_medium");
    const utm_campaign = getQueryParam("utm_campaign");
    const utm_term = getQueryParam("utm_term");
    const utm_content = getQueryParam("utm_content");

    //setting utms in cookies
    const utmsData = Cookies.get("utms");
    if (!utmsData) {
      Cookies.set(
        "utms",
        JSON.stringify({
          id: utm_id,
          url: utm_url,
          source: utm_source,
          medium: utm_medium,
          campaign: utm_campaign,
          term: utm_term,
          content: utm_content,
          clickId: "",
        }),
        { expires: 30 }
      );
    } else if (utmsData && utm_source !== null) {
      Cookies.set(
        "utms",
        JSON.stringify({
          id: utm_id,
          url: utm_url,
          source: utm_source,
          medium: utm_medium,
          campaign: utm_campaign,
          term: utm_term,
          content: utm_content,
          clickId: "",
        }),
        { expires: 30 }
      );
    }
    const postUtmsData = JSON.parse(Cookies.get("utms"));
    dispatch(
      setFormData({
        utm: {
          id: postUtmsData.id || utm_id,
          url: postUtmsData.url || utm_url,
          source: postUtmsData.source || utm_source,
          medium: postUtmsData.medium || utm_medium,
          campaign: postUtmsData.campaign || utm_campaign,
          term: postUtmsData.term || utm_term,
          content: postUtmsData.content || utm_content,
          clickId: "",
        },
      })
    );
  };

  const getAnonymousUserId = async () => {
    const ip = await GetIPAddress();
    const postUtmsData = JSON.parse(Cookies.get("utms"));
    const utm_id = getQueryParam("utm_id");
    const utm_url = getQueryParam("utm_url");
    const utm_source = getQueryParam("utm_source");
    const utm_medium = getQueryParam("utm_medium");
    const utm_campaign = getQueryParam("utm_campaign");
    const utm_term = getQueryParam("utm_term");
    const utm_content = getQueryParam("utm_content");

    const browser = Bowser.getParser(navigator.userAgent);
    var position = "";

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        position = pos;
      },
      (err) => {
        console.log(`Error getting location: ${err.message}`);
      }
    );
    const data = {
      utm: {
        id: postUtmsData.id || utm_id,
        url: postUtmsData.url || utm_url,
        source: postUtmsData.source || utm_source,
        medium: postUtmsData.medium || utm_medium,
        campaign: postUtmsData.campaign || utm_campaign,
        term: postUtmsData.term || utm_term,
        content: postUtmsData.content || utm_content,
        clickId: "",
      },
      extra: {
        browser:
          browser?.parsedResult.browser.name +
          " " +
          browser?.parsedResult.browser.version,
        operatingSystem: browser?.parsedResult.os.name,
        ipAddress: ip,
        timestamp: "",
        userAgent: "",
        location: position?.timestamp,
      },
      path: currentPath,
    };
    const res = await anonymousUser(data);
    sessionStorage.setItem("anonymousId", res?.data?.data?.anonymousId);
  };

  useEffect(() => {
    extraDetails();
    set_utm();
    if (!anonymousId) {
      getAnonymousUserId();
    }
  }, []);

  return (
    <>
      <Header />
      <Grid sx={{ paddingTop: { xs: "30px", sm: "64px" }}}>
        <Outlet />
      </Grid>
      <Footer />
    </>
  );
};

export default Layout;
