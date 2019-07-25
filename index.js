import dotenv from 'dotenv';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-lambda';
import schema from './graphql/schema';
import MongoDB from './db/Mongodb';

const server = new ApolloServer(
  {
    schema: makeExecutableSchema(schema),
    introspection: true,
    playground: {
      settings: {
        'editor.theme': 'dark',
      },
      tabs: [
        {
          endpoint: '/graphql',
        },
      ],
    },
    path: '/graphql',
    context: ({ event, context }) => {
      dotenv.config();

      const mongoDB = new MongoDB();
      mongoDB.init({
        env: event.stageVariables ? event.stageVariables.env : 'local',
        mongoUrl: process.env.MONGO_URL,
      });

      return ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
        acessibilityOptions: mongoDB.AcessibilityOptions,
        categoryOptions: mongoDB.CategoryOptions,
        musicalStyleOptions: mongoDB.MusicalStyleOptions,
        spaceCapacityOptions: mongoDB.SpaceCapacityOptions,
        productors: mongoDB.Productors,
        artists: mongoDB.Artists,
        users: mongoDB.Users,
        events: mongoDB.Events,
        locations: mongoDB.Locations,
        songs: mongoDB.Songs,
      });
    },
  },
);

const graphqlHandler = server.createHandler();
export { graphqlHandler };
export default graphqlHandler;
