import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UPSERT_SOCIAL_MEDIA_MUTATION } from '../../../graphql/collections/mutations/upsert-social-media';
import { LIST_SOCIAL_MEDIA_QUERY } from '../../../graphql/collections/queries/list-social-medias';
import { GraphQLService } from '../../../graphql/graphql.service';

@Injectable()
export class UpsertSocialMediaService {
  @Inject(GraphQLService)
  private readonly $graphql: GraphQLService = inject(GraphQLService);

  public listSocialMedias(): Observable<any> {
    return this.$graphql.query(LIST_SOCIAL_MEDIA_QUERY, {});
  }

  public upsertSocialMedia(data: {
    link: string;
    socialMedia: string;
    userId: string;
  }): Observable<any> {
    console.log(data);
    return this.$graphql.mutate(UPSERT_SOCIAL_MEDIA_MUTATION, data);
  }
}
