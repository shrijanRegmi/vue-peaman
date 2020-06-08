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
        <div class="imgContainer imgContainer1">
          <div class="overlay">
            <div class="mCard d-flex">
              <div class="logoContainer">
                <img alt="Peaman logo" src="@/assets/images/logo.svg" width="60px" />
              </div>
              <div class="mCol">
                <h5 class="font-weight-bold">#One</h5>
                <p>
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, quasi perferendis quos tenetur
                  consectetur atque iste inventore repudiandae nemo. Quae'
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="imgContainer imgContainer2">
          <div class="overlay">
            <div class="mCard d-flex">
              <div class="logoContainer">
                <img alt="Peaman logo" src="@/assets/images/logo.svg" width="60px" />
              </div>
              <div class="mCol">
                <h5 class="font-weight-bold">#Two</h5>
                <p>
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, quasi perferendis quos tenetur
                  consectetur atque iste inventore repudiandae nemo. Quae'
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="imgContainer imgContainer3">
          <div class="overlay">
            <div class="mCard d-flex">
              <div class="logoContainer">
                <img alt="Peaman logo" src="@/assets/images/logo.svg" width="60px" />
              </div>
              <div class="mCol">
                <h5 class="font-weight-bold">#Three</h5>
                <p>
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, quasi perferendis quos tenetur
                  consectetur atque iste inventore repudiandae nemo. Quae'
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="imgContainer imgContainer4">
          <div class="overlay">
            <div class="mCard d-flex">
              <div class="logoContainer">
                <img alt="Peaman logo" src="@/assets/images/logo.svg" width="60px" />
              </div>
              <div class="mCol">
                <h5 class="font-weight-bold">#Four</h5>
                <p>
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, quasi perferendis quos tenetur
                  consectetur atque iste inventore repudiandae nemo. Quae'
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="imgContainer imgContainer5">
          <div class="overlay">
            <div class="mCard d-flex">
              <div class="logoContainer">
                <img alt="Peaman logo" src="@/assets/images/logo.svg" width="60px" />
              </div>
              <div class="mCol">
                <h5 class="font-weight-bold">#Five</h5>
                <p>
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, quasi perferendis quos tenetur
                  consectetur atque iste inventore repudiandae nemo. Quae'
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCarousel',
};
</script>

<style lang="scss" scoped>
.carousel-item {
  height: 91.5vh;
  min-height: 90vh;
  z-index: 1;
}

@media screen and (max-width: 500px) {
  .carousel-item {
    height: 300px;
    min-height: 300px;
  }
}
.imgContainer {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.imgContainer1 {
  background-image: url('../../assets/images/carousel/carousel1.jpg');
  background-position: top;
}

.imgContainer2 {
  background-image: url('../../assets/images/carousel/carousel2.jpg');
}

.imgContainer3 {
  background-image: url('../../assets/images/carousel/carousel3.jpg');
  background-position-y: 100%;
}

.imgContainer4 {
  background-image: url('../../assets/images/carousel/carousel4.jpg');
}

.imgContainer5 {
  background-image: url('../../assets/images/carousel/carousel5.jpg');
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

.overlay {
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0px 40px;
  @media screen and (max-width: 500px) {
    display: none;
  }
}

.mCard {
  background-color: #fff;
  .logoContainer {
    width: 300px;
    height: auto;
    background-color: #fcebe2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mCol {
    padding: 20px;
    p {
      font-style: italic;
      color: #78899d;
    }
  }
}
</style>
