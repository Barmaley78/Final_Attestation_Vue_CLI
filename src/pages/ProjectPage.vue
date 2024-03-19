<template>
    <div id="ProjectPage">
      <HeaderComponent />
      <ProjectPageBunner />
      <ProjectPageContent />
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/HeaderComponent.vue'
  import ProjectPageBunner from '../components/pages/ProjectPage/ProjectPageBunner.vue'
  import ProjectPageContent from '../components/pages/ProjectPage/ProjectPageContent.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: 'ProjectPage',
    components: {
      HeaderComponent,
      ProjectPageBunner,
      ProjectPageContent,
      FooterComponent
    }
  }
  </script>
  
  <style lang="scss" scoped>

  </style>  