/* eslint-disable import/no-anonymous-default-export */
const intial_state=[];

export default (state=intial_state, action)=>{

switch(action.type){

    case "SET_ALBUM":
        return [...action.value]


    default: return state;
        
}


}

