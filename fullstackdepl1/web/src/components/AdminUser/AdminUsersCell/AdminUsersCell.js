import { Link, routes } from '@redwoodjs/router'

import { Bar } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale, // y
  Tooltip,
  Legend
 } from "chart.js"

 ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale, // y
  Tooltip,
  Legend
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

export const Success = ({ adminUsers, adminuserCount, admincountbyage_50, admincountbyage_40, admincountbyage_30 }) => {
  console.log("The number of adminusers from AdminUsersCell : ", adminuserCount)
  console.log("The number of adminusers with age below 20 : ", admincountbyage_50, admincountbyage_40, admincountbyage_30)
  // const data = {
  //   labels: [
  //     'below 30 yo',
  //     'below 40 yo',
  //     'below 50 yo'
  //   ],
  //   datasets: [{
  //     label: 'Admin split by age',
  //     data: [2, 4, 3],
  //     backgroundColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(54, 162, 235)',
  //       'rgb(255, 205, 86)'
  //     ],
  //     hoverOffset: 4
  //   }]
  // };

  // const config = {
  //   type: 'doughnut',
  //   data: data,
  // };

  const data = {
    labels: [
      'below 30 yo',
      'below 40 yo',
      'below 50 yo'
    ],
    datasets: [
      {
        label: 'Admin split by age',
        data: [admincountbyage_50, admincountbyage_40, admincountbyage_30],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        borderColor: 'black',
        borderWidth: 1,
      }
    ]
  }

  const options = {}

  return (
    <>
    <AdminUsers adminUsers={adminUsers} />
    <p className='bg-blue-500 p-10 w-full h-20 text-black'> {adminuserCount} </p>
    <p className='bg-blue-500 p-10 w-full h-20 text-black'> Number of admins with age between XX and XX: {admincountbyage_50} </p>
    <p className='bg-blue-500 p-10 w-full h-20 text-black'> Number of admins with age between XX and XX: {admincountbyage_40} </p>
    <p className='bg-blue-500 p-10 w-full h-20 text-black'> Number of admins with age between XX and XX: {admincountbyage_30} </p>

    <div className=''>
      <p>Here comes a chart</p>
      <Bar
        data={data}
        options = {options}
      />
    </div>
    </>
  )
}

// export const Success = ({ admins }) => {
//   return <AdminUsers adminUsers={admins} />
// }
