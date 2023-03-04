import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AdminUserForm from 'src/components/AdminUser/AdminUserForm'

export const QUERY = gql`
  query EditAdminUserById($id: Int!) {
    adminUser: adminUser(id: $id) {
      id
      name
      avatar
      age
    }
  }
`
const UPDATE_ADMIN_USER_MUTATION = gql`
  mutation UpdateAdminUserMutation($id: Int!, $input: UpdateAdminUserInput!) {
    updateAdminUser(id: $id, input: $input) {
      id
      name
      avatar
      age
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ adminUser }) => {
  const [updateAdminUser, { loading, error }] = useMutation(
    UPDATE_ADMIN_USER_MUTATION,
    {
      onCompleted: () => {
        toast.success('AdminUser updated')
        navigate(routes.adminUsers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateAdminUser({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AdminUser {adminUser?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AdminUserForm
          adminUser={adminUser}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
