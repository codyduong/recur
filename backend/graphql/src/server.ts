import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './schema';
import { context } from './context';

schema().then(async (result) => {
  const server = new ApolloServer<any>({ schema: result });
  const { url } = await startStandaloneServer(server, {
    context: context as any,
    listen: { port: 3002 },
  });
  console.log(`\
  🚀 Server ready at: ${url}
    `);

  return server;
});
