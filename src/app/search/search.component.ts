import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'fk-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public todoItems : any[];
  public usersToSearch : any[];
  dataForm: ToDoItem;
  counter: number = 0;
  name;

  constructor(private todoService : TodoService) { }

  ngOnInit() {   
    
    this.todoService.getAll().subscribe((items) => {
      this.todoItems = items;
      console.log(this.todoItems);
      })

  }

  searchUser(){

   this.todoItems.forEach(item => {  
   
      console.log(name);
      if (item.operator == name) {
        this.usersToSearch.push(item);
      }
    });    
  };

}

