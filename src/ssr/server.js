import path from "path";
import fs from "fs";
import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { matchPath } from "react-router-dom";
import IndexSSR from "../../src/indexSSR";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import store from "../redux/store";
import heading from "./db/headings.json";
const cheerio = require("cheerio");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const PORT = process.env.SSR_PORT;
const app = express();

const routes = [
  "/",
  "/business-loan",
  "/personal-loan",
  "/debt-consolidation",
  "/personal-loan-for-medical-emergency",
  "/personal-loan-for-travel",
  "/personal-loan-for-two-wheeler",
  "/personal-loan-for-home-renovation",
  "/personal-loan-eligibility",
  "/personal-loan-interest-rate",
  "/personal-loan-emi-calculator",
  "/about-us",
  "/terms-and-conditions",
  "/privacy-policy",
  "/get-registered",
  "/get-registered/user-number",
  "/get-registered/verify-user",
  "/get-registered/loan",
  "/get-registered/employe-type",
  "/get-registered/salaried",
  "/get-registered/selfemployed",
  "/get-registered/personaldetails",
  "/get-registered/addressdetails",
  "/get-registered/otherdetails",
  "/get-registered/submit",
  "/get-registered/offers",
  "/get-registered/marketplace",
  "/business-loan/get-registered",
  "/sitemap.xml",
  "/robots.txt",

  "/business-loan/",
  "/personal-loan/",
  "/debt-consolidation/",
  "/personal-loan-for-medical-emergency/",
  "/personal-loan-for-travel/",
  "/personal-loan-for-two-wheeler/",
  "/personal-loan-for-home-renovation/",
  "/personal-loan-eligibility/",
  "/personal-loan-interest-rate/",
  "/personal-loan-emi-calculator/",
  "/about-us/",
  "/terms-and-conditions/",
  "/privacy-policy/",
  "/get-registered/",
  "/get-registered/user-number/",
  "/get-registered/verify-user/",
  "/get-registered/loan/",
  "/get-registered/employe-type/",
  "/get-registered/salaried/",
  "/get-registered/selfemployed/",
  "/get-registered/personaldetails/",
  "/get-registered/addressdetails/",
  "/get-registered/otherdetails/",
  "/get-registered/submit/",
  "/get-registered/offers/",
  "/get-registered/marketplace/",
  "/business-loan/get-registered/",
  "/sitemap.xml/",
  "/robots.txt/",
  "/not-found",
];

