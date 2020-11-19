import { State } from '@Interfaces/store.interface';

import { MOCKED_POSTS_STATE } from './posts.mock';

export const MOCKED_STATE: State = {
  shared: {
  },
  posts: MOCKED_POSTS_STATE,
};
