export const schema = gql`
  type AdminUser {
    id: Int!
    name: String!
    avatar: String!
    age: Int!
  }



  type Query {
    adminUsers: [AdminUser!]! @requireAuth
    adminUser(id: Int!): AdminUser @requireAuth

    adminuserCount: Int! @skipAuth
  }

  input CreateAdminUserInput {
    name: String!
    avatar: String!
    age: Int!
  }

  input UpdateAdminUserInput {
    name: String
    avatar: String
    age: Int
  }

  type Mutation {
    createAdminUser(input: CreateAdminUserInput!): AdminUser! @requireAuth
    updateAdminUser(id: Int!, input: UpdateAdminUserInput!): AdminUser!
      @requireAuth
    deleteAdminUser(id: Int!): AdminUser! @requireAuth
  }
`
