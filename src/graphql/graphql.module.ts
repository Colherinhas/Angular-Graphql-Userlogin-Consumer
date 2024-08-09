import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

@NgModule({
  imports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        const authLink = setContext((_, { headers }) => {
          const token = JSON.parse(localStorage.getItem('token') as string);
          return {
            headers: {
              ...headers,
              Authorization: token ? `Bearer ${token}` : '',
            },
          };
        });

        const link = authLink.concat(
          httpLink.create({ uri: 'http://localhost:3000/graphql' })
        );

        return {
          cache: new InMemoryCache(),
          link,
        };
      },
      deps: [HttpLink],
    },
  ],
  exports: [ApolloModule],
})
export class GraphQLModule {}
