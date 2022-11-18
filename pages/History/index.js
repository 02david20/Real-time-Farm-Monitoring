import styles from "./history.module.css";
import FilterBar from "./components/FilterBar";
import SensorList from "./components/SensorList";

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

function History() {
  return (
    <>
      <FilterBar></FilterBar>
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
        </Row>
      </Container>

      <SensorList></SensorList>
    </>
  );
}

export default History;
