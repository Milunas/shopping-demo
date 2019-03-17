import { Component, OnInit } from '@angular/core';
import { Ingriedent } from '../indigrient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  indigrients : Ingriedent[] = [ new Ingriedent("Butter", 1), new Ingriedent("Apples", 6)];

  constructor() { }

  ngOnInit() {
  }

  onIngriedentAdded(ingriedent: Ingriedent) {
    this.indigrients.push(ingriedent);
  }

}
