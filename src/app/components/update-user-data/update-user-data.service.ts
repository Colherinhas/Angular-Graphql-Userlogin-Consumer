import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UPDATE_USER_MUTATION } from '../../../graphql/collections/mutations/updateUser.mutation';
import { GraphQLService } from '../../../graphql/graphql.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserDataService {
  @Inject(GraphQLService)
  private readonly $graphql: GraphQLService = inject(GraphQLService);

  updateUser(variables: {
    id: string;
    token: string;
    name?: string;
    address?: string;
    photoUrl?: string;
    phone?: string;
  }): Observable<any> {
    return this.$graphql.mutate(UPDATE_USER_MUTATION, variables);
  }
}