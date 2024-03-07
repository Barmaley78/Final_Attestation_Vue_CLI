<template>
    <section class="bunner center">
        <div class="bunner__image">
            <img class="bunner__image__image" src="../../../assets/images/Banner.jpg" alt="banner">
            <div class="bunner__content">
                <h2 class="bunner__contentHeader">Let Your Home Be Unique</h2>
                <p class="bunner__contentText">There are many variations of the passages of<br>
                    lorem Ipsum fromavailable, majority</p>
                <p class="bunner__contentButton">
                    <span class="bunner__contentButton__text">Get Started </span> <img src="../../../assets/images/bunner_button_vector.svg" alt="">
                </p>
            </div>
        </div>
    </section>
</template>
  
<script>
    export default {
        name: 'HomePageBunner'
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

    .bunner {
        margin-bottom: 96px;
        &__image {
            position: relative;
            &__image {
                max-width: 100%;
                border-radius: 60px;
            }
        }
        &__content {
            width: 434px;
            position: absolute;
            z-index: 100;
            left: 52px;
            top: 208px;
            display: flex;
            flex-direction: column;
            gap: 18px;
        }
        &__contentHeader {
            @include textDecoration ("DM Serif Display", 400, 65px, 125%);
            color: $mainTextColor;
        }
        &__contentText {
            @include textDecoration ("Jost", 400, 22px, 150%, 1%);
            color: $mainTextColor;
        }
        &__contentButton {
            width: 220px;
            height: 75px;
            display: flex;
            flex-direction: row;    justify-content: center;
            align-items: center;
            gap: 10px;
            background-color: $mainTextColor;
            border-radius: 20px;
            &__text {
                @include textDecoration ("Jost", 600, 18px, 125%, 2%);
            color: white;
            }
        }
    }
</style>