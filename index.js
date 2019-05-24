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
      const mongoDB = new MongoDB();
      mongoDB.init({
        env: event.stageVariables ? event.stageVariables.env : 'local',
        mongoUrl: event.stageVariables ? event.stageVariables.mongoUrl : 'mongodb://localhost/som-local',
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
      });
    },
  },
);

const graphqlHandler = server.createHandler();
export { graphqlHandler };
export default graphqlHandler;
