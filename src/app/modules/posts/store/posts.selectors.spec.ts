
import { State } from '@Interfaces/store.interface';
import { MOCKED_POSTS_STATE } from '@Mocks/posts.mock';
import { MOCKED_STATE } from '@Mocks/state.mock';

import { Post } from '../shared/posts.model';
import { postsSelectors } from './posts.selectors';

describe('PostsSelectors', (): void => {
  const state: State = MOCKED_STATE;

  it('selectPosts', (): void => {
    const result: Post[] = postsSelectors.selectPosts(state);

    expect(result).toEqual(MOCKED_POSTS_STATE.list);
  });

  it('selectPostsPending', (): void => {
    const result: boolean = postsSelectors.selectPostsPending(state);

    expect(result).toEqual(MOCKED_POSTS_STATE.pending);
  });
});
