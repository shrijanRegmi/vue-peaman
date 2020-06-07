<template>
  <div id="expertiseCardList">
    <div class="row">
      <div class="col-xl-3 d-flex justify-content-center" v-for="item in items" :key="item.id">
        <div class="content">
          <div class="imgContainer"></div>
          <div class="mCard text-white">
            <h5 class="font-weight-bold">Lucy Smith</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolores fugiat minus sunt explicabo
            </p>
          </div>
          <div class="socialContainer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpertiseCardList',
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
        {
          id: 4,
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
#expertiseCardList {
  margin-top: 150px;
  padding: 0px 20px;
}

.content {
  position: relative;
  padding: 30px;
  width: 75%;
  min-height: 300px;
  background-color: #ff7533;
  box-shadow: 0 0 10px $shadow, 0 0 10px $shadow, 0 0 10px $shadow, 0 0 10px $shadow;
}

.imgContainer {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: #303938;
  position: absolute;
  top: -75px;
  left: 50%;
  transform: translateX(-50%);
}

.socialContainer {
  position: absolute;
  bottom: -20px;
  height: 40px;
  width: 75%;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 3px 5px $shadow, 0 3px 5px $shadow, 0 3px 5px $shadow, 0 3px 5px $shadow;
}
.mCard {
  margin-top: 70px;

  p{
    line-height: 30px;
  }
}
</style>
