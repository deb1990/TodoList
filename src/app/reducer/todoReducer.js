export default function(state = {
    todos: [
        {
            id: "1",
            text: "Buy Chicken",
            done: false
        }
        , {
            id: "2",
            text: "Learn React",
            done: true
        }
    ]}, action) {

    switch (action.type){
        case "UPDATE_TODO":
        {
            var newTodos = state.todos;
            newTodos[action.payload.index].done = action.payload.value;
            return {
                ...state,
                newTodos
            }
        }
    }
    return state;
}