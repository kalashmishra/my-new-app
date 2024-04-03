import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_API_URL;

const apiService = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshAccessToken = async () => {
  const refreshToken = sessionStorage.getItem("refreshToken");
  const response = await axios.post(`${baseURL}/public/refresh-token`, {
    data: { refreshToken: refreshToken },
  });
  if (response.data?.status.code === 404) {
    // alert(response.data.data);
    window.location.href = "/get-registered/user-number";
    return;
  } else if (response.data?.status.code === 401) {
    // alert(response.data.data);
    window.location.href = "/get-registered/user-number";
    return;
  } else if (response.data?.status.code === 400) {
    // alert('Bad request. Please try again.');
    return response.data?.data?.accessToken;
  } else {
    return response.data?.data?.accessToken;
  }
};

apiService.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let isRefreshing = false;
let refreshSubscribers = [];
const onRefreshed = (accessToken) => {
  refreshSubscribers.forEach((callback) => callback(accessToken));
  refreshSubscribers = [];
};
apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshSubscribers.push((accessToken) => {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            resolve(apiService(originalRequest));
          });
        });
      }
      originalRequest._retry = true;
      isRefreshing = true;
      return new Promise((resolve, reject) => {
        refreshAccessToken()
          .then((accessToken) => {
            sessionStorage.setItem("accessToken", accessToken);
            apiService.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${accessToken}`;
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            onRefreshed(accessToken);
            resolve(apiService(originalRequest));
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }
    return Promise.reject(error);
  }
);
export default apiService;
