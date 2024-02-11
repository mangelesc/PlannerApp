import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from '../../interfaces/taks.interface';
import { TasksService } from '../../services/tasks.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {
  
  // Necesitamos inportar ReactivideFormsModule para que funcione(Tasks Module) y enlazarlo en el html [formControl]="searchInput"
  public searchInput = new FormControl('');
  public tasks: Task[] = [];
  public selectedTask?: Task;

  constructor ( private tasksService : TasksService) {}

  searchTask(){
    const value: string = this.searchInput.value || ''; 

    this.tasksService.getSuggestions(value)
      .subscribe( tasks => this.tasks = tasks );

  }

    onSelectedOption( event: MatAutocompleteSelectedEvent ): void {
    if ( !event.option.value ) {
      this.selectedTask = undefined;
      return;
    }

    const task: Task = event.option.value;
    this.searchInput.setValue( task.title );

    this.selectedTask = task;
    this.tasks = [task];

  }

}
