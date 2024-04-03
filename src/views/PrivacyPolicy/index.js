import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import heading from "../../ssr/db/headings.json";
import { setLoanType } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { routeRedirection, scrollToTop } from "../../utils/commonFunctions";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";

const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("loanType");
    routeRedirection(navigate);
    dispatch(setLoanType(""));
    sessionStorage.removeItem("employmentType");
  }, []);
  const CircleIcon = {
    color: "#5ab56b",
    fontSize: "15px",
    marginRight: "10px",
  };

  return (
    <>
      <Helmet>
        <title>{heading.PrivacyPolicy.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={heading.PrivacyPolicy.description}
          data-react-helmet="true"
        />
        <link rel="canonical" href={heading.PrivacyPolicy.canonical} />
      </Helmet>
      <Box>
        <Container maxWidth={"xl"} sx={{ padding: { md: "0 7.5%" } }}>
          <Grid
            container
            sx={{
              paddingTop: "30px",
            }}
          >
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 2.2em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                PRIVACY POLICY
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                This Privacy Policy forms a binding contract between you and
                Zappian Fintech Private Limited including its subsidiaries,
                group companies, and affiliates (“Credmudra”).
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                AN IMPORTANT NOTICE FOR INDIVIDUALS WITHIN THE EUROPEAN UNION
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                The General Data Protection Regulation (GDPR) is a regulation in
                European Union law on data protection and privacy for all
                individuals within the European Union (EU) and the European
                Economic Area (EEA). The GDPR applies to an organisation if it
                collects data from EU residents or processes such data. We are
                not involved in either collecting data from EU residents or in
                processing such data. We do not offer our products or services
                within the EU and the EEA.{" "}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    display: "inline",
                  }}
                >
                  As such, we are not required to conform to the stipulations of
                  the GDPR. Therefore, while we endeavor to implement
                  world-class privacy norms, we do not actively seek compliance
                  with the GDPR. If you are an EU citizen, please be advised
                  that by using this Website or transacting with us, you waive
                  all and any entitlement that may otherwise be available to you
                  under the GDPR.
                </Typography>
                We disclaim any liability to ascertain the applicability of GDPR
                to you and/or to seek your consent of such waiver separately.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                AN IMPORTANT NOTICE FOR CALIFORNIA RESIDENTS
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                The California Consumer Privacy Act (CCPA) is a regulation that
                is intended to enhance privacy rights and consumer protection
                for residents of California, United States. The CCPA provides
                certain rights to California residents with respect to their
                personal data. The CCPA applies to a business that collects
                consumers’ personal data, which does business in California, and
                satisfies certain financial thresholds. We are not involved in
                either collecting data from California residents or in doing
                business in California. We do not offer our products or services
                within California.{" "}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    display: "inline",
                  }}
                >
                  As such, we are not required to conform to the stipulations of
                  the CCPA. Therefore, while we endeavour to implement
                  world-className privacy norms, we do not actively seek
                  compliance with the CCPA. If you are a California resident,
                  please be advised that by using this Website or transacting
                  with us, you waive all and any entitlement that may otherwise
                  be available to you under the CCPA.
                </Typography>{" "}
                We disclaim any liability to ascertain the applicability of CCPA
                to you and/or to seek your consent of such waiver separately.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: " calc(1.3rem + .6vw)",
                  fontWeight: 700,
                  color: "#243771",
                }}
              >
                CONTENTS{" "}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    TERMS USED IN THIS PRIVACY POLICY
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    ABOUT THIS PRIVACY POLICY
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    OUR COMMITMENT TOWARDS PROTECTING PERSONAL INFORMATION
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    WHAT DATA DO WE COLLECT OR PROCESS ABOUT YOU, AND FOR WHAT
                    PURPOSE?
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    WHOM DO WE SHARE YOUR DATA WITH?
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    WHERE DO WE PROCESS YOUR DATA?
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    HOW LONG DO WE RETAIN YOUR DATA?
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    WHAT ARE YOUR RIGHTS REGARDING YOUR DATA WITH US?
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    HOW DO WE USE COOKIES?
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    SECURITY OF YOUR DATA
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    LINK TO OTHER WEBSITES
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    COMMUNICATIONS, ETC.
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    SECURITY OF DATA
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    LIMITATION OF LIABILITY
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    DERIVATIVE DATA
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    CHANGES TO THIS PRIVACY POLICY
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    CONTACT DETAILS
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                TERMS USED IN THIS PRIVACY POLICY
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                In this Privacy Policy:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    “Credmudra Platform” means the set of proprietary APIs,
                    SDKs, tools, plugins, code, technology, content, and
                    services that are made available over the Website and
                    includes the microsites created therefrom.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    “Personal Data” means any information relating to an
                    identified or identifiable natural person.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    “Privacy Policy” means this Privacy Policy.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    “Services” means a service that we provide for a fee or
                    gratis. You are using our Service when you sign up or sign
                    in to get access to any Service provided by us.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    “we”, “us”, “our”, and “Credmudra” refer to Zappian Fintech
                    Private Limited.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    “Website” refers to{" "}
                    <Link to="/" onClick={() => scrollToTop()}>
                      http://www.credmudra.com/
                    </Link>
                    . You are using our Services when you are visiting our
                    website.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    “you” refers to you, as a visitor to the Website and
                    Credmudra Platform, as a user or subscriber of the Services,
                    or as a person whose information is made available to us.
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                ABOUT THIS PRIVACY POLICY
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                We understand the importance of data and its privacy. This
                Privacy Policy explains the type of information we collect or we
                receive, how we handle your information and comply with the
                requirements of applicable privacy laws. All your transactions
                and use of our Services over the Credmudra Platform will be
                covered by the terms of this Privacy Policy.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                This Privacy Policy is applicable to any person who visits the
                Credmudra Platform, or inquiries about our Services, or avails
                our Services, or whose information is otherwise made available
                to us in the context of the Services or otherwise. You may note
                that information and privacy practices of our business partners,
                advertisers, sponsors or other sites to which we provide
                hyperlink(s), may be materially different from this Privacy
                Policy. We recommended that you review the privacy statements
                and policies of any such third parties with whom they interact.
                We do not make any representations concerning the privacy
                practices or policies of such third parties or terms of use of
                such websites, nor do we guarantee the accuracy, integrity, or
                quality of the information and content available on such
                websites. Their inclusion or exclusion on the Credmudra Platform
                does not imply our endorsement.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                This Privacy Policy is implemented in conjunction with the Terms
                of Use, Cookie Policy and Disclaimers and such other policy/
                document as available on the Website and the terms thereof are
                deemed to be included in this Privacy Policy by reference. This
                Privacy Policy is effectively part of the terms of Credmudra
                Platform (i.e., Terms of Use, Privacy Policy, Cookies Policy and
                Disclaimer) and is fundamental to your use of the Credmudra
                Platform. The terms of Credmudra Platform including this Privacy
                Policy will prevail over anything contrary whatsoever.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                OUR COMMITMENT TOWARDS PROTECTING PERSONAL INFORMATION
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                Your privacy is important to us. We will use your personal
                information only in the manner set out in this Privacy Policy.
                We are committed to safeguarding the privacy of our website
                visitors, clients, prospects, and other third-parties. This
                Privacy Policy sets out how we deal with your personal
                information.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                Our commitment towards protecting your personal information
                includes the following obligations:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    We promise to protect your privacy and treat the information
                    you give us as confidential.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    The information you provide to us will be used by us only
                    for the purpose for which it was sought.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    We will never sell your personal data to anyone.{" "}
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    Your decision to provide or not to provide any information
                    will be respected without question.
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                WHAT DATA DO WE COLLECT OR PROCESS ABOUT YOU, AND FOR WHAT
                PURPOSE?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                We collect information, including personal data, about you to be
                able to make the Credmudra Platform and Services useful to you.
                This information may be collected by us from the data which you
                give to us while using our Services or using the Credmudra
                Platform or any third-party sites. We may also derive your
                information from other sources. Such information may, inter
                alia, include the following:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    Your{" "}
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "16px",
                        display: "inline",
                      }}
                    >
                      personal identifiable information
                    </Typography>{" "}
                    including your demographic details (such as your name,
                    gender, marital status, age), contact details (such as your
                    email address, postal addresses, telephone number), identify
                    proofs such as PAN, Aadhaar card number, KYC related
                    documentation, educational qualifications, employment
                    details, information related to your spouse, children and/or
                    parents or information related to family, your
                    health-related information, your insurance related data and
                    your investments related information;
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    Your{" "}
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "16px",
                        display: "inline",
                      }}
                    >
                      financial information
                    </Typography>{" "}
                    including banking details (such as your bank account no.,
                    bank, branch, IFSC), your fiscal details (such as your
                    income and expenses), credit scores, credit bureau data,
                    bank statements, income tax returns, other statutory
                    returns, salary details, mode of salary, monetary
                    requirements, borrowing requirements, loan requirement
                    reasons;
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    Your{" "}
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "16px",
                        display: "inline",
                      }}
                    >
                      technical Information
                    </Typography>{" "}
                    collected by our technology (such as your browser type,
                    operating system, server details, Internet Protocol (IP)
                    address);
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    <strong>Information</strong>{" "}
                    <strong>voluntarily provided by you</strong> while using our
                    Services (such as engaging with third-parties including
                    banks, NBFCs and other financial institutions, our marketing
                    and channel partners associated with the Credmudra
                    Platform);
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    <strong>Information generated while you transact</strong> on
                    Credmudra Platform (such as enquiring or availing a loan
                    from a financial institution or using any loan products or
                    financial products) including information requested by
                    financial instructions and third-party marketing partners
                    and service providers associated with us for processing your
                    loan application or providing you with Services;
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    <strong>Security-related information</strong> used by you
                    while accessing the Credmudra Platform (such as usernames,
                    passwords, email addresses)
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    Information <strong>which you store</strong> on our servers
                    (such as images, documents);
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    Information available <strong>in the public domain</strong>,
                    including over social media platforms (such as your picture,
                    friend list);
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    Information pertaining to any other person in respect of
                    whom <strong>you make disclosures</strong> through the
                    Credmudra Platform or while using our Services (such as a
                    nominee). In such case, you must confirm and represent that
                    each of the other investor(s) for whom an enquiry/
                    transaction has been made, has agreed to have the
                    information shared by you, disclosed to us and further be
                    shared by us with our business partners.
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                We may process the data that we have about you, in the following
                manner.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    We may process data about your use of our Website, Credmudra
                    Platform and our Services (“usage data”). The usage data may
                    include technical information including your IP address,
                    geographical location, browser type and version, operating
                    system, server details, referral source, length of your
                    visit, page views and website navigation paths, as well as
                    information about the timing, frequency and pattern of use
                    of our Service. The source of the usage data is our
                    analytics tracking system. In addition, we may use
                    third-party analytics tracking services such as Google
                    Analytics and Facebook Pixel. This usage data may be
                    processed for the purposes of analysing the use of the
                    Website and Services in order to improve our performance
                    metrices, and for communicating with you. The legal basis
                    for this processing is your consent. In some cases, the
                    legal basis for this processing is our legitimate interests,
                    namely monitoring and improving our Website, Credmudra
                    Platform and our Services.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    We may process your data that is provided to us during the
                    course of you taking assessments on our Website and
                    Credmudra Platform (“response data”). The response data may
                    include your personally identifiable information, financial
                    information and your responses to the questions that we may
                    ask you. The source of the response data is you. The
                    response data may be processed for the purposes of providing
                    our services, ensuring the integrity of our operations and
                    processes, maintaining back-ups of our databases, and for
                    communicating with you. The legal basis for this processing
                    is your consent.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    We may process your information included in your personal
                    profile on our website (“profile data”). The profile data
                    may include your personal information including your name,
                    address, telephone number, email address, profile pictures,
                    gender, date of birth, relationship status, educational
                    details and bank account details. The profile data may be
                    processed for the purposes of enabling and monitoring your
                    use of our Website and Services, for providing Services to
                    you, and for communicating with you. The legal basis for
                    this processing is your consent. In some cases, the legal
                    basis for this processing is our legitimate interests,
                    namely the proper administration and operation of our
                    Website, Credmudra Platform and our Services.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    We may process your personal data, financial data and
                    information generated in the course of the use of our
                    Services (“service data”). The source of the service data is
                    you. The service data may be processed for the purposes of
                    providing our Services, ensuring the security of our
                    Website, Credmudra Platform and our Services, maintaining
                    back-ups of our databases, and for communicating with you.
                    The legal basis for this processing is your consent. In some
                    cases, the legal basis for this processing is our legitimate
                    interests, namely the proper administration of our Website
                    and business. In some cases, the legal basis for this
                    processing is the performance of a contract between you and
                    us and/or taking steps, at your request, to enter into such
                    a contract.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    We may process information that you post for publication on
                    our Website or Credmudra Platform or through our Services
                    (“publication data”). The publication data may be processed
                    for the purposes of enabling such publication and
                    administering our Website and Services. The legal basis for
                    this processing is your consent. In some cases, the legal
                    basis for this processing is our legitimate interests,
                    namely the proper administration of our Website and
                    business. In some cases, the legal basis for this processing
                    is the performance of a contract between you and us and/or
                    taking steps, at your request, to enter into such a
                    contract.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    We may process information contained in any enquiry you
                    submit to us regarding our Services (“enquiry data”). The
                    enquiry data may be processed for the purposes of offering,
                    marketing and selling relevant goods and/or services to you
                    and for and for communicating with you. The legal basis for
                    this processing is your consent.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    We may process information relating to our customer
                    relationships, including customer contact information
                    (“customer relationship data”). The customer relationship
                    data may include your name and your contact details. The
                    source of the customer relationship data is you. The
                    customer relationship data may be processed for the purposes
                    of managing our relationships with you, communicating with
                    you, keeping records of those communications and promoting
                    our products and services to customers. The legal basis for
                    this processing is your consent. In some cases, the legal
                    basis for this processing is our legitimate interests,
                    namely the proper administration of our Website and
                    business. In some cases, the legal basis for this processing
                    is the performance of a contract between you and us and/or
                    taking steps, at your request, to enter into such a
                    contract.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    We may process information relating to transactions
                    including applying for any loans, making a borrowing from
                    the financial institutions, availing loan products or
                    financial products offered by the lending institutions that
                    you enter into with through our Website or Credmudra
                    Platform (“transaction data”). The transaction data may
                    include your personal, financial, technical information or
                    any data that you voluntarily provide or we receive while
                    you transact using our Website or Credmudra Platform. The
                    transaction data may be processed for the purpose of
                    supplying the Services, keeping proper records of those
                    transactions, and for communicating with you. The legal
                    basis for this processing is your consent. In some cases,
                    the legal basis for this processing is our legitimate
                    interests, namely the proper administration of our business.
                    In some cases, the legal basis for this processing is the
                    performance of a contract between you and us and/or taking
                    steps, at your request, to enter into such a contract.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    We may process information that you provide to us for the
                    purpose of subscribing to our email notifications and/or
                    newsletters (“notification data”). The notification data may
                    be processed for the purposes of sending you the relevant
                    notifications and/or newsletters, and for communicating with
                    you. The legal basis for this processing is your consent.
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                    We may process information contained in or relating to any
                    communication that you send to us (“correspondence data”).
                    The correspondence data may include the communication
                    content and metadata associated with the communication. Our
                    website will generate the metadata associated with
                    communications made using the website contact forms. The
                    correspondence data may be processed for the purposes of
                    communicating with you and record-keeping. The legal basis
                    for this processing is your consent. In some cases, the
                    legal basis for this processing is our legitimate interests,
                    namely the proper administration of our Website and business
                    and communications with our business counterparts.
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                In addition to the specific purposes for which we may process
                your personal data set out in this Section, we may process any
                of your personal data identified in this Privacy Policy where
                necessary for:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  the establishment, exercise or defence of legal claims,
                  whether in court proceedings or in an administrative or
                  out-of-court procedure. The legal basis for this processing is
                  our legitimate interests, namely the protection and assertion
                  of our legal rights, your legal rights and the legal rights of
                  others.
                  </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  the purposes of obtaining or maintaining insurance coverage,
                  managing risks, or obtaining professional advice. The legal
                  basis for this processing is our legitimate interests, namely
                  the proper protection of our business against risks.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  compliance with a legal obligation to which we are subject, or
                  in order to protect your vital interests or the vital
                  interests of another natural person.
                </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                We may use your data for the following purposes.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To create and authenticate your account with the Credmudra
                  Platform;
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To identify you as a registered user of the Credmudra Platform
                  and to administer your account;
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To enable you to use the Credmudra Platform and our Services;
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To enable communications between financial institutions such
                  as banks and NBFCs, third-party service providers, marketing
                  partners and channel partner and accordingly facilitates
                  provision of Services to you;
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To access credit information from credit bureaus, with your
                  consent, and identity verification services to facilitate
                  banks and other financial institutions to evaluate your loan
                  request in the context of your complete financial situation
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To facilitate the operations of the Credmudra Platform,
                  including the offer of services to you by banks and other
                  financial institutions; the interaction and communication
                  between you and financial institutions, the organisation of
                  information relating to the aforementioned activities;
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To publish fact-based views and opinions regarding, inter
                  alia, the Services offered on the Credmudra Platform, based on
                  the information available on the Credmudra Platform;
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To improve the quality of your experience when you interact
                  with the Credmudra Platform and use our Services;
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To send you notifications, verification message(s) or
                  email(s);
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To allow our customer service to contact you, if necessary or
                  respond to your queries and assist you with customer service
                  or technical support;
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To send newsletters, surveys, offers, and other promotional
                  materials related to our Services and for other marketing
                  purposes, customer analysis, market research and statistics;
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To request for reviews of our Services or any other
                  improvements;
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  To prevent and detect fraud or abuse of our Services as well
                  as to prevent, detect and investigate any potential unlawful
                  or prohibited activities.
                </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                WHOM DO WE SHARE YOUR DATA WITH?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                By accepting this Privacy Policy, you hereby consent to the use
                of your personal data by Credmudra for the purposes listed
                below. We may share your data with legal or statutory or
                regulatory agencies or authorities; our employees, officers,
                advisors and agents; our marketing partners, our channel
                partners, transactional counterparties such as including banks,
                NBFCs, financial institutions or service providers acting on our
                behalf (as the case may be), etc. solely for the purposes listed
                in this Privacy Policy.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                We may share the information given by you with third parties
                where we feel that such third parties may{" "}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    display: "inline",
                  }}
                >
                  improve the quality of services{" "}
                </Typography>
                imparted by us to you. Additionally, we also employ third-party
                service providers and individuals{" "}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    display: "inline",
                  }}
                >
                  to provide the Service on our behalf; or to perform
                  Service-related services; or to assist us in analysing how our
                  Services are used
                </Typography>
                .
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                We may collect financial information and disclose the same to
                third-parties as necessary to{" "}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    display: "inline",
                  }}
                >
                  complete billing operations
                </Typography>
                . We may require you to make payments for the Services availed
                by using your credit card, wire transfer, debit card or
                cheque/cash. Verification of credit information, however, is
                accomplished solely by you through the authentication process.
                Your credit card/debit card details are transacted upon secure
                sites of approved payment gateways which are digitally under
                encryption, thereby providing the highest possible degree of
                care as per current technology. We provide you an option not to
                save your payment details. You are advised, however, that
                internet technology is not fully safe and you should exercise
                discretion while using the same.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                In addition to the specific disclosures of personal data set out
                in this Section, we may disclose your personal data where such
                disclosure is necessary for{" "}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    display: "inline",
                  }}
                >
                  compliance with a legal obligation
                </Typography>{" "}
                to which we are subject, or in order to protect your vital
                interests or the vital interests of another natural person. We
                may also disclose your personal data where such disclosure is
                necessary for the establishment, exercise or defence of legal
                claims, whether in court proceedings or in an administrative or
                out-of-court procedure.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                We only share your personal data on a partial and “need-to-know”
                basis with any third party. We shall take all reasonable steps
                to ensure that the confidentiality of your information is
                maintained by imposing strict confidentiality standards on all
                the third parties with whom we part this information. In all
                circumstances we shall ensure that your personal information is
                protected by strict confidentiality terms. We shall not allow
                any third parties to retain your personal information longer
                than what is warranted by the nature of services rendered.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                By agreeing to avail the service offered by Credmudra, you
                agreed to the collection, use and sharing of your personal data
                or Information by Credmudra as per the terms of this Privacy
                Policy.{" "}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    display: "inline",
                  }}
                >
                  You always have the right to refuse or withdraw your consent
                  to share/dissemination of your personal data by contacting us
                  as per the details provided in this Privacy Policy.{" "}
                </Typography>
                However, in such an event, you may no longer be eligible to
                avail our services.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                In the rare but possible circumstance that the information is
                subject to disclosure pursuant to judicial or other government
                subpoenas, warrants, orders or for similar legal or regulatory
                requirements.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                WHERE DO WE PROCESS AND STORE YOUR DATA?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                Your data will be processed and stored in India.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "18px",
                  marginBottom: "1.5em",
                  fontWeight: "bold",
                }}
              >
                HOW LONG DO WE RETAIN YOUR DATA?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                Your personal data that we process for any purpose or purposes
                shall not be kept for longer than is necessary for that purpose
                or those purposes. Subject to exceptions based on your
                continuing use of the Credmudra Platform, we intend retain your
                personal data as follows:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Usage data will be retained for a minimum period of one week
                  following the date of your visit, and for a maximum period of
                  ten years following the date of your last visit.
                  </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Response data will be retained for a minimum period of one
                  month following the submission of your response, and for a
                  maximum period of ten years following the submission of your
                  last response.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Profile data will be retained for a minimum period of one day
                  following the date of deletion of your profile on our Website,
                  and for a maximum period of ten years following such deletion.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Service data will be retained for a minimum period of one
                  month following the fulfilment of the Service, and for a
                  maximum period of ten years following the last date on which
                  any obligation in respect of such Service concludes.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Publication data will be retained for a minimum period of one
                  week following the publication of such data, and for a maximum
                  period of ten years following the date on which such data is
                  removed from such publication.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Enquiry data will be retained for a minimum period of one day
                  following the date of the enquiry, and for a maximum period of
                  ten years following the date of the enquiry.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Customer relationship data will be retained for a minimum
                  period of one month following the conclusion of the said
                  relationship, and for a maximum period of ten years following
                  the conclusion of the said relationship.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Transaction data will be retained for a minimum period of one
                  week following the date of the transaction, and for a maximum
                  period of ten years following the date of the last
                  transaction.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Notification data will be retained for a minimum period of one
                  day following the date of unsubscribing from our newsletters,
                  and for a maximum period of ten years following the date of
                  request for such unsubscribing.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Correspondence data will be retained for a minimum period of
                  one day following the date of the communication, and for a
                  maximum period of twenty years following the date of the
                  communication.
                </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                In some cases, it is not possible for us to specify in advance
                the periods for which your personal data will be retained. In
                such cases, we will determine the period of retention based on
                the following criteria:
              </Typography>
            </Grid>
            <figure className="wp-block-table">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Sl.</strong>
                    </td>
                    <td>
                      <strong>Category of Data</strong>
                    </td>
                    <td>
                      <strong>
                        Factors on which period of retention will be based
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>1.</td>
                    <td>Usage data</td>
                    <td>Parameters of usage being analysed</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Response data</td>
                    <td>Requirements of law</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Profile data</td>
                    <td>Nature of utilization of profile</td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>Service data</td>
                    <td>Nature of Service; requirements of law</td>
                  </tr>
                  <tr>
                    <td>5.</td>
                    <td>Publication data</td>
                    <td>
                      Means of publication; citation of publication in other
                      works
                    </td>
                  </tr>
                  <tr>
                    <td>6.</td>
                    <td>Enquiry data</td>
                    <td>Means of enquiry; nature of Service enquired for</td>
                  </tr>
                  <tr>
                    <td>7.</td>
                    <td>Customer relationship data</td>
                    <td>Nature of relationship; requirements of law</td>
                  </tr>
                  <tr>
                    <td>8.</td>
                    <td>Transaction data</td>
                    <td>Nature of transaction; requirements of law</td>
                  </tr>
                  <tr>
                    <td>9.</td>
                    <td>Notification data</td>
                    <td>Terms of opt-in</td>
                  </tr>
                  <tr>
                    <td>10.</td>
                    <td>Correspondence data</td>
                    <td>Nature of correspondence; requirements of law</td>
                  </tr>
                </tbody>
              </table>
            </figure>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                Notwithstanding the foregoing provisions of this Section, we may
                retain your personal data where such retention is necessary for
                compliance with a legal obligation to which we are subject, or
                where we reasonably believe that the retention of such data is
                required in order to protect your or any third-party interest.
                You understand that financial institutions who has evaluated
                your data for credit or any entity who has provided their
                service through us may store all the data collected as per their
                statutory and regulatory requirement.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "18px",
                  marginBottom: "1.5em",
                  fontWeight: "bold",
                }}
              >
                WHAT ARE YOUR RIGHTS REGARDING YOUR DATA WITH US?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                This Section summarises the rights that you have in respect of
                your data. Please note that some of the rights available to you
                are subject to the requirements of the applicable law. You may
                peruse the relevant laws for a complete understanding your
                rights. Your principal rights concerning your personal data are
                as below:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Right to access: You have the right to confirmation as to
                  whether or not we process your personal data and, where we do,
                  access to the personal data, together with certain additional
                  information. That additional information includes details of
                  the purposes of the processing, the categories of personal
                  data concerned and the recipients of the personal data.
                  Subject to the condition that the rights and freedoms of
                  others are not affected, we will supply to you a copy of your
                  personal data. The first copy will be provided free of charge,
                  but additional copies may be subject to a reasonable fee.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Right to rectification: You have the right to have any
                  inaccurate personal data about you rectified and, taking into
                  account the purposes of the processing, to have any incomplete
                  personal data about you completed.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Right to erasure: In certain circumstances you have the right
                  to the erasure of your personal data without undue delay.
                  However, there are exclusions of the right to erasure. The
                  general exclusions include where processing is necessary: for
                  exercising the right of freedom of expression and information;
                  for compliance with a legal obligation; or for the
                  establishment, exercise or defence of legal claims.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Right to restrict processing: In some circumstances you have
                  the right to restrict the processing of your personal data.
                  Those circumstances are: you contest the accuracy of the
                  personal data; processing is unlawful but you do not desire
                  erasure; we no longer need the personal data for the purposes
                  of our processing, but you require personal data for the
                  establishment, exercise or defence of legal claims; and you
                  have objected to processing, pending the verification of that
                  objection. Where processing has been restricted on this basis,
                  we may continue to store your personal data. However, we will
                  only otherwise process it: with your consent; for the
                  establishment, exercise or defence of legal claims; for the
                  protection of the rights of another natural or legal person;
                  or for reasons of important public interest.
                </Typography>
                </ListItem>

                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Right to object to processing: In some circumstances, you have
                  the right to object to our processing of your personal data on
                  grounds relating to your particular situation, but only to the
                  extent that the legal basis for the processing is that the
                  processing is necessary for the performance of a task carried
                  out in the public interest or in the exercise of any official
                  authority vested in us; or the purposes of the legitimate
                  interests pursued by us or by a third party. If you make such
                  an objection, we will cease to process the personal
                  information unless we can demonstrate compelling legitimate
                  grounds for the processing which override your interests,
                  rights and freedoms, or the processing is for the
                  establishment, exercise or defence of legal claims.
                </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                You have the right to object to our processing of your personal
                data for direct marketing purposes (including profiling for
                direct marketing purposes). If you make such an objection, we
                will cease to process your personal data for this purpose.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                You have the right to object to our processing of your personal
                data for scientific or historical research purposes or
                statistical purposes on grounds relating to your particular
                situation, unless the processing is necessary for the
                performance of a task carried out for reasons of public
                interest.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                   <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Right to data portability: To the extent that the legal basis
                  for our processing of your personal data is: (a) consent; or
                  (b) that the processing is necessary for the performance of a
                  contract to which you are party or in order to take steps at
                  your request prior to entering into a contract, and such
                  processing is carried out by automated means, you have the
                  right to receive your personal data from us in a structured,
                  commonly used and machine-readable format. However, this right
                  does not apply where it would adversely affect the legal or
                  contractual rights of third-parties or where the law requires
                  otherwise.
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                You may exercise any of your rights in relation to your personal
                data by a written notice to us. In order for us to comply with
                your request, your notice must clearly state the right that you
                wish to exercise and identify your information in respect of
                which you wish to exercise such right. Please note that as a
                security measure, we may require you to verify your identity
                before accepting any request concerning your personal data.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "18px",
                  marginBottom: "1.5em",
                  fontWeight: "bold",
                }}
              >
                HOW DO WE USE COOKIES?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                Cookies are small pieces of text stored by a website you visit
                in your browser and subsequently sent by your web browser in
                every request to the website. Cookies do not typically contain
                any information that personally identifies you, but personal
                information that we store about you may be linked to the
                information stored in and obtained from cookies. You may change
                the options on your web browser and block cookies. However,
                blocking cookies may disable certain features on the Credmudra
                Platform, and may hinder an otherwise seamless experience to use
                our Services. You can find more information about the types of
                cookies that we, and certain third parties use, why we use them,
                and how to manage them in our Cookie Policy.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "18px",
                  marginBottom: "1.5em",
                  fontWeight: "bold",
                }}
              >
                SECURITY OF YOUR DATA
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                We will make commercially reasonably efforts to secure the data
                provided to us and adopt reasonable security practices to ensure
                that the information collected is secured as per the applicable
                laws in India. If credentials are used to help protect your
                accounts and account information, it is your responsibility to
                keep the such credentials confidential. You have to ensure that
                you always log out, before sharing the device with a third party
                and it is advised that you utilize a Service to protect access
                to such device.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                Our information security policy may contain managerial,
                technical, operational and physical security control measures
                that may be commensurate with the information being protected
                herein. We are committed to continuously develop and implement
                administrative, technical and physical security measures to
                protect such information from unauthorized access or against
                loss, misuse or alteration. While we{" "}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    display: "inline",
                  }}
                >
                  endeavour
                </Typography>{" "}
                to take all reasonable and appropriate steps to keep secure the
                information collected and prevent unauthorized access, you
                acknowledge that the internet is not entirely secure and that we
                cannot and therefore do not provide any absolute assurance
                regarding the security of the information collected. We also
                cannot warrant that such your information may not be misused in
                the event our safeguards and protocols are breached by a
                malicious third-party. Further, we are not liable to, nor can we
                fully control the actions of other users with whom you may
                choose to share your information.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                If any security breach comes to our knowledge, then we may take
                all steps required to protect misuse of such information:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Secure areas potentially related to the breach and mobilize IT
                  team to prevent additional data loss;
                  </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Switch off the servers and change the access code to prevent
                  additional data loss;
               </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >Fix vulnerabilities; </Typography>
                  </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Identify the sensitivity of data breached and possible impact;
               </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Notify the appropriate regulatory/Statutory Bodies and
                  affected parties;
               </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  Take the steps to improve the system security on a going
                  forward basis.
               </Typography>
                </ListItem>
              </List>
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "18px", fontWeight: "bold" }}
              >
                LINK TO OTHER WEBSITES
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                Our services may contain links to other websites that are not
                operated by us. If you click on a third-party link, you will be
                directed to that third party’s site. We strongly advise you to
                review the privacy policy of every site you visit. We have no
                control over and assume no responsibility for the content,
                privacy policies or practices of any third-party sites or
                services.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong>COMMUNICATIONS</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                You may receive email updates from us through our newsletters,
                surveys, offers, and other promotional materials related to our
                Services. We hope you will find these updates interesting and
                informative. If you wish not to receive them, please click on
                the “unsubscribe” link or follow the instructions in each
                message. You may share your feedback and comments with us,
                including that relating to an issue or incidence. To report an
                incidence regarding your data, you may contact us using our
                contact details and inform us about such incidence.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong>LIMITATION OF LIABILITY</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                We are not be responsible for verifying the authenticity of the
                information supplied by you. In case of any erroneous data, our
                liability is limited to removal of such data from our system. We
                are not liable for any data loss or theft due to an unauthorized
                access to your computer or device. We shall not be responsible
                for any breach of security or for any actions of any third
                parties that receives your personal data or events that are
                beyond our reasonable control including, acts of government,
                computer hacking, unauthorised access to computer data and
                storage device, computer crashes, breach of security and
                encryption, poor quality of internet service or telephone
                service etc. Our liability is strictly limited in all cases to
                the extent set out in the Terms of Use document; please read the
                Terms of Use document before sharing your data with us.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong>DERIVATIVE DATA</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                We may generate derived data and anonymous statistical
                information based on the data available on the Credmudra
                Platform. Such derived data and anonymous statistical
                information shall not identify you at a personal level, and
                shall be exclusively our property. We may use such data or
                information for any legitimate purpose as we may determine,
                without any compensation to you.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong>CHANGES TO THIS PRIVACY POLICY</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page. You are advised to review this Privacy Policy
                periodically for any changes. Changes to this Privacy Policy are
                effective when they are posted on this page.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong>CONTACT DETAILS</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                This Website and the Credmudra Platform is owned and operated by
                Zappian Fintech Private Limited.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  We are registered in India under registration number
                  U74999MP2022PTC062894, and our registered office address is:
                  3rd Floor, A 305, Rustomjee Central Park, Andheri-Kurla Road,
                  Opp. Kanakia Wall Street, Andheri (East), Mumbai – 400059,
                  Maharashtra, India;
               </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  You can contact us (a) by post: at our registered office
                  address provided above; or (b) by email: on [email];
               </Typography>
                </ListItem>

                <ListItem
                  sx={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}
                >
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 300,
                      position: "relative",
                    }}
                  >
                  For any request that is not attended to your satisfaction, you
                  may reach out to Mr. [mention name], Grievance Officer, on
                  [email address] or on [phone number].
               </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                We appreciate you taking the time to read this Privacy Policy.
                We know that you are placing your trust in us when you choose to
                share your personal information with us and we intend to use it
                responsibly.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                Who we are
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong className="privacy-policy-tutorial">
                  Suggested text:{" "}
                </strong>
                Our website address is: https://www.credmudra.com.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                Comments
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong className="privacy-policy-tutorial">
                  Suggested text:{" "}
                </strong>
                When visitors leave comments on the site we collect the data
                shown in the comments form, and also the visitor’s IP address
                and browser user agent string to help spam detection.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                An anonymized string created from your email address (also
                called a hash) may be provided to the Gravatar service to see if
                you are using it. The Gravatar service privacy policy is
                available here: https://automattic.com/privacy/. After approval
                of your comment, your profile picture is visible to the public
                in the context of your comment.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                Media
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong className="privacy-policy-tutorial">
                  Suggested text:{" "}
                </strong>
                If you upload images to the website, you should avoid uploading
                images with embedded location data (EXIF GPS) included. Visitors
                to the website can download and extract any location data from
                images on the website.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                Cookies
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong className="privacy-policy-tutorial">
                  Suggested text:{" "}
                </strong>
                If you leave a comment on our site you may opt-in to saving your
                name, email address and website in cookies. These are for your
                convenience so that you do not have to fill in your details
                again when you leave another comment. These cookies will last
                for one year.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                If you visit our login page, we will set a temporary cookie to
                determine if your browser accepts cookies. This cookie contains
                no personal data and is discarded when you close your browser.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                When you log in, we will also set up several cookies to save
                your login information and your screen display choices. Login
                cookies last for two days, and screen options cookies last for a
                year. If you select “Remember Me”, your login will persist for
                two weeks. If you log out of your account, the login cookies
                will be removed.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                If you edit or publish an article, an additional cookie will be
                saved in your browser. This cookie includes no personal data and
                simply indicates the post ID of the article you just edited. It
                expires after 1 day.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                Embedded content from other websites
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong className="privacy-policy-tutorial">
                  Suggested text:{" "}
                </strong>
                Articles on this site may include embedded content (e.g. videos,
                images, articles, etc.). Embedded content from other websites
                behaves in the exact same way as if the visitor has visited the
                other website.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                These websites may collect data about you, use cookies, embed
                additional third-party tracking, and monitor your interaction
                with that embedded content, including tracking your interaction
                with the embedded content if you have an account and are logged
                in to that website.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                Who we share your data with
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong className="privacy-policy-tutorial">
                  Suggested text:{" "}
                </strong>
                If you request a password reset, your IP address will be
                included in the reset email.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                How long we retain your data
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong className="privacy-policy-tutorial">
                  Suggested text:{" "}
                </strong>
                If you leave a comment, the comment and its metadata are
                retained indefinitely. This is so we can recognize and approve
                any follow-up comments automatically instead of holding them in
                a moderation queue.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                For users that register on our website (if any), we also store
                the personal information they provide in their user profile. All
                users can see, edit, or delete their personal information at any
                time (except they cannot change their username). Website
                administrators can also see and edit that information.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                What rights you have over your data
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong className="privacy-policy-tutorial">
                  Suggested text:{" "}
                </strong>
                If you have an account on this site, or have left comments, you
                can request to receive an exported file of the personal data we
                hold about you, including any data you have provided to us. You
                can also request that we erase any personal data we hold about
                you. This does not include any data we are obliged to keep for
                administrative, legal, or security purposes.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: " 1.8em",
                  fontWeight: "900",
                  marginBottom: "25px",
                  marginTop: 0,
                  color: "#243771",
                  letterSpacing: 0,
                }}
              >
                Where your data is sent
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", marginBottom: "1.5em" }}
              >
                <strong className="privacy-policy-tutorial">
                  Suggested text:{" "}
                </strong>
                Visitor comments may be checked through an automated spam
                detection service.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
