<template>
    <header class="header center">
        <div class="logo">
            <img class="logo__image" src="../assets/images/intereno_logo.svg" alt="Interno logotype">
            <span class="logo__text">Interno</span>
        </div>
        <div class="header__menu">
            <p class="menu__item"><router-link class="menu__itemLink" to="/">Home</router-link></p>
            <p class="menu__item"><router-link class="menu__itemLink" to="/Project">Progect</router-link></p>
            <p class="menu__item"><router-link class="menu__itemLink" to="/Blog">Blog</router-link></p>
        </div>
    </header>
</template>
  
<script>
    export default {
    name: 'HeaderComponent'
    }
</script>
  
<style lang="scss" scoped>
    $mainTextColor: #292F36;
    $arrowButtonBGColor: #F4F0EC;
    $counterNumberColor: #CDA274;
    $blogBorderColor: #E7E7E7;
    $blogHintTextColor: #4D5053;
    $blogHintColor: white;
    $widthSiteDesctop: 1200px;


    @mixin textDecoration ($fontFamily, $weight, $size, $lineH:normal, $letterSpacing:normal, $style:normal) {
        font-family: $fontFamily;
        font-weight: $weight;
        font-size: $size;
        line-height: $lineH;
        letter-spacing: $letterSpacing;
        font-style: $style;
    }

    .header {
        margin-top: 44px;
        margin-bottom: 57px;
        padding-top: 13px;
        padding-bottom: 13px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        &__menu {
            display: flex;
            flex-direction: row;
            gap: 40px;
        }
    }
    .menu__itemLink {
        @include textDecoration ("Jost", 400, 20px, 125%);
            color: $mainTextColor;
    }
    .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        &__image {
            width: 34px;
        }
        &__text{        
            @include textDecoration ("DM Serif Display", 400, 40px, 125%);
            color: $mainTextColor;
        }
    }
</style>