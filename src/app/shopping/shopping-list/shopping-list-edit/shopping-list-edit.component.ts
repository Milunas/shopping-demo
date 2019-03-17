import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingriedent } from '../../indigrient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingriedentAdded = new EventEmitter<Ingriedent>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngriedent() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngriedent = new Ingriedent(ingName, ingAmount);
    this.ingriedentAdded.emit(newIngriedent);
  }

}
