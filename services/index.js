import axios from 'axios'

// const baseUrl = 'http://localhost:8899/'
const baseUrl = 'https://www.bestlifebestyue.com/admin-api/'

export function getArticleList(params) {
    return axios.get(baseUrl + 'api/getArticleList',{params: params})
}

export function getTipsList() {
    return axios.get(baseUrl + 'api/getTipsList')
}

export function getArticleAngTipsList() {
    return axios.all([axios.get(baseUrl + 'api/getArticleList'), axios.get(baseUrl + 'api/getTipsList')])
}


export function getArticleDetail(params) {
    return axios.get(baseUrl + 'api/getArticleDetail',{params: params})
}
