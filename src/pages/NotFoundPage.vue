<template>
    <div>
      <HeaderComponent />
      <div class="notfound">
        <div class="notfound__content">
          <h1 class="notfound__title">404</h1>
          <p class="notfound__text">We are sorry, but the page you requested was not found</p>
          <router-link class="notfound__button" to="/">
            <div class="notfound__button-text">
              <p>Back To Home</p>
              <img src="@/assets/images/button_vector.svg" alt="row_left">
            </div>
          </router-link>
        </div>
        <img class="notfound__img" src="../assets/images/404.jpg" alt="404">
      </div>
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/HeaderComponent.vue'
  export default {
    components: { HeaderComponent },
    name: 'NotFoundPage'
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
  
  .notfound {
    padding-left: calc(50% - $widthSiteDesctop / 2);
    display: flex;
    gap: 81px;
    align-items: center;
  
    &__title {
      color: #CDA274;
      font-family: Jost;
      font-size: 250px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }
  
    &__text {
      color: #292F36;
      font-family: Jost;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.35px;
      margin-top: 15px;
      margin-bottom: 23px;
    }
  
    &__img {
      border-end-start-radius: 353px;
    }
  
    &__button-text {
      width: 253px;
      padding: 26px 0;
      background-color: #292f36;
      border-radius: 18px;
      display: flex;
      gap: 10px;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
  
      & p {
        color: #fff;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
      }
    }
  }
  </style>