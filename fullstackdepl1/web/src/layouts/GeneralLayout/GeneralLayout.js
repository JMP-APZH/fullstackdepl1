import { Link, routes } from "@redwoodjs/router"

const GeneralLayout = ({ children }) => {
  return (
    <>
      <header className="">
        <h1 className="text-center p-4"> Charted GraphQL Project </h1>
        <nav className="text-center">
          <ul className="flex justify-center gap-2">
            <li className="px-2 bg-blue-300 text-yellow-600">
              <Link to={routes.admins()}>Admins</Link>
            </li>
            <li>
              <Link to={routes.charts()}>Charts</Link>
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
