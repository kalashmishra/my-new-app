import apiEndPointsConfig from "../../../apiEndPointsConfig";
import apiService from "../../../axiosInterceptors";


export const getPrePopulateFormData = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.PrePopulateFormData, {
      data,
    });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const dropOff = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.DropOff, { data });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const GenerateLead = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.GenerateLead, {
      data,
    });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const LeadStatus = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.LeadStatus, {
      data,
    });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const PublicLeadStatus = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.PublicLeadStatus, {
      data,
    });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const CheckEligibility = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.CheckEligibility, {
      data,
    });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const MarketPlaceImpression = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.MarketPlaceImpression, {
      data,
    });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const MarketplaceClick = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.MarketplaceClick, {
      data,
    });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const LeadDetails = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.LeadDetails, {
      data,
    });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const GoogleExitImpression = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.googleExitImpressionStatus, {
      data,
    });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

