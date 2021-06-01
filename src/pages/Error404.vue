<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 25vh">
        404
      </div>

        <div v-show="visible" class="absolute-left">
      <transition
        appear
         enter-active-class="animated bounceInLeft appear"
         leave-active-class="animated bounceOutLeft"
      >
              <img src="../assets/WhollyMackrel.png">
      </transition>
        </div>


      <div class="text-h2" style="opacity:.4">
        Nothing here
        except this weird fish...
      </div>



      <q-btn
        class="q-mt-xl"
        color="blue-grey-3"
        text-color="blue-grey-8"
        unelevated
        to="/"
        label="Go Home"
        no-caps
        glossy
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
