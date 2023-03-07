import { Link, routes } from '@redwoodjs/router'

import { Bar } from 'react-chartjs-2'

import { Doughnut } from 'react-chartjs-2'

import AdminUsersCell from './AdminUsersCell.css'

import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  DoughnutController,
  CategoryScale,
  LinearScale, // y
  Tooltip,
  Legend,
  Title,
} from 'chart.js'

ChartJS.register(
  BarElement,
  ArcElement,
  DoughnutController,
  CategoryScale,
  LinearScale, // y
  Tooltip,
  Legend,
  Title
)

import AdminUsers from 'src/components/AdminUser/AdminUsers'

export const QUERY = gql`
  query FindAdminUsers {
    adminUsers {
      id
      name
      avatar
      age
    }
    adminuserCount
    admincountbyage_50
    admincountbyage_40
    admincountbyage_30
  }
`

import { ResponsivePie } from '@nivo/pie'

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No adminUsers yet. '}
      <Link to={routes.newAdminUser()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  adminUsers,
  adminuserCount,
  admincountbyage_50,
  admincountbyage_40,
  admincountbyage_30,
  // datanivo,
}) => {
  console.log('The number of adminusers from AdminUsersCell : ', adminuserCount)
  console.log(
    'The number of adminusers with age below 20 : ',
    admincountbyage_50,
    admincountbyage_40,
    admincountbyage_30
  )
  const data2 = {
    labels: ['below 30 yo', 'below 40 yo', 'below 50 yo'],
    datasets: [
      {
        label: 'Admin split by age',
        data: [admincountbyage_30, admincountbyage_40, admincountbyage_50],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  }

  //   const chart = new Chart(ctx, {
  //     type: 'line',
  //     data: data,
  //     options: {
  //         plugins: {
  //             title: {
  //                 display: true,
  //                 text: 'Custom Chart Title'
  //             }
  //         }
  //     }
  // });

  // const config = {
  //   type: 'doughnut',
  //   data: data,
  // };

  const datanivo = [
      {
        "id": "below 30 yo",
        "label": 'below 30 yo',
        "value": admincountbyage_30,
        "color": "hsl(298, 70%, 50%)"
      },
      {
        "id": "below 40 yo",
        "label": 'below 40 yo',
        "value": admincountbyage_40,
        "color": "hsl(228, 70%, 50%)"
      },
      {
        "id": "below 50 yo",
        "label":  'below 50 yo',
        "value": admincountbyage_50,
        "color": "hsl(136, 70%, 50%)"
      },
      // {
      //   "id": "php",
      //   "label": "php",
      //   "value": 537,
      //   "color": "hsl(269, 70%, 50%)"
      // },
      // {
      //   "id": "hack",
      //   "label": "hack",
      //   "value": 372,
      //   "color": "hsl(298, 70%, 50%)"
      // }
    ]

  const data = {
    labels: ['below 30 yo', 'below 40 yo', 'below 50 yo'],
    datasets: [
      {
        label: 'Male',
        data: [admincountbyage_30, admincountbyage_40, admincountbyage_50],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        borderColor: 'black',
        borderWidth: 1,
      },

      {
        label: 'Female',
        data: [admincountbyage_50, admincountbyage_40, admincountbyage_30],
        backgroundColor: ['green', 'black', 'violet'],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Admin age Repartition 1 - Bar Chart',
      },
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true,
        },
      },
    },
  }
  const options1 = {
    plugins: {
      title: {
        display: true,
        text: 'Admin age Repartition 2 - Doughnut',
      },
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true,
        },
      },
    },
  }

  return (
    <>
      <div className="flex w-full flex-col bg-black p-4">
        <h1 className="p-4 text-center text-lg text-red-600 underline">
          All as of here comes from the AdminUsersCell
        </h1>
        {/* <AdminUsers adminUsers={adminUsers} /> */}
        <div className="m-6 rounded-lg p-6 shadow-2xl shadow-red-500">
          <div className="w-full rounded-2xl bg-blue-500">
            <p className="w-5/8 mt-4 h-12 bg-blue-500 py-2 px-6 text-black">
              {' '}
              There are currently{' '}
              <span className="font-bold">{adminuserCount}</span> admin users{' '}
            </p>
            <p className="w-5/8 h-12 bg-blue-500 py-2 px-6 text-black">
              {' '}
              Number of admins with age between 40 and 49:{' '}
              <span className="font-bold">{admincountbyage_50}</span>{' '}
            </p>
            <p className="w-5/8 h-12 bg-blue-500 py-2 px-6 text-black">
              {' '}
              Number of admins with age between 30 and 39:{' '}
              <span className="font-bold">{admincountbyage_40}</span>{' '}
            </p>
            <p className="w-5/8 mb-4 h-12 bg-blue-500 py-2 px-6 text-black">
              {' '}
              Number of admins with age between 20 and 29:{' '}
              <span className="font-bold">{admincountbyage_30}</span>{' '}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center p-8">
          <p className="w-60 rounded border p-2 text-center font-semibold text-white shadow-2xl shadow-blue-500">
            Here comes the charts
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-5">
            <div id="chart-wrapper2">
              <Bar
                data={data}
                options={options}
                // style={{height: 60}}
                className="rounded-2xl bg-gray-300 p-4 text-white shadow-2xl shadow-yellow-500"
              />
            </div>

            <div id="chart-wrapper2">
              <Doughnut
                data={data2}
                options={options1}
                // style={{width: 40}}
                className="rounded-2xl bg-black p-4 text-white shadow-2xl shadow-yellow-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center bg-black'>
      <div className='flex w-96 h-96 rounded-2xl bg-black p-4 text-white shadow-2xl shadow-yellow-500'>
      <ResponsivePie
        data={datanivo}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'below 30 yo'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'below 40 yo'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'below 50 yo'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
      </div>
      </div>

    </>
  )
}

// export const Success = ({ admins }) => {
//   return <AdminUsers adminUsers={admins} />
// }
