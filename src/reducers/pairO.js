const ini = {
    "category":"",
    "name":["","",""],
    "output":[0,0,0],
    "id":["",""],
    "mod":false
};

const pairReducer = (state = ini, action) => {
    switch(action.type){
        case 'PAIR1':
            state = {
                ...state,
                category:action.payload.category,
                name:[action.payload.name,state.name[1],state.name[2]],
                output:[action.payload.output[0].quantity,state.output[1],state.output[2]],
                id:[action.payload._id,state.id[1]]
            }
            return state;
        case 'PAIR2':
            state = {
                ...state,
                name:[state.name[0],action.payload.name,state.name[2]],
                output:[state.output[0],action.payload.output[0].quantity,state.output[2]],
                id:[state.id[0],action.payload._id]
            }
            return state;
        case 'UNPAIR1':
            state = {
                ...state,
                name:[state.name[1],"",""],
                output:[state.output[1],0,0],
                id:[state.id[1],""]
            }
            return state;
        case 'UNPAIR2':
            state = {
                ...state,
                name:[state.name[0],"",""],
                output:[state.output[0],0,0],
                id:[state.id[0],""]
            }
            return state;
        case 'PAIR3':
            state = {
                ...state,
                name:[state.name[0],state.name[1],state.name[0]+" Jr."],
                output:[state.output[0],state.output[1],((state.output[0]+state.output[1])/2).toFixed(2)],
            }
            return state;
        case 'MODTOG':
            state = {
                ...state,
                mod:!state.mod
            }
            return state;
        case 'PAIRRESET':
            return ini;
        case 'PAIRC':
            //ADD
            return state;
        default:
            return state;
    }
}

export default pairReducer;