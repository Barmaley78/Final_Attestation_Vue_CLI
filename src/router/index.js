import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes:([
        {
            path: '/',
            name: 'home',
            component: HomePage
          },
          {
            path: '/project',
            name: 'project',
            component: () => import('../pages/ProjectPage.vue')
          },
          {
            path: '/project/:page',
            name: 'projectArticle',
            component: () => import('../pages/ProjectPage.vue')
          },
          {
            path: '/blog',
            name: 'blog',
            component: () => import('../pages/BlogPage.vue')
          },
          {
            path: '/blog/:page',
            name: 'blogArticle',
            component: () => import('../pages/BlogPage.vue')
          },
          {
            path: '/project-details',
            name: 'project-details',
            component: () => import('../pages/ProjectDetails.vue')
          },
          {
            path: '/blog-details',
            name: 'blog-details',
            component: () => import('../pages/ArticlePage.vue')
          },
          {
            path: '/404',
            name: 'NotFoundPage',
            component: () => import('../pages/NotFoundPage.vue')
          },
          {
            path: '*',
            redirect: '/404'
          }
	])
})