import apiEndPointsConfig from "../../../apiEndPointsConfig";
import apiService from "../../../axiosInterceptors";

export const getCompanyTypes = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.getCompanyTypes, {
      data,
    });
    if (res.status === 200) {
      const modifyres = res?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      return modifyres;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const getQualifications = async (data) => {
  try {
    const res = await apiService.post(
      apiEndPointsConfig.getQualifications,
      { data }
    );
    if (res.status === 200) {
      const modifyres = res?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      return modifyres;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const getBusinessTypes = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.getBusinessTypes, {
      data,
    });
    if (res.status === 200) {
      const modifyres = res?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      return modifyres;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const getProfessionTypes = async (data) => {
  try {
    const res = await apiService.post(
      apiEndPointsConfig.getProfessionTypes,
      { data }
    );
    if (res.status === 200) {
      const modifyres = res?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      return modifyres;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const getResidenceTypes = async (data) => {
  try {
    const res = await apiService.post(
      apiEndPointsConfig.getResidenceTypes,
      { data }
    );
    if (res.status === 200) {
      const modifyres = res?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      return modifyres;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const getIndustryTypes = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.getIndustryTypes, {
      data,
    });
    if (res.status === 200) {
      const modifyres = res?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      return modifyres;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const getBanks = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.getBanks, {
      data,
    });
    if (res.status === 200) {
      const modifyres = res?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      return modifyres;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const getWorkTypes = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.getWorkTypes, {
      data,
    });
    if (res.status === 200) {
      const modifyres = res?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      return modifyres;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const getGenderTypes = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.getGenderTypes, {
      data,
    });
    if (res.status === 200) {
      const modifyres = res?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      return modifyres;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};

export const getBusinessOwned = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.getBusinessOwned, {
      data,
    });
    if (res.status === 200) {
      const modifyres = res?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      return modifyres;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};
export const getLoanReasons = async (data) => {
  try {
    const res = await apiService.post(apiEndPointsConfig.getLoanReason, {
      data,
    });
    if (res.status === 200) {
      const modifyres = res?.data?.data?.map((itm) => {
        return {
          value: itm.id,
          label: itm.name,
        };
      });
      return modifyres;
    } else {
      return { message: "try again" };
    }
  } catch (err) {
    return err;
  }
};
