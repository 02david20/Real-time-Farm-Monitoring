import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
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
  CWidgetStatsA
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilCloudDownload,
  cilPeople,
  cilArrowBottom,
} from '@coreui/icons'

import avatar1 from '../../api/sensors_icon/map_icon.png'
import avatar2 from '../../api/sensors_icon/map_icon.png'
import avatar3 from '../../api/sensors_icon/map_icon.png'
import avatar4 from '../../api/sensors_icon/map_icon.png'
import avatar5 from '../../api/sensors_icon/map_icon.png'
import avatar6 from '../../api/sensors_icon/map_icon.png'


const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Temperature',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Moisture',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
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
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>
                  <CTable align="middle" className="mb-0 border" hover responsive>
                    <CTableHead color="light">
                      <CTableRow>
                        <CTableHeaderCell className="text-center">
                          <CIcon icon={cilPeople} />
                        </CTableHeaderCell>
                        <CTableHeaderCell>Sensor</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Type</CTableHeaderCell>
                        <CTableHeaderCell>Message</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                        <CTableHeaderCell>Activity</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {tableExample.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                          <CTableDataCell className="text-center">
                            <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                          </CTableDataCell>
                          <CTableDataCell>
                            <div>{item.user.name}</div>
                            <div className="small text-medium-emphasis">
                              <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                              {item.user.registered}
                            </div>
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                          </CTableDataCell>
                          <CTableDataCell>
                            <div className="clearfix">
                              <div className="float-start">
                                <strong>{item.usage.value}%</strong>
                              </div>
                              <div className="float-end">
                                <small className="text-medium-emphasis">{item.usage.period}</small>
                              </div>
                            </div>
                            <CProgress thin color={item.usage.color} value={item.usage.value} />
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <CIcon size="xl" icon={item.payment.icon} />
                          </CTableDataCell>
                          <CTableDataCell>
                            <div className="small text-medium-emphasis">Last Update</div>
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
                        <span className="text-medium-emphasis small">{item.title}</span>
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
                            value={
                            <div>
                                26K
                            
                            </div>
                            }
                            title="Warning"
                            chart={
                                <CChartLine
                                  className="mt-3 mx-3"
                                  style={{ height: '70px' }}
                                  data={{
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                      {
                                        label: 'My First dataset',
                                        backgroundColor: 'transparent',
                                        borderColor: 'rgba(255,255,255,.55)',
                                        pointBackgroundColor: getStyle('--cui-primary'),
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
                            value={
                            <>
                                26K
                               
                            </>
                            }
                            title="Error"
                            chart={
                                <CChartLine
                                  className="mt-3 mx-3"
                                  style={{ height: '70px' }}
                                  data={{
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                      {
                                        label: 'My First dataset',
                                        backgroundColor: 'transparent',
                                        borderColor: 'rgba(255,255,255,.55)',
                                        pointBackgroundColor: getStyle('--cui-primary'),
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
  )
}

export default Dashboard
