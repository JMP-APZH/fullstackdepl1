import { Link, routes } from '@redwoodjs/router'

import { Bar } from 'react-chartjs-2'

import { Doughnut } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  DoughnutController,
  CategoryScale,
  LinearScale, // y
  Tooltip,
  Legend,
  Title
 } from "chart.js"

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
  const data2 = {
    labels: [
      'below 30 yo',
      'below 40 yo',
      'below 50 yo'
    ],
    datasets: [
      {
        label: 'Admin split by age',
        data: [admincountbyage_30, admincountbyage_40, admincountbyage_50],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        borderColor: 'black',
        borderWidth: 1,
      }
    ]
  };

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

  const data = {
    labels: [
      'below 30 yo',
      'below 40 yo',
      'below 50 yo'
    ],
    datasets: [
      {
        label: 'Male',
        data: [admincountbyage_30, admincountbyage_40, admincountbyage_50],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        borderColor: 'black',
        borderWidth: 1,
      },

      {
        label: 'Female',
        data: [admincountbyage_50, admincountbyage_40, admincountbyage_30],
        backgroundColor: [
          'green',
          'black',
          'violet'
        ],
        borderColor: 'black',
        borderWidth: 1,
      }
    ]
  }

  const options = {
    plugins: {
      title: {
          display: true,
          text: 'Admin age Repartition 1 - Bar Chart'
      },
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      }
    }
  }
  const options1 = {
    plugins: {
      title: {
          display: true,
          text: 'Admin age Repartition 2 - Doughnut'
      },
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      }
    }
  }

  return (
    <>
    <div
      className='flex flex-col bg-black p-4 w-full'
    >
    <h1 className='text-center text-lg underline p-4 text-red-600'>All as of here comes from the AdminUsersCell</h1>
    <AdminUsers adminUsers={adminUsers} />
    <div className='shadow-2xl shadow-red-500 p-6 m-6 rounded-lg'>

      <div className='bg-blue-500 rounded-2xl w-full'>
        <p className='bg-blue-500 py-2 px-6 w-5/8 h-12 text-black mt-4'> There are currently <span className='font-bold'>{adminuserCount}</span> admin users </p>
        <p className='bg-blue-500 py-2 px-6 w-5/8 h-12 text-black'> Number of admins with age between 40 and 49: <span className='font-bold'>{admincountbyage_50}</span> </p>
        <p className='bg-blue-500 py-2 px-6 w-5/8 h-12 text-black'> Number of admins with age between 30 and 39: <span className='font-bold'>{admincountbyage_40}</span> </p>
        <p className='bg-blue-500 py-2 px-6 w-5/8 h-12 text-black mb-4'> Number of admins with age between 20 and 29: <span className='font-bold'>{admincountbyage_30}</span> </p>
      </div>

    </div>


      <div className='flex flex-col justify-center items-center p-8 w-full'>

        <p className='text-white text-center font-semibold border rounded shadow-2xl shadow-blue-500 p-2 w-60'>Here comes the charts</p>

        <div className='flex flex-col gap-20 justify-center items-center mt-10 w-4/5'>
          <Bar
            data={data}
            options = {options}
            style={{height: 60}}
            className='bg-gray-300 text-white p-4 shadow-2xl shadow-yellow-500 rounded-2xl'
          />

          <Doughnut
            data={data2}
            options = {options1}
            style={{width: 40}}
            className='bg-black text-white p-4 shadow-2xl shadow-yellow-500 rounded-2xl'
          />
        </div>

      </div>
    </div>

    </>
  )
}

// export const Success = ({ admins }) => {
//   return <AdminUsers adminUsers={admins} />
// }
