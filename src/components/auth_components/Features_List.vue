<template>
  <div class="featureList">
    <div class="content text-white">
      <div class="mRow mb-5 d-xl-flex" v-for="item in items" :key="item.id">
        <div class="mCol mb-3 mb-xl-0">
          <div class="imgContainer mr-3"></div>
        </div>
        <div class="mCol">
          <h5 class="font-weight-bold">{{ item.title }}</h5>
          <p>{{ item.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesList',
  data: function() {
    return {
      items: [
        {
          id: 1,
          img: '',
          title: 'Fully Responsive',
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae, quia earum incidunt odio neque, id laborum nostrum placeat esse veniam quae, consequatur laboriosam recusandae omnis. Cumque impedit doloremque quod?',
        },
        {
          id: 2,
          img: '',
          title: 'Fully Responsive',
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae, quia earum incidunt odio neque, id laborum nostrum placeat esse veniam quae, consequatur laboriosam recusandae omnis. Cumque impedit doloremque quod?',
        },
        {
          id: 3,
          img: '',
          title: 'Fully Responsive',
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae, quia earum incidunt odio neque, id laborum nostrum placeat esse veniam quae, consequatur laboriosam recusandae omnis. Cumque impedit doloremque quod?',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1200px){
  .featureList{
    margin-top: 50px;
  }
}
.imgContainer{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
}
</style>
