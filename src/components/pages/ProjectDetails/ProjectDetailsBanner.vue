  <template>
    <section class="blogBunner center">
        <div class="blogBunner__image">
            <img class="blogBunner__image__image" src="../../../assets/images/projectDetailsBunner.jpg" alt="banner">
        </div>
    </section>
</template>
  
<script>
    export default {
    name: 'ProjectDetailsBanner'
    }
</script>
  
<style lang="scss" scoped>
 .blogBunner {
        margin-bottom: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &__image {
            position: relative;
            top: -12px;
        }
    }
</style>