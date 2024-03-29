import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../../Shared/Navbar";
import SideBar from "../../Shared/SideBar/SideBar";
import { useDataContext } from "../../../Context/DataContext";
import msg from "../../Assets/images/msg_icon.png";
import calender from "../../Assets/images/date-time_icon.png";
import datetime from "../../Assets/images/Vector (Stroke).png";
import { ExcelToExport } from "../ExcelToExport";
import ExportToPdf from "../ExportToPdf";
import LoaderSearch from "../../Table/LoaderSearch";
import ScheduleModal from "../../Shared/Modal/ScheduleModal";
import "./Arn.css";
import ArnTable from "./ArnTable";
import { AssetClass, Scheme } from "../RetailApi/SchemeApi";
const ArnReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const {
    hide,
    setHide,
    emproles,
    loading,
    setSelectAsset,
    setScheme,fetchArnSummary,setStart_Date,setEnd_Date,start_Date,end_Date,setRolwiseselectype
  } = useDataContext();

  const togglehide = async () => {
    try {
      await fetchArnSummary("");
      setHide(true);
    } catch (error) {
      setHide(false);
      toast.error("Please fill all the fields");
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    if (newStartDate > end_Date) {
      toast.error("Start date should be less than end date");
    } else {
      setStart_Date(newStartDate);
    }
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    if (newEndDate < start_Date) {
      toast.error("End date should be greater than start date");
    } else {
      setEnd_Date(newEndDate);
    }
  };
  const handleSelectType = (value) => {
    setRolwiseselectype(value);
  };
  
  const { asset } = AssetClass();

  const { scheme_details } = Scheme();

  const commonReport = emproles;
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
      <div className="home-main">
        <Navbar onToggle={toggleSidebar} />
        <div className="d-flex">
          <SideBar isOpen={sidebarOpen} />
          <div
            className={`${sidebarOpen ? "dashboard-closed" : "dashboard-full"}`}
          >
            <div className="container-fluid">
              <section className="section mt-3">
                <div className="row">
                  <div className="col-lg-12 col-lg-offset-2">
                    <div className="card-body bg-white ">
                      <div className="rounded-lg p-3">
                        <button
                          class="border-0 w-100 text-left bg-transparent "
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          <h5 className="text-lg-start">
                            <b> ARN TRANSACTION SUMMARY REPORT</b>
                          </h5>
                        </button>
                      </div>
                      <div className="row mt-3 d-flex justify-content-around">
                        {/* start date */}
                        <div className="form-group col-md-2">
                          <label for="">
                            <b> Start Date </b>
                          </label>
                          <img src={datetime} alt="datetime" />
                          <input
                            type="date"
                            class="form-control"
                            id=""
                            placeholder="Project Start Date"
                            onChange={handleStartDateChange}
                          />
                        </div>
                        {/* end Date */}
                        <div class="form-group col-md-2">
                          <label for="">
                            <b> End Date </b>
                          </label>
                          <img src={datetime} alt="datetime" />
                          <input
                            type="date"
                            class="form-control"
                            id=""
                            placeholder="Project End Date"
                            onChange={handleEndDateChange}
                          />
                        </div>

                        {/* arncode */}
                        <div class="form-group col-md-2">
                          <label for="">
                            <b> Enter ARN </b>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter ARN Code"
                          />
                        </div>
                        {/* select type */}
                        <div class="form-group col-md-2">
                          <label for="">
                            <b> Select Type</b>
                          </label>
                          <select
                            name=""
                            id="ab"
                            class="form-select form-control"
                            onChange={(e) => handleSelectType(e.target.value)}
                          >
                            <option value=""> choose type</option>
                            <option value="NETSALES">NET SALES </option>
                            <option value="GROSSSALES">GROSS SALES </option>
                          </select>
                        </div>

                        {/* asset class */}
                        <div class="form-group col-md-2">
                          <label for="">
                            <b>Asset Class</b>
                          </label>
                          <select
                            name=""
                            id="ab"
                            class="form-select form-control"
                            onChange={(e) => setSelectAsset(e.target.value)}
                          >
                            <option value="ALL">ALL</option>
                            {asset.map((item) => (
                              <option
                                key={item.SM_NATURE}
                                value={item.SM_NATURE}
                              >
                                {item.SM_NATURE}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="row mt-4 d-flex justify-content-around">
                        {/* scheme details */}

                        <div className="form-group col-md-2">
                          <label className="form-lables">
                            <b> Scheme</b>
                          </label>
                          <select
                            name=""
                            id="ab"
                            class="form-select form-control"
                            onChange={(e) => setScheme(e.target.value)}
                          >
                            <option
                              className="form-label select-label"
                              value=""
                            >
                              Select Scheme
                            </option>
                            {scheme_details.map((item) => (
                              <option key={item.SCHEME} value={item.SCHEME}>
                                {item.SCHEME}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* channel */}
                        <div className="form-group col-md-2">
                          <label className="form-lables">
                            <b>Channel</b>
                          </label>
                          <select
                            name=""
                            id="ab"
                            class="form-select form-control"
                            disabled
                          >
                            <option value="">RTL </option>
                            <option value="">BND </option>
                            <option value="">INST </option>
                            <option value="">PSUC </option>
                          </select>
                        </div>

                        {/* checkbox */}
                        <div className="form-group col-md-2 mt-3 text-center">
                          <input type="checkbox" />
                          <label className="form-lables">
                            <b>Multicity</b>
                          </label>
                        </div>

                        {/* search button */}

                        <div className="col-md-2 search mt-3 text-end ">
                          <button
                            className="btn  BgcolorOrange "
                            onClick={togglehide}
                          >
                            <b className="colorwhite"> Search</b>
                          </button>
                        </div>

                        {/* export, pdf, model */}
                        <div className="col-md-2 arnexport mt-3 ">
                          <p>
                            <ExcelToExport />
                            |<ExportToPdf />|
                            <img src={msg} alt="msgicon" /> |{" "}
                            <img
                              id="myImg"
                              src={calender}
                              alt="calendericon"
                              data-bs-toggle="modal"
                              data-bs-target="#scheduleModal"
                            />
                          </p>
                        </div>
                      </div>
                      <ScheduleModal />
                    </div>
                    <div className="card-body bg-white ">
                      <div className="Table">
                        {loading ? (
                          <div className="text-center mt-4">
                            <i className="fas fa-spinner fa-spin fa-2x"></i>{" "}
                            <LoaderSearch />
                          </div>
                        ) : hide ? (
                          <>
                            {commonReport === "ZH" ||
                            commonReport === "ADMIN" ? (
                              <ArnTable />
                            ) : commonReport === "RH" ? (
                              <></>
                            ) : commonReport === "CM" ? (
                              <></>
                            ) : commonReport === "RM" ? (
                              <></>
                            ) : null}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArnReport;
