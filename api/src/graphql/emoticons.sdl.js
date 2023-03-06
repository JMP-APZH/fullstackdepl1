export const schema = gql`
  type Emoticon {
    id: Int!
    emoticon: String!
  }

  type Query {
    emoticons: [Emoticon!]! @requireAuth
    emoticon(id: Int!): Emoticon @requireAuth
  }

  input CreateEmoticonInput {
    emoticon: String!
  }

  input UpdateEmoticonInput {
    emoticon: String
  }

  type Mutation {
    createEmoticon(input: CreateEmoticonInput!): Emoticon! @requireAuth
    updateEmoticon(id: Int!, input: UpdateEmoticonInput!): Emoticon!
      @requireAuth
    deleteEmoticon(id: Int!): Emoticon! @requireAuth
  }
`
