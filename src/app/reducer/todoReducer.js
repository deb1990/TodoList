export default function(state = {
    addTodo: {
        showDialog: false
    },
    todos: [
        {
            text: "Buy Chicken",
            done: false
        }
        , {
            text: "Learn React",
            done: false
        }
    ]}, action) {

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
            debugger;
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
    }
    return state;
}