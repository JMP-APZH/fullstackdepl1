export const schema = gql`
  type AdminUser {
    id: Int!
    name: String!
    avatar: String!
    age: Int!
  }

# type AdminAvg {
#   age: Int!
#   average: Float!
# }

type AdminAvg {
  _avg: Float
  age: Float
}
type Agedescorder {
  id: Int
  name: String
  age: Int
}
type CountAge {
  id: Int
  name: String
  age: Int
}


  type Query {
    adminUsers: [AdminUser!]! @requireAuth
    adminUser(id: Int!): AdminUser @requireAuth

    adminuserCount: Int! @skipAuth
    adminuserAvgage: Float! @skipAuth
    # adminuserAvgage: AdminAvg @skipAuth
    # newavg: Float! @skipAuth
    # adminuserAvgage: [AdminAvg] @skipAuth

    adminorderage: [Agedescorder] @skipAuth
    admincountbyage_50: Int! @skipAuth
    admincountbyage_40: Int! @skipAuth
    admincountbyage_30: Int! @skipAuth
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
