import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgForm } from '@angular/forms';  

@Component({
  selector: 'fk-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {

  constructor(private todoService : TodoService){}

  

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.todoService.postTodoItem(form.value).subscribe(
      res => {
        console.log("Erfolg");
      },
      err => {
        console.log(err);
      }
    );
  
  }

}
