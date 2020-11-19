import { Post } from '@Modules/posts/shared/posts.model';
import { PostsState } from '@Modules/posts/store/posts.state';

import { MOCKED_HTTP_ERROR_RESPONSE } from './http-error-response.mock';

export const MOCKED_POST: Post = {
  id: 1,
  userId: 1,
  title: 'title',
  body: 'body',
};

export const MOCKED_POSTS_STATE: PostsState = {
  list: [MOCKED_POST],
  pending: true,
  error: MOCKED_HTTP_ERROR_RESPONSE,
};
