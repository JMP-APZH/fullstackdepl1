import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ adminUsers, adminuserCount, adminuserAvgage, newavg, adminorderage }) => {
  console.log("The number of adminusers from the AdminsCell : ", adminuserCount)
  console.log("The average age of adminusers from the AdminsCell : ", adminuserAvgage)
  console.log("The average age of adminusers from the AdminsCell 2 : ", newavg)
  console.log("List of ages desc : ", adminorderage)
  console.log("List of adminuser : ", adminUsers)

  const [contacts, setContacts] = useState(adminUsers);
  const [search, setSearch] = useState('');

  return (

    // <ul>
    //   {adminUsers.map((item) => {
    //     return <li key={item.id}>{JSON.stringify(item)}</li>
    //   })}
    // </ul>
    <>
    <ul className="grid grid-cols-3 grid-flow-row gap-4">
      {adminUsers.map((adminuser) => (
        <adminuser key={adminuser.id} >

        <div className="">
          <div className="flex flex-col items-center justify-center bg-black w-72">
            <header className="flex flex-col items-center justify-center">
              <h2 className="flex flex-col items-center justify-center bg-green-400 text-2xl font-semibold m-4 w-72">
                {adminuser.name}
                <p className="text-xl text-red-600 font-bold my-2"> {adminuser.age} </p>
              </h2>
            </header>
            <img className="flex content-center rounded-full mb-2" src={adminuser.avatar} width="100" height="100" />
          </div>
          {/* <img className="rounded-full" src={adminuser.avatar} width="150" height="150" /> */}
        </div>



        </adminuser>
      ))

      }
    </ul>

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
            <thead>
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
                  : item.name.toLowerCase().includes(search);
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

    </>
  )
}
