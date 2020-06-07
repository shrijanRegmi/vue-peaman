<template>
  <div class="home">
    <img src="@/assets/images/home_img_sm.svg" width="100%" alt="" class="img-fluid imgSm">
    <div class="componentContainer" v-if="navigationItem === `HOME`"><HomeList /></div>
    <div class="componentContainer" v-if="navigationItem === `PROFILE`"><ProfileList /></div>
    <div class="componentContainer" v-if="navigationItem === `LEADERBOARD`"><LeaderboardList /></div>
    <div class="mainImgContainer">
      <img src="@/assets/images/home_img_lg.svg" alt="" class="img-fluid" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HomeList from '@/components/home_components/Home_List.vue';
import ProfileList from '@/components/home_components/Profile_List.vue';
import LeaderboardList from '@/components/home_components/Leaderboard_List.vue';
export default {
  name: 'Home',
  components: {
    HomeList,
    ProfileList,
    LeaderboardList,
  },
  computed: {
    ...mapGetters(['navigationItem']),
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/home.scss';
</style>
