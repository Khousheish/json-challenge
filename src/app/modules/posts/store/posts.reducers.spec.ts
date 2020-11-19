import { MOCKED_HTTP_ERROR_RESPONSE } from '@Mocks/http-error-response.mock';
import { MOCKED_POSTS_STATE } from '@Mocks/posts.mock';

import { Post } from '../shared/posts.model';
import { getPosts, getPostsError, getPostsSuccess, setPendingState } from './posts.actions';
import { postsInitialState, postsReducer } from './posts.reducers';
import { PostsState } from './posts.state';

describe('postsReducer', (): void => {
  // tslint:disable-next-line: no-any
  const requestSendingActions: any[] = [
    getPosts(),
  ];
  // tslint:disable-next-line: no-any
  const errorAddingActions: any[] = [
    getPostsError({error: MOCKED_HTTP_ERROR_RESPONSE}),
  ];
  const pendingState: PostsState = {
    ...postsInitialState,
    pending: true,
    error: null,
  };
  const errorState: PostsState = {
    ...postsInitialState,
    pending: false,
    error: MOCKED_HTTP_ERROR_RESPONSE,
  };
  // tslint:disable-next-line: no-any
  const singleTestForGenericAction: (description: string, action: any, outputState: PostsState) => void =
  // tslint:disable-next-line: no-any
  (description: string, action: any, outputState: PostsState): void => {
    it(`${description} for ${action.type} action`, (): void => {
      const state: PostsState = postsReducer(
        postsInitialState,
        action,
      );

      expect(state).not.toBe(MOCKED_POSTS_STATE);
      expect(state).toEqual(outputState);
    });
  };

  describe('Request Actions', (): void => {
    it('should set state to initial state when passed state is undefined', (): void => {
      const undefinedState: PostsState = undefined;
      const state: PostsState = postsReducer(
        undefinedState,
        // tslint:disable-next-line: no-any
        <any>'SOME_ACTION',
      );

      expect(state).toBe(postsInitialState);
    });

    describe('request sending actions', (): void => {
      requestSendingActions.forEach(
        // tslint:disable-next-line: no-any
        (action: any): void => {
          singleTestForGenericAction('should add pending flag', action, pendingState);
        },
      );
    });

    describe('Error Actions', (): void => {
      errorAddingActions.forEach(
        // tslint:disable-next-line: no-any
        (action: any): void => {
          singleTestForGenericAction('should add pending flag', action, errorState);
        },
      );
    });

    describe('Success Actions', (): void => {
      it('should set PostsState.pending to isPending', (): void => {
        const isPending: boolean = MOCKED_POSTS_STATE.pending;
        const state: PostsState = postsReducer(
          postsInitialState,
          setPendingState({isPending}),
        );

        expect(state).not.toBe(postsInitialState);
        expect(state).toEqual({
          ...postsInitialState,
          pending: isPending,
          error: null,
        });
      });

      it('should set PostsState.pending to isPending', (): void => {
        const isPending: boolean = MOCKED_POSTS_STATE.pending;
        const state: PostsState = postsReducer(
          postsInitialState,
          setPendingState({isPending}),
        );

        expect(state).not.toBe(postsInitialState);
        expect(state).toEqual({
          ...postsInitialState,
          pending: isPending,
          error: null,
        });
      });

      it('should set PostsState.list to returned list', (): void => {
        const posts: Post[] = MOCKED_POSTS_STATE.list;
        const state: PostsState = postsReducer(
          postsInitialState,
          getPostsSuccess({posts}),
        );

        expect(state).not.toBe(postsInitialState);
        expect(state).toEqual({
          ...postsInitialState,
          list: posts,
        });
      });
    });
  });
});
