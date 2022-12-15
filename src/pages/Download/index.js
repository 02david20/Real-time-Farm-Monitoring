import { Container, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import { temp, humidity, pH } from "./data";

function Download() {
  const [type, setType] = useState("Temperature");
  let datas;
  if (type === "Temperature") {
    datas = temp;
  } else if (type === "Humidity") {
    datas = humidity;
  } else if (type === "pH") {
    datas = pH;
  }

  for (let i = 0; i < datas.length; i++) {
    datas[i].id = i + 1;
  }

  function tableToCSV() {
    // Variable to store the final csv data
    var csv_data = [];

    // Get each row data
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
      // Get each column data
      var cols = rows[i].querySelectorAll("td,th");

      // Stores each csv row data
      var csvrow = [];
      for (var j = 0; j < cols.length; j++) {
        // Get the text data of each cell of
        // a row and push it to csvrow
        csvrow.push(cols[j].innerHTML);
      }

      // Combine each column value with comma
      csv_data.push(csvrow.join(","));
    }
    // combine each row data with new line character
    csv_data = csv_data.join("\n");

    /* We will use this function later to download
    the data in a csv file downloadCSVFile(csv_data);
    */
    // Create CSV file object and feed our
    // csv_data into it
    var CSVFile = new Blob([csv_data], { type: "text/csv" });

    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement("a");

    // Download csv file
    temp_link.download = "farmers.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
  }

  return (
    <>
      <div className="mt-3">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => {
              setType("Temperature");
            }}
          >
            Temperature
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => {
              setType("Humidity");
            }}
          >
            Humidity
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => {
              setType("pH");
            }}
          >
            pH
          </button>
        </div>
        <button
          type="button"
          class="btn btn-outline-primary ms-3"
          onClick={() => {
            tableToCSV();
          }}
        >
          <FontAwesomeIcon icon={faDownload} />
        </button>
        <table class="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">{type}</th>
              <th scope="col">Month</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.data}</td>
                <td>{data.month}</td>
                <td>2021</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Download;
