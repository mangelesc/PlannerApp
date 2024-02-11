import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  public categories = [
    {id : 'home', desc: 'home'},
    {id : 'shopping', desc: 'shopping_cart'},
    {id : 'work', desc: 'work'},
    {id : 'leisure', desc: 'person'},
    {id : 'others', desc: 'public'}
  ];
}
