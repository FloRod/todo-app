import ToDo from '../../models/ToDo';

export default class ToDoApi {
    constructor() { }

    fetchToDo(toDoList: Array<ToDo>, fonction: string): Promise<Array<ToDo>> {
        console.log('fetch called');
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Promise resolved : ' + fonction);
                resolve(toDoList)
            }, 2000);
        })
    };

    fetchAddToDo(toDoList: Array<ToDo>, todoEvent: ToDo, fonction: string): Promise<Array<ToDo>> {
        console.log('fetch called');
        return new Promise((resolve) => {
            setTimeout(() => {
                toDoList.unshift(todoEvent)
                console.log('Promise resolved : ' + fonction);
                resolve(toDoList)
            }, 2000);
        })
    };


}