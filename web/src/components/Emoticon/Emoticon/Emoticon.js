import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_EMOTICON_MUTATION = gql`
  mutation DeleteEmoticonMutation($id: Int!) {
    deleteEmoticon(id: $id) {
      id
    }
  }
`

const Emoticon = ({ emoticon }) => {
  const [deleteEmoticon] = useMutation(DELETE_EMOTICON_MUTATION, {
    onCompleted: () => {
      toast.success('Emoticon deleted')
      navigate(routes.emoticons())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete emoticon ' + id + '?')) {
      deleteEmoticon({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Emoticon {emoticon.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{emoticon.id}</td>
            </tr>
            <tr>
              <th>Emoticon</th>
              <td>{emoticon.emoticon}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEmoticon({ id: emoticon.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(emoticon.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Emoticon
