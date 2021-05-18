<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div>
        <img src="../assets/lowPolyMe.png">
      </div>

      <div class="text-h2" style="opacity:.4">
        Hey, I'm Marcin...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue-grey-8"
        unelevated
        to="/home"
        label="Homepage"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
