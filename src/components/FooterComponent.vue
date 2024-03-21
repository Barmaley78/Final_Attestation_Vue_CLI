<template>
    <footer class="footer center">
        <div class="footer__logo">
            <div class="logo">
                <img class="logo__image" src="../assets/images/intereno_logo.svg" alt="Interno logotype">
                <span class="logo__text">Interno</span>
            </div>
            <p class="footer__item__text">It is a long established fact that a reader will be distracted lookings.</p>
            <div class="socialNetslogos">
                <img src="../assets/images/twitter_logo.svg" alt="twitter">
                <img src="../assets/images/in_logo.svg" alt="in">
            </div>
        </div>
        
        <div class="footer__menu">
            <div class="footer__item__heading">
                <h5>Pages</h5>
            </div>
            <div class="footer__item__content">
                <p class="footer__item__text"><router-link class="footer__link" to="/">Home</router-link></p>
                <p class="footer__item__text"><router-link class="footer__link" to="/Project">Progect</router-link></p>
                <p class="footer__item__text"><router-link class="footer__link" to="/Blog">Blog</router-link></p>
            </div>
        </div>

        <div class="footer__spacing"></div>
        
        <div class="footer__contact">
            <div class="footer__item__heading">
                <h5>Contact</h5>
            </div>
            <div class="footer__item__content">
                <p class="footer__item__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p class="footer__item__text">contact@interno.com</p>
                <p class="footer__item__text">(123) 456 - 7890</p>
            </div>
        </div>
    </footer>    
</template>
  
  <script>
  export default {
    name: 'FooterComponent'
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


.footer {
    margin-bottom: 134px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &__logo {
        width: 394px;
        display: flex;
        flex-direction: column;
        gap: 31px;
    }
    &__menu {
        width: 123px;
        display: flex;
        flex-direction: column;
        gap: 31px;
    }
    &__spacing {
        width: 123px;
    }
    &__contact {
        width: 260px;
        display: flex;
        flex-direction: column;
        gap: 31px;
    }
    &__item {
        &__content {
            display: flex;
            flex-direction: column;
            gap: 31px;
        }
        &__heading {
            @include textDecoration ("DM Serif Display", 400, 25px, 125%);
            color: $mainTextColor;
        }
        &__text {
            @include textDecoration ("Jost", 400, 22px, 150%, 1%);
            color: $mainTextColor;
        }
    }
    &__link {
        color: $mainTextColor;
    }
}

.socialNetslogos {
    display: flex;
    flex-direction: row;
    gap: 54px;
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