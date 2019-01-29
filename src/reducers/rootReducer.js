const initState = {
    jumboImg: 1,
    headerClass: 1,
    aboutArrow: 0,
    mobileStyle: "hide"
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
        case "Hamburger":
        return{
            ...state,
            mobileStyle: action.display
        }
        case "Hamburger-close":
        return {
            ...state,
            mobileStyle: action.display
        }
         default: return state;
        }
}

export default rootReducer;