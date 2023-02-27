import { Link, routes } from "@redwoodjs/router"

const GeneralLayout = ({ children }) => {
  return (
    <>
      <header className="bg-violet-600 sticky z-40 top-0 pb-10">
        <h1 className="text-center text-3xl font-semibold p-4"> Charted GraphQL Project </h1>
        <nav className="text-center">
          <ul className="flex justify-center gap-2">
            <li className="bg-blue-700 font-bold text-yellow-600 hover:text-red-600 hover:bg-black">
              <Link
                to={routes.admins()}
                className='hover:text-red-600 hover:bg-black px-2'
              >
                AdminDashBoard
              </Link>
            </li>
            <li className="bg-blue-700 font-bold text-yellow-600 hover:text-red-600 hover:bg-black">
              <Link
                to={routes.charts()}
                className='hover:text-red-600 hover:bg-black px-2'
              >
                Charts
              </Link>
            </li>
            <li className="bg-blue-700 font-bold text-yellow-600 hover:text-red-600 hover:bg-black">
              <Link
                to={routes.charts()}
                className='hover:text-red-600 hover:bg-black px-2'
              >
                AdminSearch
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>

    </>
  )

}

export default GeneralLayout
