<template>
    <section class="blog center">
        <div class="blog__heading">
            <h3 class="blog__headingHeader">Articles & News</h3>
            <p class="blog__headingText">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div class="blog__content">
            <div class="blog__item">
                <div class="blog__itemImage">
                    <img class="blog__itemImage__image" src="../../../assets/images/banner_blog1.jpg" alt="">
                    <div class="blog__itemImage__decoration">Kitchen Design</div>
                </div>
                <div class="blog__item__content">
                <h3 class="blog__item__heading">Let’s Get Solution For Building Construction Work</h3>
                <div class="blog__item__attributes">
                    <div class="blog__item__attrText">26 December,2022</div>
                    <div class="blog__item__attrButton">
                        <img src="../../../assets/images/button_vector.svg" alt="button arrow">
                    </div>
                </div>
            </div>
            </div>

            <div class="blog__item">
                <div class="blog__itemImage">
                    <img class="blog__itemImage__image" src="../../../assets/images/banner_blog2.jpg" alt="">
                    <div class="blog__itemImage__decoration">Living Design</div>
                </div>
                <div class="blog__item__content">
                <h3 class="blog__item__heading">Low Cost Latest Invented Interior Designing
                    Ideas.</h3>
                <div class="blog__item__attributes">
                    <div class="blog__item__attrText">22 December,2022</div>
                    <div id="button" class="blog__item__attrButton">
                        <img src="../../../assets/images/button_vector.svg" alt="button arrow">
                    </div>
                </div>
            </div>
            </div>

            <div class="blog__item">
                <div class="blog__itemImage">
                    <img class="blog__itemImage__image" src="../../../assets/images/banner_blog3.jpg" alt="">
                    <div class="blog__itemImage__decoration">Interior Design</div>
                </div>
                <div class="blog__item__content">
                <h3 class="blog__item__heading">Best For Any Office & Business Interior 
                    Solution</h3>
                <div class="blog__item__attributes">
                    <div class="blog__item__attrText">25 December,2022</div>
                    <div class="blog__item__attrButton">
                        <img src="../../../assets/images/button_vector.svg" alt="button arrow">
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>
  
<script>
    export default {
    name: 'HomePageBlog'
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
    
    .blog {
        margin-bottom: 96px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 152px;
        &__heading {
            width: 811px;
            height: 141px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

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
            display: grid;
            grid-template-columns: repeat(3, 382px);
            gap: 27px;

        }
        &__item {
            width: 382px;
            height: 521px;
            padding-top: 21px;
            border: 1px solid $blogBorderColor;
            border-radius: 75px;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            &__content {
                width: 340px;
                height: 190px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

            }
            &__heading {
                width: 300px;
                @include textDecoration ("DM Serif Display", 400, 25px, 125%, 2%);
                color: $mainTextColor;
            }
            &__attributes {
                margin-bottom: 17px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

            }
            &__attrText {
                @include textDecoration ("Jost", 400, 16px, 150%, 1%);
                color: $mainTextColor;
            }
            &__attrButton {
                width: 52px;
                height: 52px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: $arrowButtonBGColor;
                border-radius: 50%;
            }
            &__attrButton-inv {
                width: 52px;
                height: 52px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: $blogHintColor;
                border: 2px solid $arrowButtonBGColor;
                border-radius: 50%;
                &#selected {
                    background-color: $arrowButtonBGColor;
                    border: none;
                }
            }


            &__attrButton img {
                height: 13px;
            }
            &:nth-child(2) {
                background-color: $arrowButtonBGColor;
            }

            &:nth-child(2) #button {
                    background-color: $blogHintColor;
                    border: 2px solid $arrowButtonBGColor;
            }
            
            
        }
        &__itemImage {
            position: relative;
            &__image {
                border-radius: 50px 50px 0 0;
            }
            &__decoration {
                position: absolute;
                left: 20px;
                top: 228px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 124px;
                height: 41px;
                background-color: $blogHintColor;
                border-radius: 5px 5px 5px 0; 
                @include textDecoration ("Jost", 400, 16px, 150%, 1%);
                color: $blogHintTextColor;
            }
        }

    }
</style>