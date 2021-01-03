import axios from "axios"

export const searchCategory = (v) => {
    return {
        type: 'UPSRCHCAT',
        payload: v
    }
}

export const searchAge = (v) => {
    return {
        type: 'UPAGE',
        payload: v
    }
}

export const searchAgeCh = (v) => {
    return {
        type: 'UPAGECH',
        payload: v
    }
}

export const searchAgeCw = (v) => {
    return {
        type: 'UPAGECW',
        payload: v
    }
}

export const searchAgeSh = (v) => {
    return {
        type: 'UPAGESH',
        payload: v
    }
}

export const fetchResultsSuccess = (v) => {
    console.log(v)
    return {
        type: 'UPRES',
        payload: v
    }
}

export const fetchResults = (p) => {
    
    return function(dispatch){
        axios.get('http://localhost:3020/livestocks',p)
            .then(res => {
                //res.data
                dispatch(fetchResultsSuccess(res.data));
            })
            .catch(err => {
                //err.message
                console.log(err.message)
            })
    }
}

export const fetchSingleSuccess = (v) => {
    console.log(v);
    return {
        type: 'UPSIN',
        payload: v
    }
}

export const fetchSingle = (p) => {
    return function(dispatch){
        axios.get('http://localhost:3020/livestocks/update/'+p)
            .then(res => {
                //res.data
                dispatch(fetchSingleSuccess(res.data));
            })
            .catch(err => {
                //err.message
                console.log(err.message)
            })
    }
}

export const updateName = (v) => {
    return {
        type: 'UPNAME',
        payload: v
    }
}

export const updateOutput = (v) => {
    return {
        type: 'UPOUT',
        payload: v
    }
}

export const updateCommitSuccess = v => {
    return {
        type: 'COMMIT',
        payload: v
    }
}

export const updateReset = () => {
    return {
        type: 'UPRESET',
    }
}

export const updateCommit = (p,q) => {
    return function(dispatch){
        axios.post('http://localhost:3020/livestocks/update/'+p,q)
            .then(res => {
                //res.data
                dispatch(updateCommitSuccess(res.data));
            })
            .catch(err => {
                //err.message
                console.log(err.message)
            })
    }
}

export const pair1 = v => {
    return {
        type: 'PAIR1',
        payload: v
    }
}

export const pair2 = v => {
    return {
        type: 'PAIR2',
        payload: v
    }
}

export const pairReset = v => {
    return {
        type: 'PAIRRESET',
        payload: v
    }
}

export const unpair1 = () => {
    return {
        type: 'UNPAIR1'
    }
}

export const unpair2 = () => {
    return {
        type: 'UNPAIR2'
    }
}

export const pair3 = v => {
    return {
        type: 'PAIR3',
        payload: v
    }
}

export const pairCreate = v => {
    return {
        type: 'PAIRC',
        payload: v
    }
}