export const QUERY = gql`
  query AdminsQuery {
    adminUsers {
      id
      name
      avatar
      age
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ adminUsers }) => {
  return (
    <ul>
      {adminUsers.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
