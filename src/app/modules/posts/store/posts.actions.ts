// tslint:disable: max-line-length
import { createAction, props } from '@ngrx/store';

import { ActionCreatorPropsType, ActionCreatorType } from '@Types/action.types';

import { ErrorProps, GetPostsSuccessProps, PendingProps } from '../shared/action.props';

export enum PostsActionsTypes {
  Pending = '[Posts] PENDING',

  GetPosts = '[Posts] GET_POSTS',
  GetPostsSuccess = '[Posts] GET_POSTS_SUCCESS',
  GetPostsError = '[Posts] GET_POSTS_ERROR',
}

export const setPendingState: ActionCreatorPropsType<PostsActionsTypes.Pending, PendingProps> = createAction(PostsActionsTypes.Pending, props<PendingProps>());

export const getPosts: ActionCreatorType<PostsActionsTypes.GetPosts> = createAction(PostsActionsTypes.GetPosts);
export const getPostsSuccess: ActionCreatorPropsType<PostsActionsTypes.GetPostsSuccess, GetPostsSuccessProps> = createAction(PostsActionsTypes.GetPostsSuccess, props<GetPostsSuccessProps>());
export const getPostsError: ActionCreatorPropsType<PostsActionsTypes.GetPostsError, ErrorProps> = createAction(PostsActionsTypes.GetPostsError, props<ErrorProps>());
