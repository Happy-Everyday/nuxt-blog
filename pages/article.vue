<template>
    <div id="article-page">
        <div class="content">
            <!-- <div class="tips-wrapper">
                <a :key='item.key' v-for="(item, index) in tipsList" href="javascript:void(0);" class="tips-item" :class="{'active': item.choosed}" @click="toggleChooseTips(index)">{{item.value}}</a>
            </div> -->
            <div class="article-wrapper">
                <div class="no-article" v-if="articleList.length == 0">暂无数据……</div>
                <div class="article" :key="item._id" v-for="item in articleList" @click="goToDetail(item._id)">
                    <div class="article-pic">
                        <img src="/images/right-sidebar.jpg" alt="">
                    </div>
                    <div class="article-text">
                        <p class="article-text-title">
                            <span class="title">{{item.articleTitle}}</span>
                            <span class="time">{{item.articleCreatedTime}}</span>
                        </p>
                        <p class="article-text-desc">
                            {{item.articleText}}
                        </p>
                        <p class="article-text-focus">
                            <span>阅读数{{item.articleReadNum}}</span>
                            <!-- <span>喜欢数{{item.articleLikeNum}}</span> -->
                            <!-- <span>评论数{{item.articleAplyNum}}</span> -->
                        </p>
                    </div>
                </div>
                <div class="get-more" @click="getMore" v-if="articleList.length > 0 ">{{getMoreText}}</div>
            </div>
        </div>
        <div class="right-sidebar">
			<div class="right-sidebar-pic">
				<img src="/images/right-sidebar.jpg" alt="">
			</div>
		</div>
    </div>
</template>

<script>

import { getArticleList, getArticleAngTipsList } from '~/services'
const moment = require('moment')
export default {
    head() {
        return {
            'title': 'article | XYTang'
        }
    },
    components: {},
    async asyncData() {
        return await getArticleList({
            articleStatus: 1,
            pageSize: 10,
            currentPage: 1,
            articleType: 'article'
        }).then(res => {
            let obj = {
                tipsList: [],
                articleList: [] 
            }
            if (res.data.code == '000000') {
                obj.articleList = res.data.data.articleList
                obj.articleList.forEach(item => {
                    item.articleCreatedTime = moment(item.articleCreatedTime).format('YYYY-MM-DD HH:mm:ss')
                })
            }
            return obj
        })
    },
    data () {
        return {
            currentPage: 1,
            getMoreText: '点击加载更多……'
        }
    },
    mounted () {
    },
    methods: {
        goToDetail(id) {
            this.$router.push('/detail?id=' + id)
        },
        getMore() {
            getArticleList({
                articleStatus: 1,
                pageSize: 10,
                currentPage: ++this.currentPage,
                articleType: 'article'
            }).then(res => {
                let obj = {
                    tipsList: [],
                    articleList: [] 
                }
                if (res.data.code == '000000') {
                    obj.articleList = res.data.data.articleList
                    if (obj.articleList.length > 0) {
                        obj.articleList.forEach(item => {
                            item.articleCreatedTime = moment(item.articleCreatedTime).format('YYYY-MM-DD HH:mm:ss')
                            this.articleList.push(item)
                        })
                    } else if ( this.currentPage > 1){
                        this.currentPage--
                    }
                    if (obj.articleList.length == 0 || obj.articleList.length < 10) {
                        this.getMoreText = '已经到底了……'
                    }
                }
            })
        }
    }
};
</script>

<style lang='scss'>
    @import "~/assets/scss/pages/index.scss";
</style>


