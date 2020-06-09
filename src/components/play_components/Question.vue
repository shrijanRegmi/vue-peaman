<template>
  <div class="question d-flex flex-column justify-content-between">
    <div class="text">
      <div class="questionNum d-flex justify-content-center align-items-center">
        <h2 class="font-weight-bold">1</h2>
      </div>
      <div class="actualQuestion">
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni vero obcaecati harum saepe cumque
          dolor voluptatem, tenetur adipisci excepturi. Enim, laudantium asperiores. Quo ex blanditiis dicta mollitia
          soluta vel.
        </h5>
      </div>
    </div>
    <div class="timer">
      <img class="img-fluid" src="@/assets/images/timer.svg" alt="" />
      <h1>60</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
};
</script>

<style lang="scss" scoped>
.question {
  height: 90vh;
  background-color: #008af3;
  position: relative;
  color: #fff;
  padding: 40px;
}

.questionNum {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: #303938;
  margin-bottom: 20px;
  h2 {
    margin: 0px;
  }
}

.actualQuestion {
  width: 90%;
  h5 {
    font-weight: bold;
    line-height: 30px;
  }
}

.timer {
  position: relative;
  text-align: center;
  h1 {
    font-weight: bold;
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 78px;
    color: #303938;
  }
}
</style>
