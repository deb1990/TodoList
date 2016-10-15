export function updateTodo(index, value){
    return {
        type: "UPDATE_TODO",
        payload: {
            index,
            value
        }
    }
}

export function addTodo(value){
    return {
        type: "ADD_TODO",
        payload: {
            value
        }
    }
}

