import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Emoticon/EmoticonsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_EMOTICON_MUTATION = gql`
  mutation DeleteEmoticonMutation($id: Int!) {
    deleteEmoticon(id: $id) {
      id
    }
  }
`

const EmoticonsList = ({ emoticons }) => {
  const [deleteEmoticon] = useMutation(DELETE_EMOTICON_MUTATION, {
    onCompleted: () => {
      toast.success('Emoticon deleted')
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
    if (confirm('Are you sure you want to delete emoticon ' + id + '?')) {
      deleteEmoticon({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Emoticon</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {emoticons.map((emoticon) => (
            <tr key={emoticon.id}>
              <td>{truncate(emoticon.id)}</td>
              <td>{truncate(emoticon.emoticon)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.emoticon({ id: emoticon.id })}
                    title={'Show emoticon ' + emoticon.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEmoticon({ id: emoticon.id })}
                    title={'Edit emoticon ' + emoticon.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete emoticon ' + emoticon.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(emoticon.id)}
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

export default EmoticonsList
