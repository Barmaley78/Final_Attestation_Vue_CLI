<template>
    <section class="counter center">
        <div class="counter__item">
            <p class="counter__item__count">12</p>
            <p class="counter__item__text">Years Of Experiance</p>
        </div>
        <div class="counter__item">
            <p class="counter__item__count">85</p>
            <p class="counter__item__text">Success Project</p>
        </div>
        <div class="counter__item">
            <p class="counter__item__count">15</p>
            <p class="counter__item__text">Active Project</p>
        </div>
        <div class="counter__item">
            <p class="counter__item__count">95</p>
            <p class="counter__item__text">Happy Customers</p>
        </div>
    </section>
</template>
  
<script>
    export default {
        name: 'HomePageCounter'
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

    .counter {
        background-color: $arrowButtonBGColor;
        padding-top: 151px;
        padding-bottom: 151px;
        margin-bottom: 96px;
        display: flex;
        flex-direction: row;
        &__item {
            width: 25%;
            text-align: center;
            display: flex;
            & {
                display: inline-block;
                border-right: 1px solid #cda274;
                padding-right: 60px;
            }
            &:last-child {
                border-right: none;
            }
            &__count {
                @include textDecoration ("DM Serif Display", 400, 85px, 125%, 2%);
                color: $counterNumberColor;
            }
            &__text {
                @include textDecoration ("Jost", 400, 22px, 150%, 1%);
                color: $mainTextColor;
            }

        }
    }
</style>