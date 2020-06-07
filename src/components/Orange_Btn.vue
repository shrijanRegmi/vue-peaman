<template>
  <div class="orangeBtn">
    <button><p>{{ title }}</p></button>
  </div>
</template>

<script>
export default {
  name: 'OrangeBtn',
  props: {
    title: String,
    onPress: Function,
    id: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/partial/orange_btn.scss";
</style>