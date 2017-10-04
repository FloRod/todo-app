import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import ToDo from '../../models/ToDo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  @Output()
  todoEventSent:EventEmitter<ToDo> = new EventEmitter<ToDo>();

  handleClick(todoTitle: string){
    //alert(todoTitle);
    this.todoEventSent.emit(new ToDo(todoTitle, false));
  };

  @Output()
  resetActionEventSent: EventEmitter<any> = new EventEmitter();

  resetClick(){
    this.resetActionEventSent.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
