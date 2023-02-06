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
          <div className="flex flex-col items-center justify-center bg-black w-80">
            <header className="flex flex-col items-center justify-center">
              <h2 className="flex flex-col items-center justify-center bg-green-400 text-2xl font-semibold m-4 w-80">
                {adminuser.name}
                <p className="text-xl text-red-600 font-bold my-2"> {adminuser.age} </p>
              </h2>
            </header>
            <img className="flex content-center rounded-full mb-2" src={adminuser.avatar} width="150" height="150" />
          </div>
          {/* <img className="rounded-full" src={adminuser.avatar} width="150" height="150" /> */}
        </div>

        </adminuser>
      ))

      }
    </ul>

    <p className='bg-blue-500 p-10 w-full h-20 text-black'> There are currently {adminuserCount} admin users </p>

    <p className='bg-green-500 p-10 w-full h-20 text-black'> The admin users have an average age of {adminuserAvgage} years old </p>


    </>
  )
}