app.get("*", async (req, res, next) => {
  const activeRoute = routes.find((route) =>
    matchPath({ path: route }, req.path)
  );

  if (
    !req.path.startsWith("/static/") &&
    !req.path.startsWith("/assets/") &&
    !req.path.startsWith("/favicon.ico") &&
    !req.path.startsWith("/manifest.json") &&
    !req.path.startsWith("/credmudra_192x192-logo.png") &&
    !req.path.startsWith("/credmudra_512x512-logo.png") &&
    !req.path.startsWith("/credmudra.png") &&
    !routes.includes(req.path)
  ) {
    return res.redirect("/not-found");
  }

  const helmet = Helmet.renderStatic();
  switch (activeRoute) {
    case "/":
      helmet.title = heading.landingPage.title;
      helmet.link = heading.landingPage.canonical;
      helmet.meta = heading.landingPage.description;
      break;
    case "/business-loan":
      helmet.title = heading.businessPage.title;
      helmet.link = heading.businessPage.canonical;
      helmet.meta = heading.businessPage.description;
      break;

    case "/personal-loan":
      helmet.title = heading.personalLoan.title;
      helmet.link = heading.personalLoan.canonical;
      helmet.meta = heading.personalLoan.description;
      break;
    case "/debt-consolidation":
      helmet.title = heading.debtConsolidation.title;
      helmet.link = heading.debtConsolidation.canonical;
      helmet.meta = heading.debtConsolidation.description;
      break;

    case "/personal-loan-for-medical-emergency":
      helmet.title = heading.medicalEmergency.title;
      helmet.link = heading.medicalEmergency.canonical;
      helmet.meta = heading.medicalEmergency.description;
      break;

    case "/personal-loan-for-travel":
      helmet.title = heading.travalLoan.title;
      helmet.link = heading.travalLoan.canonical;
      helmet.meta = heading.travalLoan.description;
      break;

    case "/personal-loan-for-two-wheeler":
      helmet.title = heading.twoWheeler.title;
      helmet.link = heading.twoWheeler.canonical;
      helmet.meta = heading.twoWheeler.description;
      break;

    case "/personal-loan-for-home-renovation":
      helmet.title = heading.homeRenovation.title;
      helmet.link = heading.homeRenovation.canonical;
      helmet.meta = heading.homeRenovation.description;
      break;

    case "/personal-loan-eligibility":
      helmet.title = heading.Eligibility.title;
      helmet.link = heading.Eligibility.canonical;
      helmet.meta = heading.Eligibility.description;
      break;

    case "/personal-loan-emi-calculator":
      helmet.title = heading.EMIcalculate.title;
      helmet.link = heading.EMIcalculate.canonical;
      helmet.meta = heading.EMIcalculate.description;
      break;

    case "/about-us":
      helmet.title = heading.about.title;
      helmet.link = heading.about.canonical;
      helmet.meta = heading.about.description;
      break;

    case "/terms-and-conditions":
      helmet.title = heading.TermsAndCondition.title;
      helmet.link = heading.TermsAndCondition.canonical;
      helmet.meta = heading.TermsAndCondition.description;
      break;

    case "/privacy-policy":
      helmet.title = heading.PrivacyPolicy.title;
      helmet.link = heading.PrivacyPolicy.canonical;
      helmet.meta = heading.PrivacyPolicy.description;
      break;

    case "/personal-loan-interest-rate":
      helmet.title = heading.InterestRate.title;
      helmet.link = heading.InterestRate.canonical;
      helmet.meta = heading.InterestRate.description;
      break;

    case "/get-registered":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/get-registered/user-number":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/get-registered/verify-user":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/get-registered/loan":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/get-registered/employe-type":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/get-registered/selfemployed":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/get-registered/salaried":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/get-registered/personaldetails":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/get-registered/addressdetails":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/get-registered/otherdetails":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/get-registered/submit":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/get-registered/offers":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/get-registered/marketplace":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    case "/business-loan/get-registered":
      helmet.title = heading.getRegister.title;
      helmet.link = heading.getRegister.canonical;
      helmet.meta = heading.getRegister.description;
      break;
    default:
      helmet.title = "Error";
      helmet.link = "Error";
      helmet.meta = "Error";
      break;
  }

  if (activeRoute === "/sitemap.xml") {
    const sitemapPath = path.resolve(__dirname, "./sitemap.xml");
    const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");

    res.setHeader("Content-Type", "application/xml");
    return res.send(sitemapContent);
  } else if (activeRoute === "/robots.txt") {
    const robotsPath = path.resolve(__dirname, "./robots.txt");
    const robotsContent = fs.readFileSync(robotsPath, "utf-8");
    res.setHeader("Content-Type", "text/plain");
    return res.send(robotsContent);
  } else if (activeRoute) {
    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <Provider store={store}>
          <IndexSSR />
        </Provider>
      </StaticRouter>
    );

    const indexFile = path.resolve(
      process.env.NODE_ENV === "production"
        ? "./index.html"
        : "./build/index.html"
    );
    fs.readFile(indexFile, "utf8", (err, data) => {
      if (err) {
        console.error("Something went wrong:", err);
        return res.status(500).send("Oops, better luck next time!");
      }
      let $ = cheerio.load(data);

      $("html").attr("lang", helmet.htmlAttributes.lang);
      $("title").text(helmet.title.toString());
      $('meta[name="description"]').attr("content", helmet.meta.toString());
      $('link[rel="canonical"]').attr("href", helmet.link.toString());
      return res.send(
        $.html().replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  } else {
    next();
  }
});

if (process.env.NODE_ENV === "development") {
  app.use(express.static("./.ssr-server-cache"));
  app.use(express.static("./build"));
} else {
  app.use(express.static("./"));
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
