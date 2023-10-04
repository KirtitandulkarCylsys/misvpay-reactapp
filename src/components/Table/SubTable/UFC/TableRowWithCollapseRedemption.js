import React, { useMemo, useState } from "react";

import TableRowWithRedemption from "../RMWISE/TableRowWithRedemption";
import Loader from "../../Loader";
import { UfcApi } from "../../../Retail/RetailApi/RegionApi";

const TableRowWithCollapseRedemption = ({formatNumberToIndianFormat}) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const {ufc}=UfcApi();
  const handleButtonClick = (index) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    if (index === clickedIndex) {
      setClickedIndex(-1);
    } else {
      setClickedIndex(index);
    }
  };
  let totalEquity = 0;
  let totalHybrid = 0;
  let totalArbitrage = 0;
  let totalPassive = 0;
  let totalFixedIncome = 0;
  let totalCash = 0;
  let grandTotal = 0;

  return (
    <>
      <div className="new-component container-fluid ">
        <table className="mt-3 table nested-table">
          <thead style={{ backgroundColor: "#4C6072", color: "white" }}>
            <tr className="">
              <th scope="col">UFC code</th>
              <th scope="col">UFC</th>
              <th scope="col" className="text-end">
                Equity
              </th>
              <th scope="col" className="text-end">
                Hybrid
              </th>
              <th scope="col" className="text-end">
                Arbitrage
              </th>
              <th scope="col" className="text-end">
                Passive(ex-Debt)
              </th>
              <th scope="col" className="text-end">
                Fixed Income
              </th>
              <th scope="col" className="text-end">
                Cash{" "}
              </th>
              <th scope="col" className="text-end">
                Total
              </th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "#8080805c" }}>
            {ufc.map((ufc, index) => {
              totalEquity += parseFloat(ufc.REQUITY);
              totalHybrid += parseFloat(ufc.RHYBRID);
              totalArbitrage += parseFloat(ufc.RARBITRAGE);
              totalPassive += parseFloat(ufc.RPASSIVE);
              totalFixedIncome += parseFloat(ufc.RFIXED_INCOME);
              totalCash += parseFloat(ufc.RCASH);
              grandTotal += parseFloat(ufc.RTOTAL);
              return (
                <React.Fragment key={index}>
                  <tr>
                    <td>
                      <button
                        className="textlink"
                        onClick={() => handleButtonClick(index)}
                        disabled={isLoading}
                      >
                        <b className="sharp-font">{ufc.UFC_CODE}</b>
                      </button>
                      {isLoading && (
                        <div className="text-center mt-4">
                          <i className="fas fa-spinner fa-spin fa-2x loder"></i>{" "}
                          <Loader className="loder" />
                        </div>
                      )}
                    </td>
                    <td>{ufc.UFC_NAME}</td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.REQUITY))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.RHYBRID))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.RARBITRAGE))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.RPASSIVE))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.RFIXED_INCOME)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.RCASH))}
                    </td>
                    <td
                      className="text-end"
                      style={{ backgroundColor: "#8080805c" }}
                    >
                      <b>
                        {formatNumberToIndianFormat(parseFloat(ufc.RTOTAL))}
                      </b>
                    </td>
                  </tr>
                  {clickedIndex === index && (
                    <tr key={`subtable-${index}`}>
                      <td colSpan="9" className="p-0">
                        {clickedIndex === index && (
                          <TableRowWithRedemption
                            ufc_code={ufc.UFC_CODE}
                            formatNumberToIndianFormat={
                              formatNumberToIndianFormat
                            }
                          />
                        )}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
            <tr style={{ backgroundColor: "#4C6072", color: "white" }}>
              <td>TOTAL</td>
              <td></td>
              <td className="text-end">
                {formatNumberToIndianFormat(parseFloat(totalEquity.toFixed(2)))}
              </td>
              <td className="text-end">
                {formatNumberToIndianFormat(parseFloat(totalHybrid.toFixed(2)))}
              </td>
              <td className="text-end">
                {formatNumberToIndianFormat(
                  parseFloat(totalArbitrage.toFixed(2))
                )}
              </td>
              <td className="text-end">
                {formatNumberToIndianFormat(
                  parseFloat(totalPassive.toFixed(2))
                )}
              </td>
              <td className="text-end">
                {formatNumberToIndianFormat(
                  parseFloat(totalFixedIncome.toFixed(2))
                )}
              </td>
              <td className="text-end">
                {formatNumberToIndianFormat(parseFloat(totalCash.toFixed(2)))}
              </td>
              <td className="text-end">
                {formatNumberToIndianFormat(parseFloat(grandTotal.toFixed(2)))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableRowWithCollapseRedemption;
