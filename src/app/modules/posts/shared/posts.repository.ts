import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from '@Consts/api.enum';
import { environment } from '@Environment';

import { Post } from './posts.model';

@Injectable()
export class PostsRepository {

  public constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  public getPosts(): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(`${environment.apiUrl}/${Api.posts}`);
  }
}
