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
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import styles from "./sensorList.module.css";

// DATA
const data1 = [
  {
    name: "Jan",
    temp: "22",
  },
  {
    name: "Feb",
    temp: "24",
  },
  {
    name: "Mar",
    temp: "23",
  },
  {
    name: "Apr",
    temp: "25",
  },
  {
    name: "May",
    temp: "27",
  },
  {
    name: "Jun",
    temp: "29",
  },
  {
    name: "Jul",
    temp: "32",
  },
  {
    name: "Aug",
    temp: "30",
  },
  {
    name: "Sep",
    temp: "28",
  },
  {
    name: "Oct",
    temp: "29",
  },
  {
    name: "Nov",
    temp: "27",
  },
  {
    name: "Dec",
    temp: "25",
  },
];

function SensorList() {
  return (
    <Container>
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
                      data={data1}
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
                        dataKey="temp"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
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
                      data={data1}
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
                        dataKey="temp"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
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
                      data={data1}
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
                        dataKey="temp"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
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
                      data={data1}
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
                        dataKey="temp"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
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
                      data={data1}
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
                        dataKey="temp"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
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
      </Row>
    </Container>
  );
}

export default SensorList;
