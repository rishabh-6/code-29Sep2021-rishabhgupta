import { ApolloClient, InMemoryCache } from '@apollo/client';
import Config from '../config';

const client = new ApolloClient({
    uri: Config.baseURL,
    cache: new InMemoryCache(),
  });
export default client