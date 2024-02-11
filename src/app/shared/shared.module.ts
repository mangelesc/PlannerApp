import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { H1TitleComponent } from './components/h1-title/h1-title.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    H1TitleComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    Error404PageComponent
  ]
})
export class SharedModule { }
