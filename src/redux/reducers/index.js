// src/redux/reducers/index.js
const initialState = {
  formData: {
    leadId: "", 
    stage: "", 
    contactNo: "",
    termsAndCondition: true,
    loan: {
      reason: "",
      otherReason:"",
      amount: 1000,
      tenure: 1,
    },
    panCard: "", 
    // aadharNo:"",
    emailId: "", 
    employmentType: "",

    employmentDetails: {
      companyTypeId: "",
      industryTypeId: "",
      companyName: "",
      designation: "",
      address: "",
      pinCode: "",
      countryId: "",
      stateId: "",
      cityId: "",
      yearsWorkingIn: "",
      businessTypeId: "",
      professionTypeId: "",
      turnover: "",
      monthlyProfit: "",
      income: "",
      salaryMode: "",
      bankId: "",
      currentAccountBankId: "",
      savingAccountBankId: "",
      businessOwnedId: "",
      gst:"",
    },
    personalInfo: {
      emailId: "",
      firstName: "",
      lastName: "",
      genderId: "",
      dateOfBirth: "",
      qualificationId: "",
      maritalStatus: "",
    },
    address: {
      addressLine1: "",
      addressLine2: "",
      pinCode: "",
      countryId: "",
      stateId: "",
      cityId: "",
      residenceTypeId: "",
      yearsLivingIn: "",
    },
    finance: {
      panCard: "",
      // aadharNo:""
    },
    others: {
      totalEmiPaidMonthly: 0,
      interestedToGetCreditCard: true,
    },
    utm: {
      id: "",
      url: "",
      source: "",
      medium: "",
      campaign: "",
      term: "",
      content: "",
      clickId: "",
    },
    extras: {
      browser: "",
      operatingSystem: "",
      ipAddress: "",
      timestamp: "",
      userAgent: "",
      location: "",
    },
  },
  isLoading: false,
  companyTypeList: [],
  businessOwnedList: [],
  businessTypeList: [],
  industryTypeList: [],
  bankList: [],
  qualificationsList: [],
  genderTypesList: [],
  residenceTypesList: [],
  loanReasonList: [],
  companyAddress: {
    city: "",
    state: "",
    country: "",
  },
  personalAddress: {
    city: "",
    state: "",
    country: "",
  },
  LendersDetails: {},
  loanType: "",
  employType: "",
  pinCodeError: {
    companyPincode: "",
    addressPincode: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FORM":
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    case "SET_BUSINESS_OWNED":
      return {
        ...state,
        businessOwnedList: action.payload,
      };
    case "SET_BUSINESS_TYPE":
      return {
        ...state,
        businessTypeList: action.payload,
      };
    case "SET_INDUSTRY_TYPE":
      return {
        ...state,
        industryTypeList: action.payload,
      };
    case "SET_BANKS":
      return {
        ...state,
        bankList: action.payload,
      };

    case "SET_COMPANY_TYPE":
      return {
        ...state,
        companyTypeList: action.payload,
      };
    case "SET_LOAN_REASON":
      return {
        ...state,
        loanReasonList: action.payload,
      };

    case "SET_QUALIFICATIONS":
      return {
        ...state,
        qualificationsList: action.payload,
      };

    case "SET_GENDER_TYPE":
      return {
        ...state,
        genderTypesList: action.payload,
      };
    case "SET_RESIDENCE_TYPE":
      return {
        ...state,
        residenceTypesList: action.payload,
      };
    case "SET_COMPANY_ADDRESS":
      return {
        ...state,
        companyAddress: action.payload,
      };
    case "SET_PERSONAL_ADDRESS":
      return {
        ...state,
        personalAddress: action.payload,
      };
    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_LENDER_DETAILS":
      return {
        ...state,
        LendersDetails: action.payload,
      };
    case "SET_LOAN_TYPE":
      return {
        ...state,
        loanType: action.payload,
      };
    case "SET_EMPLOY_TYPE":
      return {
        ...state,
        employType: action.payload,
      };
    case "SET_PINCODE_ERROR":
      return {
        ...state,
        pinCodeError: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
