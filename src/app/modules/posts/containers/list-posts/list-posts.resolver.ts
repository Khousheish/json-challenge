import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';

import { PostsFacade } from '../../store/posts.facade';

@Injectable()
export class ListPostsResolver implements Resolve<Observable<boolean>> {

  public constructor(
    private readonly postsFacade: PostsFacade,
  ) {
  }

  public resolve(): Observable<boolean> {
    this.postsFacade.getPosts();

    return this.postsFacade.posts$
      .pipe(
        switchMap((): Observable<boolean> => this.postsFacade.postsPending$),
        filter((pending: boolean): boolean => !pending),
        take(1),
      );
  }
}
