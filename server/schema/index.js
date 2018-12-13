const graphql = require('graphql')

module.exports = graphql.buildSchema(`

type Query {
  articles: [Article!]!
  article(id: ID!): Article
}

type Article {
  id: ID!
  title: String!
  comments: [Comment!]!
}

type Comment {
  id: ID!
  content: String!
  userId: ID!
}

`
)
