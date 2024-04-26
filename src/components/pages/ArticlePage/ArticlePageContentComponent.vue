<template>
    <section class="blog-details-page center">
   <div class="blog-details__wrap">
      <div class="blog-details">
         <div class="article" v-for="(article, index) in filterArticle" :key="index">
            <h2 class="article__title">{{ article.title }}</h2>
            <img class="article__img" :src="article.img" :alt="article.img">
            <div class="article__info">
               <p class="article__info-data">26 December,2022</p>
               <p class="article__info-link">Interior / Home / Decore</p>
            </div>
            <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
            <br>
            <p class="article__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
            <div class="info-blok">
               <p class="info-blok__quotation-marks">&#8221;</p>
               <p class="info-blok__text">The details are not the details. They make the design.</p>
            </div>
            <h2 class="article__title">Design sprints are great</h2>
            <p class="article__text"> Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. </p>
            <div class="article__list">
               <div class="article__list-num">
                  <p class="article__list-num-text">1</p>
                  <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
               </div>
               <div class="article__list-num">
                  <p class="article__list-num-text">2</p>
                  <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
               </div>
               <div class="article__list-num">
                  <p class="article__list-num-text">3</p>
                  <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
               </div>
            </div>
            <img class="article__img" src="../../../assets/images/bd2.jpg" alt="article image">
            <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
         </div>
      </div>
      
      <div class="tags">
         <div class="tags__buttons-wrap">
            <h2 class="tags__title">Tags</h2>
            <div class="tags__buttons">
               <span v-for="(btn, num) in buttonList" :value="btn.id" :key="num" @click="filterClick(btn)" class="tags__buttons-item">{{ btn.name }}</span>
            </div>
         </div>
      </div>
   </div>
</section>
</template>
  
<script>
    export default {
    name: 'ArticlePageContentComponent',
    data() {
      return {
         buttonList: [
            {
               name: "Kitchen",
               id: 0
            },
            {
               name: "Bedroom",
               id: 1
            },
            {
               name: "Building",
               id: 2
            },
            {
               name: "Architecture",
               id: 3
            },
            {
               name: "Kitchen Planning",
               id: 4
            },
            {
               name: "Bedroom",
               id: 5
            }
         ],
         findelement: '',
         contentsArticles: [
            {
               title: "Let’s Get Solution for Building Construction Work",
               img: "bd1.jpg",
               tag: "Kitchen"
            },
            {
               title: "Low Cost Latest Invented Interior Designing Ideas.",
               img: "bd1.jpg",
               tag: "Bedroom"
            },
            {
               title: "Best For Any Office & Business Interior Solution",
               img: "bd1.jpg",
               tag: "Building"
            }
         ]
      }
   },
   methods: {
      filterClick(item) {
         const selectedButton = document.getElementById('tag-selected');
         if (selectedButton !== null) {
            selectedButton.id = '';
         }
         this.findelement = item;
         const newButtonSelection = document.querySelector('[value="' +item.id + '"]');
         newButtonSelection.id ='tag-selected';
      }
   },
   computed: {
      filterArticle() {
         return this.findelement.name ? this.contentsArticles.filter((el) => el.tag.includes(this.findelement.name)) :
            this.contentsArticles
      }
   },

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

    .blog-details__wrap {
   margin-top: 200px;
   display: flex;
   flex-direction: row;
   gap: 52px;
}
 
.blog-details {
   width: 800px;
}
 
.article {
   margin-bottom: 96px;
   &__title {
      @include textDecoration ("DM Serif Display", 400, 50px, 125%, 2%);
      color: $mainTextColor;
      margin-bottom: 20px;
   }
   &__img {
      margin-top: 21px;
      margin-bottom: 35px;
      border-radius: 50px;
   }
   &__info {
      margin-top: 11px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 46px;
      @include textDecoration ("Jost", 400, 16px, 150%, 1%);
      color: $mainTextColor;
      text-transform: capitalize;
   }
   &__text {
      @include textDecoration ("Jost", 400, 22px, 150%, 1%);
      color: $mainTextColor;
   }
   &__list {
      margin-top: 24px;
      margin-bottom: 23px;
      display: flex;
      width: 732.389px;
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;
      list-style-position: 10px 0;
      &-num {
         display: flex;
         align-items: flex-start;
         gap: 14px;
         &-text {
            @include textDecoration ("DM Serif Display", 400, 20px, 125%, 2%);
            color: $counterNumberColor;
         }
      }
      &-item {
         @include textDecoration ("Jost", 400, 22px, 150%, 1%);
         color: $mainTextColor;
      }
   }
}
 
.tags {
   &__buttons-wrap {
      width: 345px;
      display: flex;
      flex-direction: column;
      gap: 24px;
   }
   &__title {
      @include textDecoration ("DM Serif Display", 400, 20px, 125%, 2%);
      color: $counterNumberColor;
   }
   &__buttons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;      
      gap: 10px;
      &-item {
         width: fit-content;
         padding: 9px 30px;
         cursor: pointer;
         background: #f4f0ec;
         border-radius: 10px;
         border: none;
         @include textDecoration ("Jost", 400, 18px, 125%, 2%);
         color: $mainTextColor;
         &#tag-selected {
            background-color: $mainTextColor;
            color: $blogHintColor;
        }
      }
   }
}
 
.info-blok {
   margin-bottom: 27px;
   margin-top: 35px;
   padding: 53px 227px;
   background: #f4f0ec;
   border-radius: 50px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   &__quotation-marks {
      margin-top: 0px;
      margin-bottom: 0px;
      width: 106px;
      height: 133px;
      flex-shrink: 0;
      @include textDecoration ("DM Serif Display", 400, 200px, 125%, 2%, italic);
      color: $counterNumberColor;
   }
   &__text {
      text-align: center;
      @include textDecoration ("DM Serif Display", 400, 25px, 125%, 2%, italic);
      color: $counterNumberColor;
   }
}
</style>