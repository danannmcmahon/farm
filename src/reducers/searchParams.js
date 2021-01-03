const ini = {
    "category":"all",
    "age":[0,15],
    "agech":[0,5],
    "agecw":[0,15],
    "agesh":[0,12],
    "run":false
};



const searchReducer = (state = ini, action) => {
    switch(action.type){
        case 'UPSRCHCAT':
            state= {
                ...state,
                category : action.payload
            }
            return state;
        case 'UPAGE':
            state= {
                ...state,
                age : action.payload
            }
            return state;
        case 'UPAGECH':
            state= {
                ...state,
                agech : action.payload
            }
            return state;
        case 'UPAGECW':
            state= {
                ...state,
                agecw : action.payload
            }
            return state;
        case 'UPAGESH':
            state= {
                ...state,
                agesh : action.payload
            }
            return state;

        default:
            return state;
    }
}

export default searchReducer;