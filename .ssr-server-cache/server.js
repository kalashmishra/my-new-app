/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/indexSSR.js":
/*!*************************!*\
  !*** ./src/indexSSR.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_assets_Style_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/Style/loader.css */ \"./src/assets/Style/loader.css\");\n\n\nconst IndexSSR = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: \"flex\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      height: \"100vh\",\n      width: \"100vw\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"loader\"\n  }, \"Loading\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexSSR);\n\n//# sourceURL=webpack://Credmudra/./src/indexSSR.js?");

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// src/redux/reducers/index.js\nconst initialState = {\n  formData: {\n    leadId: \"\",\n    stage: \"\",\n    contactNo: \"\",\n    termsAndCondition: true,\n    loan: {\n      reason: \"\",\n      otherReason: \"\",\n      amount: 1000,\n      tenure: 1\n    },\n    panCard: \"\",\n    // aadharNo:\"\",\n    emailId: \"\",\n    employmentType: \"\",\n    employmentDetails: {\n      companyTypeId: \"\",\n      industryTypeId: \"\",\n      companyName: \"\",\n      designation: \"\",\n      address: \"\",\n      pinCode: \"\",\n      countryId: \"\",\n      stateId: \"\",\n      cityId: \"\",\n      yearsWorkingIn: \"\",\n      businessTypeId: \"\",\n      professionTypeId: \"\",\n      turnover: \"\",\n      monthlyProfit: \"\",\n      income: \"\",\n      salaryMode: \"\",\n      bankId: \"\",\n      currentAccountBankId: \"\",\n      savingAccountBankId: \"\",\n      businessOwnedId: \"\",\n      gst: \"\"\n    },\n    personalInfo: {\n      emailId: \"\",\n      firstName: \"\",\n      lastName: \"\",\n      genderId: \"\",\n      dateOfBirth: \"\",\n      qualificationId: \"\",\n      maritalStatus: \"\"\n    },\n    address: {\n      addressLine1: \"\",\n      addressLine2: \"\",\n      pinCode: \"\",\n      countryId: \"\",\n      stateId: \"\",\n      cityId: \"\",\n      residenceTypeId: \"\",\n      yearsLivingIn: \"\"\n    },\n    finance: {\n      panCard: \"\"\n      // aadharNo:\"\"\n    },\n\n    others: {\n      totalEmiPaidMonthly: 0,\n      interestedToGetCreditCard: true\n    },\n    utm: {\n      id: \"\",\n      url: \"\",\n      source: \"\",\n      medium: \"\",\n      campaign: \"\",\n      term: \"\",\n      content: \"\",\n      clickId: \"\"\n    },\n    extras: {\n      browser: \"\",\n      operatingSystem: \"\",\n      ipAddress: \"\",\n      timestamp: \"\",\n      userAgent: \"\",\n      location: \"\"\n    }\n  },\n  isLoading: false,\n  companyTypeList: [],\n  businessOwnedList: [],\n  businessTypeList: [],\n  industryTypeList: [],\n  bankList: [],\n  qualificationsList: [],\n  genderTypesList: [],\n  residenceTypesList: [],\n  loanReasonList: [],\n  companyAddress: {\n    city: \"\",\n    state: \"\",\n    country: \"\"\n  },\n  personalAddress: {\n    city: \"\",\n    state: \"\",\n    country: \"\"\n  },\n  LendersDetails: {},\n  loanType: \"\",\n  employType: \"\",\n  pinCodeError: {\n    companyPincode: \"\",\n    addressPincode: \"\"\n  }\n};\nconst rootReducer = function () {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case \"SET_FORM\":\n      return {\n        ...state,\n        formData: {\n          ...state.formData,\n          ...action.payload\n        }\n      };\n    case \"SET_BUSINESS_OWNED\":\n      return {\n        ...state,\n        businessOwnedList: action.payload\n      };\n    case \"SET_BUSINESS_TYPE\":\n      return {\n        ...state,\n        businessTypeList: action.payload\n      };\n    case \"SET_INDUSTRY_TYPE\":\n      return {\n        ...state,\n        industryTypeList: action.payload\n      };\n    case \"SET_BANKS\":\n      return {\n        ...state,\n        bankList: action.payload\n      };\n    case \"SET_COMPANY_TYPE\":\n      return {\n        ...state,\n        companyTypeList: action.payload\n      };\n    case \"SET_LOAN_REASON\":\n      return {\n        ...state,\n        loanReasonList: action.payload\n      };\n    case \"SET_QUALIFICATIONS\":\n      return {\n        ...state,\n        qualificationsList: action.payload\n      };\n    case \"SET_GENDER_TYPE\":\n      return {\n        ...state,\n        genderTypesList: action.payload\n      };\n    case \"SET_RESIDENCE_TYPE\":\n      return {\n        ...state,\n        residenceTypesList: action.payload\n      };\n    case \"SET_COMPANY_ADDRESS\":\n      return {\n        ...state,\n        companyAddress: action.payload\n      };\n    case \"SET_PERSONAL_ADDRESS\":\n      return {\n        ...state,\n        personalAddress: action.payload\n      };\n    case \"SET_ISLOADING\":\n      return {\n        ...state,\n        isLoading: action.payload\n      };\n    case \"SET_LENDER_DETAILS\":\n      return {\n        ...state,\n        LendersDetails: action.payload\n      };\n    case \"SET_LOAN_TYPE\":\n      return {\n        ...state,\n        loanType: action.payload\n      };\n    case \"SET_EMPLOY_TYPE\":\n      return {\n        ...state,\n        employType: action.payload\n      };\n    case \"SET_PINCODE_ERROR\":\n      return {\n        ...state,\n        pinCodeError: action.payload\n      };\n    default:\n      return state;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n\n//# sourceURL=webpack://Credmudra/./src/redux/reducers/index.js?");

