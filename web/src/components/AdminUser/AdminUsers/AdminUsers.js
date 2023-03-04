import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/AdminUser/AdminUsersCell'
import { truncate } from 'src/lib/formatters'

const DELETE_ADMIN_USER_MUTATION = gql`
  mutation DeleteAdminUserMutation($id: Int!) {
    deleteAdminUser(id: $id) {
      id
    }
  }
`

const AdminUsersList = ({ adminUsers }) => {
  const [deleteAdminUser] = useMutation(DELETE_ADMIN_USER_MUTATION, {
    onCompleted: () => {
      toast.success('AdminUser deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete adminUser ' + id + '?')) {
      deleteAdminUser({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>Age</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {adminUsers.map((adminUser) => (
            <tr key={adminUser.id}>
              <td>{truncate(adminUser.id)}</td>
              <td>{truncate(adminUser.name)}</td>
              <td>{truncate(adminUser.avatar)}</td>
              <td>{truncate(adminUser.age)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminUser({ id: adminUser.id })}
                    title={'Show adminUser ' + adminUser.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAdminUser({ id: adminUser.id })}
                    title={'Edit adminUser ' + adminUser.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete adminUser ' + adminUser.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(adminUser.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminUsersList
