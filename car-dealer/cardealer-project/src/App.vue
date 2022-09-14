<template>
  <div id="app">
    <Header></Header>
    <router-view name="Slide"/>
    <router-view name="Intro"/>
    <router-view name="Review"/>
    <router-view name="Member"/>
    <router-view name="Chart"/>
    <router-view></router-view>
    <Footer></Footer>
  </div>

</template>

<script>
import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue'

export default {
  components: {
    Header,
    Footer,
}
}
</script>

<style>
:root {
  --main-color-yellow: #fab915;
  --main-color-red: #e84b3a;
  --main-color-blue: #0092ff;
  --main-color-black: #2f3233;
}
</style>
