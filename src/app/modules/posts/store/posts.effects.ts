import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { GetPostsErrorActionType, GetPostsSuccessActionType } from '../shared/action.types';
import { Post } from '../shared/posts.model';
import { PostsRepository } from '../shared/posts.repository';
import { getPostsError, getPostsSuccess, PostsActionsTypes } from './posts.actions';
import { PostsFacade } from './posts.facade';

@Injectable()
export class PostsEffects {
  public getPosts$: CreateEffectMetadata = createEffect(
    (): Observable<GetPostsSuccessActionType | GetPostsErrorActionType> => (
      this.actions$
        .pipe(
          ofType(PostsActionsTypes.GetPosts),
          switchMap((): Observable<Post[]> => this.postsRepository.getPosts()),
          tap(this.setPendingStateToFalse.bind(this)),
          map((posts: Post[]): GetPostsSuccessActionType => getPostsSuccess({posts})),
          catchError((error: HttpErrorResponse): Observable<GetPostsErrorActionType> => of(getPostsError({error}))),
        )
    ),
  );

  public constructor(
    private readonly actions$: Actions,
    private readonly postsFacade: PostsFacade,
    private readonly postsRepository: PostsRepository,
  ) {
  }

  private setPendingStateToFalse(): void {
    this.postsFacade.setPendingState(false);
  }
}
