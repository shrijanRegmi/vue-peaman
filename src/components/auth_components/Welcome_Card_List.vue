<template>
  <div id="welcomeCardList">
    <div class="row">
      <div class="col-lg-4 d-flex justify-content-center" v-for="item in items" :key="item.id">
        <div class="content text-left">
          <div class="imgContainer">
            <img :src="require(`@/assets/images/${item.img}`)" alt="" />
          </div>
          <h5 class="font-weight-bold mt-4">{{ item.title }}</h5>
          <p>{{ item.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeCardList',
  data: function() {
    return {
      items: [
        {
          id: 1,
          img: 'creative_work.svg',
          title: 'Creative Work',
          details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa?',
        },
        {
          id: 2,
          img: 'make_new_friends.svg',
          title: 'Meet New Friends',
          details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa?',
        },
        {
          id: 3,
          img: 'support.svg',
          title: '24 / 7 Support',
          details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa?',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$shadow: #ebebeb;
#welcomeCardList {
  margin-top: 80px;
  padding: 0px 20px;
}

.content {
  padding: 30px;
  width: 75%;
  min-height: 200px;
  background-color: #fff;
  box-shadow: 0 0 10px $shadow, 0 0 10px $shadow, 0 0 10px $shadow, 0 0 10px $shadow;
}
</style>
