const Express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('../schema/schema');
const config = require('../config/config.json');

const app = new Express();
const { SERVER_PORT, MONGO_CREDENTIALS } = config;

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

async function launchServer() {
  try {
    await mongoose.connect('mongodb://localhost:27017/', MONGO_CREDENTIALS);
    app.listen(SERVER_PORT, async (err) => {
      if (err) console.log(err);
    });
  } catch (e) {
    console.log(`cant start srv: ${e}`);
  }
}

launchServer().then(() => {
  console.log(`Server started on port http://localhost:${SERVER_PORT}/graphql`);
});
