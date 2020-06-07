<template>
  <div class="navbar">
    <ul v-if="source === `AUTH`" class="mainNav mainNav1">
      <ul class="tabContainer">
        <li class="brand">
          <router-link to="/"
            ><img alt="Peaman logo" src="../assets/images/logo.svg" />
            <span>
              peaman
            </span></router-link
          >
        </li>
        <li class="tabs">
          <ul>
            <li><router-link to="/">Find Pea</router-link></li>
            <li><router-link to="/">About Peaman</router-link></li>
            <li><router-link to="/">Provide Feedback</router-link></li>
            <li><router-link to="/">Support</router-link></li>
          </ul>
        </li>
      </ul>
      <li class="btns">
        <ul>
          <li><router-link to="/">Login</router-link></li>
          <li><router-link to="/">Register</router-link></li>
        </ul>
      </li>
    </ul>
    <ul class="mainNav mainNav2">
      <ul class="tabContainer">
        <li class="brand">
          <router-link to="/"
            ><img alt="Peaman logo" src="../assets/images/logo.svg" />
            <span>
              peaman
            </span></router-link
          >
        </li>
        <li class="tabs">
          <ul>
            <li @click="onPressItem(`HOME`)"><span>Home</span></li>
            <li @click="onPressItem(`PROFILE`)"><span>Profile</span></li>
            <li @click="onPressItem(`CHAT`)"><span>Chat</span></li>
            <li @click="onPressItem(`LEADERBOARD`)"><span>Leaderboard</span></li>
          </ul>
        </li>
      </ul>
      <li class="btns">
        <ul>
          <li><router-link to="/">Support</router-link></li>
          <li><router-link to="/">Logout</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Navbar',
  props: {
    source: String,
  },
  methods: {
    ...mapActions(['changeNavigationItem']),
    onPressItem(newVal) {
      this.changeNavigationItem(newVal);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/partial/navbar.scss';
</style>
