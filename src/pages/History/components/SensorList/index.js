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

const sensors = [
  {
    id: "001",
    type: "Nhiệt độ",
    location: "[301; 732]",
    data: data1,
  },
  {
    id: "001",
    type: "Nhiệt độ",
    location: "[1094; 2180]",
    data: data1,
  },
  {
    id: "001",
    type: "Nhiệt độ",
    location: "[120; 88091]",
    data: data1,
  },
  {
    id: "001",
    type: "Nhiệt độ",
    location: "[49; 10]",
    data: data1,
  },
  {
    id: "001",
    type: "Nhiệt độ",
    location: "[1242; 902]",
    data: data1,
  },
];

function SensorList() {
  return (
    <Container>
      {sensors.map((sensor) => (
        <Row>
          <div className={styles.sensorCover}>
            <Row>
              <Col lg="2" md="2">
                <Row>
                  <div className={styles.sensorInfo}>
                    <p>ID: {sensor.id}</p>
                    <p>Sensor: {sensor.type}</p>
                    <p>
                      Tọa độ:<br></br> {sensor.location}
                    </p>
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
      ))}
    </Container>
  );
}

export default SensorList;
