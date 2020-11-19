import { HttpErrorResponse } from '@angular/common/http';

import { Post } from '../shared/posts.model';

export interface PostsState {
  list: Post[];
  pending: boolean;
  error: HttpErrorResponse;
}
