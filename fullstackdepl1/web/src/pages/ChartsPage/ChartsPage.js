import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { Bar } from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2'

import { Success } from 'src/components/AdminUser/AdminUsersCell/AdminUsersCell'


// import ChartsPage from './ChartsPage.css'
import AdminUsersCell from 'src/components/AdminUser/AdminUsersCell'

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

 import { QUERY } from 'src/components/AdminUser/AdminUsersCell'

//  export const QUERY = gql`
//   query FindAdminUsers {
//     adminUsers {
//       id
//       name
//       avatar
//       age
//     }
//     adminuserCount
//     admincountbyage_50
//     admincountbyage_40
//     admincountbyage_30
//   }
// `



const ChartsPage = ({ adminUsers, adminuserCount, admincountbyage_50, admincountbyage_40, admincountbyage_30 }) => {

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
      <MetaTags title="Charts" description="Charts page" />

      <h1>ChartsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ChartsPage/ChartsPage.js</code>
      </p>
      <p>
        My default route is named <code>charts</code>, link to me with `
        <Link to={routes.charts()}>Charts</Link>`
      </p>

      <div className='flex flex-col items-center'>
        <p className='bg-green-600 w-1/2 text-center'>Here will the chart magic happen</p>
        <div className=' flex items-center justify-center w-60 h-60 bg-black text-red-500'>
          Chart
        </div>

        {/* <adminUsers key={adminUsers.id} > */}
          <div className='flex flex-col gap-5 justify-center items-center mt-10'>
            <div id='chart-wrapper2'>
              <Bar
                data={data}
                options = {options}
                // style={{height: 60}}
                className='bg-gray-300 text-white p-4 shadow-2xl shadow-yellow-500 rounded-2xl'
              />
            </div>

            <div id='chart-wrapper2'>
              <Doughnut
                data={data2}
                options = {options1}
                // style={{width: 40}}
                className='bg-black text-white p-4 shadow-2xl shadow-yellow-500 rounded-2xl'
              />
            </div>
      </div>
        <AdminUsersCell />


      </div>
    </>
  )
}

export default ChartsPage
