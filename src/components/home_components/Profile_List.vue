<template>
  <div class="profileList">
    <h1 class="font-weight-bold d-flex align-items-center">
      <span class="myImgContainer"><span>S</span></span
      >Shrijan Regmi
    </h1>
    <div class="mCard" v-for="item in items" :key="item.id">
      <img src="@/assets/images/container_top.svg" class="img-fluid" alt="" />
      <h5 class="font-weight-bold">
        {{ item.title }}
      </h5>
      <h1 class="font-weight-bold">{{ item.details }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileList',
  data: function() {
    return {
      items: [
        {
          id: 1,
          title: 'Rank',
          details: '3',
        },
        {
          id: 2,
          title: 'Points',
          details: '546',
        },
        {
          id: 3,
          title: 'Level',
          details: '54',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$shadow: #ebebeb;
h1 {
  margin-bottom: 50px;
}

.mCard {
  cursor: pointer;
  margin-bottom: 40px;
  position: relative;
  padding: 40px;
  width: 600px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 3px 10px $shadow, 0 3px 10px $shadow, 0 3px 10px $shadow, 0 3px 10px $shadow;
  h1 {
    margin: 0px;
    padding: 0px;
    margin-left: 20px;
  }
}

img {
  position: absolute;
  top: 0px;
  right: 0px;
}

.myImgContainer {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #ff7533;
  position: relative;
  margin-right: 10px;
  margin-bottom: 4px;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
}
</style>
