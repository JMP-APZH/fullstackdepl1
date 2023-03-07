import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

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
      avatar
    }
    #admincountbyage
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  adminUsers,
  adminuserCount,
  adminuserAvgage,
  newavg,
  adminorderage,
  admincountbyage,
}) => {
  console.log('The number of adminusers from the AdminsCell : ', adminuserCount)
  console.log(
    'The average age of adminusers from the AdminsCell : ',
    adminuserAvgage
  )
  console.log('The average age of adminusers from the AdminsCell 2 : ', newavg)
  console.log('List of ages desc : ', adminorderage)
  console.log('List of adminuser : ', adminUsers)

  // const [contacts, setContacts] = useState(adminUsers);
  const [search, setSearch] = useState('')

  return (
    // <ul>
    //   {adminUsers.map((item) => {
    //     return <li key={item.id}>{JSON.stringify(item)}</li>
    //   })}
    // </ul>
    <>
      <h1 className="bg-violet-600 text-center text-4xl font-semibold">
        {' '}
        ADMIN TEAM{' '}
      </h1>
      <ul className="grid grid-flow-row grid-cols-3 items-center gap-4 bg-violet-600 p-4 lg:grid-cols-6">
        {adminUsers.map((adminuser) => (
          <adminuser key={adminuser.id}>
            <div className="flex h-full items-center justify-center">
              <div className="my-4 flex h-72 w-72 flex-col items-center rounded-2xl bg-black shadow-2xl shadow-yellow-500">
                <header className="flex flex-col items-center justify-center">
                  <h2 className="m-4 flex w-72 flex-col items-center justify-center bg-green-400 text-2xl font-semibold">
                    {adminuser.name}
                    <p className="text-xl font-bold text-red-600">
                      {' '}
                      {adminuser.age}{' '}
                    </p>
                  </h2>
                  <img
                    className="rounded-full"
                    src={adminuser.avatar}
                    width="110"
                    height="110"
                  />
                </header>
              </div>
              {/* <img className="rounded-full" src={adminuser.avatar} width="150" height="150" /> */}
            </div>
          </adminuser>
        ))}
      </ul>

      <div className="border-t-2 border-b-2 bg-violet-600 text-center font-semibold">
        <p className="pt-2 pl-4 text-3xl underline">
          The list of Admins by descending age order
        </p>
        <p className="text-red-500 no-underline">Put an infinity loop</p>
        <ul className="pt-2 pl-4 pb-2">
          {adminorderage.map((adminorderage, adminuser) => (
            <adminuser key={adminuser.id}>
              <p className="flex p-2">
                <p className="mr-2 w-8 rounded-full bg-red-600 text-center font-bold">
                  {adminorderage.id}
                </p>
                <p>
                  {adminorderage.name} is {adminorderage.age} yo.{' '}
                </p>
              </p>
            </adminuser>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-5 bg-violet-600 text-lg">
        <div className="flex flex-col items-center justify-center">
          <p className="p-2 text-2xl">
            {' '}
            Admin sorted by order of registration{' '}
          </p>
          <Table className="flex w-96 items-center justify-center text-center">
            <thead className="">
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers
                .filter((item) => {
                  return search.toLowerCase() === ''
                    ? item
                    : item.name.toLowerCase().includes(search) ||
                        item.age.toString().toLowerCase().includes(search)
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td className="mr-2 w-8 rounded-full bg-red-600 text-center font-bold">
                      {item.id}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="p-2 text-2xl"> Admin sorted by desc. age </p>
          <Table className="flex w-96 items-center justify-center text-center">
            <thead className="">
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {adminorderage
                .filter((item) => {
                  return search.toLowerCase() === ''
                    ? item
                    : item.name.toLowerCase().includes(search) ||
                        item.age.toString().toLowerCase().includes(search)
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td className="mr-2 w-8 rounded-full bg-red-600 text-center font-bold">
                      {item.id}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>

      <p className="bg-violet-600 text-center text-2xl font-semibold">
        Here comes the infinite caroussel
      </p>
      <div className="container1 bg-violet-600">
        <div className="slider">
          <ul className="pt-2 pl-4 pb-2">
            <div className="slide-track">
              {adminorderage.map((adminorderage, adminuser) => (
                <adminorderage key={adminorderage.id}>
                  <div className="slide">
                    <p className="absolute w-8 rounded-full bg-red-600 text-center font-bold">
                      {' '}
                      {adminorderage.id}{' '}
                    </p>
                    <img src={adminorderage.avatar} width="110" height="110" />
                  </div>
                </adminorderage>
              ))}
            </div>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-10 bg-violet-600">
        <p className="h-54 my-6 w-60 rounded-2xl bg-blue-500 text-center text-black">
          <p className="bg-yellow-500 font-semibold">Current Admins</p>
          <p className="text-center text-6xl">{adminuserCount}</p>
        </p>

        <p className="h-54 my-6 w-60 rounded-2xl bg-green-500 text-center text-black">
          <p className="bg-yellow-500 font-semibold">Admins' Avg Age</p>
          <p className="text-center text-6xl">{adminuserAvgage}</p>
        </p>
      </div>

      <div>
        <p className="my-6 w-full bg-yellow-500 p-10">
          Here will take place the InstantSearch Test
        </p>

        <div>
          <Form>
            <InputGroup className="my-3">
              {/* onChange for search */}
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder=" Admins InstantSearch (name or age)"
              />
            </InputGroup>
          </Form>

          <Table striped bordered hover variant="dark">
            <thead className="">
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th className="">Avatar</th>
                <th>Age</th>
              </tr>
            </thead>

            <tbody>
              {adminUsers
                .filter((item) => {
                  return search.toLowerCase() === ''
                    ? item
                    : item.name.toLowerCase().includes(search) ||
                        item.age.toString().toLowerCase().includes(search)
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img
                        className="mb-2 flex items-center justify-center rounded-full"
                        src={item.avatar}
                        width="100"
                        height="100"
                      />
                    </td>
                    <td>{item.age}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>

        <p className="my-6 w-full bg-red-500 p-10">
          The next part from the other Cells is starting below
        </p>
      </div>

      {/* <div className='bg-violet-500 p-4'>
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
      </div> */}

      {/* as of here for dynamic card filling */}

      {/* <label> */}
      <ul className="grid grid-flow-row grid-cols-2 items-center gap-4 bg-violet-600 p-4">
        {adminUsers.map((item) => (
          <div className="bg-violet-500 p-4">
            {/* <input type='checkbox' /> */}
            <div className="wrapper">
              <div className="single-card">
                <div className="front border-2 border-solid">
                  <img src={item.avatar} className="front" />
                </div>

                <div className="back border-2 border-solid">
                  <div className="content">
                    <h2> {item.name} </h2>
                    <h4> Work Title </h4>
                    <h4> {item.age} yo </h4>
                    <p> Description </p>
                    <p className="socials">
                      <div className="flex flex-col">
                        Socials
                        <i> Facebook </i>
                        <i> Insta </i>
                        <i> Twitter </i>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
      {/* </label> */}
    </>
  )
}
