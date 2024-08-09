import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CREATE_USER_MUTATION } from '../../../graphql/collections/mutations/create-user.mutation';
import { GraphQLService } from '../../../graphql/graphql.service';

@Injectable()
export class CreateUserService {
  @Inject(GraphQLService)
  private readonly $graphql: GraphQLService = inject(GraphQLService);

  public execute(data: {
    name: string;
    password: string;
    email: string;
    cpf: string;
    address?: string;
    phone?: string;
    photoUrl?: string;
  }): Observable<any> {
    return this.$graphql.mutate(CREATE_USER_MUTATION, data);
  }
}
