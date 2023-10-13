import Article from '../service/article'
const state = {
    data:null,
    isloading:false,
    error:null,
    articeldetail:null
}

const mutations = {
  getArticeStart(state) {
    state.data = null
    state.isloading = true
    state.error = null
    state.articeldetail=null

  },
  getArticeSucces(state, payload) {
    state.data = payload
    state.isloading = false

    
  },
  getArticeFailer(state) {
    state.isloading = false
    
  },
  getArticeDetailStart(state) {
    state.articeldetail =null
    state.isloading = true
    state.error = null
  },
  getArticeDetailSucces(state, payload) {
    state.articeldetail = payload
    state.isloading = false

    
  },
  getArticeDetailFailer(state) {
    state.isloading = false
    
  }

}

const actions = {
    articles(context) {
        return new Promise((resolve, reject) => {
            context.commit('getArticeStart')
            Article.articles().then((respone)=>{
              
             context.commit('getArticeSucces', respone.data.articles)
             resolve(respone.data.articles)

            }).catch(()=> {
                context.commit('getArticeFailer')
            })
        })
    },

    articleDetail(context, slug) {
      return new Promise((reverce)=> {
        context.commit('getArticeDetailStart')
        Article.articeldetail(slug).then(response => {
             context.commit('getArticeDetailSucces', response.data.article)
             reverce(response.data.article)
        }).catch(() => {
          context.commit('getArticeDetailFailer')

        })
      })
    }
}
export default {
    state,
    mutations,
    actions
}