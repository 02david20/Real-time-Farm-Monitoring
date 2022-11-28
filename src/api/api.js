import fieldImg from "../assets/images/field1.png"
import sensorImg from '../api/sensors_icon/map_icon.png'
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const UserFields = [
  {
    id : 1,
    name: 'Cam',
   coordinate:[ -91.874,42.76 ],
    img:fieldImg
  },
  {
    id : 2,
    name: 'Bưởi',
    coordinate:[ -91.8,42.76 ],
    img:fieldImg
  },
  {
    id : 3,
    name: 'Xoài',
    coordinate:[ -91.874,42.76 ],
    img:fieldImg
  },
  {
    id : 4,
    name: 'Quýt',
    coordinate:[ -91.874,42.76 ],
    img:fieldImg
  },
  {
    id : 5,
    name: 'Mận',
    coordinate:[ -91.874,42.76 ],
    img:fieldImg
  },
  {
    id : 6,
    name: 'Dưa hấu',
    coordinate:[ -91.874,42.76 ],
    img:fieldImg
  },
  {
    id : 7,
    name: 'Dưa Gang',
    coordinate:[ -91.874,42.76 ],
    img:fieldImg
  },
  {
    id : 8,
    name: 'Vải',
    coordinate:[ -91.874,42.76 ],
    img:fieldImg
  },
]


const sensors = [
    {
        id : 1,
        name: '1',
        type: "temp",
        data: 36,
        mode:'active',
        coordinate:[ -91.8980505,42.7685108 ],
    },
    {
        id : 2,
        name: '1',
        type: "temp",
        data: 37,
        mode:'disable',
        coordinate:[ -91.8826869,42.7619575 ]

    },
    {
        id : 3,
        name: '1',
        type: "moist",
        data: 20,
        mode:'active',
        coordinate:[ -91.8986514,42.7612644 ]

    },
    {
        id : 4,
        name: '1',
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[ -91.8796828,42.7692669 ]

    },
    {
        id : 5,
        name: '1',
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[ -91.8496828,42.7692669 ]

    },
    {
        id : 6,
        name: '1',
        type: "moist",
        data: 25,
        mode:'active',
        coordinate: [-91.8794331, 42.7654389]
    },
    {
        id : 7,
        name: '1',
        type: "pump",
        data: 25,
        mode:'active',
        coordinate: [-91.8873296, 42.7534655]
    } ,
    {
        id : 8,
        name: '1',
        type: "pump",
        data: 25,
        mode:'active',
        coordinate:[-91.8754849, 42.7462804]
    }    
]
const availableSensors = [
    {
        id : 5,
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[-91.874-1, 42.76+2]
    },
    {
        id : 6,
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[-91.874-1, 42.76+2]
    },
    {
        id : 7,
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[-91.874-1, 42.76+2]
    },
    {
        id : 8,
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[-91.874-1, 42.76+2]
    },
    {
        id : 9,
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[-91.874-1, 42.76+2]
    },
    {
        id : 10,
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[-91.874-1, 42.76+2]
    },
    {
        id : 11,
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[-91.874-1, 42.76+2]
    },
    {
        id : 12,
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[-91.874-1, 42.76+2]
    },
    {
        id : 13,
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[-91.874-1, 42.76+2]
    },

]

const icon = sensorImg
const sensorsDetail = 
[
    {
      icon: { src: icon, status: 'danger' },
    sensor: {
        name: 'Sensor 1',
        new: true,
        registered: 'Jan 1, 2021',
      },
      type: 'Temp',
      message: {
        value: 50,
        compareToMax: 50, 
        color: 'danger',
      },
      activity: '10 sec ago',
    },
    {
      icon: { src: icon, status: 'success' },
    sensor: {
        name: 'Sensor 2',
        new: false,
        registered: 'Jan 1, 2021',
      },
      type: 'Moist',
      message: {
        value: 22,
        compareToMax: 22, 
        color: 'info',
      },
      activity: '5 minutes ago',
    },
    {
      icon: { src: icon, status: 'warning' },
    sensor: { name: 'Sensor 3', new: true, registered: 'Jan 1, 2021' },
      type: 'PH',
      message: {
        value: 74,
        compareToMax: 74, 
        color: 'success',
      },
      activity: '2 minutes ago',
    },
    {
      icon: { src: icon, status: 'secondary' },
    sensor: { name: 'Sensor 4', new: true, registered: 'Jan 1, 2021' },
      type: 'Temp',
      message: {
        value: 98,
        compareToMax: 98, 
        color: 'danger',
      },
      activity: '5 minutes ago',
    },
    {
      icon: { src: icon, status: 'success' },
    sensor: {
        name: 'Sensor 5',
        new: true,
        registered: 'Jan 1, 2021',
      },
      type: 'Moist',
      message: {
        value: 22,
        compareToMax: 22, 
        color: 'info',
      },
      activity: '5 minutes ago',
    },
    {
      icon: { src: icon, status: 'danger' },
    sensor: {
        name: 'Sensor 6',
        new: true,
        registered: 'Jan 1, 2021',
      },
      type: 'Moist',
      message: {
        value: 43,
        compareToMax: 43, 
        color: 'info',
      },
      activity: '1 day ago',
    },
  ]


const StatisticDaily =  {
    labels:[],
    datasets: [
        {
        label: 'Moisture',
        backgroundColor: 'transparent',
        borderColor: 'blue',
        pointHoverBackgroundColor: 'blue',
        borderWidth: 0.5,
        data: [],
        fill: true,
        },
        {
        label: 'Temperature',
        backgroundColor: 'transparent',
        borderColor: 'red',
        pointHoverBackgroundColor: 'red',
        borderWidth: 1,
        data: [],
        },
    ],
}

let x = 5; //minutes interval
let times=[]; // time array
let tt = 0; // start time
let ap = ['AM', 'PM']; // AM-PM
let count = 0;

//loop to increment the time and push results in array
for (let i=0;tt<24*60; i++) {
    let hh = Math.floor(tt/60); // getting hours of day in 0-24 format
    let mm = (tt%60); // getting minutes of the hour in 0-55 format
    times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
    tt = tt + x;
    count++;
}


StatisticDaily['labels'] = times

for (let index = 0; index < StatisticDaily.datasets.length; index++) {
    let temp = []
    for (let i = 0; i < count; i++) {
        temp[i] = random(0,40)
    }
    StatisticDaily.datasets[index].data = temp;
}

export  {UserFields,sensors,availableSensors, sensorsDetail, StatisticDaily}

