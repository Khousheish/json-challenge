import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Api } from '@Consts/api.enum';
import { environment } from '@Environment';
import { MOCKED_POSTS_STATE } from '@Mocks/posts.mock';
import { Spied } from '@Specs/types/utils.type';

import { Post } from './posts.model';
import { PostsRepository } from './posts.repository';

describe('PostsRepository', (): void => {
  let repository: PostsRepository;
  let httpMock: HttpTestingController;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        PostsRepository,
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    repository = TestBed.inject(PostsRepository);
  });

  afterEach((): void => {
    httpMock.verify();
  });

  describe('getPosts', (): void => {
    it('should return posts', (done: DoneFn): void => {
      repository.getPosts().subscribe((posts: Post[]): void => {
        expect(posts).toEqual(MOCKED_POSTS_STATE.list);

        done();
      });

      const postRequest: TestRequest = httpMock.expectOne(
        `${environment.apiUrl}/${Api.posts}`,
      );
      expect(postRequest.request.method).toEqual('GET');
      postRequest.flush(MOCKED_POSTS_STATE.list);

      httpMock.verify();

    });

    it('should throw error when request fails', (done: DoneFn): void => {
      const errorText: string = 'SOME_ERROR';

      repository.getPosts().subscribe(
        (): void => null,
        (err: HttpErrorResponse): void => {
          expect(err.statusText).toEqual(errorText);

          done();
        });

      const postRequest: TestRequest = httpMock.expectOne(
        `${environment.apiUrl}/${Api.posts}`,
      );
      postRequest.error(new ErrorEvent(errorText), { statusText: errorText });
    });
  });
});
