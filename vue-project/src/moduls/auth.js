import Authenuser from "../service/auth"
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
}

const actions  = {
    register(context, user) {
       return new Promise((resolve, reject)=> {
        context.commit('registerStart')
        Authenuser.register(user)
        .then(respone=>{
      
            context.commit('registerSucsess', respone.data.user)
            resolve(respone.data.user)
         
        })
        .catch((error) => {
             
            context.commit('registerFailer', error.message)
            reject(error.message)
          
        })
       })
       
    
    }
}

export default { state, mutations, actions}