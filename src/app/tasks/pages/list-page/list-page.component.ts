import { Component, OnInit } from '@angular/core';
import { Category, Task, CategoriasIconos } from '../../interfaces/taks.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})


// Petición http - se implementa en el NgOn Init, cuando el componente se monta
export class ListPageComponent implements OnInit {

  public tasks: Task[] = [];

  public categories: string[] = Object.values(Category);

  public categoriasIconos: CategoriasIconos = {
    'home': 'home',
    'shopping': 'shopping_cart',
    'work': 'work',
    'leisure': 'person',
    'others': 'public',
    'default': 'public'
  };

  constructor( private tasksService: TasksService ) {};

  ngOnInit(): void {
    this.tasksService.getTasks()
      // Para que se dispare me tengo que suscribir
      // las tasks que devuelve serán igual a las tasks del componente (this.tasks)
      .subscribe( tasks => this.tasks = tasks );

      console.log(this.categories);
  }

}
