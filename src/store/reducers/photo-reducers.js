/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
export default (photos=[], action)=>{
    switch(action.type){
        case "SET_PHOTOS":
            return[...action.value]

            default: return photos;
    }
}