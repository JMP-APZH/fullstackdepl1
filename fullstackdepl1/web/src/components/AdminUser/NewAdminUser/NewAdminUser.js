import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AdminUserForm from 'src/components/AdminUser/AdminUserForm'

const CREATE_ADMIN_USER_MUTATION = gql`
  mutation CreateAdminUserMutation($input: CreateAdminUserInput!) {
    createAdminUser(input: $input) {
      id
    }
  }
`

const NewAdminUser = () => {
  const [createAdminUser, { loading, error }] = useMutation(
    CREATE_ADMIN_USER_MUTATION,
    {
      onCompleted: () => {
        toast.success('AdminUser created')
        navigate(routes.adminUsers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createAdminUser({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AdminUser</h2>
      </header>
      <div className="rw-segment-main">
        <AdminUserForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAdminUser
