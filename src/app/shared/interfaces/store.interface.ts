import { ActionReducer } from '@ngrx/store';

import { PostsState } from '@Modules/posts/store/posts.state';

export interface LazyModules {
  posts?: PostsState;
}

// TODO: To add shared states for example for user profile
// tslint:disable-next-line: no-empty-interface
export interface Shared {
}

export interface State extends LazyModules {
  shared: Shared;
}

export interface Reducers {
  shared: ActionReducer<Shared>;
}
