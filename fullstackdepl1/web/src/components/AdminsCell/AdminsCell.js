export const QUERY = gql`
  query AdminsQuery {
    adminUsers {
      id
      name
      avatar
      age
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ adminUsers }) => {
  return (
    // <ul>
    //   {adminUsers.map((item) => {
    //     return <li key={item.id}>{JSON.stringify(item)}</li>
    //   })}
    // </ul>

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
  )
}
