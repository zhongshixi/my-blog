const express = require('express')
const graphqlHTTP = require('express-graphql')
const config = require('./config')
const schema = require('./schema')
const resolvers = require('./resolvers')
const app = express()

app.use('/graphql', graphqlHTTP(async (request, response, graphQLParams) => {
  return {
    schema: schema,
    graphiql: config.graphql.playground,
    pretty: config.graphql.pretty,
    rootValue: await resolvers(request)
  }
}))

app.listen(config.port)
