import Article from '../service/article'
const state = {
    isloading:false,
}

const mutations = {
  createArticeStart(state) {
    state.isloading = true


  },
  createArticeSucces(state, payload) {
    state.isloading = false

    
  },
  createArticeFailer(state) {
    state.isloading = false
    
  },

}

const actions = {
    createArticle(context, article) {
        return new Promise((resolve, reject) => {
            context.commit('createArticeStart')
            Article.postarticle(article).then(()=>{

             context.commit('createArticeSucces')

            }).catch(()=> {
                context.commit('createArticeFailer')
            })
        })
    },
    deleteArticle(context, slug) {
      return new Promise((resolve) => {
          context.commit('createArticeStart')
          Article.deleteArtice(slug).then(()=>{

           context.commit('createArticeSucces')
            resolve()

          }).catch(()=> {
              context.commit('createArticeFailer')
          })
      })
  },

}
export default {
    state,
    mutations,
    actions
}