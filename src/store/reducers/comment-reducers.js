/* eslint-disable import/no-anonymous-default-export */
export default (comments=[],action)=>{

    switch(action.type){
        case "SET_COMMENTS":
            return [...action.value]

            default: return comments
    }
}