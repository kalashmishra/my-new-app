import axios from "axios";
import apiEndPointsConfig from "../../apiEndPointsConfig";
import apiService from "../../axiosInterceptors";

export const sendOpt = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.SendOtp, { data });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const ValidateOtp = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.ValidateOtp, { data });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const anonymousUser = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.anonymousUser, {
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

export const Subscribe = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.Subscribe, { data });
    if (res.status === 200) {
      return res;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const GetIPAddress = async () => {
  try {
    const response = await axios.get("https://api64.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    console.error("Error fetching public IP address:", error.message);
    return error;
  }
};
