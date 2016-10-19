export default function(state = {todos: []}, action) {

    switch (action.type){
        case "UPDATE_TODO":
        {
            let newTodos = state.todos;
            newTodos[action.payload.index].done = action.payload.value;
            return {
                ...state,
                newTodos
            }
        }
        case "ADD_TODO":
        {
            let todos = state.todos;
            todos.push({
                text: action.payload.value,
                done: false
            })
            return {
                ...state,
                todos
            }
        }
        case "APP_DATA":
        {
            return {
                todos: action.payload.value.todoData
            };
        }
    }
    return state;
}