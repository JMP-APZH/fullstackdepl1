import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AdminsCell from 'src/components/AdminsCell'
import AdminUsersCell from 'src/components/AdminUser/AdminUsersCell'

const AdminsPage = () => {
  return (
    <>
      <MetaTags title="Admins" description="Admins page" />

      <div>
        <AdminsCell />
      </div>

      <div>
        <AdminUsersCell />
      </div>
    </>
  )
}

export default AdminsPage
