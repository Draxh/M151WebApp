import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fk-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  toDoName: string;
  toDoDate: string;
  toDoOperator: string;
  toDoImportance: string;
  toDoItem: any[];
  public numb: any;
  public hrefEdit: any = "";

  public todoItems : any[];
  constructor(private todoService : TodoService, private router: Router) {
  }


  ngOnInit() {
    this.hrefEdit = this.router.url
    this.numb = this.hrefEdit.match(/\d/g);
    this.numb = this.numb.join("");
     
    this.todoService.getItem(this.numb).subscribe((items) => {
    this.todoItems = items;
    console.log(this.numb);    
    console.log(this.todoItems);

  })
  }

  onSubmitEdit(toDoName, toDoDate, toDoOperator, toDoImportance) {    
    this.toDoItem = [
      toDoName,
      toDoDate,
      toDoOperator,
      toDoImportance
    ];
    this.todoService.put(this.numb, this.toDoItem).subscribe((items) => {
      this.todoItems = items;
    console.log(this.toDoItem)
  })

}
}
