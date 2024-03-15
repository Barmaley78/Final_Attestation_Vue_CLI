<template>
  <section class="blogBunner center">
      <div class="blogBunner__image">
          <img class="blogBunner__image__image" src="../../../assets/images/projectbunner.jpg" alt="banner">
          <div class="blogBunner__content">
              <h2 class="blogBunner__contentHeader">Our Project</h2>
              <p class="blogBunner__contentText">Home / Project</p>
          </div>
      </div>
  </section>
</template>

<script>
  export default {
  name: 'BlogPageBunnerComponent'
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

  .blogBunner {
      margin-bottom: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &__image {
          position: relative;
          top: -12px;
          display: flex;
          flex-direction: column;
          align-items: center;
      }
      &__content {
          bottom: 0px;
          position: absolute;
          width: 503px;
          height: 178px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: $blogHintColor;
          border-radius: 50px 50px 0 0;
      }
      &__contentHeader {
          @include textDecoration ("DM Serif Display", 400, 50px, 125%);
          color: $mainTextColor;
      }
      &__contentText {
          @include textDecoration ("Jost", 400, 22px, 105%, 1%);
              color: $mainTextColor;
      }
  }
</style>