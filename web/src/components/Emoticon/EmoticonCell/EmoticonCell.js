import Emoticon from 'src/components/Emoticon/Emoticon'

export const QUERY = gql`
  query FindEmoticonById($id: Int!) {
    emoticon: emoticon(id: $id) {
      id
      emoticon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Emoticon not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ emoticon }) => {
  return <Emoticon emoticon={emoticon} />
}
