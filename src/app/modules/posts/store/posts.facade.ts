import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '@Interfaces/store.interface';

import { Post } from '../shared/posts.model';
import { getPosts, setPendingState } from './posts.actions';
import { postsSelectors } from './posts.selectors';

@Injectable()
export class PostsFacade {
  public posts$: Observable<Post[]> = this.store
    .pipe(select(postsSelectors.selectPosts));
  public postsPending$: Observable<boolean> = this.store
    .pipe(select(postsSelectors.selectPostsPending));

  public constructor(
    private readonly store: Store<State>,
  ) {
  }

  public setPendingState(isPending: boolean): void {
    this.store.dispatch(setPendingState({isPending}));
  }

  public getPosts(): void {
    this.store.dispatch(getPosts());
  }
}
