<template>
  <div class="orangeBtn">
    <button @click="onPressedBtn">
      <p>{{ title }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: 'OrangeBtn',
  props: {
    title: String,
    id: String,
    onPressedBtn: Function,
  },
};
</script>

<style lang="scss">
@import '@/styles/partial/orange_btn.scss';
</style>
