<template>
    <div id="ProjectPage">
      <HeaderComponent />
      <ProjectPageBunner />
      <!-- <ProjectPageCategories /> -->
      <ProjectPageContent />
      <!-- <ProjectPageBlog /> -->
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/HeaderComponent.vue'
  import ProjectPageBunner from '../components/pages/ProjectPage/ProjectPageBunner.vue'
  // import ProjectPageCategories from '../components/pages/ProjectPage/ProjectPageCategories.vue'
  import ProjectPageContent from '../components/pages/ProjectPage/ProjectPageContent.vue'
  // import ProjectPageBlog from '../components/pages/ProjectPage/ProjectPageBlog.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: 'ProjectPage',
    components: {
      HeaderComponent,
      ProjectPageBunner,
      // ProjectPageCategories,
      ProjectPageContent,
      // ProjectPageBlog,
      FooterComponent
    }
  }
  </script>
  
  <style lang="scss" scoped>

  </style>  