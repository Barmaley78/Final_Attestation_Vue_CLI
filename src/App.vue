<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style lang="scss">
#app {
  $mainTextColor: #292F36;
  $arrowButtonBGColor: #F4F0EC;
  $counterNumberColor: #CDA274;
  $blogBorderColor: #E7E7E7;
  $blogHintTextColor: #4D5053;
  $blogHintColor: white;
  $widthSiteDesctop: 1200px;

  a {
      text-decoration: none;
  }

  .center {
        padding-left: calc(50% - $widthSiteDesctop / 2);
        padding-right: calc(50% - $widthSiteDesctop / 2);
    }
}
</style>
