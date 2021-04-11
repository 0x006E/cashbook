import {
  faPlus,
  faSync,
  faFile,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Card from "./Card";

const MainContent = () => {
  const [incomeArray, updateIncomeArray] = useState(
    Array(
      [1, "20/02/2021", "Openinfgdfg Balance", 15000, 150, "income"],
      [2, "20/02/2021", "Opening Baglance", 15000, 150, "income"],
      [3, "20/02/2021", "Opening Bagglanfgefce", 15000, 150, "income"],
      [4, "20/02/2021", "Opening Balance", 15000, 150, "income"],
      [5, "20/02/2021", "Openifdgdfng Balance", 15000, 150, "income"],
      [6, "20/02/2021", "Opening Balance", 15000, 150, "income"],
      [7, "20/02/2021", "Opening Balgfgance", 15000, 150, "income"],
      [8, "20/02/2021", "Opening gf", 15000, 150, "income"],
      [9, "20/02/2021", "Opening Balagnce", 15000, 150, "income"],
      [10, "20/02/2021", "Opening gfd", 15000, 150, "income"],
      [11, "20/02/2021", "Opening Bdfdfgdgalance", 15000, 150, "income"],
      [12, "20/02/2021", "Opening Balance", 15000, 150, "income"],
      [13, "20/02/2021", "Opening Balance", 15000, 150, "income"]
    )
  );
  return (
    <main>
      <div className="grid-container">
        <div className="container">
          <Card width="900px" height="470px" overflow="auto" title="Income">
            <table>
              <tr>
                <th>Sl No.</th>
                <th>Date</th>
                <th>Particulars</th>
                <th>Bank</th>
                <th>Cash</th>
                <th>Actions</th>
                <th hidden>Type</th>
              </tr>
              {incomeArray.map((item) => (
                <tr key={item[0]}>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                  <td>{item[4]}</td>
                  <td>{item[5]}</td>
                  <td>
                    <button
                      className="iconbtn"
                      onClick={(e) => {
                        updateIncomeArray((incomeArray) =>
                          incomeArray.filter((record) => record[0] !== item[0])
                        );
                        console.log("deleted");
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="iconbtn red">
                      <FontAwesomeIcon icon={faTrash} color="white" />
                    </button>
                  </td>
                  <td hidden>{item[6]}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <th>Total</th>
              </tr>
            </table>
          </Card>
        </div>
        <div className="tools-container">
          <Card width="285px" minHeight="100px" title="Toolbox">
            <div className="tools">
              <button className="menubtn">
                <FontAwesomeIcon icon={faPlus} /> Add Entry
              </button>
              <button className="menubtn">
                <FontAwesomeIcon icon={faSync} /> Refresh
              </button>
              <button className="menubtn">
                <FontAwesomeIcon icon={faFile} /> Report{" "}
              </button>{" "}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};
export default MainContent;
