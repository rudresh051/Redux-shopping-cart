import data from '../data.json';

const initialState = {
    data:data
}

const reducer = (state=initialState, {type,payload}) =>{
    switch(type){
        default:{
            return{
                ...state 
            } 
        }
    }
}

export default reducer;