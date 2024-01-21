import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/taks.interface';
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

  constructor( private tasksService: TasksService ) {};

  ngOnInit(): void {
    this.tasksService.getTasks()
      // Para que se dispare me tengo que suscribir
      // las tasks que devuelve serán igual a las tasks del componente (this.tasks)
      .subscribe( tasks => this.tasks = tasks );
  }

}
