import { createStore, combineReducers, applyMiddleware} from "redux";
import Album from "./reducers/album-reducers"
import thunk from "redux-thunk";
import Posts from "./reducers/post-reducer"
import Comments from "./reducers/comment-reducers"
import Photos from "./reducers/photo-reducers"
import Todos from "./reducers/todo-reducers"
import Users from "./reducers/user-reducer"



const all_reducers=combineReducers({albums:Album, posts:Posts,
    comment:Comments,photos:Photos,todos:Todos,users:Users
});
const middleware=applyMiddleware(thunk);
const Store=createStore(all_reducers,middleware);




export default Store;