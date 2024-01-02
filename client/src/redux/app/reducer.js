import * as types from "./actionTypes"
const init = {
    posts:[],
    singlePost:{},
     isLoading :false,
     isError :false,
    deleteMessage:{}
}


export const reducer = (oldstate =init, action)=>{
    const {type,payload} = action;
    switch(type){
        case types.GET_POST_REQUEST:
            return{
                ...oldstate,
                isLoading:true,
                isError:false
            }
        case types.GET_POST_SUCCESS:
            return{
                ...oldstate,
                isLoading:false,
                isError:false,
                posts:payload
            }
        case types.GET_POST_FAILURE:
            return{
                ...oldstate,
                 isLoading:false,
                 isError:true,
                 posts:[]
            }
        case types.GET_SINGLE_POST_REQUEST:
            return{
                ...oldstate,
                isLoading:true,
                isError:false
            }
        case types.GET_SINGLE_POST_SUCCESS:
            return{
                ...oldstate,
                isLoading:false,
                isError:false,
                singlePost:payload
            }
        case types.GET_SINGLE_POST_FAILURE:
            return{
               ...oldstate,
                 isLoading:false,
                 isError:true,
                 singlePosts:[]
            }
        case types.DELETE_POST_REQUEST:
            return{
                ...oldstate,
                isLoading:true,
                isError:false

            }
        case types.DELETE_POST_SUCCESS:
            return{
                ...oldstate,
                isLoading:false,
                isError:false,
                deleteMessage:payload
            }
        case types.DELETE_POST_FAILURE:
            return{
                ...oldstate,
                isLoading:false,
                isError:true
            }
        case types.ADD_POST_REQUEST:
            return{
                ...oldstate,
                isLoading:true,
                isError:false
            }
        case types.ADD_POST_SUCCESS:
            return{
                ...oldstate,
                isLoading:false,
                isError:false

            }
        case types.ADD_POST_FAILURE:
            return{
                ...oldstate,
                isLoading:false,
                isError:true
            }
        default :
             return oldstate
    }
}