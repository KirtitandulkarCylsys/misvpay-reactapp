import axios from 'axios';

const API = 'http://localhost:3000/api/v1';

const axiosInstance = axios.create({
    baseURL: API,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); 
      const empId = localStorage.getItem('emp_id'); 

      if (token && empId) {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['emp_id'] = empId;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export const API_LOGIN = {
    DATA: `${API}/login_details`,
};

export const API_SUMMARY_TRANSACTION = {
    DATA: (queryParams) => `${API}/summary_transactions?${queryParams}`,
};

export const API_SCHEME_DETAILS = {
    DATA: (queryParams) => `${API}/scheme_details?${queryParams}`,
};

export const API_REGION = {
    DATA: (queryParams) => `${API}/region_summary_transactions?${queryParams}`,
};

export const API_UFC = {
    DATA: (queryParams) => `${API}/ufc_summary_transactions?${queryParams}`,
};

export const API_RM = {
    DATA: (queryParams) => `${API}/rm_summary_transactions?${queryParams}`,
};

export const API_AUM_DROPDOWN = {
    DATA: `${API}/aum_dropdown`,
};

export const API_AUM_period = {
    DATA: (queryParams) => `${API}/aum?${queryParams}`,
};

export const API_AUM_Region = {
    DATA: (queryParams) => `${API}/aum?${queryParams}`,
};

export const API_AUM_UFC = {
    DATA: (queryParams) => `${API}/aum?${queryParams}`,
};
export const API_AUM_RM = {
  DATA: (queryParams) => `${API}/aum?${queryParams}`,
};
export const API_ALL_REGION_AUM = {
    DATA: (queryParams) => `${API}/aum?${queryParams}`,
};
export const API_ALL_UFC_AUM = {
    DATA: (queryParams) => `${API}/aum?${queryParams}`,
};

export const API_ALL_RM_AUM = {
    DATA: (queryParams) => `${API}/aum?${queryParams}`,
};

export const API_ALL_REGION_RETAIL = {
    DATA: (queryParams) => `${API}/all_region_retail?${queryParams}`,
};

export const API_ALL_UFC_RETAIL = {
    DATA: (queryParams) => `${API}/all_ufc_retail?${queryParams}`,
};

export const API_ALL_RM_RETAIL = {
    DATA: (queryParams) => `${API}/all_rm_retail?${queryParams}`,
};

export const API_ROLEWISE = {
  DATA: `${API}/rolewiselogin`,
}

export const API_Asset_Class = {
  DATA: `${API}/asset_class`,
};

export const API_ACCOUNT_DROPDOWN = {
  DATA: `${API}/account_dropdown`,
};

export const API_ACCOUNT_SUMMARY = {
  DATA: (queryParams) => `${API}/account_summary?${queryParams}`,
};


export const API_NFO = {
  DATA: (queryParams) => `${API}/nfo?${queryParams}`,
}

export const API_NFO_UPLOAD = {
  DATA:  `${API}/nfo_upload`,
}

export const API_NFO_DELETE = {
  DATA: (queryParams) => `${API}/nfo_delete?${queryParams}`,
}

export const API_ALL_ETF_SALE = {
  DATA: (queryParams) => `${API}/etf_sale?${queryParams}`,
};

export const API_MANAGE_USER_CHANNEL_CODE_DROPDOWN = {
  DATA: `${API}/manage_user_channel_code_dropdown`,
};
export const API_MANDATE_REPORT = {
  DATA: (queryParams) => `${API}/mandate_report?${queryParams}`
}

export const API_ARN = {
  DATA: (queryParams) => `${API}/arn?${queryParams}`,
};

export const API_MANAGE_USER_REPORTING_ROLE_DROPDOWN= {
    DATA: `${API}/manage_user_reporting_role_dropdown`,
};

export const API_MANAGE_USER_POWER_USER_DROPDOWN= {
    DATA: `${API}/manage_user_power_user_dropdown`,
};

export const API_MANAGE_USER_FUNCTIONAL_ROLE_DROPDOWN= {
    DATA: `${API}/manage_user_functional_role_dropdown`,
};

export const API_MANAGE_USER_CITY_DROPDOWN= {
    DATA: (queryParams) => `${API}/manage_user_city_dropdown?${queryParams}`
};

  export const API_MANAGE_USER_QUARTER_DROPDOWN= {
    DATA: `${API}/manage_user_quarter_dropdown`,
  };

  export const API_MANAGE_EMPLOYEE_ROLE_DROPDOWN= {
    DATA: (queryParams) => `${API}/manage_user_employee_role_dropdown?${queryParams}`
};

export const API_MANAGE_LOCATION_DROPDOWN= {
  DATA: (queryParams) => `${API}/manage_user_location_dropdown?${queryParams}`
};

export const API_MANAGE_REGION_DROPDOWN= {
    DATA: (queryParams) => `${API}/manage_user_region_dropdown?${queryParams}`
  };

  export const API_MANAGE_UFC_LOCATION_DROPDOWN= {
    DATA: (queryParams) => `${API}/manage_user_ufc_location_dropdown?${queryParams}`
  };
  
  export const API_MANAGE_USER_ZONE_DROPDOWN= {
    DATA: (queryParams) => `${API}/manage_user_zone_dropdown?${queryParams}`
  };

  export const API_SEARCH_MANAGE_USER_TABLE= {
      DATA: (queryParams) => `${API}/search_manage_user_table?${queryParams}`
    };

export const API_MANAGE_USER_GET_EDIT_DATA= {
DATA: (queryParams) => `${API}/manage_user_get_edit_data?${queryParams}`
};

  export const API_MANAGE_USER_SAVE_DATA = {
    DATA:  `${API}/employees`,
  }

  export const API_MANAGE_USER_UPDATE_DATA = {
    DATA:  `${API}/employees_update`,
  }

export default axiosInstance;
