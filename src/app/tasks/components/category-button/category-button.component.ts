import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.css']
})
export class CategoryButtonComponent {

  @Input()
  public title!:string;

  ngOnInit(): void {
    if ( !this.title ) throw Error ('Task property is required')
  }

}
