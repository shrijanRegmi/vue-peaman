<template>
  <div class="congrats text-center">
    <div class="details">
      <div class="imgContainer"></div>
      <h1 class="display-4 font-weight-bold mb-3">Congrats ! Correct</h1>
      <h5>You earn 20 points</h5>
      <div class="btns d-flex flex-column align-items-center">
        <button class="exitBtn">Exit</button>
        <button class="nextBtn">Next</button>
      </div>
    </div>
    <img src="@/assets/images/congrats.svg" alt="" class="img-fluid" />
  </div>
</template>

<script>
export default {
  name: 'Congrats',
};
</script>

<style lang="scss" scoped>
.congrats {
  height: 90vh;
  position: relative;
  img {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  .details {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 100%;
  }
}

@media screen and (max-width: 500px){
  h1{
    font-size: 30px !important;
  }
}

.btns{
  margin-top: 50px;
}

button {
  border: 1px solid #ff7533;
  background-color: transparent;
  color: #ff7533;
  padding: 10px 25px;
  border-radius: 5px;
  width: 200px;
  margin-bottom: 20px;
}

button:hover {
  background-color: #ff7533;
  color: #fff;
}

button:focus {
  outline: none;
}

.nextBtn {
  background-color: #ff7533;
  color: #fff;
}
</style>
