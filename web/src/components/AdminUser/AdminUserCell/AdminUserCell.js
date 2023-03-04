import AdminUser from 'src/components/AdminUser/AdminUser'

export const QUERY = gql`
  query FindAdminUserById($id: Int!) {
    adminUser: adminUser(id: $id) {
      id
      name
      avatar
      age
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AdminUser not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ adminUser }) => {
  return <AdminUser adminUser={adminUser} />
}