/***/ }),

/***/ "./src/redux/store/index.js":
/*!**********************************!*\
  !*** ./src/redux/store/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./src/redux/reducers/index.js\");\n// src/redux/store.js\n\n\n // You'll create this shortly\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack://Credmudra/./src/redux/store/index.js?");

/***/ }),

/***/ "./src/ssr/server.js":
/*!***************************!*\
  !*** ./src/ssr/server.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_indexSSR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/indexSSR */ \"./src/indexSSR.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store/index.js\");\n/* harmony import */ var _db_headings_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./db/headings.json */ \"./src/ssr/db/headings.json\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst cheerio = __webpack_require__(/*! cheerio */ \"cheerio\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv.config({\n  path: \"./.env\"\n});\nconst PORT = process.env.SSR_PORT;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\nconst routes = [\"/\", \"/business-loan\", \"/personal-loan\", \"/debt-consolidation\", \"/personal-loan-for-medical-emergency\", \"/personal-loan-for-travel\", \"/personal-loan-for-two-wheeler\", \"/personal-loan-for-home-renovation\", \"/personal-loan-eligibility\", \"/personal-loan-interest-rate\", \"/personal-loan-emi-calculator\", \"/about-us\", \"/terms-and-conditions\", \"/privacy-policy\", \"/get-registered\", \"/get-registered/user-number\", \"/get-registered/verify-user\", \"/get-registered/loan\", \"/get-registered/employe-type\", \"/get-registered/salaried\", \"/get-registered/selfemployed\", \"/get-registered/personaldetails\", \"/get-registered/addressdetails\", \"/get-registered/otherdetails\", \"/get-registered/submit\", \"/get-registered/offers\", \"/get-registered/marketplace\", \"/business-loan/get-registered\", \"/sitemap.xml\", \"/robots.txt\", \"/business-loan/\", \"/personal-loan/\", \"/debt-consolidation/\", \"/personal-loan-for-medical-emergency/\", \"/personal-loan-for-travel/\", \"/personal-loan-for-two-wheeler/\", \"/personal-loan-for-home-renovation/\", \"/personal-loan-eligibility/\", \"/personal-loan-interest-rate/\", \"/personal-loan-emi-calculator/\", \"/about-us/\", \"/terms-and-conditions/\", \"/privacy-policy/\", \"/get-registered/\", \"/get-registered/user-number/\", \"/get-registered/verify-user/\", \"/get-registered/loan/\", \"/get-registered/employe-type/\", \"/get-registered/salaried/\", \"/get-registered/selfemployed/\", \"/get-registered/personaldetails/\", \"/get-registered/addressdetails/\", \"/get-registered/otherdetails/\", \"/get-registered/submit/\", \"/get-registered/offers/\", \"/get-registered/marketplace/\", \"/business-loan/get-registered/\", \"/sitemap.xml/\", \"/robots.txt/\", \"/not-found\"];\napp.get(\"*\", async (req, res, next) => {\n  const activeRoute = routes.find(route => (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.matchPath)({\n    path: route\n  }, req.path));\n  if (!req.path.startsWith(\"/static/\") && !req.path.startsWith(\"/assets/\") && !req.path.startsWith(\"/favicon.ico\") && !req.path.startsWith(\"/manifest.json\") && !req.path.startsWith(\"/credmudra_192x192-logo.png\") && !req.path.startsWith(\"/credmudra_512x512-logo.png\") && !req.path.startsWith(\"/credmudra.png\") && !routes.includes(req.path)) {\n    return res.redirect(\"/not-found\");\n  }\n  const helmet = react_helmet__WEBPACK_IMPORTED_MODULE_8__.Helmet.renderStatic();\n  switch (activeRoute) {\n    case \"/\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.landingPage.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.landingPage.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.landingPage.description;\n      break;\n    case \"/business-loan\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.businessPage.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.businessPage.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.businessPage.description;\n      break;\n    case \"/personal-loan\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.personalLoan.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.personalLoan.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.personalLoan.description;\n      break;\n    case \"/debt-consolidation\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.debtConsolidation.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.debtConsolidation.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.debtConsolidation.description;\n      break;\n    case \"/personal-loan-for-medical-emergency\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.medicalEmergency.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.medicalEmergency.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.medicalEmergency.description;\n      break;\n    case \"/personal-loan-for-travel\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.travalLoan.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.travalLoan.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.travalLoan.description;\n      break;\n    case \"/personal-loan-for-two-wheeler\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.twoWheeler.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.twoWheeler.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.twoWheeler.description;\n      break;\n    case \"/personal-loan-for-home-renovation\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.homeRenovation.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.homeRenovation.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.homeRenovation.description;\n      break;\n    case \"/personal-loan-eligibility\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.Eligibility.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.Eligibility.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.Eligibility.description;\n      break;\n    case \"/personal-loan-emi-calculator\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.EMIcalculate.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.EMIcalculate.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.EMIcalculate.description;\n      break;\n    case \"/about-us\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.about.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.about.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.about.description;\n      break;\n    case \"/terms-and-conditions\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.TermsAndCondition.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.TermsAndCondition.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.TermsAndCondition.description;\n      break;\n    case \"/privacy-policy\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.PrivacyPolicy.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.PrivacyPolicy.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.PrivacyPolicy.description;\n      break;\n    case \"/personal-loan-interest-rate\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.InterestRate.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.InterestRate.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.InterestRate.description;\n      break;\n    case \"/get-registered\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/get-registered/user-number\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/get-registered/verify-user\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/get-registered/loan\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/get-registered/employe-type\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/get-registered/selfemployed\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/get-registered/salaried\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/get-registered/personaldetails\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/get-registered/addressdetails\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/get-registered/otherdetails\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/get-registered/submit\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/get-registered/offers\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/get-registered/marketplace\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    case \"/business-loan/get-registered\":\n      helmet.title = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.title;\n      helmet.link = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.canonical;\n      helmet.meta = _db_headings_json__WEBPACK_IMPORTED_MODULE_11__.getRegister.description;\n      break;\n    default:\n      helmet.title = \"Error\";\n      helmet.link = \"Error\";\n      helmet.meta = \"Error\";\n      break;\n  }\n  if (activeRoute === \"/sitemap.xml\") {\n    const sitemapPath = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(__dirname, \"./sitemap.xml\");\n    const sitemapContent = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(sitemapPath, \"utf-8\");\n    res.setHeader(\"Content-Type\", \"application/xml\");\n    return res.send(sitemapContent);\n  } else if (activeRoute === \"/robots.txt\") {\n    const robotsPath = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(__dirname, \"./robots.txt\");\n    const robotsContent = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(robotsPath, \"utf-8\");\n    res.setHeader(\"Content-Type\", \"text/plain\");\n    return res.send(robotsContent);\n  } else if (activeRoute) {\n    const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n      location: req.url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_9__.Provider, {\n      store: _redux_store__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_src_indexSSR__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null))));\n    const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve( false ? 0 : \"./build/index.html\");\n    fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(indexFile, \"utf8\", (err, data) => {\n      if (err) {\n        console.error(\"Something went wrong:\", err);\n        return res.status(500).send(\"Oops, better luck next time!\");\n      }\n      let $ = cheerio.load(data);\n      $(\"html\").attr(\"lang\", helmet.htmlAttributes.lang);\n      $(\"title\").text(helmet.title.toString());\n      $('meta[name=\"description\"]').attr(\"content\", helmet.meta.toString());\n      $('link[rel=\"canonical\"]').attr(\"href\", helmet.link.toString());\n      return res.send($.html().replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n    });\n  } else {\n    next();\n  }\n});\nif (true) {\n  app.use(express__WEBPACK_IMPORTED_MODULE_3___default()[\"static\"](\"./.ssr-server-cache\"));\n  app.use(express__WEBPACK_IMPORTED_MODULE_3___default()[\"static\"](\"./build\"));\n} else {}\napp.listen(PORT, () => {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://Credmudra/./src/ssr/server.js?");

