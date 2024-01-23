import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../interfaces/taks.interface';

@Component({
  selector: 'tasks-task-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  // Recibo una task
  @Input()
  public task!:Task

  // Validación por si no hay task
  ngOnInit(): void {
    if ( !this.task ) throw Error ('Task property is required')
  }

}
