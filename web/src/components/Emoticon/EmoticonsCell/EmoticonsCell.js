import { Link, routes } from '@redwoodjs/router'

import Emoticons from 'src/components/Emoticon/Emoticons'

export const QUERY = gql`
  query FindEmoticons {
    emoticons {
      id
      emoticon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No emoticons yet. '}
      <Link to={routes.newEmoticon()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ emoticons }) => {
  return <Emoticons emoticons={emoticons} />
}
