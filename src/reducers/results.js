const ini = {
    "results":[]
};

const resultsReducer = (state = ini, action = {}) => {
    console.log(action);
    switch(action.type){
        case 'UPRES':
            state= {
                ...state,
                results : action.payload
            }
            return state;
        default:
            return state;
    }
}

export default resultsReducer;