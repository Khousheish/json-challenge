import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewRoutes } from '@Consts/routes.enum';
import { ComponentsType } from '@Types/module.types';

import { ListPostsComponent } from './containers/list-posts/list-posts.component';
import { ListPostsResolver } from './containers/list-posts/list-posts.resolver';

const routes: Routes = [
  {
    path: ViewRoutes.Empty,
    component: ListPostsComponent,
    resolve: [ ListPostsResolver ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PostsRoutingModule {
}

export const routedComponents: ComponentsType = [
  ListPostsComponent,
];
