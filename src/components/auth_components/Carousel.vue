<template>
  <div id="carouselId" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselId" data-slide-to="0" class="active"></li>
      <li data-target="#carouselId" data-slide-to="1"></li>
      <li data-target="#carouselId" data-slide-to="2"></li>
      <li data-target="#carouselId" data-slide-to="3"></li>
      <li data-target="#carouselId" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <div class="imgContainer imgContainer1"></div>
      </div>
      <div class="carousel-item">
        <div class="imgContainer imgContainer2"></div>
      </div>
      <div class="carousel-item">
        <div class="imgContainer imgContainer3"></div>
      </div>
      <div class="carousel-item">
        <div class="imgContainer imgContainer4"></div>
      </div>
      <div class="carousel-item">
        <div class="imgContainer imgContainer5"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCarousel',
};
</script>

<style scoped>
.carousel-item {
  height: 91.5vh;
  min-height: 90vh;
  z-index: 1;
}
.imgContainer {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.imgContainer1 {
  background-image: url('../../assets/images/carousel/carousel1.svg');
  background-position: top;
}

.imgContainer2 {
  background-image: url('../../assets/images/carousel/carousel2.svg');
}

.imgContainer3 {
  background-image: url('../../assets/images/carousel/carousel3.svg');
}

.imgContainer4 {
  background-image: url('../../assets/images/carousel/carousel4.svg');
}

.imgContainer5 {
  background-image: url('../../assets/images/carousel/carousel5.svg');
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0px 10px;
}

.roundedContainer {
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.roundedContainer span {
}
</style>
