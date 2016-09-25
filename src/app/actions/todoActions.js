export function updateTodo(index, value){
    return {
        type: "UPDATE_TODO",
        payload: {
            index,
            value
        }
    }
}

