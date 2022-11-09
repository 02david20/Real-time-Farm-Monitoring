import styles from "./history.module.css";
import classNames from "classnames/bind";

import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  Col,
  Row,
} from "react-bootstrap";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function History() {
  // mouse hover dropdowm
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  // date picker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const sensors = [
    {
      id: "001",
      type: "Nhiệt độ",
      location: "(40, 40, 40)",
      data: data,
    },
    {
      id: "001",
      type: "Nhiệt độ",
      location: "(40, 40, 40)",
      data: data,
    },
    {
      id: "001",
      type: "Nhiệt độ",
      location: "(40, 40, 40)",
      data: data,
    },
    {
      id: "001",
      type: "Nhiệt độ",
      location: "(40, 40, 40)",
      data: data,
    },
    {
      id: "001",
      type: "Nhiệt độ",
      location: "(40, 40, 40)",
      data: data,
    },
  ];

  return (
    <>
      <Navbar bg="darkblue" variant="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button variant="light" className=" ms-3 me-3">
                <NavDropdown title="CĐ1/KV1" id="field-dropdown">
                  <NavDropdown.Item>
                    <Dropdown
                      drop="end"
                      show={show1}
                      onMouseLeave={() => setShow1(false)}
                      onMouseOver={() => setShow1(true)}
                    >
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Cánh đồng 1
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>Khu vực 1</Dropdown.Item>
                        <Dropdown.Item>Khu vực 2</Dropdown.Item>
                        <Dropdown.Item>Khu vực 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Dropdown
                      drop="end"
                      show={show2}
                      onMouseLeave={() => setShow2(false)}
                      onMouseOver={() => setShow2(true)}
                    >
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Cánh đồng 2
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>Khu vực 1</Dropdown.Item>
                        <Dropdown.Item>Khu vực 2</Dropdown.Item>
                        <Dropdown.Item>Khu vực 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </NavDropdown.Item>
                </NavDropdown>
              </Button>

              <Button variant="light" className=" ms-3 me-3">
                <NavDropdown title="Filter" id="filter-dropdown">
                  <NavDropdown.Item>Nhiệt độ</NavDropdown.Item>
                  <NavDropdown.Item>Độ ẩm</NavDropdown.Item>
                  <NavDropdown.Item>Độ pH</NavDropdown.Item>
                </NavDropdown>
              </Button>

              <div className="datepicker d-flex align-items-center ms-3 me-3">
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
                <span className={styles.dash}>-</span>
                <DatePicker
                  selected={endDate}
                  onChange={(date: Date) => setEndDate(date)}
                />
                <div className={styles.dpicon}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
              </div>

              <div className="download align-items-center ms-3 me-3">
                <div className={styles.downloadicon}>
                  <FontAwesomeIcon icon={faDownload} />
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className={styles.avgCover}>
          <Col lg="4">
            <div className={styles.avgTemp}>
              <p>Nhiệt độ trung bình</p>
              <div className={styles.avgTempText}>26</div>
            </div>
          </Col>
          <Col lg="4">
            <div className={styles.avgTemp}>
              <p>Độ ẩm trung bình</p>
              <div className={styles.avgTempText}>26</div>
            </div>
          </Col>
          <Col lg="4">
            <div className={styles.avgTemp}>
              <p>Độ pH trung bình</p>
              <div className={styles.avgTempText}>26</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <div className={styles.avgGraph}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Col>
          <Col lg="4">
            <div className={styles.avgGraph}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Col>
          <Col lg="4">
            <div className={styles.avgGraph}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Col>
        </Row>

        {/* <div className="sensorList">
          {sensors.map((sensor, index) => {
            <Row>
              <div className={styles.sensorCover} key={index}>
                <Row>
                  <Col lg="2" md="2">
                    <Row>
                      <div className={styles.sensorInfo}>
                        <p>ID: {sensor.id}</p>
                        <p>Sensor: {sensor.type}</p>
                        <p>Tọa độ: {sensor.location}</p>
                      </div>
                    </Row>
                  </Col>
                  <Col lg="8" md="8">
                    <Row>
                      <div className={styles.sensorGraph}>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            width={500}
                            height={300}
                            data={sensor.data}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="pv"
                              stroke="#8884d8"
                              activeDot={{ r: 8 }}
                            />
                            <Line
                              type="monotone"
                              dataKey="uv"
                              stroke="#82ca9d"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </Row>
                  </Col>
                  <Col lg="1" md="1">
                    <Row>
                      <div className={styles.downloadBtn}>
                        <FontAwesomeIcon icon={faDownload} />
                      </div>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Row>;
          })}
        </div> */}

        <Row>
          <div className={styles.sensorCover}>
            <Row>
              <Col lg="2" md="2">
                <Row>
                  <div className={styles.sensorInfo}>
                    <p>ID: 001</p>
                    <p>Sensor: Nhiệt độ</p>
                    <p>Tọa độ: (43; 50; 64)</p>
                  </div>
                </Row>
              </Col>
              <Col lg="8" md="8">
                <Row>
                  <div className={styles.sensorGraph}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Row>
              </Col>
              <Col lg="1" md="1">
                <Row>
                  <div className={styles.downloadBtn}>
                    <FontAwesomeIcon icon={faDownload} />
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>

        <Row>
          <div className={styles.sensorCover}>
            <Row>
              <Col lg="2" md="2">
                <Row>
                  <div className={styles.sensorInfo}>
                    <p>ID: 001</p>
                    <p>Sensor: Nhiệt độ</p>
                    <p>Tọa độ: (43; 50; 64)</p>
                  </div>
                </Row>
              </Col>
              <Col lg="8" md="8">
                <Row>
                  <div className={styles.sensorGraph}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Row>
              </Col>
              <Col lg="1" md="1">
                <Row>
                  <div className={styles.downloadBtn}>
                    <FontAwesomeIcon icon={faDownload} />
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>

        <Row>
          <div className={styles.sensorCover}>
            <Row>
              <Col lg="2" md="2">
                <Row>
                  <div className={styles.sensorInfo}>
                    <p>ID: 001</p>
                    <p>Sensor: Nhiệt độ</p>
                    <p>Tọa độ: (43; 50; 64)</p>
                  </div>
                </Row>
              </Col>
              <Col lg="8" md="8">
                <Row>
                  <div className={styles.sensorGraph}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Row>
              </Col>
              <Col lg="1" md="1">
                <Row>
                  <div className={styles.downloadBtn}>
                    <FontAwesomeIcon icon={faDownload} />
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>

        <Row>
          <div className={styles.sensorCover}>
            <Row>
              <Col lg="2" md="2">
                <Row>
                  <div className={styles.sensorInfo}>
                    <p>ID: 001</p>
                    <p>Sensor: Nhiệt độ</p>
                    <p>Tọa độ: (43; 50; 64)</p>
                  </div>
                </Row>
              </Col>
              <Col lg="8" md="8">
                <Row>
                  <div className={styles.sensorGraph}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Row>
              </Col>
              <Col lg="1" md="1">
                <Row>
                  <div className={styles.downloadBtn}>
                    <FontAwesomeIcon icon={faDownload} />
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>

        <Row>
          <div className={styles.sensorCover}>
            <Row>
              <Col lg="2" md="2">
                <Row>
                  <div className={styles.sensorInfo}>
                    <p>ID: 001</p>
                    <p>Sensor: Nhiệt độ</p>
                    <p>Tọa độ: (43; 50; 64)</p>
                  </div>
                </Row>
              </Col>
              <Col lg="8" md="8">
                <Row>
                  <div className={styles.sensorGraph}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Row>
              </Col>
              <Col lg="1" md="1">
                <Row>
                  <div className={styles.downloadBtn}>
                    <FontAwesomeIcon icon={faDownload} />
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default History;
