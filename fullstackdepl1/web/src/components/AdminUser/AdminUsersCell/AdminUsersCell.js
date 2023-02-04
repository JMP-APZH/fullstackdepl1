import { Link, routes } from '@redwoodjs/router'

import AdminUsers from 'src/components/AdminUser/AdminUsers'

export const QUERY = gql`
  query FindAdminUsers {
    adminUsers {
      id
      name
      avatar
      age
    }
    adminuserCount
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No adminUsers yet. '}
      <Link to={routes.newAdminUser()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ adminUsers, adminuserCount }) => {
  console.log("The number of adminusers from AdminUsersCell : ", adminuserCount)
  return (
    <>
    <AdminUsers adminUsers={adminUsers} />
    <p className='bg-blue-500 p-10 w-full h-20 text-black'> {adminuserCount} </p>
    </>
  )
}

// export const Success = ({ admins }) => {
//   return <AdminUsers adminUsers={admins} />
// }
