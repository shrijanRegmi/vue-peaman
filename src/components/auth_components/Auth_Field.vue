<template>
  <div class="auth-field">
    <p>{{ title }}</p>
    <input :type="type" />
  </div>
</template>

<script>
export default {
  name: 'AuthField',
  props: {
    title: String,
    type: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/partial/auth_field.scss';
</style>
