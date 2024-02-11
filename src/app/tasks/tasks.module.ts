import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { TasksRoutingModule } from './tasks-routing.module';

import { CardComponent } from './components/card/card.component';
import { CardsAccordionComponent } from './components/cards-accordion/cards-accordion.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListCategoryPageComponent } from './pages/list-category-page/list-category-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { CategoryButtonComponent } from './components/category-button/category-button.component';
import { CategoriesListButtonsComponent } from './components/categories-list-buttons/categories-list-buttons.component';




@NgModule({
  declarations: [
    CardComponent,
    CardsAccordionComponent,
    LayoutPageComponent,
    ListCategoryPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    TaskPageComponent,
    CategoryButtonComponent,
    CategoriesListButtonsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    TasksRoutingModule,
    MaterialModule,
    
  ]
})
export class TasksModule { }
