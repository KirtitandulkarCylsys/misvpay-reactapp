
const API = 'http://localhost:3000/api/v1';

export const API_LOGIN = {
    DATA: `${API}/login_details`,
};

export const API_SUMMARY_TRANSACTION = {
    DATA: (queryParams) => `${API}/summary_transactions?${queryParams}`,
};

export const API_SCHEME_DETAILS = {
    DATA: `${API}/scheme_details`,
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
    DATA: (queryParams) => `${API}/aum_regions?${queryParams}`,
};

export const API_AUM_UFC = {
    DATA: (queryParams) => `${API}/aum_ufc?${queryParams}`,
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


export const API_MANAGE_USER_CHANNEL_CODE_DROPDOWN = {
    DATA: `${API}/manage_user_channel_code_dropdown`,
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