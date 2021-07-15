<template>

  <q-page class="flex-center flex-center constrain">
    <q-card
      bordered
      class="my-card bg-teal-2 q-mb-md"
    >
      <q-card-section>
        <div class="text-h4 pic" style="opacity:.5">
          Who am I?
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none text-body1">
        <p style="opacity:.5">I'm another Polish immigrant in the Chicago 'burbs.</p>
        <p style="opacity:.5">My family came here when I was a little kid and we settled in this area for a while, and now I'm the only one left here. This is by choice because I can't live where there isn't a Polish deli and I happen to really like the Chicago area, despite its many shortcomings... Hey, I like the weather, ok?</p>
        <!-- <img src="../assets/orzel_drawing.png" class="pic"> -->
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <img src="../assets/orzel_drawing.png" class="pic">
      </q-card-section>


    </q-card>
  </q-page>


</template>

<script>
export default {
  name: 'PageAbout'
}
</script>

<style lang="sass">
  .pic
    align-items: flex-center
    justify-items: center
</style>
