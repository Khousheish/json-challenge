
import { State } from '@Interfaces/store.interface';

import { Post } from '../shared/posts.model';

interface PostsSelectors {
  selectPosts(state: State): Post[];
  selectPostsPending(state: State): boolean;
}

export const postsSelectors: PostsSelectors = {
  selectPosts: (state: State): Post[] => state.posts.list,
  selectPostsPending: (state: State): boolean => state.posts.pending,
};
