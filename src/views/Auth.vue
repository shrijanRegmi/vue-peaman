<template>
  <div class="auth">
    <!-- Starting of landing section -->
    <section id="landingSection">
      <div class="row d-flex flex-xl-row flex-column-reverse">
        <div class="col-xl-5 d-flex flex-column justify-content-center align-items-center">
          <div class="content">
            <h1 class="font-weight-bold">Register to Peaman</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio aut, assumenda nam laboriosam facere
            </p>
            <div class="auth-btns d-flex mt-5">
              <h5 class="font-weight-bold mr-5">
                Register
              </h5>
              <h5 class="font-weight-bold">
                Login
              </h5>
            </div>
            <hr class="mb-5" />
            <AuthField title="Username" type="text" />
            <AuthField title="Email" type="email" />
            <AuthField title="Password" type="password" />

            <router-link to="/home"><OrangeBtn title="REGISTER" class="mt-5"/></router-link>
          </div>
        </div>
        <div class="col-xl-7">
          <Carousel />
        </div>
      </div>
    </section>
    <!-- Ending of landing section -->

    <!-- Starting of welcome section -->
    <section id="welcomeSection">
      <div class="text-center">
        <h2>Welcome to Peaman</h2>
        <p class="w-50 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolor! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam, doloribus!
        </p>
        <WelcomeCardList />
      </div>
    </section>
    <!-- Ending of welcome section -->

    <!-- Starting of expertise section -->
    <section id="expertiseSection">
      <div class="text-center">
        <h2>Need Expert's Help ?</h2>
        <p class="w-50 m-auto">
          When an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        <ExpertiseCardList />
      </div>
    </section>
    <!-- Ending of expertise section -->

    <!-- Starting of features section -->
    <section id="featureSection">
      <div class="row">
        <div class="col-xl-6">
          <img class="img-fluid" src="@/assets/images/middle_img.svg" alt="" />
        </div>
        <div class="col-xl-6">
          <FeaturesList />
        </div>
      </div>
    </section>
    <!-- Ending of features section -->

    <!-- Starting of expertise section -->
    <section id="feedbackSection">
      <div class="text-center">
        <h2>Feedback From Users</h2>
        <p class="w-50 m-auto">
          When an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        <FeedbackList />
      </div>
    </section>
    <!-- Ending of expertise section -->
  </div>
</template>

<script>
import OrangeBtn from '@/components/Orange_Btn.vue';
import AuthField from '@/components/auth_components/Auth_Field.vue';
import Carousel from '@/components/auth_components/Carousel.vue';
import WelcomeCardList from '@/components/auth_components/Welcome_Card_List.vue';
import ExpertiseCardList from '@/components/auth_components/Expertise_Card_List.vue';
import FeaturesList from '@/components/auth_components/Features_List.vue';
import FeedbackList from '@/components/auth_components/Feedback_List.vue';
export default {
  components: {
    AuthField,
    OrangeBtn,
    Carousel,
    WelcomeCardList,
    ExpertiseCardList,
    FeaturesList,
    FeedbackList,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/auth.scss';
</style>
