import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import ToDo from '../../models/ToDo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  @Output()
  eventToSend:EventEmitter<ToDo|boolean> = new EventEmitter<ToDo|boolean>();

  handleClick(todoTitle: string){
    //alert(todoTitle);
    this.eventToSend.emit(new ToDo(todoTitle, false));
  };

  // @Output()
  // resetActionToSend:EventEmitter<boolean> = new EventEmitter<boolean>();

  resetClick(){
    this.eventToSend.emit(true);
  }

  constructor() { }

  ngOnInit() {
  }

}
