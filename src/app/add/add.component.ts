import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'fk-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  toDoName: string;
  toDoDate: string;
  toDoOperator: string;
  toDoImportance: string;
  toDoItem: any[];
  public todoItems : any[];

  constructor(private todoService : TodoService){}

  

  ngOnInit() {
  }

  onSubmit(toDoName, toDoDate, toDoOperator, toDoImportance) {    
    this.toDoItem = [
      toDoName,
      toDoDate,
      toDoOperator,
      toDoImportance
    ];
    this.todoService.create(this.toDoItem).subscribe((items) => {
      this.todoItems = items;
    console.log(this.toDoItem)
  })

}}
