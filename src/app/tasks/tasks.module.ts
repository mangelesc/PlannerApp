import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { TasksRoutingModule } from './tasks-routing.module';

import { ListPageComponent } from './pages/list-page/list-page.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';
import { CardsAccordionComponent } from './components/cards-accordion/cards-accordion.component';



@NgModule({
  declarations: [
    ListPageComponent,
    TaskPageComponent,
    LayoutPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,
    CardsAccordionComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule
  ]
})
export class TasksModule { }
