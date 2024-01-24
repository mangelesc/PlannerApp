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


  public categoriasIconos = {
    'home': 'home',
    'shopping': 'shopping bag',
    'work': 'work',
    'leisure': 'mood',
    'others': 'public',
    'default': 'public'
  };

  public categoriasColor = {
    // 'home': '#D8E8E3',
    // 'shopping': '#BBD6DA',
    // 'work': '#9EC7C5',
    // 'leisure': '#D9D4C7',
    // 'others': '#E0E1DB',
    // 'default': '#E0E1DB'

    'home': '#E5D5C3',
    'shopping': '#B8C7C5',
    'work': '#B4CEC5',
    'leisure': '#D2D0B7',
    'others': '#9EB0AE',
    'default': '#9EB0AE'
  };
}
