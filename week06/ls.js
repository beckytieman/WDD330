import {todoList} from './week06'

//save to local storage and convert to JSON

function saveLocal() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
