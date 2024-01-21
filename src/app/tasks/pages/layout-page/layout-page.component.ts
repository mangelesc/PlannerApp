import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public siderbarItems = [
    {
      label: 'Mis tareas',
      icon:  'list',
      url:   './list',
    },
    {
      label: 'Añadir tarea',
      icon:  'add',
      url:   './new-task',
    },
    {
      label: 'Buscar tarea',
      icon:  'search',
      url:   './search',
    },
  ]

}
