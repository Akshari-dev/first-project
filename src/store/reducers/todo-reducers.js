// eslint-disable-next-line import/no-anonymous-default-export
export default (todo=[], action)=>{
    switch(action.type){
        case "SET_TODOS":
            return [...action.value]

            default:return todo;
    }

}