import React, { useState } from "react";
import "./Retail.css";
import msg from "../Assets/images/msg_icon.png";
import calender from "../Assets/images/date-time_icon.png";
import SideBar from "../Shared/SideBar/SideBar";
import Navbar from "../Shared/Navbar";
import SalesTable from "../Table/SalesTable";
import datetime from "../Assets/images/Vector (Stroke).png";
import ScheduleModal from "../Shared/Modal/ScheduleModal";
import LoaderSearch from "../Table/SubTable/LoaderSearch";
import Api from "./RetailApi/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Scheme } from "../Retail/RetailApi/AUM_Api";
import NetSalesTable from "../Table/NetSalesTable";
import { ExcelToExport } from "./ExcelToExport";
import ExportToPdf from "./ExportToPdf";
// import Filter from "./Filter";
// import DropDown from "./DropDown";
import Multiselect from "multiselect-react-dropdown";
import RegionSalesTable from "../Table/SubTable/RegionSalesTable";
import RegionRedemptionTable from "../Table/SubTable/RegionRedemptionTable";
import RegionNetSalesTable from "../Table/SubTable/RegionNetSalesTable";
import RedemptionTable from "../Table/RedemptionTable";
import UfcSalesTable from "../Table/SubTable/UFC/UfcSalesTable";
import UfcRedemptionTable from "../Table/SubTable/UFC/UfcRedemptionTable";
import UfcNetSalesTable from "../Table/SubTable/UFC/UfcNetSalesTable";
import RmSalesTable from "../Table/SubTable/RMWISE/RmSalesTable";
import RmRedemptionTable from "../Table/SubTable/RMWISE/RmRedemptionTable";
import RmNetSalesTable from "../Table/SubTable/RMWISE/RmNetSalesTable";
const Retail_Transaction = ({ headers }) => {
  // const { scheme_details } = Scheme();
  const Data = "BIHR";

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const {
    hide,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    transaction_summary_report,
    loading,
    togglehide,
    select_type,
    setSelectType,
    formatNumberToIndianFormat,
  } = Api({ headers });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    if (newStartDate > endDate) {
      toast.error("Start date should be less than end date");
    } else {
      setStartDate(newStartDate);
    }
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    if (newEndDate < startDate) {
      toast.error("End date should be greater than start date");
    } else {
      setEndDate(newEndDate);
    }
  };

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
                            <b> RETAIL TRANSACTION SUMMARY REPORT ZONE WISE</b>
                          </h5>
                        </button>
                      </div>
                      <div className="row d-flex justify-content-around">
                        {/* start datw */}
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
                            value={startDate}
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
                            value={endDate}
                            onChange={handleEndDateChange}
                          />
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
                          >
                            <option value="">All </option>
                            <option value="">Arbitrage </option>
                            <option value="">Cash </option>
                            <option value="">Equity </option>
                            <option value="">Fixed Income</option>
                          </select>
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
                            value={select_type}
                            onChange={(e) => setSelectType(e.target.value)}
                          >
                            <option value=""> choose type</option>
                            <option value="NETSALES">NET SALES </option>
                            <option value="GROSSSALES">GROSS SALES </option>
                          </select>
                        </div>
                        {/* scheme details */}
                      </div>

                      <div className="row d-flex justify-content-around">
                        {/* <div class="col-md-1"></div> */}
                        <div className="col-md-4">
                          <div className="form-group col-md-3  mt-4">
                            <label className="form-lables">
                              <b> Scheme</b>
                            </label>
                            <Multiselect
                            // options={options}
                            // selectedValues={selectedSchemes}
                            // onSelect={functionToHandleSelect}
                            // onRemove={functionToHandleRemove}
                            // displayValue="name"
                            />
                          </div>
                        </div>
                        {/* coloumn and filter
                        <div className=" col-md-2 media">
                          <Filter />
                        </div>
                        <div className="col-md-2">
                          <DropDown />
                        </div> */}
                        {/* search button */}
                        <div className="col-md-4"></div>
                        <div className="col-md-4 d-flex">
                          <div className="col-md-6 mt-5 search ">
                            <button
                              className="btn  BgcolorOrange float-end mx-2 "
                              onClick={togglehide}
                            >
                              <b className="colorwhite"> Search</b>
                            </button>
                          </div>

                          {/* export, pdf, model */}
                          <div className="col-md-6 mt-5 tabs ">
                            <p className="exporttab">
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
                      </div>
                      <ScheduleModal />
                      <>
                        <div className="Table">
                          {loading ? (
                            <div className="text-center mt-4">
                              <i className="fas fa-spinner fa-spin fa-2x"></i>{" "}
                              <LoaderSearch />
                            </div>
                          ) : hide ? (
                            <>
                              {Data === "EAST" ? (
                                <>
                                  <SalesTable
                                    transaction_summary_report={
                                      transaction_summary_report
                                    }
                                    formatNumberToIndianFormat={
                                      formatNumberToIndianFormat
                                    }
                                    startDate={startDate}
                                    endDate={endDate}
                                    select_type={select_type}
                                  />
                                  <RedemptionTable
                                    transaction_summary_report={
                                      transaction_summary_report
                                    }
                                    formatNumberToIndianFormat={
                                      formatNumberToIndianFormat
                                    }
                                    startDate={startDate}
                                    endDate={endDate}
                                    select_type={select_type}
                                  />
                                  <NetSalesTable
                                    transaction_summary_report={
                                      transaction_summary_report
                                    }
                                    formatNumberToIndianFormat={
                                      formatNumberToIndianFormat
                                    }
                                    startDate={startDate}
                                    endDate={endDate}
                                    select_type={select_type}
                                  />
                                </>
                              ) : Data === "BIHR" ? (
                                <>
                                  <RegionSalesTable
                                    startDate={startDate}
                                    endDate={endDate}
                                    select_type={select_type}
                                    formatNumberToIndianFormat={
                                      formatNumberToIndianFormat
                                    }
                                    transaction_summary_report={
                                      transaction_summary_report
                                    }
                                  />
                                  <RegionRedemptionTable
                                    startDate={startDate}
                                    endDate={endDate}
                                    select_type={select_type}
                                    formatNumberToIndianFormat={
                                      formatNumberToIndianFormat
                                    }
                                    transaction_summary_report={
                                      transaction_summary_report
                                    }
                                  />
                                  <RegionNetSalesTable
                                    startDate={startDate}
                                    endDate={endDate}
                                    select_type={select_type}
                                    formatNumberToIndianFormat={
                                      formatNumberToIndianFormat
                                    }
                                    transaction_summary_report={
                                      transaction_summary_report
                                    }
                                  />
                                </>
                              ) : Data === "203" ? (
                                <>
                                  <UfcSalesTable
                                    startDate={startDate}
                                    endDate={endDate}
                                    select_type={select_type}
                                    formatNumberToIndianFormat={
                                      formatNumberToIndianFormat
                                    }
                                    transaction_summary_report={
                                      transaction_summary_report
                                    }
                                  />
                                  <UfcRedemptionTable
                                    startDate={startDate}
                                    endDate={endDate}
                                    select_type={select_type}
                                    formatNumberToIndianFormat={
                                      formatNumberToIndianFormat
                                    }
                                    transaction_summary_report={
                                      transaction_summary_report
                                    }
                                  />
                                  <UfcNetSalesTable
                                    startDate={startDate}
                                    endDate={endDate}
                                    select_type={select_type}
                                    formatNumberToIndianFormat={
                                      formatNumberToIndianFormat
                                    }
                                    transaction_summary_report={
                                      transaction_summary_report
                                    }
                                  />
                                </>
                              ) : Data === "1498" ? (
                                <>
                                  <RmSalesTable
                                    startDate={startDate}
                                    endDate={endDate}
                                    select_type={select_type}
                                    formatNumberToIndianFormat={
                                      formatNumberToIndianFormat
                                    }
                                    transaction_summary_report={
                                      transaction_summary_report
                                    }
                                  />
                                  <RmRedemptionTable
                                    startDate={startDate}
                                    endDate={endDate}
                                    select_type={select_type}
                                    formatNumberToIndianFormat={
                                      formatNumberToIndianFormat
                                    }
                                    transaction_summary_report={
                                      transaction_summary_report
                                    }
                                  />
                                  <RmNetSalesTable
                                    startDate={startDate}
                                    endDate={endDate}
                                    select_type={select_type}
                                    formatNumberToIndianFormat={
                                      formatNumberToIndianFormat
                                    }
                                    transaction_summary_report={
                                      transaction_summary_report
                                    }
                                  />
                                </>
                              ) : null}
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </>
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
export default Retail_Transaction;
