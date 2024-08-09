import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraphQLService {
  constructor(private apollo: Apollo) {}

  public query<T>(query: string, variables?: any): Observable<any> {
    return this.apollo
      .query<T>({
        query: gql`
          ${query}
        `,
        variables,
      })
      .pipe(map((result) => result.data));
  }

  public mutate<T>(mutation: string, variables?: any): Observable<any> {
    return this.apollo
      .mutate<T>({
        mutation: gql`
          ${mutation}
        `,
        variables,
      })
      .pipe(map((result) => result.data));
  }
}
