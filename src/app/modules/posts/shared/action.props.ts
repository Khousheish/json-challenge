import { HttpErrorResponse } from '@angular/common/http';

import { Post } from './posts.model';

export interface GetPostsSuccessProps {
  posts: Post[];
}

export interface ErrorProps {
  error: HttpErrorResponse;
}

export interface PendingProps {
  isPending: boolean;
}
