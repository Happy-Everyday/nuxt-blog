<template>
  <div>
    <i-header></i-header>
    <div class="wrapper padding">
        <nuxt/>
    </div>
    <i-footer></i-footer>
  </div>
</template>

<script>
    import iHeader from '~/components/header'
    import iFooter from '~/components/footer'
    
    export default {   
        components: {
            iHeader,
            iFooter
        }
     };
</script>

<style lang='scss'>
    @import "~/assets/scss/layouts/base.scss";
</style>

