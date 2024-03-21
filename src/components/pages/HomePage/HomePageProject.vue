<template>
    <section class="project center">
        <div class="project__heading">
            <h3 class="project__headingHeader">Follow Our Projects</h3>
            <p class="project__headingText">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
        </div>
        <div class="project__content">
            <div class="project__contentItem">
                <img class="project__contentItem__image image-top-left" src="../../../assets/images/Banner_content1.jpg" alt="">
                <div class="project__contentItem__description">
                    <div class="project__contentItem__text">
                        <h5 class="project__contentItem__header">Modern Kitchan</h5>
                        <p class="project__contentItem__descText">Decor / Artchitecture</p>
                    </div>
                    <router-link class="project__contentItem__button" to="/project">
                        <img src="../../../assets/images/button_vector.svg" alt="button arrow">
                    </router-link>
                </div>
            </div>
            <div class="project__contentItem">
                <img class="project__contentItem__image image-top-right" src="../../../assets/images/Banner_content2.jpg" alt="">
                <div class="project__contentItem__description">
                    <div class="project__contentItem__text">
                        <h5 class="project__contentItem__header">Modern Kitchan</h5>
                        <p class="project__contentItem__descText">Decor / Artchitecture</p>
                    </div>
                    <router-link class="project__contentItem__button" to="/project">
                        <img src="../../../assets/images/button_vector.svg" alt="button arrow">
                    </router-link>
                </div>
            </div>
            <div class="project__contentItem">
                <img class="project__contentItem__image image-bottom-left" src="../../../assets/images/Banner_content3.jpg" alt="">
                <div class="project__contentItem__description">
                    <div class="project__contentItem__text">
                        <h5 class="project__contentItem__header">Modern Kitchan</h5>
                        <p class="project__contentItem__descText">Decor / Artchitecture</p>
                    </div>
                    <router-link class="project__contentItem__button" to="/project">
                        <img src="../../../assets/images/button_vector.svg" alt="button arrow">
                    </router-link>                    
                </div>
            </div>
            <div class="project__contentItem">
                <img class="project__contentItem__image image-bottom-right" src="../../../assets/images/Banner_content4.jpg" alt="">
                <div class="project__contentItem__description">
                    <div class="project__contentItem__text">
                        <h5 class="project__contentItem__header">Modern Kitchan</h5>
                        <p class="project__contentItem__descText">Decor / Artchitecture</p>
                    </div>
                    <router-link class="project__contentItem__button" to="/project">
                        <img src="../../../assets/images/button_vector.svg" alt="button arrow">
                    </router-link>                    
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
    export default {
    name: 'HomePageProject'
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

    .project {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 96px;
        gap: 93px;
        &__heading {
            width: 737px; //61%
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }
        &__headingHeader {
            @include textDecoration ("DM Serif Display", 400, 50px, 125%, 2%);
            color: $mainTextColor;
        }
        &__headingText {
            @include textDecoration ("Jost", 400, 22px, 150%, 1%);
            color: $mainTextColor;
            text-align: center;
        }
        &__content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 56px;
        }
        &__contentItem {
            width: 548px;
            &__image {
                width: 100%;
                padding-bottom: 24px;
            }
            &__description {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            &__header {
                @include textDecoration ("DM Serif Display", 400, 25px, 125%, 2%);
            color: $mainTextColor;
            }
            &__descText {
                @include textDecoration ("Jost", 400, 22px, 150%, 1%);
            color: $mainTextColor;
            }
            &__button {
                width: 70px;
                height: 70px;
                background-color: $arrowButtonBGColor;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &__button img {
                height: 18px;
            }
        }
    }

    .image-top-left {
        border-radius:  0 75px 0 0;
    }

    .image-top-right {
        border-radius:  75px 0 0 0;
    }

    .image-bottom-left {
        border-radius:  0 0 75px 0;
    }

    .image-bottom-right {
        border-radius:  0 0 0 75px;
    }
</style>