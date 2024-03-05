const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String
    savedBooks: [Book]
    bookCount: Int
}

type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
}

type BookInput {
    bookId: String!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!

}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutations {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;