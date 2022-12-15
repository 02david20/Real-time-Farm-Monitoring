export const processData = (
  logins = [],
  startDate = "1/1/2022",
  endDate = "1/1/2022",
  interval = 0,
  user = -1
) => {
  if (user !== -1) logins = logins.filter((e) => e.userId === user);

  const data = [];
  const [sDay, sMonth, sYear] = startDate
    .split("/")
    .map((e) => parseInt(e, 10));
  const [eDay, eMonth, eYear] = endDate.split("/").map((e) => parseInt(e, 10));

  const gtS = (login) => {
    if (sYear < login.year) {
      return true;
    } else if (sYear === login.year) {
      if (sMonth < login.month) {
        return true;
      } else if (sMonth === login.month) {
        return sDay <= login.day;
      }
    }
    return false;
  };

  const ltE = (login) => {
    if (eYear > login.year) {
      return true;
    } else if (eYear === login.year) {
      if (eMonth > login.month) {
        return true;
      } else if (eMonth === login.month) {
        return eDay >= login.day;
      }
    }
    return false;
  };

  const curTime = {
    hour: 0,
    day: sDay,
    month: sMonth,
    year: sYear,
  };

  const eTime = { hour: 23, day: eDay, month: eMonth, year: eYear };

  const isInHourInterval = (login) => {
    return (
      curTime.hour === login.hour &&
      curTime.day === login.day &&
      curTime.month === login.month &&
      curTime.year === login.year
    );
  };

  const isInDayInterval = (login) => {
    return (
      curTime.day === login.day &&
      curTime.month === login.month &&
      curTime.year === login.year
    );
  };

  const isInMonthInterval = (login) => {
    return curTime.month === login.month && curTime.year === login.year;
  };

  const isLeapYear = (year) => {
    if (year % 4 !== 0) return false;
    else if (year % 100 !== 0) return true;
    else if (year % 400 !== 0) return false;
    return true;
  };

  const nDayOfFeb = isLeapYear(curTime.year) ? 29 : 28;

  const incrHour = () => {
    ++curTime.hour;

    if (curTime.hour === 24) {
      curTime.hour = 0;
      ++curTime.day;

      if (
        ((curTime.month === 4 ||
          curTime.month === 6 ||
          curTime.month === 9 ||
          curTime.month === 11) &&
          curTime.day === 31) ||
        (curTime.month === 2 && curTime.day === nDayOfFeb + 1) ||
        curTime.day === 32
      ) {
        curTime.day = 1;
        ++curTime.month;

        if (curTime.month > 12) {
          curTime.month = 1;
          ++curTime.year;
        }
      }
    }
  };

  const incrDay = () => {
    ++curTime.day;

    if (
      ((curTime.month === 4 ||
        curTime.month === 6 ||
        curTime.month === 9 ||
        curTime.month === 11) &&
        curTime.day === 31) ||
      (curTime.month === 2 && curTime.day === nDayOfFeb + 1) ||
      curTime.day === 32
    ) {
      curTime.day = 1;
      ++curTime.month;

      if (curTime.month > 12) {
        curTime.month = 1;
        ++curTime.year;
      }
    }
  };

  const incrMonth = () => {
    ++curTime.month;

    if (curTime.month > 12) {
      curTime.month = 1;
      ++curTime.year;
    }
  };

  const formatHour = (e) => {
    if (e.name === 0) e.name = "12 AM";
    else if (e.name < 12) e.name = `${e.name} AM`;
    else if (e.name === 12) e.name = "12 PM";
    else e.name = `${e.name - 12} PM`;
  };

  const formatDay = (e) => {
    e.name = `Ngày ${e.name}`;
  };

  const formatMonth = (e) => {
    e.name = `Tháng ${e.name}`;
  };

  let incrTime;
  let isInInterval;
  let intervalName;
  let formatTimeName;

  switch (interval) {
    case 0:
      incrTime = incrHour;
      isInInterval = isInHourInterval;
      intervalName = "hour";
      formatTimeName = formatHour;
      break;
    case 1:
      incrTime = incrDay;
      isInInterval = isInDayInterval;
      intervalName = "day";
      formatTimeName = formatDay;
      break;
    default:
      incrTime = incrMonth;
      isInInterval = isInMonthInterval;
      intervalName = "month";
      formatTimeName = formatMonth;
      break;
  }

  let numLogin = 0;

  const addDataEntry = (value) => {
    data.push({
      name: curTime[intervalName],
      "Đăng nhập": value,
    });
  };

  for (let i = 0; i < logins.length; ++i) {
    if (gtS(logins[i])) {
      if (ltE(logins[i])) {
        if (isInInterval(logins[i])) {
          ++numLogin;
        } else {
          addDataEntry(numLogin);
          incrTime();

          while (!isInInterval(logins[i])) {
            addDataEntry(0);
            incrTime();
          }

          numLogin = 1;
        }
      } else {
        addDataEntry(numLogin);

        while (!isInInterval(eTime)) {
          incrTime();
          addDataEntry(0);
        }

        break;
      }
    }
  }

  if (ltE(logins[logins.length - 1])) {
    addDataEntry(numLogin);

    while (!isInInterval(eTime)) {
      incrTime();
      addDataEntry(0);
    }
  }

  data.forEach(formatTimeName);

  return data;
};
