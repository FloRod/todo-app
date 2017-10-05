import { Component, OnInit } from '@angular/core';
import ToDo from '../../models/ToDo'
import ToDoService from '../TodoServices/ToDoService'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers: [
    ToDoService
  ]
})
export class TodolistComponent implements OnInit {

  todos: Array<ToDo> = [];

  // eventReceived(event){
  //   if (typeof event == 'boolean'){
  //     if(event)
  //     this.todos = [];
  //   }
  //   else {
  //     this.todos.unshift(event)
  //   }
  // }

  todoEventReceived(todoEvent) {
   // this.todos.unshift(todoEvent);
    this.todoService.addToDoList(todoEvent).then((todos) => {this.todos = todos});
  }

  resetActionEventReceived() {
  //  this.todos = [];
    this.todoService.resetToDoList().then((todos) => {this.todos = todos});
  }

  constructor(private todoService: ToDoService) { }

  ngOnInit() {
    // this.todos =[
    //   new ToDo('sent a mail', false),
    //   new ToDo('cook a meal', false),
    //   new ToDo('learn Angular', true),
    //   new ToDo('finish the excercice', false),
    //   new ToDo('read a book', true)
    // ]
  }

}
