/* eslint-disable import/no-anonymous-default-export */
export default (user=[], action)=>{
    switch(action.type){
        case "SET_USER":
            return[...action.value]

            default: return user;
    }

}