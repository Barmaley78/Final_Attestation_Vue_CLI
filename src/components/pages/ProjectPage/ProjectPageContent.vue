<template>
    <section class="project center">
      <ProjectPageCategories @activCategories="activCategories" />
      <ProjectPageProjects :projects="projects" />
      <div class="project__count-page">
        <div class="project__count-page-wrap">
          <router-link to="/project" href="#" class="project__count-page-number">
            <p class="project__count-page-number-text">01</p>
          </router-link>
          <router-link to="/project" href="#" class="project__count-page-number">
            <p class="project__count-page-number-text">02</p>
          </router-link>
          <router-link to="/project" href="#" class="project__count-page-number">
            <p class="project__count-page-number-text">03</p>
          </router-link>
          <router-link  to="/project">
            <svg class="project__count-page-svg" xmlns="http://www.w3.org/2000/svg" width="53" height="52"
              viewBox="0 0 53 52" fill="none">
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
              <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import ProjectPageCategories from './ProjectPageCategories.vue'
  import ProjectPageProjects from './ProjectPageProjects.vue'
  export default {
    components: {
      ProjectPageCategories,
      ProjectPageProjects
    },
    name: 'ProjectPageContent',
  
    data () {
      return {
        projects: [],
        projectsOne: [
          {
            id: 1,
            image: 'project1.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 2,
            image: 'project3.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 3,
            image: 'project5.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 4,
            image: 'project7.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 5,
            image: 'project2.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 6,
            image: 'project4.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 7,
            image: 'project6.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 8,
            image: 'project8.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          }
        ],
        projectsNew: [
          {
            id: 1,
            image: 'project2.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 2,
            image: 'project4.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 3,
            image: 'project6.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 4,
            image: 'project8.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 5,
            image: 'project1.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 6,
            image: 'project3.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 7,
            image: 'project5.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 8,
            image: 'project7.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          }
        ],
        projectsTwo: [
          {
            id: 1,
            image: 'project5.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 2,
            image: 'project2.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 3,
            image: 'project3.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 4,
            image: 'project4.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 5,
            image: 'project1.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 6,
            image: 'project6.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 7,
            image: 'project7.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            id: 8,
            image: 'project8.jpg',
            title: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          }
        ]
      }
    },
  
    created () {
      this.projects = this.projectsOne
    },
  
    methods: {
      activCategories (data) {
        switch (data.id) {
          case 1:
            this.projects = this.projectsTwo
            break
          case 2:
            this.projects = this.projectsOne
            break
          case 3:
            this.projects = this.projectsNew
            break
          case 4:
            this.projects = this.projectsNew
            break
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  $mainTextColor: #292F36;
  $arrowButtonBGColor: #F4F0EC;
  $counterNumberColor: #CDA274;
  $blogBorderColor: #E7E7E7;
  $blogHintTextColor: #4D5053;
  $blogHintColor: white;
  $widthSiteDesctop: 1200px;
  
  .project {
    &__count-page {
      margin-top: 51px;
      margin-bottom: 200px;
      display: flex;
      justify-content: center;
  
      &-wrap {
        display: flex;
        gap: 20px;
      }
  
      &-number {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        border: 1px #cda274 solid;
        width: 52px;
        height: 52px;
        border-radius: 52px;
  
        &-text {
          color: #292f36;
          font-family: Jost;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
          text-transform: capitalize;
        }
  
        &:hover {
          background: #f4f0ec;
          border: none;
          width: 54px;
          height: 54px;
        }
      }
  
      &-svg:hover {
        fill: #f4f0ec;
  
        & circle {
          stroke: none;
        }
      }
    }
  }
  </style>