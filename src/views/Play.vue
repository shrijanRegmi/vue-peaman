<template>
  <div class="play">
    <div v-if="bool">
      <Congrats />
    </div>
    <div v-else class="row">
      <div class="col-xl-6">
        <Question />
      </div>
      <div class="col-xl-6">
        <Option />
      </div>
    </div>
  </div>
</template>

<script>
import Question from '@/components/play_components/Question.vue';
import Option from '@/components/play_components/Option.vue';
import Congrats from '@/components/play_components/Congrats.vue';
export default {
  name: 'Play',
  components: {
    Question,
    Option,
    Congrats,
  },
  data: function() {
    return {
      bool: true,
    };
  },
};
</script>

<style lang="scss">
@import '@/styles/play.scss';
</style>
