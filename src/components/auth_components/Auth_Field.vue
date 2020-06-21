<template>
  <div class="auth-field">
    <p>{{ title }}</p>
    <input :type="type" v-model="inputVal" @input="onValChanged" required />
  </div>
</template>

<script>
export default {
  name: 'AuthField',
  props: {
    title: String,
    type: String,
  },
  data: function() {
    return {
      inputVal: '',
    };
  },
  methods: {
    onValChanged() {
      this.$emit('onValChanged', this.inputVal);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/partial/auth_field.scss';
</style>
