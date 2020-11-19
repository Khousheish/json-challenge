import { NgModule, Provider } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ViewRoutes } from '@Consts/routes.enum';
import { SharedModule } from '@SharedModule';
import { ComponentsType, ModulesType } from '@Types/module.types';

import { SinglePostComponent } from './components/single-post/single-post.component';
import { ListPostsResolver } from './containers/list-posts/list-posts.resolver';
import { PostsRoutingModule, routedComponents } from './posts-routing.module';
import { PostsRepository } from './shared/posts.repository';
import { PostsEffects } from './store/posts.effects';
import { PostsFacade } from './store/posts.facade';
import { postsReducer } from './store/posts.reducers';

const modules: ModulesType = [
  SharedModule,
  RouterModule,
  ReactiveFormsModule,
  PostsRoutingModule,
  EffectsModule.forFeature([PostsEffects]),
  StoreModule.forFeature(ViewRoutes.Posts, postsReducer),
];

const components: ComponentsType = [
  ...routedComponents,
  SinglePostComponent,
];

const providers: Provider[] = [
  PostsRepository,
  PostsFacade,
  ListPostsResolver,
];

@NgModule({
  imports: [ ...modules ],
  declarations: [ ...components ],
  providers: [ ...providers ],
})
export class PostsModule {
}
