<template>
  <div id="app">
    <ProjectPage />
    <!-- <HomePage /> -->
    <!-- <BlogPage /> -->
    <!-- <ArticlePage /> -->
  </div>
</template>

<script>
import ProjectPage from './pages/ProjectPage.vue'
// import HomePage from './pages/HomePage.vue'
// import BlogPage from './pages/BlogPage.vue'
// import ArticlePage from './pages/ArticlePage.vue'

export default {
  name: 'App',
  components: {
    ProjectPage,
    // HomePage,
    // BlogPage,
    // ArticlePage
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
