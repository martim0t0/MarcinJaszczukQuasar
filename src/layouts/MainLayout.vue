<template>
    <q-layout view="lHh lpr lFf">
      <q-header elevated>
        <q-toolbar class="constrain text-blue-grey-3">
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
          <q-avatar>
            <img src="https://en.gravatar.com/userimage/206376743/2de811e12db35a3deb20dd4838ee2c47.jpeg">
          </q-avatar>

          <q-toolbar-title class="text-bold">Marcin Jaszczuk</q-toolbar-title>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>

        <q-tabs class="text-blue-grey-3" indicator-color="red-5">
          <q-route-tab name="home" label="Home" to="/home"/>
          <q-route-tab name="about" label="About" to="/about"/>
          <q-route-tab name="blog" label="Blog" to="/blog"/>

        <q-btn-dropdown
          auto-close
          flat
          label=""
          stretch
        >
          <q-list
          class="bg-blue-grey-7 text-white"
          >

            <q-item clickable @click="tab = 'coding'">
              <q-item-section>Coding & Programming</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'food'">
              <q-item-section>Food & Cooking</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'photography'">
              <q-item-section>Photograpy & Art
              </q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'stoicism'">
              <q-item-section>Stoicism</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'outdoors'">
              <q-item-section>The Outdoors</q-item-section>
            </q-item>

          </q-list>
        </q-btn-dropdown>



        </q-tabs>
      </q-header>



      <q-footer elevated>
        <q-toolbar class="text-blue-grey-3">
          <q-btn flat round color="bg-blue-grey-3" icon="eva-copyright-outline" />
          <q-toolbar-title class="text-caption">© MirroMar 2021</q-toolbar-title>
          <q-btn
            type="a"
            href="https://www.facebook.com/martin.jaszczuk.3"
            color="bg-blue-grey-3"
            flat
            icon="eva-facebook-outline"
            round
          />
          <q-btn
            type="a"
            href="https://twitter.com/martim0t0"
            color="bg-blue-grey-3"
            flat
            icon="eva-twitter-outline"
            round
          />
          <q-btn
            type="a"
            href="https://www.linkedin.com/in/martin-jaszczuk-5abb9945/"
            color="bg-blue-grey-3"
            flat
            icon="eva-linkedin-outline"
            round
          />
          <q-btn
            type="a"
            href="https://github.com/martim0t0"
            color="bg-blue-grey-3"
            flat
            icon="eva-github-outline"
            round
          />
        </q-toolbar>
      </q-footer>

      <q-page-container class="bg-blue-grey-3">
        <router-view />
      </q-page-container>

    </q-layout>
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


<style lang="sass" scoped>
  .constrain
    padding-block-start: 10px
</style>
