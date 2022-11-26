import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsA,
} from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle } from "@coreui/utils";
import CIcon from "@coreui/icons-react";
import { Link } from "react-router-dom";
import {
  cilPeople,
} from "@coreui/icons";



import { sensorsDetail, StatisticDaily } from "../../api/api";
const Dashboard = () => {
  let navigate = useNavigate();
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const progressGroupExample1 = [
    { title: "Monday", value1: 34, value2: 78 },
    { title: "Tuesday", value1: 56, value2: 94 },
    { title: "Wednesday", value1: 12, value2: 67 },
    { title: "Thursday", value1: 43, value2: 91 },
    { title: "Friday", value1: 22, value2: 73 },
    { title: "Saturday", value1: 53, value2: 82 },
    { title: "Sunday", value1: 9, value2: 69 },
  ];

  const statDaily = StatisticDaily;
  console.log(statDaily);

  const Sensors = sensorsDetail;

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Daily Temperature and Moisture
              </h4>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              
              <CButton color="primary" className="float-end" onClick={()=>navigate(-1)}>
                Quay về khu vườn
              </CButton>
              
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: "300px", marginTop: "40px" }}
            data={{
              labels: statDaily.labels,
              datasets: statDaily.datasets,
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter></CCardFooter>
      </CCard>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Sensor State</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>
                  <CTable
                    align="middle"
                    className="mb-0 border"
                    hover
                    responsive
                  >
                    <CTableHead color="light">
                      <CTableRow>
                        <CTableHeaderCell className="text-center">
                          <CIcon icon={cilPeople} />
                        </CTableHeaderCell>
                        <CTableHeaderCell>Sensor</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">
                          Type
                        </CTableHeaderCell>
                        <CTableHeaderCell>Message</CTableHeaderCell>
                        <CTableHeaderCell>Activity</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {Sensors.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                          <CTableDataCell className="text-center">
                            
                          
                          </CTableDataCell>

                          <CTableDataCell>
                            <div>{item.sensor.name}</div>
                          </CTableDataCell>

                          <CTableDataCell className="text-center">
                            <div>{item.type}</div>
                          </CTableDataCell>

                          <CTableDataCell>
                            <div className="clearfix">
                              <div className="float-start">
                                <strong>{item.message.value}</strong>
                              </div>
                            </div>
                            <CProgress
                              thin
                              color={item.message.color}
                              value={item.message.compareToMax}
                            />
                          </CTableDataCell>

                          <CTableDataCell>
                            <div className="small text-medium-emphasis">
                              Last Update
                            </div>
                            <strong>{item.activity}</strong>
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CCol>
                <CCol xs={12} md={6} xl={6}>
                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">
                          {item.title}
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                  <CRow>
                    <CCol>
                      <CWidgetStatsA
                        className="mb-4"
                        color="warning"
                        value={<div>26K</div>}
                        title="Warning"
                        chart={
                          <CChartLine
                            className="mt-3 mx-3"
                            style={{ height: "70px" }}
                            data={{
                              labels: [
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July",
                              ],
                              datasets: [
                                {
                                  label: "My First dataset",
                                  backgroundColor: "transparent",
                                  borderColor: "rgba(255,255,255,.55)",
                                  pointBackgroundColor:
                                    getStyle("--cui-primary"),
                                  data: [65, 59, 84, 84, 51, 55, 40],
                                },
                              ],
                            }}
                            options={{
                              plugins: {
                                legend: {
                                  display: false,
                                },
                              },
                              maintainAspectRatio: false,
                              scales: {
                                x: {
                                  grid: {
                                    display: false,
                                    drawBorder: false,
                                  },
                                  ticks: {
                                    display: false,
                                  },
                                },
                                y: {
                                  min: 30,
                                  max: 89,
                                  display: false,
                                  grid: {
                                    display: false,
                                  },
                                  ticks: {
                                    display: false,
                                  },
                                },
                              },
                              elements: {
                                line: {
                                  borderWidth: 1,
                                  tension: 0.4,
                                },
                                point: {
                                  radius: 4,
                                  hitRadius: 10,
                                  hoverRadius: 4,
                                },
                              },
                            }}
                          />
                        }
                      />
                    </CCol>
                    <CCol>
                      <CWidgetStatsA
                        className="mb-4"
                        color="danger"
                        value={<>26K</>}
                        title="Error"
                        chart={
                          <CChartLine
                            className="mt-3 mx-3"
                            style={{ height: "70px" }}
                            data={{
                              labels: [
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July",
                              ],
                              datasets: [
                                {
                                  label: "My First dataset",
                                  backgroundColor: "transparent",
                                  borderColor: "rgba(255,255,255,.55)",
                                  pointBackgroundColor:
                                    getStyle("--cui-primary"),
                                  data: [65, 59, 84, 84, 51, 55, 40],
                                },
                              ],
                            }}
                            options={{
                              plugins: {
                                legend: {
                                  display: false,
                                },
                              },
                              maintainAspectRatio: false,
                              scales: {
                                x: {
                                  grid: {
                                    display: false,
                                    drawBorder: false,
                                  },
                                  ticks: {
                                    display: false,
                                  },
                                },
                                y: {
                                  min: 30,
                                  max: 89,
                                  display: false,
                                  grid: {
                                    display: false,
                                  },
                                  ticks: {
                                    display: false,
                                  },
                                },
                              },
                              elements: {
                                line: {
                                  borderWidth: 1,
                                  tension: 0.4,
                                },
                                point: {
                                  radius: 4,
                                  hitRadius: 10,
                                  hoverRadius: 4,
                                },
                              },
                            }}
                          />
                        }
                      />
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
