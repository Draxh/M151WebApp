import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'fk-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public todoItems : any[];
  constructor(private todoService : TodoService) {
    this.todoService.getAll().subscribe((items) => {
    this.todoItems = items;
    console.log(this.todoItems);
    })
   }

  ngOnInit() {
  }

  delete(id){
    this.todoService.delete(id);
    alert("Task deleted successfully");
    window.location.reload();
  }  

  loadValues(id){
    self.location.href='edit/' + id;
  }

}
