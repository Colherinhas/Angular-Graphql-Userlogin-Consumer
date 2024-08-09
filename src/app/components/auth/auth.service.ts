import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LOGIN_MUTATION } from '../../../graphql/collections/mutations/login.mutation';
import { GraphQLService } from '../../../graphql/graphql.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Inject(GraphQLService)
  private readonly $graphql: GraphQLService = inject(GraphQLService);

  login(email: string, password: string): Observable<any> {
    const variables = { email, password };
    return this.$graphql.mutate(LOGIN_MUTATION, variables);
  }
}