/***/ }),

/***/ "./src/assets/Style/loader.css":
/*!*************************************!*\
  !*** ./src/assets/Style/loader.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Credmudra/./src/assets/Style/loader.css?");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cheerio");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./src/ssr/db/headings.json":
/*!**********************************!*\
  !*** ./src/ssr/db/headings.json ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"landingPage\":{\"title\":\"Credmudra – Get Instant Personal Loan Onilne \",\"description\":\"At Credmudra, we work to match you with lenders that align with your needs. Get Instant approval, easy application, minimal documentation and no hidden charges. Apply now!\",\"keywords\":\"Home\",\"canonical\":\"https://www.credmudra.com\"},\"businessPage\":{\"title\":\"Apply for Instant Business Loan Online in India\",\"description\":\"Apply for Business Loan online at lowered interest rates with minimum documentation from Credmudra. Get Instant approval, easy application and no hidden charges. Apply now!\",\"keywords\":\"We Provide Funds For All Your Business Needs\",\"canonical\":\"https://www.credmudra.com/business-loan\"},\"personalLoan\":{\"title\":\"Apply for Instant Personal Loan Online | Up to Rs 10 Lakh\",\"description\":\"Apply for instant personal loans online up to Rs.10 lakh with CredMudra. Get matched with a lender, and complete quick formalities for hassle-free disbursal.\",\"keywords\":\"Personal Loans\",\"canonical\":\"https://www.credmudra.com/personal-loan\"},\"debtConsolidation\":{\"title\":\"Get Personal Loan For Debt Consolidation | CredMudra\",\"description\":\"Take control of your finances with a personal loan for debt consolidation from CredMudra. Streamline your payments and simplify your life today.\",\"keywords\":\"Personal Loan For Debt Consolidation\",\"canonical\":\"https://www.credmudra.com/debt-consolidation\"},\"medicalEmergency\":{\"title\":\"Apply for a Medical Emergency Loan Online | Credmudra\",\"description\":\"Facing an unexpected medical crisis? Our personal loans for medical emergencies provide fast, stress-free financial relief. Apply now and secure your peace of mind.\",\"keywords\":\"Personal Loan For Medical Emergency\",\"canonical\":\"https://www.credmudra.com/personal-loan-for-medical-emergency\"},\"travalLoan\":{\"title\":\"Travel Loan - Apply Personal Loan for Travel | Credmudra\",\"description\":\"Don\\'t delay your travel plans! Get an instant personal travel loan with quick disbursal and lowest interest rates from Credmudra. Apply now and Start your journey today!\",\"keywords\":\"Travel Loan Tailored To Your Dreams\",\"canonical\":\"https://www.credmudra.com/personal-loan-for-travel\"},\"twoWheeler\":{\"title\":\"Two Wheeler Loan - Apply Online Instantly | Credmudra\",\"description\":\"Don\\'t wait to own a two-wheeler. Our two-wheeler personal loans provide a hassle-free way to get your new bike with a few documents and instant approval.Apply Now!\",\"keywords\":\"Cruise Through Life With Affordable Loans For Two-Wheelers\",\"canonical\":\"https://www.credmudra.com/personal-loan-for-two-wheeler\"},\"homeRenovation\":{\"title\":\"Apply For Loan for Home Renovation Online | CredMudra\",\"description\":\"Elevate your living space with our convenient personal loans for home renovation. Quick approvals, flexible terms, and the freedom to create your idealliving space. Apply today!\",\"keywords\":\"Experience The Joy Of Home Transformation\",\"canonical\":\"https://www.credmudra.com/personal-loan-for-home-renovation\"},\"Eligibility\":{\"title\":\"Check Eligibility Criteria for Personal Loans | CredMudra\",\"description\":\"Check your personal loan eligibility to get a credit of up to Rs.20 Lakh from Credmudra. Understand the factors that lenders consider and maximize your chances of approval.\",\"keywords\":\"Personal Loan Eligibility\",\"canonical\":\"https://www.credmudra.com/personal-loan-eligibility\"},\"InterestRate\":{\"title\":\"Get the Lowest Personal Loan Interest Rates Online @ Credmudra\",\"description\":\"Know the ways to avail the lowest personal loan interest rates to maximigit your personal loan eligibility for various lenders so that you can instantly apply for one\",\"keywords\":\"\",\"canonical\":\"https://www.credmudra.com/personal-loan-interest-rate\"},\"EMIcalculate\":{\"title\":\"Personal Loan EMI Calculator | Credmudra\",\"description\":\"The CredMudra Personal Loan EMI Calculator help you to plan your loan  repayments effectively. Get insights into your monthly installments and make informed financial decisions.\",\"keywords\":\"Personal Loan EMI Calculator\",\"canonical\":\"https://www.credmudra.com/personal-loan-emi-calculator\"},\"getRegister\":{\"title\":\"CredMudra\",\"description\":\"\",\"keywords\":\"\",\"canonical\":\"\"},\"about\":{\"title\":\"About The Team | CredMudra\",\"description\":\"We created CredMudra with the conviction that action is the key to achieving  financial freedom and success. The same way we created Team Credmudra and named it Mudra Mentors.\",\"keywords\":\"About The Team !\",\"canonical\":\"https://www.credmudra.com/about-us\"},\"TermsAndCondition\":{\"title\":\"Terms and Conditions | CredMudra\",\"description\":\"Transparency matters to us. Explore our terms and conditions to ensure accountability and a clear understanding of our operations.\",\"keywords\":\"Terms and Conditions\",\"canonical\":\"https://www.credmudra.com/terms-and-conditions\"},\"PrivacyPolicy\":{\"title\":\"PRIVACY POLICY | CredMudra\",\"description\":\"Discover how our privacy policies provide assurance of robust data security. We take your privacy seriously\",\"keywords\":\"PRIVACY POLICY\",\"canonical\":\"https://www.credmudra.com/privacy-policy\"}}');\n\n//# sourceURL=webpack://Credmudra/./src/ssr/db/headings.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ssr/server.js");
/******/ 	
/******/ })()
;