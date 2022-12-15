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
import { data1, data2, data3 } from "../data";

const sensors = [
  {
    id: "1",
    name: "Lúa 1",
    type: "temp",
    location: "[301; 732]",
    data: data1,
  },
  {
    id: "2",
    type: "humidity",
    name: "Lúa 2",
    location: "[1094; 2180]",
    data: data2,
  },
  {
    id: "3",
    type: "temp",
    name: "Lúa 3",
    location: "[120; 88091]",
    data: data1,
  },
  {
    id: "4",
    type: "pH",
    name: "Lúa 4",
    location: "[49; 10]",
    data: data3,
  },
  {
    id: "5",
    type: "humidity",
    name: "Lúa 5",
    location: "[1242; 902]",
    data: data2,
  },
];

function SensorList() {
  return (
    <Container>
      {sensors.map((sensor) => (
        <Row key={sensor.id}>
          <div className={styles.sensorCover}>
            <Row>
              <Col lg="2" md="2">
                <Row>
                  <div className={styles.sensorInfo}>
                    <p>ID: {sensor.id}</p>
                    <p>Type: {sensor.type}</p>
                    <p>Name: {sensor.name}</p>
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
                          dataKey={sensor.type}
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
                  <a className={styles.downloadBtn} href="/download">
                    <FontAwesomeIcon icon={faDownload} />
                  </a>
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
