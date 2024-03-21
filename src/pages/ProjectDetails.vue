<template>
  <div>
    <HeaderComponent />
    <ProjectDetailsBanner />
    <ProjectDetailsContent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import ProjectDetailsBanner from '../components/pages/ProjectDetails/ProjectDetailsBanner.vue'
import ProjectDetailsContent from '../components/pages/ProjectDetails/ProjectDetailsContent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: { HeaderComponent, FooterComponent, ProjectDetailsBanner, ProjectDetailsContent },
  name: 'ProjectDetails',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>