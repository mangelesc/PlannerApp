import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListCategoryPageComponent } from './pages/list-category-page/list-category-page.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    // Load children -> lazy load
    // Children -> NO lazy load (Este módulo ya se está cargando en lazy load en el app.module)
    children: [
      {
        path: 'new-task', 
        component: NewPageComponent
      }, 
      {
        path: 'search', 
        component: SearchPageComponent
      },
      {
        path: 'edit/:id', 
        component: NewPageComponent
      },
      {
        path: 'list', 
        component: ListPageComponent
      },
      {
        // Cuidado donde colocamos :id, si lo ponemos al principio no entrará en los demás
        path: 'list/:category', 
        component: ListCategoryPageComponent
      },
      {
        path: '**', 
        redirectTo: 'list'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
