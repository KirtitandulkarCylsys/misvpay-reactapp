import { useState, useEffect } from "react";
import { API_NFO, API_NFO_DELETE, API_NFO_UPLOAD } from "../../../Constant/apiConstant";
import axiosInstance from "../../../Constant/apiConstant";
import { useDataContext } from "../../../Context/DataContext";

export const NfoApi = () => {
  const [nfo_details, setNfoDetails] = useState([]);
  const [loading, setLoading] = useState("");
  const [nfo_delete, setNfoDelete]= useState('');
  const { emproles, emp_id, zoneData, REGIONData, UFCData } = useDataContext();
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams({
          emp_id: emp_id,
          emprole: emproles,
          zone: zoneData,
          region: REGIONData,
          ufc: UFCData,
          rm: emp_id,
        });
        const response = await axiosInstance.get(API_NFO.DATA(queryParams));
        const data = response.data;
        setNfoDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Nfo details", error);
      }
    };

    fetchData();
  }, []);

  const deleteData = async () => {
    try {
      const requestData = {
        emp_id: emp_id,
        emprole: emproles,
        zone: zoneData,
        region: REGIONData,
        ufc: UFCData,
        rm: emp_id,
      };
  
      const response = await axiosInstance.delete(API_NFO_DELETE.DATA, {
        data: requestData, 
      });
  
      const data = response.data;
      setNfoDelete(data);
    } catch (error) {
      console.error("Error fetching Nfo details for delete", error);
    }
  };
  


  const handleUpload = async (excelData) => {
    const keys = [
      "trn_type",
      "inhouse_number",
      "type",
      "plan",
      "plan_description",
      "from_scheme",
      "from_plan",
      "from_plan_desc",
      "amc_code",
      "sch_desc",
      "folio_number",
      "investor_name",
      "amount",
      "amt_incr",
      "arn_no",
      "arn_name",
      "ufc_code",
      "ufc_name",
      "region",
      "zone",
      "channel_name",
      "mod_channel",
      "scheme_code",
      "branch_code",
      "pin",
      "t30b30flag",
      "platform",
      "trxn_date",
      "scheme_description",
      "map_rmcode",
      "ria_code",
      "arn_ria",
      "platform2",
      "mobile_number",
      "email_id",
      "type2",
    ];
    const totalRows = excelData.length - 1; // Subtract 1 for the header row
    let uploadedRows = 0;
    const result = {};
    if (excelData) {
      try {
        for (let j = 1; j < excelData.length; j++) {
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = excelData[j][i];          
            if(value === undefined){
              result[key] = null;
            }else{
              result[key] = value;
            }         
          }
          const queryParams = new URLSearchParams(result);
          const response = await axiosInstance.post(API_NFO_UPLOAD.DATA(queryParams));
          if (response.status === 200) {
            console.log("File uploaded and data inserted.");
          } else {
            console.error("Error uploading file.");
          }
          uploadedRows++;
          const progress = (uploadedRows / totalRows) * 100;
          setUploadProgress(progress);
        }
        setUploadProgress(100);
        console.log(result, "result");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleDeleteAndUpload = async (excelData) => {
    try {
      await deleteData(nfo_delete);
      console.log("Data deleted successfully");
    } catch (error) {
      console.error("Error deleting data", error);
      return; 
    }
    try {
      await handleUpload(excelData);
      console.log("File uploaded and data inserted.");
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };


  return { nfo_details, loading,handleDeleteAndUpload,uploadProgress };
};
