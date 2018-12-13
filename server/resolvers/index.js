const database = require('../database')

module.exports = async () => ({
  articles: async (source, args, context, info) => {
    return database.getArticles()
  }
})
