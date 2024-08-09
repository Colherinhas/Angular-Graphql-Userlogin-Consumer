import { inject, Inject, Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  @Inject(Apollo)
  private readonly $apollo: Apollo = inject(Apollo);

  listUsers() {
    return this.$apollo.query({
      query: gql`
        query ListUsers {
          users {
            id
            name
            status
            photoUrl
            createdAt
          }
        }
      `,
    });
  }
  //testar listuser antes de fazer o resto
  //perguntar de dto's no angular
  createUser() {}
}
