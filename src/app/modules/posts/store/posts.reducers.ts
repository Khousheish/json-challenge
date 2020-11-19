import { ActionReducer, createReducer, on } from '@ngrx/store';

import { ErrorProps, GetPostsSuccessProps } from '../shared/action.props';
import { SetPendingActionType } from '../shared/action.types';
import { getPosts, getPostsError, getPostsSuccess, PostsActionsTypes, setPendingState } from './posts.actions';
import { PostsState } from './posts.state';

export const postsInitialState: PostsState = {
  list: [],
  pending: false,
  error: null,
};

export const postsReducer: ActionReducer<PostsState> = createReducer(
  postsInitialState,
  on(setPendingState, (state: PostsState, action: SetPendingActionType<PostsActionsTypes.Pending>): PostsState => ({
    ...state,
    pending: action.isPending,
  })),
  on(getPosts, (state: PostsState): PostsState => ({
    ...state,
    pending: true,
  })),
  on(getPostsSuccess, (state: PostsState, action: GetPostsSuccessProps): PostsState => ({
    ...state,
    list: action.posts,
  })),
  on(getPostsError, (state: PostsState, action: ErrorProps): PostsState => ({
    ...state,
    error: action.error,
  })),
);
