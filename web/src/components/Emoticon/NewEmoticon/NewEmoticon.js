import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmoticonForm from 'src/components/Emoticon/EmoticonForm'

const CREATE_EMOTICON_MUTATION = gql`
  mutation CreateEmoticonMutation($input: CreateEmoticonInput!) {
    createEmoticon(input: $input) {
      id
    }
  }
`

const NewEmoticon = () => {
  const [createEmoticon, { loading, error }] = useMutation(
    CREATE_EMOTICON_MUTATION,
    {
      onCompleted: () => {
        toast.success('Emoticon created')
        navigate(routes.emoticons())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createEmoticon({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Emoticon</h2>
      </header>
      <div className="rw-segment-main">
        <EmoticonForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEmoticon
