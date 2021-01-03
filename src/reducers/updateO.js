const ini = {
    "category":"",
    "name":"",
    "age":0,
    "output":[{"quantity":0},{"quantity":0}],
    "id":""
};

const updateReducer = (state = ini, action) => {
    switch(action.type){
        case 'UPRESET':
            state = ini;
            return state;
        case 'UPSIN':
            state= {
                ...state,
                category : action.payload.category,
                name: action.payload.name,
                age: action.payload.age,
                output: action.payload.output,
                id: action.payload._id
            }
            return state;
        case 'UPNAME':
            state= {
                ...state,
                name: action.payload
            }
            return state;
        case 'UPOUT':
            console.log(action.payload);
            
            state= {
                ...state,
                output:action.payload
                }
            console.log("ThisONE:"+state.output[1].quantity);
            return state;
        case 'COMMIT':
            console.log("Changes Made");
            state = ini;
            return state;
        default:
            return state;
    }
}

export default updateReducer;