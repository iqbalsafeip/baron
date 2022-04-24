const initState = {
    test: "Hello reducer"
}

const mainReducer = (state = initState, action) => {
    switch(action.type){
        case "SET_TEST" : return {
            ...state,
            test: action.payload
        }

        default : return state;
    }
}

export default mainReducer