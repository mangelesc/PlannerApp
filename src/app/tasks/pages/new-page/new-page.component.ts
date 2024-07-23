import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Category, Task } from '../../interfaces/taks.interface';
import { TasksService } from '../../services/tasks.service';
import { filter, switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirmDialog/confirmDialog.component';



@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  // Formulario reactivo
  public taskForm = new FormGroup({
    id: new FormControl<string>('', { nonNullable: true }),
    title: new FormControl<string>('', { nonNullable: true }),
    description: new FormControl<string>(''),
    user_owner: new FormControl<string>(''),
    category: new FormControl<Category>(Category.Others),
    done: new FormControl<boolean>(false),   
    creation_date: new FormControl<string>(''),
    deadline: new FormControl<string>('')
  });

  public categories = [
    {id : 'home', desc: 'Hogar'},
    {id : 'shopping', desc: 'Compras'},
    {id : 'work', desc: 'Trabajo'},
    {id : 'leisure', desc: 'Ocio'},
    {id : 'others', desc: 'Otros'}
  ];

  constructor ( 
    private tasksService: TasksService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  // Convertimos task en Task
  get currentTask() : Task {
    const task = this.taskForm.value as Task;
    return task;
  }

  ngOnInit(): void {
      if ( !this.router.url.includes('edit') ) return; 

      this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) =>  this.tasksService.getTaskById(id)),
          
        ).subscribe ( task => {
          if (!task) return this.router.navigateByUrl('/');

          this.taskForm.reset( task );
          return;
        }  
        )
  }

  onSubmit(): void{

    if ( this.taskForm.invalid ) return;

    //Edito si tiene ID 
    if ( this.currentTask.id ){
      this.tasksService.updateTask ( this.currentTask )
      .subscribe ( task => {
        this.showSnackbar (`${ task.title } updated!`);
      });

      return;
    }

    // Si tiene tittle añado el id y otros campos
    if ( this.currentTask.title ){
      
      this.taskForm.patchValue({
        // Asignamos id de la fecha actual, para evitar duplicados
        id: new Date().toISOString().slice(0, -1),// Fecha actual
        user_owner: '1',
        // Establecer la fecha de creación al momento del envío del formulario
        creation_date: new Date().toString() // Fecha actual
      });

      // Así dará error de typescript, por solucionarle creamos un getter (get currentTaks) 
      // this.TasksService.updateTask( this.taskForm.value )

      this.tasksService.addTask( this.currentTask )
        .subscribe (task => {
          this.showSnackbar (`${ task.title } created!`);
        })
      
    }
    
    
    console.log(
      {
        formisValid: this.taskForm.valid,
        value: this.taskForm.value
      }
    )
  }

  onDeleteTaks () {
    if ( !this.currentTask.id ) throw Error ('Task id is required');

    const dialogRef = this.dialog.open( ConfirmDialogComponent, {
      data: this.taskForm.value,
    });

    dialogRef.afterClosed()
      .pipe(
        filter ( (result: boolean) => result ),
        switchMap( () => this.tasksService.deleteTaskByID( this.currentTask.id )),
        filter ( (wasDeleted: boolean) => wasDeleted ),
      )
      .subscribe(() => {
        this.router.navigate(['/planner/list']);
      });

  }


  showSnackbar( message: string ): void {
    this.snackbar.open (message, 'Cerrar', {
      duration: 2500,
    })

  }
}
