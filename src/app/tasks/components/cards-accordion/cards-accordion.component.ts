import { Component, Input, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Task } from '../../interfaces/taks.interface';

@Component({
  selector: 'tasks-acordion',
  templateUrl: './cards-accordion.component.html',
  styleUrls: ['./cards-accordion.component.css']
})
export class CardsAccordionComponent {

  @Input()
  public tasks!:Task[]

  @ViewChild(MatAccordion) accordion!: MatAccordion;

}
