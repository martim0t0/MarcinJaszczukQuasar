<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar class="constrain">
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
          <q-avatar>
            <img src="https://en.gravatar.com/userimage/206376743/2de811e12db35a3deb20dd4838ee2c47.jpeg">
          </q-avatar>

          <q-toolbar-title>Marcin Jaszczuk</q-toolbar-title>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>

        <q-tabs v-model="tab">
          <q-route-tab name="home" label="Home" to="/home"/>
          <q-route-tab name="about" label="About" to="/about"/>
          <q-route-tab name="blog" label="Blog" to="/blog"/>
        </q-tabs>
      </q-header>

      <!-- <q-page-container>
        <q-page class="q-pa-md">
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container> -->

    </q-layout>
  </div>
</template>



<script>


export default {
  name: 'MainLayout',
  data () {
    return {

    }
  }
}
</script>
