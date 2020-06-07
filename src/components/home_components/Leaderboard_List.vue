<template>
  <div class="leaderboardList">
    <h1 class="font-weight-bold">Leaderboard</h1>
    <div class="mCard" v-for="item in items" :key="item.id">
      <div class="content">
        <div class="imgContainer">
          <h1>{{item.id}}</h1>
        </div>
        <div class="mCard">
          <div class="intro">
            <h5 class="font-weight-bold">{{item.name}}</h5>
            <p>Points: 345</p>
            <p>Level: 5</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeaderboardList',
  data: function() {
    return {
      items: [
        {
          id: 1,
          name: 'Will Smith',
        },
        {
          id: 2,
          name: 'Jakie Sukla',
        },
        {
          id: 3,
          name: 'Ram bahadur',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$shadow: #ebebeb;

h1 {
  margin-bottom: 80px;
}
.content {
  margin-bottom: 80px;
  position: relative;
  width: 600px;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 3px 10px $shadow, 0 3px 10px $shadow, 0 3px 10px $shadow, 0 3px 10px $shadow;
}

.imgContainer {
  height: 80px;
  width: 80px;
  border-radius: 10px;
  background-color: #303938;
  position: absolute;
  top: -35px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    margin: 0px;
    color: #fff;
  }
}

.intro {
  margin-top: 30px;
  p {
    margin: 0px;
    padding: 0px;
  }
}
p {
  color: #707070;
}
</style>
