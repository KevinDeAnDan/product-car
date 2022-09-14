import Vue from 'vue'
import Router from 'vue-router'
import Slide from './components/homepage/Slide.vue'
import Intro from './components/homepage/Intro.vue'
import Review from './components/homepage/Review.vue'
import Member from './components/homepage/Member.vue'
import Chart from './components/homepage/Chart.vue'

import Model from './components/car/Model.vue'
Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Homepage',
        components: {
          Slide,
          Intro, 
          Review,
          Member,
          Chart,
        }
          
      },
      {
        path: '/model',
        name: 'Model',
        component: Model
      },
    ]
})