import Authenuser from "../service/auth"
import { setitem } from "../helpers/persestensStroege"
const state = {
    isloading:false,
    user: null,
    errors:null
}
const mutations = {
    registerStart(state) {
        state.isloading = true
        state.user = null
        state.errors = null
        
    },
    registerSucsess(state, payload) {
        state.isloading = false
        state.user = payload
    },
    registerFailer(state, payload) {
        state.isloading = false
        state.errors = payload
    },
    loginStart(state) {
        state.isloading = true
        state.user = null
        state.errors = null
        
    },
    loginSucsess(state, payload) {
        state.isloading = false
        state.user = payload
    },
    loginFailer(state, payload) {
        state.isloading = false
        state.errors = payload
    },
}

const actions  = {
    register(context, user) {
       return new Promise((resolve, reject)=> {
        context.commit('registerStart')
        Authenuser.register(user)
        .then(respone=>{
      
            context.commit('registerSucsess', respone.data.user)
            setitem("token",respone.data.user.token)
            resolve(respone.data.user)
         
        })
        .catch((error) => {
             
            context.commit('registerFailer', error.message)
            reject(error.message)
          
        })
       })
       
    
    },
    login(context, user) {
        return new Promise((resolve, reject)=> {
         context.commit('loginStart')
         Authenuser.login(user)
         .then(respone=> {
       
             context.commit('loginSucsess', respone.data.user)
             setitem("token",respone.data.user.token)
             resolve(respone.data.user)
          
         })
         .catch((error) => {
              
             context.commit('loginFailer', error.message)
             reject(error.message)
           
         })
        })
        
     
     }
}

export default { state, mutations, actions}