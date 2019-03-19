<template>
    <div>
        <h2>{{article.articleTitle}}</h2>
        <p class='time'>{{article.articleCreatedTime}}</p>
        <div v-html="article.articleRender" class="article-text"></div>
    </div>
</template>

<script>

import { getArticleDetail } from '~/services'
const moment = require('moment')
export default {
    layout: 'blog',
    components: {},
    async asyncData(ctx) {
        return await getArticleDetail({
            from: 'cli',
            id: ctx.query.id
        }).then(res => {
            let obj = {}
            if (res.data.code == '000000') {
                obj.article = res.data.data
                obj.article.articleCreatedTime = moment(obj.article.articleCreatedTime).format('YYYY-MM-DD HH:mm:ss')
            }
            return obj
        })
    },
    data () {
        return {
            article: {}
        }
    },
    methods: {}
};
</script>

<style>
@import "~/assets/scss/pages/detail.scss";
</style>


