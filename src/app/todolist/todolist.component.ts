import { Component, OnInit } from '@angular/core';
import ToDo from '../../models/ToDo'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos: Array<ToDo> = [];

  eventReceived(event){
    if (typeof event == 'boolean'){
      if(event)
      this.todos = [];
    }
    else {
      this.todos.unshift(event)
    }
  }

  // resetActionReceived(statut){
  //   if(statut)
  //   this.todos = [];
  // }

  constructor() { }

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
