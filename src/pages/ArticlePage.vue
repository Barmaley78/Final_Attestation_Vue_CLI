<template>
    <div id="ArticlePage">
      <HeaderComponent />
      <ArtilcePageBunnerComponent />
      <ArticlePageContentComponent />
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/HeaderComponent.vue'
  import ArtilcePageBunnerComponent from '../components/pages/ArticlePage/ArtilcePageBunnerComponent.vue'
  import ArticlePageContentComponent from '../components/pages/ArticlePage/ArticlePageContentComponent.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: 'ArticlePage',
    components: {
      HeaderComponent,
      ArtilcePageBunnerComponent,
      ArticlePageContentComponent,
      FooterComponent
    }
  }
  </script>
  
  <style lang="scss" scoped>
 
  </style>  