import Authenuser from "../service/auth"
import { removeitem, setitem } from "../helpers/persestensStroege"
import { gettertypes } from "./types"
const state = {
    isloading:false,
    user: null,
    errors:null,
    logindIn:null
}
const mutations = {
    registerStart(state) {
        state.isloading = true
        state.user = null
        state.errors = null
        state.logindIn = null
        
    },
    registerSucsess(state, payload) {
        state.isloading = false
        state.user = payload
        state.logindIn = true
    },
    registerFailer(state, payload) {
        state.isloading = false
        state.errors = payload
        state.logindIn = false
    },
    loginStart(state) {
        state.isloading = true
        state.user = null
        state.errors = null
        state.logindIn = null
        
    },
    loginSucsess(state, payload) {
        state.isloading = false
        state.user = payload
        state.logindIn = true
    },
    loginFailer(state, payload) {
        state.isloading = false
        state.errors = payload
        state.logindIn = false
    },
    getUserstart(state) {
        state.isloading = true
     
    },
    getuserSeccess(state , payload) {
        state.isloading =false
        state.logindIn = true
        state.user = payload
    },
    getUserFailer(state) {
        state.isloading = false
        state.user = null
        state.logindIn = false
    },
    logout(state) {
      
        state.user = null
        state.logindIn = false
    }

}

const getters =  {
    [gettertypes.correntUsers]: state => {
    return state.user
   },
   [gettertypes.isLoggedIn] : state => {
    return Boolean(state.logindIn)
   },
   [gettertypes.isAnonamius] : state => {
    return state.isLoggedIn===false
   }
   
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
        
     
     },
     getUser(context) {
        return new Promise ((resolve) => {
            context.commit('getUserstart')
            Authenuser.getUser().then(
                response => {
                    context.commit('getuserSeccess', response.data.user)
                    resolve(response.data.user)
                }
            ).catch(
               context.commit('getUserFailer') 
            )

        } )

     },
     logout(context) {
        context.commit('logout')
        removeitem('token')
     }
}

export default { state, mutations, actions, getters}