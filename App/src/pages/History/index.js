import styles from "./history.module.css";
import FilterBar from "./components/FilterBar";
import SensorList from "./components/SensorList";
import { data1, data2, data3 } from "./components/data";

import { Container, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
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

const avg = [26.8, 72.6, 7];

function History() {
  return (
    <>
      <FilterBar></FilterBar>
      <Container>
        <Row className={styles.avgCover}>
          <Col lg="4">
            <div className={styles.avgTemp}>
              <p>Nhiệt độ trung bình</p>
              <div className={styles.avgTempText}>{avg[0]}</div>
            </div>
          </Col>
          <Col lg="4">
            <div className={styles.avgTemp}>
              <p>Độ ẩm trung bình</p>
              <div className={styles.avgTempText}>{avg[1]}</div>
            </div>
          </Col>
          <Col lg="4">
            <div className={styles.avgTemp}>
              <p>Độ pH trung bình</p>
              <div className={styles.avgTempText}>{avg[2]}</div>
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
          </Col>
          <Col lg="4">
            <div className={styles.avgGraph}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data2}
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
                    dataKey="humidity"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
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
                  data={data3}
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
                    dataKey="pH"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Col>
        </Row>
      </Container>

      <SensorList></SensorList>
    </>
  );
}

export default History;
