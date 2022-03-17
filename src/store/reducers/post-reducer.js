/* eslint-disable import/no-anonymous-default-export */
export default (posts=[], action)=>{

switch(action.type){

    case "SET_POST":
        return [...action.value]

        default: return posts;
}

}