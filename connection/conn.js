import { split, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpsLink = new HttpLink({
  uri: 'https://welcome-elf-64.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': process.env.REACT_APP_ADMIN_SECRET,
  },
});

const wssLink = new WebSocketLink({
  uri: 'ws://welcome-elf-64.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': process.env.REACT_APP_ADMIN_SECRET,
      },
    },
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wssLink,
  httpsLink
);

export default function Client_conn() {
  const createApolloClient = () => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link,
    });
  };
  return createApolloClient();
}
