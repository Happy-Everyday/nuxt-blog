<template>
    <header>
		<div class="wrapper">
			<nuxt-link class="icon" to='/'>
				<img src="/images/logo.png" alt="">
			</nuxt-link>
			<ul class="nav">
				<li :key='item.title' v-for="(item) in navList">
					<nuxt-link :to='item.url'><span>{{item.title}}</span></nuxt-link>
				</li>
			</ul>
			<div class="search-box">
				<input type="text" placeholder="文章标题……" v-model="searchTitle" @keyup.enter="search">
				<div class="search-icon" @click="search">
					<i class="iconfont icon-sousuo"></i>
				</div>
			</div>
		</div>
    </header>
</template>
<script>

    export default {

        data () {
            return {
                navList:[
                    {
                        title: '日记',
                        url: '/'
                    },
                    {
                        title: '文章',
                        url: '/article'
                    },
                    {
                        title: '留言',
                        url: '/words'
                    }
                ],
                searchTitle: ''
            }
        },
        methods: {
            search() {
                this.$router.push('/search/' + this.searchTitle)
            }
        }
    }

</script>
<style lang='scss'>
    @import "~/assets/scss/layouts/header.scss";
</style>