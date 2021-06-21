import dotenv from 'dotenv';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-lambda';
import schema from './graphql/schema';
import MongoDB from './db/Mongodb';

dotenv.config();
let db;

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
      const conn = await MongoDB({
        conn: db,
        mongoUrl: event.stageVariables ? `mongodb+${event.stageVariables.MONGO_URL}` : process.env.MONGO_URL,
      });

      db = conn;

      return ({
        db,
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
        acessibilityOptions: conn.model('acessibilityOptions'),
        categoryOptions: conn.model('categoryOptions'),
        productorOccupations: conn.model('productorOccupations'),
        musicalStyleOptions: conn.model('musicalStyleOptions'),
        spaceCapacityOptions: conn.model('spaceCapacityOptions'),
        productors: conn.model('productors'),
        artists: conn.model('artists'),
        users: conn.model('users'),
        events: conn.model('events'),
        locations: conn.model('locations'),
        songs: conn.model('songs'),
        countries: conn.model('countries'),
        states: conn.model('states'),
        cities: conn.model('cities'),
        communityUsers: conn.model('communityUsers'),
        news: conn.model('news'),
        highlightedOportunities: conn.model('highlightedOportunities'),
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
