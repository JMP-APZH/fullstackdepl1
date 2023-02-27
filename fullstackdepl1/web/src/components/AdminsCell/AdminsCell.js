import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './AdminsCell.css'

export const QUERY = gql`
  query AdminsQuery {
    adminUsers {
      id
      name
      avatar
      age
    }
    adminuserCount
    # newavg
    adminuserAvgage
    # adminuserAvgage {
    #   _avg
    #   # age
    # }
    # adminuserAvgage {
    #   age
    #   average
    # }
    adminorderage {
      id
      name
      age
    }
    #admincountbyage
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ adminUsers, adminuserCount, adminuserAvgage, newavg, adminorderage, admincountbyage }) => {
  console.log("The number of adminusers from the AdminsCell : ", adminuserCount)
  console.log("The average age of adminusers from the AdminsCell : ", adminuserAvgage)
  console.log("The average age of adminusers from the AdminsCell 2 : ", newavg)
  console.log("List of ages desc : ", adminorderage)
  console.log("List of adminuser : ", adminUsers)


  // const [contacts, setContacts] = useState(adminUsers);
  const [search, setSearch] = useState('');

  return (

    // <ul>
    //   {adminUsers.map((item) => {
    //     return <li key={item.id}>{JSON.stringify(item)}</li>
    //   })}
    // </ul>
    <>
    <ul className="grid grid-cols-3 grid-flow-row gap-4 bg-violet-600 p-4 items-center">
      {adminUsers.map((adminuser) => (
        <adminuser key={adminuser.id} >

        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center bg-black w-72 h-72 rounded-2xl shadow-2xl shadow-yellow-500 my-4">
            <header className="flex flex-col items-center justify-center">
              <h2 className="flex flex-col items-center justify-center bg-green-400 text-2xl font-semibold m-4 w-72">
                {adminuser.name}
                <p className="text-xl text-red-600 font-bold"> {adminuser.age} </p>
              </h2>
            </header>
            <img className="rounded-full mb-2 mt-4" src={adminuser.avatar} width="110" height="110" />
          </div>
          {/* <img className="rounded-full" src={adminuser.avatar} width="150" height="150" /> */}
        </div>



        </adminuser>
      ))

      }
    </ul>

      <p className='p-2 underline'>The list of Admins by descending age order </p>
    <ul>
      {adminorderage.map((adminorderage, adminuser) => (
        <adminuser key={adminuser.id} >
        <p> {adminorderage.id} - {adminorderage.name} is {adminorderage.age} </p>
        </adminuser>
      ))
      }
    </ul>

    <p className='bg-blue-500 p-10 w-full h-20 text-black'> There are currently {adminuserCount} admin users </p>

    <p className='bg-green-500 p-10 w-full h-20 text-black'> The admin users have an average age of {adminuserAvgage} years old </p>


      <div>
        <p className="bg-yellow-500 w-full p-10 my-6">Here will take place the InstantSearch Test</p>

        <div>

          <Form>
            <InputGroup className='my-3'>

              {/* onChange for search */}
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Admins'
              />
            </InputGroup>
          </Form>

          <Table striped bordered hover variant="dark">
            <thead className=''>
              <tr>
              <th>ID</th>
              <th>First Name</th>
              <th className=''>Avatar</th>
              <th>Age</th>
              </tr>
            </thead>

            <tbody>
            {adminUsers
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
                  || item.age.toString().toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td><img className="flex justify-center items-center rounded-full mb-2" src={item.avatar} width="100" height="100" /></td>
                  <td>{item.age}</td>
                </tr>
              ))}
          </tbody>
          </Table>
        </div>

        <p className="bg-red-500 w-full p-10 my-6">The next part from the other Cells is starting below</p>
      </div>

      <div className='bg-violet-500 p-4'>
      <div className='wrapper'>
        <div className='single-card'>
          <div className='front border-solid border-2'>

          </div>

          <div className='back border-solid border-2'>
                <div className='content'>
                <h2> Name of the User </h2>
                <h4> Work Title </h4>
                <p> Description </p>
                <p className='socials'>
                  Socials
                  <i> Facebook </i>
                  <i> Insta </i>
                  <i> Twitter </i>
                </p>
                </div>

          </div>

        </div>
      </div>
      </div>


      <label>
        <div className='bg-violet-500 p-4'>
          <input type='checkbox' />
          <div className='wrapper'>
            <div className='flip-card'>
              <div className='front border-solid border-2'>
                {/* <img */}
              </div>

              <div className='back border-solid border-2'>
                    <div className='content'>
                    <h2> Name of the User </h2>
                    <h4> Work Title </h4>
                    <p> Description </p>
                    <p className='socials'>
                      Socials
                      <i> Facebook </i>
                      <i> Insta </i>
                      <i> Twitter </i>
                    </p>
                    </div>

              </div>

            </div>
          </div>
        </div>
      </label>

    </>
  )
}
