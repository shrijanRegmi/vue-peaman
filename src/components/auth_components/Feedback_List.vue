<template>
  <div class="feedbackList">
    <div class="row">
      <div class="col-xl-4" v-for="item in items" :key="item.id">
        <div class="content">
          <div class="imgContainer"></div>
          <div class="mCard text-left">
            <div class="intro">
              <h5 class="font-weight-bold">{{ item.name }}</h5>
              <p>{{ item.profession }}</p>
            </div>
            <div class="feedback">
              <p>{{ item.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackList',
  data: function() {
    return {
      items: [
        {
          id: 1,
          img: '',
          name: 'Will Smith',
          profession: 'Web Developer',
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae, quia earum incidunt odio neque, id laborum nostrum placeat esse veniam quae, consequatur laboriosam recusandae omnis. Cumque impedit doloremque quod?',
        },
        {
          id: 2,
          img: '',
          name: 'Will Smith',
          profession: 'Web Developer',
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae, quia earum incidunt odio neque, id laborum nostrum placeat esse veniam quae, consequatur laboriosam recusandae omnis. Cumque impedit doloremque quod?',
        },
        {
          id: 3,
          img: '',
          name: 'Will Smith',
          profession: 'Web Developer',
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae, quia earum incidunt odio neque, id laborum nostrum placeat esse veniam quae, consequatur laboriosam recusandae omnis. Cumque impedit doloremque quod?',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$shadow: #ebebeb;
.feedbackList {
  margin-top: 120px;
  padding: 0px 20px;
}
.content {
  position: relative;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px $shadow, 0 0 10px $shadow, 0 0 10px $shadow, 0 0 10px $shadow;
  @media screen and (max-width: 1200px) {
    margin-bottom: 100px;
  }

  @media screen and (max-width: 668px) {
    width: 100%;
  }
}

.imgContainer {
  height: 120px;
  width: 120px;
  border-radius: 10px;
  background-color: #303938;
  position: absolute;
  top: -35px;
}

.intro {
  margin-left: 140px;
  @media screen and (max-width: 500px) {
    margin-left: 0px;
    margin-top: 80px;
  }
}
p {
  color: #707070;
}
</style>
