import axios from "./axios";



const Article = {
    articles() {
     return  axios.get('/articles')
    },
    articeldetail(slug) {
        return axios.get(`/articles/${slug}`)
    },
    postarticle(article) {
        return axios.post('/articles', {article})

    },
    deleteArtice(slug) {
        return axios.delete(`/articles/${slug}`)
    }
}

export default Article