import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutePathMatchOptions, ViewRoutes } from '@Consts/routes.enum';
import { Page404Component } from '@Pages/page404/page404.component';
import { Module } from '@Types/module.types';

const routes: Routes = [
  {
    path: ViewRoutes.Posts,
    loadChildren: (): Promise<Module> => import('./modules/posts/posts.module')
      .then((module: Module): Module => module.PostsModule),
  },
  {
    path: ViewRoutes.NotFound,
    component: Page404Component,
  },
  {
    path: ViewRoutes.Empty,
    redirectTo: ViewRoutes.Posts,
    pathMatch: RoutePathMatchOptions.Full,
  },
  {
    path: ViewRoutes.Others,
    redirectTo: `/${ViewRoutes.NotFound}`,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
