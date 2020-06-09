<template>
  <div class="homeList">
    <h1 class="font-weight-bold">Home</h1>
    <div class="mCard" v-for="item in items" :key="item.id">
      <router-link to="/play">
        <img src="@/assets/images/container_top.svg" class="img-fluid" alt="" />
        <h5 class="font-weight-bold">
          {{ item.title }}
        </h5>
        <p>{{ item.details }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeList',
  data: function() {
    return {
      items: [
        {
          id: 1,
          title: 'Quick Play',
          details:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit impedit repellat quia repudiandae voluptatibus',
        },
        {
          id: 2,
          title: 'Daily Hunt',
          details:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit impedit repellat quia repudiandae voluptatibus',
        },
        {
          id: 3,
          title: 'Events',
          details:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit impedit repellat quia repudiandae voluptatibus',
        },
        {
          id: 4,
          title: 'Exams',
          details:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit impedit repellat quia repudiandae voluptatibus',
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

  a {
    color: #303938;
    text-decoration: none;
  }

  @media screen and (max-width: 1150px) {
    width: 100%;
  }
}

.mCard:hover {
  background-color: #ff7533;

  a {
    color: #fff;
  }
}

img {
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>
