import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmoticonForm from 'src/components/Emoticon/EmoticonForm'

export const QUERY = gql`
  query EditEmoticonById($id: Int!) {
    emoticon: emoticon(id: $id) {
      id
      emoticon
    }
  }
`
const UPDATE_EMOTICON_MUTATION = gql`
  mutation UpdateEmoticonMutation($id: Int!, $input: UpdateEmoticonInput!) {
    updateEmoticon(id: $id, input: $input) {
      id
      emoticon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ emoticon }) => {
  const [updateEmoticon, { loading, error }] = useMutation(
    UPDATE_EMOTICON_MUTATION,
    {
      onCompleted: () => {
        toast.success('Emoticon updated')
        navigate(routes.emoticons())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateEmoticon({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Emoticon {emoticon?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EmoticonForm
          emoticon={emoticon}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
