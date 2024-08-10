import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CREATE_REPO_MUTATION } from '../../../graphql/collections/mutations/create-repo.mutation';
import { GraphQLService } from '../../../graphql/graphql.service';

@Injectable()
export class CreateRepoService {
  @Inject(GraphQLService)
  private readonly $graphql: GraphQLService = inject(GraphQLService);

  public createRepo(data: {
    userId: string;
    link: string;
    language: string[];
  }): Observable<any> {
    return this.$graphql.mutate(CREATE_REPO_MUTATION, data);
  }
}
