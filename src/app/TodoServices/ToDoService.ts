import ToDo from '../../models/ToDo';
import {ToDoApi} from './ToDoApi'; //ajout2
import {Injectable} from '@angular/core' //ajout2

@Injectable()
export class ToDoService {
    todos: Array<ToDo> = [];

    constructor(private todoApi: ToDoApi) { }; //ajout2

    getToDo(): Promise<Array<ToDo>> {
       // return this.todos;
       return this.todoApi.fetchToDo(this.todos, 'get');
    };

    resetToDoList(): Promise<Array<ToDo>> {
        this.todos = [];
       // return this.todos;
       return this.todoApi.fetchToDo(this.todos, 'reset');
    };

    addToDoList(todoEvent: ToDo): Promise<Array<ToDo>> {7
        this.todos = [todoEvent, ...this.todos];
       // return this.todos;
       return this.todoApi.fetchToDo(this.todos, 'add');
    };
}