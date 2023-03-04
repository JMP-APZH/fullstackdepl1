import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_ADMIN_USER_MUTATION = gql`
  mutation DeleteAdminUserMutation($id: Int!) {
    deleteAdminUser(id: $id) {
      id
    }
  }
`

const AdminUser = ({ adminUser }) => {
  const [deleteAdminUser] = useMutation(DELETE_ADMIN_USER_MUTATION, {
    onCompleted: () => {
      toast.success('AdminUser deleted')
      navigate(routes.adminUsers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete adminUser ' + id + '?')) {
      deleteAdminUser({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AdminUser {adminUser.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{adminUser.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{adminUser.name}</td>
            </tr>
            <tr>
              <th>Avatar</th>
              <td>{adminUser.avatar}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{adminUser.age}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAdminUser({ id: adminUser.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(adminUser.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AdminUser
