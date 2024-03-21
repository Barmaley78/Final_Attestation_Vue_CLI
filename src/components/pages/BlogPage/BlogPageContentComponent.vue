<template>
    <section class="blogSection center">
        <div class="latestPost">
            <p class="latestPost__header">Latest Post</p>
            <div class="latestPost__content">
                <img src="../../../assets/images/banner_blog.jpg" alt="latest post image1" class="latestPost__content__image">
                <div class="latestPost__content__description">
                    <h3 class="postHeading">Low Cost Latest Invented Interior Designing Ideas</h3>
                    <p class="postText">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                    <p class="postText">Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                    <div class="postFooter">
                        <div class="blog__item__attrText">26 December,2022</div>
                        <router-link  to="/blog-details" class="blog__item__attrButton">
                            <img src="../../../assets/images/button_vector.svg" alt="button arrow">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div id="app" class="news">
            <p class="latestPost__header">Articles & News</p>
            <div class="blog__content">
                <div v-for="blog in blogs" :key="blog.id" @click="relocate" class="blog__item">
                    <div class="blog__itemImage">
                        <img class="blog__itemImage__image" v-bind:src="require('../../../assets/images/' + blog.image)" alt="">
                        <div class="blog__itemImage__decoration">{{ blog.buttonText }}</div>
                    </div>
                    <div class="blog__item__content">
                    <h3 class="blog__item__heading">{{ blog.headingText }}</h3>
                    <div class="blog__item__attributes">
                        <div class="blog__item__attrText">{{ blog.descriptionText }}</div>
                        <router-link to="/blog-details" id="button" class="blog__item__attrButton">
                            <img src="../../../assets/images/button_vector.svg" alt="button arrow">
                        </router-link>
                    </div>
                </div>
                </div>
            </div>
            <div class="aligning">
                <div class="news__pages">
                    <router-link to="/blog" id="selected" class="blog__item__attrButton-inv">
                        <p class="caruselText">01</p>
                    </router-link>
                    <router-link to="/blog" class="blog__item__attrButton-inv">
                        <p class="caruselText">02</p>
                    </router-link>
                    <router-link to="/blog" class="blog__item__attrButton-inv">
                        <p class="caruselText">03</p>
                    </router-link>
                    <router-link to="/blog" class="blog__item__attrButton-inv">
                        <img src="../../../assets/images/button_vector.svg" alt="button arrow">
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
    export default {
    name: 'BlogPageContentComponent',
    
    data () {
        return {
           blogs: [
           {
                id: 1,
                image: 'banner_blog1.jpg',
                buttonText: 'Kitchen Design',
                headingText: 'Let’s Get Solution For Building Construction Work',
                descriptionText: '26 December,2022'
            },
            {
                id: 2,
                image: 'banner_blog2.jpg',
                buttonText: 'Living Design',
                headingText: 'Low Cost Latest Invented Interior Designing Ideas.',
                descriptionText: '22 December,2022'
            },
            {
                id: 3,
                image: 'banner_blog3.jpg',
                buttonText: 'Interior Design',
                headingText: 'Best For Any Office & Business Interior Solution',
                descriptionText: '25 December,2022'
            },
            {
                id: 4,
                image: 'banner_blog4.jpg',
                buttonText: 'Kitchen Design',
                headingText: 'Let’s Get Solution For Building Construction Work',
                descriptionText: '26 December,2022'
            },
            {
                id: 5,
                image: 'banner_blog5.jpg',
                buttonText: 'Living Design',
                headingText: 'Low Cost Latest Invented Interior Designing Ideas.',
                descriptionText: '22 December,2022'
            },
            {
                id: 6,
                image: 'banner_blog6.jpg',
                buttonText: 'Interior Design',
                headingText: 'Best For Any Office & Business Interior Solution',
                descriptionText: '25 December,2022'
            }
        ]
        }
    },
    methods: {
        relocate() {
            window.location.href ='./article.html';
        }
    }
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

    .blogSection {
        display: flex;
        flex-direction: column;
        gap: 150px;
    }

    .news {
        margin-bottom: 200px;
    }

    .latestPost {
        display: flex;
        flex-direction: column;
        gap: 27px;
        &__header {
            @include textDecoration ("DM Serif Display", 400, 50px, 125%, 2%);
            color: $mainTextColor;
        }
        &__content {
            padding: 22px;
            border: 1px solid $blogBorderColor;
            border-radius: 75px;
            display: flex;
            flex-direction: row;
            gap: 65px;
            &__image {
                border-radius: 50px;
            }
            &__description {
                padding-top: 52px;
                padding-bottom: 52px;
                width: 470px;
                height: 375px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
    }

    .postHeading {
        @include textDecoration ("DM Serif Display", 400, 25px, 125%, 2%);
        color: $mainTextColor;
    }

    .postText {
        @include textDecoration ("Jost", 400, 22px, 150%, 1%);
        color: $mainTextColor;
    }

    .postFooter {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .news {
        display: flex;
        flex-direction: column;
        gap: 30px;
        &__pages {
            padding-top: 21px;
            width: 268px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .aligning {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .caruselText {
        @include textDecoration ("Jost", 500, 16px, 150%);
        color: $mainTextColor;
    }
    .blog {
        margin-bottom: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 52px;
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
            cursor: pointer;
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