<template>
  <div id="app">
    <HeaderComponent />
    <!-- index page -->
    <HomePageBunner />
    <HomePageProject />
    <HomePageCounter />
    <HomePageBlog />
    <ProductDetails />
    
    <!-- blog page -->
    <!-- <BlogPageBunnerComponent /> -->
    <!-- <BlogPageContentComponent /> -->
    
    <!-- article page -->
    <!-- <ArtilcePageBunnerComponent /> -->
    <!-- <ArticlePageContentComponent /> -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
// index page
import HomePageBunner from './components/pages/HomePage/HomePageBunner.vue'
import HomePageProject from './components/pages/HomePage/HomePageProject.vue'
import HomePageCounter from './components/pages/HomePage/HomePageCounter.vue'
import HomePageBlog from './components/pages/HomePage/HomePageBlog.vue'
import ProductDetails from './components/ProductDetails.vue'

    // blog page
//  import BlogPageBunnerComponent from './components/pages/BlogPage/BlogPageBunnerComponent.vue'
//  import BlogPageContentComponent from './components/pages/BlogPage/BlogPageContentComponent.vue'

    // article page
// import ArtilcePageBunnerComponent from './components/pages/ArticlePage/ArtilcePageBunnerComponent.vue'
// import ArticlePageContentComponent from './components/pages/ArticlePage/ArticlePageContentComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    // index page
    HomePageBunner,
    HomePageProject,
    HomePageCounter,
    HomePageBlog,
    ProductDetails,
    
    // blog page
    // BlogPageBunnerComponent,
    // BlogPageContentComponent,
    
    // article page
    // ArtilcePageBunnerComponent,
    // ArticlePageContentComponent,
    FooterComponent
  }
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
