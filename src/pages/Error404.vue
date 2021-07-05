<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 25vh">
        404
      </div>


      <div
        class="animated bounceInLeft absolute-left"
        v-if="show"
      >
              <img src="../assets/WhollyMackrel.png">
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
     show : false
    }
  },
  mounted() {
    this.show = true;
  }
}
</script>


<style lang="sass">
  .enter-active-class
    bounceInLeft

</style>
