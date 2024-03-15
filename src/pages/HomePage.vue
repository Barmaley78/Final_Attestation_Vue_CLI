<template>
    <div id="HomePage">
      <HeaderComponent />
      <HomePageBunner />
      <HomePageProject />
      <HomePageCounter />
      <HomePageBlog />
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/HeaderComponent.vue'
  import HomePageBunner from '../components/pages/HomePage/HomePageBunner.vue'
  import HomePageProject from '../components/pages/HomePage/HomePageProject.vue'
  import HomePageCounter from '../components/pages/HomePage/HomePageCounter.vue'
  import HomePageBlog from '../components/pages/HomePage/HomePageBlog.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: 'HomePage',
    components: {
      HeaderComponent,
      HomePageBunner,
      HomePageProject,
      HomePageCounter,
      HomePageBlog,
      FooterComponent
    }
  }
  </script>
  
  <style lang="scss" scoped>

  </style>  