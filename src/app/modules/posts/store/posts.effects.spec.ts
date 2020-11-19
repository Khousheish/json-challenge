import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { Observable, of, Subject, throwError } from 'rxjs';
import { mapTo, switchMap, take, tap } from 'rxjs/operators';

import { MOCKED_POSTS_STATE } from '@Mocks/posts.mock';
import { Spied } from '@Specs/types/utils.type';

import { Post } from '../shared/posts.model';
import { PostsRepository } from '../shared/posts.repository';
import { getPosts, PostsActionsTypes } from './posts.actions';
import { PostsEffects } from './posts.effects';
import { PostsFacade } from './posts.facade';

describe('PostsEffects', (): void => {
  // tslint:disable-next-line: no-any
  const error: any = { error: 'someError' };
  let effects: PostsEffects;
  let mockedPostsRepository: Spied<PostsRepository>;
  let mockedPostsFacade: Spied<PostsFacade>;
  // tslint:disable-next-line: no-any
  let actionsSubject: Subject<any>;
  // tslint:disable-next-line: no-any
  let mockedActions$: Observable<any>;

  beforeEach((): void => {
    actionsSubject = new Subject();
    mockedActions$ = actionsSubject.asObservable();

    mockedPostsRepository = jasmine.createSpyObj('mockedPostsRepository', [
      'getPosts',
    ]);

    mockedPostsFacade = {
      ...jasmine.createSpyObj('PostsFacade', ['setPendingState']),
    };

    TestBed.configureTestingModule({
      providers: [
        PostsEffects,
        {
          provide: Actions,
          useValue: mockedActions$,
        },
        {
          provide: PostsFacade,
          useValue: mockedPostsFacade,
        },
        {
          provide: PostsRepository,
          useValue: mockedPostsRepository,
        },
      ],
    });

    effects = TestBed.inject(PostsEffects);
  });

  describe('getPosts$', (): void => {
    it('should call getPosts and emit getPostsSuccess', (done: DoneFn): void => {
      mockedPostsRepository.getPosts.and.returnValue(of(MOCKED_POSTS_STATE.list));

      (<Observable<Post[]>><unknown>effects.getPosts$)
        .pipe(take(1))
        // tslint:disable-next-line: no-any
        .subscribe((action: any): void => {
          expect(action.type).toEqual(PostsActionsTypes.GetPostsSuccess);

          done();
        });

      actionsSubject.next(getPosts());

      expect(mockedPostsRepository.getPosts).toHaveBeenCalledTimes(1);
      expect(mockedPostsRepository.getPosts).toHaveBeenCalledWith();
    });

    it('should call getPosts and emit getPostsError', (done: DoneFn): void => {
      mockedPostsRepository.getPosts.and.returnValue(throwError(error));

      (<Observable<Post[]>><unknown>effects.getPosts$)
        .pipe(take(1))
        // tslint:disable-next-line: no-any
        .subscribe((action: any): void => {
          expect(action.type).toEqual(PostsActionsTypes.GetPostsError);

          done();
        });

      actionsSubject.next(getPosts());

      expect(mockedPostsRepository.getPosts).toHaveBeenCalledTimes(1);
      expect(mockedPostsRepository.getPosts).toHaveBeenCalledWith();
    });
  });
});
