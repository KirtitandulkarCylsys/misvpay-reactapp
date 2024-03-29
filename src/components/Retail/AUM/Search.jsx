import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../AUM/Search.css";
import Navbar from "../../Shared/Navbar";
import SideBar from "../../Shared/SideBar/SideBar";
import Aum from "./Aum";
import { AumDropdownApi, usePeriodApi } from "../RetailApi/AUM_Api";
import excel from "../../Assets/images/excel_icon.png";
import { ExportToExcel } from "./ExportToExcel";
import ExportToPDF from "./ExportToPDF";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loading";
import { ExcelToExport } from "../ExcelToExport";
import ExportToPdf from "../ExportToPdf";
import AumRegionReport from "./AumRegionReport";
import AumUfcReport from "./AumUfcReport";
import AumRmReport from "./AumRmReport";
import LoaderSearch from "../../Table/LoaderSearch";
import { useDataContext } from "../../../Context/DataContext";

const Search = () => {


  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { aum_dropdown } = AumDropdownApi();

  const { aum_period} = usePeriodApi();
  const {setReportPeriod, emproles, hide, setHide,report_period, formatNumberToIndianFormat}= useDataContext();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleExport = () => {
    ExportToExcel(aum_period, "AUM Report");
  };

  const SearchOnClick = async (e) => {
    try {
      if (!report_period) {
        toast.error("Please select a period before searching.");
        return;
      }
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      // await fetchData();

      setHide(true);
    } catch (error) {
      setHide(false);
    }
  };

  const empid = emproles;
  console.log(empid)
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="container-fluid p-0 home-main">
        <Navbar onToggle={toggleSidebar} />
        <div className="d-flex">
          <SideBar isOpen={sidebarOpen} />
          <div
            className={` ${sidebarOpen ? "dashboard-closed" : "dashboard-full"
              }`}
          >
            <div className="bg-white card m-4 brr">
              <div className="col-md-12">
                <div className="headline pt-4 pl">
                  <b>Daily Retail RH CH RM Zone Wise Performance</b>
                </div>
                <div className="d-flex justify-content-center mb-5 mt-5">
                  <div className="col-md-8 d-flex">
                    <div className="col-md-6">
                      <label className="pll">
                        {" "}
                        <b>Select Period</b>
                      </label>
                      <select
                        className="form-select m-2"
                        value={report_period}
                        onChange={(e) => {
                          setReportPeriod(e.target.value);
                        }}
                      >
                        <option value="">Select an option</option>
                        {aum_dropdown.map((aum) => (
                          <option value={aum.PERIOD_CODE} key={aum.PERIOD_CODE}>
                            {aum.PERIOD_DESC}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="container">
                      <div class="row">
                        <div class="col-md-6 col-12 mb-3">
                          <button
                            className="BgcolorOrange btn mrp"
                            onClick={SearchOnClick}
                            disabled={isLoading}
                          >
                            Search
                          </button>
                          {isLoading && (
                            <div className="text-center mt-4">
                              <i className="fas fa-spinner fa-spin fa-2x"></i>{" "}
                              <LoaderSearch />
                            </div>
                          )}
                        </div>
                        <div class="col-md-6 col-12 mb-3">
                          <div className="icon">
                            {/* <button onClick={handleExport} className="border-0">
                          <img src={excel} alt="excelicon" />
                        </button> */}
                            {hide && (
                              <>
                                <ExportToExcel />
                                | <ExportToPDF />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {hide && (
                <>
                  {empid === "ZH" || empid === "ADMIN" ? (
                    <Aum report_period={report_period} />
                  ) : empid === "RH" ? (
                    <AumRegionReport
                      formatNumberToIndianFormat={formatNumberToIndianFormat}
                      aum_period={aum_period}
                      report_period={report_period}
                    />
                  ) : empid === "CM" ? (
                    <AumUfcReport
                      aum_period={aum_period}

                      report_period={report_period}
                      formatNumberToIndianFormat={formatNumberToIndianFormat}
                    />
                  ) : empid === "RM" ? (
                    <AumRmReport
                      aum_period={aum_period}
                      report_period={report_period}
                      formatNumberToIndianFormat={formatNumberToIndianFormat}
                    />
                  ) : null}
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
