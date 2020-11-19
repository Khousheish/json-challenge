// tslint:disable: max-line-length
import { TypedActionProps } from '@Types/action.types';

import { PostsActionsTypes } from '../store/posts.actions';
import { ErrorProps, GetPostsSuccessProps, PendingProps } from './action.props';

export type GetPostsSuccessActionType = TypedActionProps<PostsActionsTypes.GetPostsSuccess, GetPostsSuccessProps>;
export type GetPostsErrorActionType = TypedActionProps<PostsActionsTypes.GetPostsError, ErrorProps>;
export type SetPendingActionType<T extends string> = TypedActionProps<T, PendingProps>;
