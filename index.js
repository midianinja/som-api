import dotenv from 'dotenv';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-lambda';
import schema from './graphql/schema';
import MongoDB from './db/Mongodb';

dotenv.config();
let conn = null;

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
    context: async ({ event, context }) => {
      conn = await MongoDB({
        conn,
        mongoUrl: event.stageVariables ? `mongodb+${event.stageVariables.MONGO_URL}` : process.env.MONGO_URL,
      });

      return ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
        acessibilityOptions: conn.model('acessibilityOptions'),
        categoryOptions: conn.model('categoryOptions'),
        musicalStyleOptions: conn.model('musicalStyleOptions'),
        spaceCapacityOptions: conn.model('spaceCapacityOptions'),
        productors: conn.model('productors'),
        artists: conn.model('artists'),
        users: conn.model('users'),
        events: conn.model('events'),
        locations: conn.model('locations'),
        songs: conn.model('songs'),
      });
    },
  },
);

const graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    methods: 'POST',
    allowedHeaders: [
      'Content-Type',
      'Origin',
      'Accept',
    ],
    credentials: true,
  },
});

export { graphqlHandler };
export default graphqlHandler;
