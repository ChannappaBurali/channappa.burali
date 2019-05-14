import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
  btnText = 'Add an Item';
  title = 'Event Binding';
  hello = 'Say Hello';
  employees = ['Pavani', 'Srinivas', 'Ravi'];
  empName = 'Add Employee';
  fullName: string;
  @ViewChild('firstNameInput') nameInputRef: ElementRef;
  @ViewChild('LstNameInput') lastnameInputRef: ElementRef;
constructor() {
}
ngOnInit() {

}
sayHello() {
return this.hello = 'Template Reference Variable!!!';
}
addEmployee() {
  this.employees.push(this.empName);
}
// Template reference variable
show() {
  this.fullName = this.nameInputRef.nativeElement.value + ' ' + this.nameInputRef.nativeElement.value;
  console.log(this.fullName);
}
}
