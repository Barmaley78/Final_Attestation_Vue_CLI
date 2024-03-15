<template>
    <div id="BlogPage">
      <HeaderComponent />
      <BlogPageBunnerComponent />
      <BlogPageContentComponent />
      <FooterComponent />
    </div>
  </template>
  
  <script>
    import HeaderComponent from './components/HeaderComponent.vue'
    import BlogPageBunnerComponent from '../components/pages/BlogPage/BlogPageBunnerComponent.vue'
    import BlogPageContentComponent from '../components/pages/BlogPage/BlogPageContentComponent.vue'
    import FooterComponent from './components/FooterComponent.vue'
  
  export default {
    name: 'BlogPage',
    components: {
      HeaderComponent,
      BlogPageBunnerComponent,
      BlogPageContentComponent,
      FooterComponent
    }
  }
  </script>
  
  <style lang="scss" scoped>

  </style>  