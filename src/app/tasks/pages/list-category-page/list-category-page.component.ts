import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Task, Category } from '../../interfaces/taks.interface';

@Component({
  selector: 'app-list-category-page',
  templateUrl: './list-category-page.component.html',
  styleUrls: ['./list-category-page.component.css']
})
export class ListCategoryPageComponent implements OnInit{

  public tasks: Task[] = [];


  constructor( 
    private tasksService: TasksService,
    private activatedRoute: ActivatedRoute,
    private router: Router, 
  ) {}
  
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ category }) => this.tasksService.getTaskByCategory(category))
      )
      .subscribe(tasks => {
        if (!tasks || (Array.isArray(tasks) && tasks.length === 0)) {
          this.router.navigate(['planner/list']);
          return;
        }

        // Si tasks es un solo objeto (Task), lo envolvemos en un array
        this.tasks = Array.isArray(tasks) ? tasks : [tasks];

        console.log(this.tasks);
      });
  }

  
}
