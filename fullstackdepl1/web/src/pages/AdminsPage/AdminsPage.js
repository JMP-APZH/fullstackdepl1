import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AdminsCell from 'src/components/AdminsCell'

const AdminsPage = () => {
  return (
    <>
      <MetaTags title="Admins" description="Admins page" />

      <h1>AdminsPage</h1>
      <p>
        Find me in <code>./web/src/pages/AdminsPage/AdminsPage.js</code>
      </p>
      <p>
        My default route is named <code>admins</code>, link to me with `
        <Link to={routes.admins()}>Admins</Link>`
      </p>

      <div>
        <AdminsCell />
      </div>
    </>
  )
}

export default AdminsPage
