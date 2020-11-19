import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { State } from '@Interfaces/store.interface';
import { MOCKED_POSTS_STATE } from '@Mocks/posts.mock';
import { Spied } from '@Specs/types/utils.type';

import { getPosts, setPendingState } from './posts.actions';
import { PostsFacade } from './posts.facade';

describe('PostsFacade', (): void => {
  let facade: PostsFacade;
  let mockedStore: Spied<Store<State>>;

  beforeEach((): void => {
    mockedStore = jasmine.createSpyObj('Store', ['dispatch', 'pipe']);

    TestBed.configureTestingModule({
      providers: [
        PostsFacade,
        { provide: Store, useValue: mockedStore },
      ],
    });

    facade = TestBed.inject(PostsFacade);
  });

  describe('setPendingState', (): void => {
    it('should dispatch setPendingState action', (): void => {
      const isPending: boolean = MOCKED_POSTS_STATE.pending;

      facade.setPendingState(isPending);

      expect(mockedStore.dispatch).toHaveBeenCalledTimes(1);
      expect(mockedStore.dispatch).toHaveBeenCalledWith(setPendingState({isPending}));
    });
  });

  describe('getPosts', (): void => {
    it('should dispatch getPosts action', (): void => {
      facade.getPosts();

      expect(mockedStore.dispatch).toHaveBeenCalledTimes(1);
      expect(mockedStore.dispatch).toHaveBeenCalledWith(getPosts());
    });
  });
});
