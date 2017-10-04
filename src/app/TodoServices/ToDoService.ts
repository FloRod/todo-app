import ToDo from '../../models/ToDo';

export default class ToDoService {
    todos: Array<ToDo> =[];

    constructor() {};

    getToDo(): Array<ToDo>{
        return this.todos;
    };

    resetToDoList():  Array<ToDo>{
       return this.todos=[];
    };

    addToDoList(todoEvent: ToDo):  Array<ToDo> {
        this.todos.unshift(todoEvent);
        return this.todos;
    };
}