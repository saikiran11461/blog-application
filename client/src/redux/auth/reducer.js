import * as types from "./actiontypes"
const init={
    isAuth:localStorage.getItem("token")?true : false,
    token:"",
    isLoading:false,
    isError:false
}

export const reducer = (oldstate=init, action)=>{
    const {type,payload} = action
    switch(type){
        case types.POST_REGISTER_REQUEST:
            return{
                ...oldstate,
                isLoading:true,
                isError:false
            }
        case types.POST_REGISTER_SUCCESS:
            return{
                ...oldstate,
                isLoading:false,
                isError:false,
                token:payload
            }
        case types.POST_REGISTER_FAILURE:
            return{
                ...oldstate,
                isLoading:false,
                isError:true
            }
        case types.POST_LOGIN_REQUEST:
            return{
                ...oldstate,
                isLoading:true,
                isError:false,
                isAuth:false
            }
        case types.POST_LOGIN_SUCCESS:
            return{
                ...oldstate,
                isLoading:false,
                isError:false,
                token:payload,
                isAuth:true
            }
        case types.POST_LOGIN_FAILURE:
            return{
                ...oldstate,
                isLoading:false,
                isError:true,
                token:"",
                isAuth:false,
               
            }
        default:
            return oldstate
    }
}