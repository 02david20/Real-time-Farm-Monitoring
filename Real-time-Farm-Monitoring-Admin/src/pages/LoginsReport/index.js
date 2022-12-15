import "./LoginsReport.scss";
import users from "./users.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import loginsData from "./logins.json";
import { processData } from "./process-data";
import { useState } from "react";
import DatePicker from "react-date-picker";
import Select from "react-select";

function LoginsReport() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [interval, setInterval] = useState(0);
  const [userId, setUserId] = useState(-1);
  const intervalOptions = [
    { value: 0, label: "Giờ" },
    { value: 1, label: "Ngày" },
    { value: 2, label: "Tháng" },
  ];

  return (
    <div id="logins-report">
      <div className="FormInput" id="user-search">
        <label>Người dùng</label>
        <Select
          options={users}
          defaultValue={users[0]}
          getOptionLabel={(option) =>
            `${option.first_name} ${option.last_name}`.padEnd(30) +
            option.email.padStart(30)
          }
          getOptionValue={(option) => option.id}
          onChange={(e) => setUserId(e.id)}
        />
      </div>

      <div className="FormInput">
        <label>Khoảng thời gian</label>
        <Select
          options={intervalOptions}
          isSearchable={false}
          defaultValue={intervalOptions[0]}
          onChange={(e) => {
            setInterval(e.value);
          }}
        />
      </div>

      <div className="FormInput">
        <label>Ngày bắt đầu</label>
        <DatePicker
          value={startDate}
          onChange={setStartDate}
          format="dd-MM-y"
          locale="vi"
          maxDate={endDate}
          clearIcon={null}
        />
      </div>
      <div className="FormInput">
        <label>Ngày kết thúc</label>
        <DatePicker
          value={endDate}
          onChange={setEndDate}
          format="dd-MM-y"
          locale="vi"
          minDate={startDate}
          maxDate={new Date()}
          clearIcon={null}
        />
      </div>

      <div id="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={processData(
              loginsData,
              startDate.toLocaleDateString("vi"),
              endDate.toLocaleDateString("vi"),
              interval,
              userId
            )}
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
            <Bar dataKey="Đăng nhập" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LoginsReport;
