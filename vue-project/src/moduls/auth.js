const state = {
    isloading:false
}
const mutations = {
    isloadingLoder(state) {
        state.isloading = true
    }
}

const actions  = {
    login(content) {
     setTimeout(()=>{
        content.commit('isloadingLoder')
     }, 2000)
    }
}

export default { state, mutations, actions}