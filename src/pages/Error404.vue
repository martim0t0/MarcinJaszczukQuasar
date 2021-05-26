<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 25vh">
        404
      </div>

      <transition
        appear
         enter-active-class="animated bounceInLeft appear"
         eave-active-class="animated bounceOutLeft"
      >
        <div v-show="visible" class="absolute-left">
              <img src="../assets/WhollyMackrel.png">
        </div>
      </transition>


      <div class="text-h2" style="opacity:.4">
        Nothing here
        except this weird fish...
      </div>



      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue-grey-8"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  data () {
    return {
     visible : true,
    }
  },
}
</script>


<style lang="sass">
  .enter-active-class
    bounceInLeft

</style>
