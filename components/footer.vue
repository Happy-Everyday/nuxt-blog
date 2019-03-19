<template>
    <footer>
        <div class="wrapper">
            <div class="footer-content">
                <p>My heart, My words<br/>code by Xu Yue</p>
                <div class="wechat-logo" @mouseover="showWechatLogo=true" @mouseout="showWechatLogo=false">                    
                    <img src="/images/wechat-logo.jpg" alt="">
                </div>
                <div class="wechat-logo-lg" v-show="showWechatLogo">
                    <i class="jiantou"></i>
                    <img src="/images/wechat-logo.jpg" alt="">
                    <span>本人微信公众号</span>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>

    export default {

        data () {
            return {
                showWechatLogo: false
            }
        },
        methods: {

        }
    }

</script>
<style lang='scss'>
    @import '~/assets/scss/layouts/footer.scss';
</style>