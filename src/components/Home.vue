<template>
    <div class="home-page-content">
      <!-- house images carousel -->
      <b-carousel indicators :interval="4000">
        <b-carousel-slide
          caption="First slide"
          text="Eos mutat malis maluisset et, agam ancillae quo te, in vim congue pertinacia."
          :img-src="`${baseUrl}img/bg/1.jpg`" />
        <b-carousel-slide
          caption="Second slide"
          text="In numquam omittam sea."
          :img-src="`${baseUrl}img/bg/2.jpg`" />
        <b-carousel-slide
          caption="Third slide"
          text="Lorem ipsum dolor sit amet, virtute consequat ea qui, minim graeco mel no."
          :img-src="`${baseUrl}img/bg/3.jpg`" />
      </b-carousel>
      <!-- end house images carousel -->
<hr>
      <!-- first month guarantee -->
      <div class="container" id = "first-month-rent-guarantee">
        <div class="row" align-content-center>
          <div class = "col-md-10 col-lg-5 text-center mx-auto" id="first-month-rent-guarantee-image">
            <img src="../../public/img/promotion/first month rent guarantee.png" alt="first month rent guarantee">
          </div>
          <div class=" col-md-10 col-lg-5 text-center mx-auto">
              <h1 class="display-3 mb-5">
                We'll guarantee your first month's rent
              </h1>
              <h3 class = "display-4">
                We're so confident we can fill your property that we'll guarantee it
              </h3>
              <a href="#" class="btn btn-primary btn-xl"><small>Please, tell me more!</small></a>
            </div>
        </div>
      </div>
      <!-- end first month guarantee -->
    </div>

</template>

<style>
.swiper-container .swiper-slide {
  padding: 5rem 0;
  text-align: center;
  font-size: 1.5rem;
  background: #ecebed;
}

#swiper-vertical {
  max-height: 195px;
}

#swiper-3d-cube-effect {
  max-width: 300px;
}

#swiper-3d-coverflow-effect .swiper-slide {
  max-width: 300px;
}

#swiper-3d-flip-effect,
#swiper-3d-flip-effect .swiper-slide {
  max-width: 300px;
}

#swiper-3d-flip-effect {
  padding: 50px;
}
</style>
<style src="@/vendor/libs/vue-awesome-swiper/vue-awesome-swiper.scss" lang="scss"></style>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "home",
  metaInfo: {
    title: "home"
  },
  components: {
    swiper,
    swiperSlide
  },
  data: function() {
    return {
      firstMonthRentGuaranteeSrc:
        "../../public/img/promotion/first month rent guarantee.png"
    };
  }
};
</script>
