
import apiEndPointsConfig from "../../../apiEndPointsConfig";
import apiService from "../../../axiosInterceptors";

export const getCountriesList = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.getCountriesList, {
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

export const getStatesList = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.getStatesList, {
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

export const getCitiesList = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.getCitiesList, {
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

export const getPincodesAddress = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.getPincodesAddress, {
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
