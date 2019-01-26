const initState = {
    jumboImg: 1,
    headerClass: 1,
    aboutArrow: 0
}

const rootReducer = (state = initState, action) => {
    switch (action.type){
        case "switchImg":
            return {
                ...state,
                jumboImg: action.number,
                headerClass: action.number
            }
        case "arrow":
        return {
            ...state,
            aboutArrow: action.number
        }
         default: return state;
        }
}

export default rootReducer;