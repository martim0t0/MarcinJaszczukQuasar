<template>
  <div id="q-app">

    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>

  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>


<style lang="sass">
  .slide-fade-enter
    transform: translateX(10px)
    opacity: 0
  .slide-fade-enter-active,
  .slide-fade-leave-active
    transition: opacity 0.5s ease
  .slide-fade-leave-to
    transform: translateX(-10px)
    opacity: 0


</style>
