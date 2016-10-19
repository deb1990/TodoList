export default function(state = {}, action) {
    switch(action.type) {
        case "APP_DATA":
        {
            return action.payload.value.user;
        }
    }
    return state;
}