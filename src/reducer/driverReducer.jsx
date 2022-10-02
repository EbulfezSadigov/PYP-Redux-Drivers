export const driverReducer=(state=[], action)=>{
    switch (action.type) {
        case 'GET_DATA':
            return [...action.payload]
        default:
            return state;
    }
}