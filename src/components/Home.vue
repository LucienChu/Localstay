<template>
    <div class="home-page-content">
      <!-- house images carousel -->
      <div class="home-image-carousel">
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
      </div>
      <!-- end house images carousel -->

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

      <div class="space"></div>

      <!-- end first month guarantee -->

    <!-- partner platforms -->
      <div class = "coop-partners">
        <div class="container-fluid">
          <div class="row">
            <div class="container">
              <h1 class="display-3 text-center mb-4">
              Maximising the visiblity of your London listing across channels
            </h1>
            <p class="lead display-4 col-md-10 col-lg-8 text-center text-muted p-0 mx-auto mb-4">
              Such As Airbnb, Homeaway, Booking.com, Tripadvisor and other leading channels globally
            </p>
            </div>
          </div><br><br>
          <div class="row">
            <div class="container-fluid">
              <div class="row text-center p-0 mx-auto">
                <div class=" col-md-6 col-lg-4 col-xl-2 pt-3 my-4">
                    <img class = "partner-img" src="../../public/img/partners/airbnb.svg" alt="airbnb">
                </div>
                <div class=" col-md-6 col-lg-4 col-xl-2 pt-3 my-4">
                    <img class = "partner-img" src="../../public/img/partners/homeaway.svg" alt="airbnb">
                </div>
                
                <div class=" col-md-6 col-lg-4 col-xl-2 pt-3 my-4">
                    <img class = "partner-img" src="../../public/img/partners/luxuryretreats.svg" alt="airbnb">
                </div>
                
                <div class=" col-md-6 col-lg-4 col-xl-2 pt-3 my-4">
                    <img class = "partner-img" src="../../public/img/partners/tripadvisor.svg" alt="airbnb">
                </div>
                <div class=" col-md-6 col-lg-4 col-xl-2 pt-3 my-4">
                    <img class = "partner-img" src="../../public/img/partners/onefinestay.svg" alt="airbnb">
                </div>
                <div class=" col-md-6 col-lg-4 col-xl-2 pt-3 my-4">
                    <img class = "partner-img" src="../../public/img/partners/bookingcom.svg" alt="airbnb">
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    <!-- end partner platforms -->

    <!-- why localstay -->
    <div class="why-localstay">
      <div class="container">
        <h1 class="display-3 text-center mb-5">Why Localstay</h1>
        <div class="display-4 text-center mb-5">
          Our unique approach smartly balances short, mid and long 
          lettings to deliver superior earnings
        </div>

        <div class="row text-center">
          <div class="col-md-4 my-5">
              <h2>picture</h2>
              <p style = "font-size: 130%">
                International track record of delivering 
                <strong>superior yields</strong> 
              </p>
          </div>

          <div class="col-md-4 my-5">
              <h2>picture</h2>
              <p style = "font-size: 130%">
                <strong>Customised pricing algorithm </strong> 
                based on rich industry data and market expertise
              </p>
          </div>

          <div class="col-md-4 my-5">
              <h2>picture</h2>
              <p style = "font-size: 130%">
                Achieve more 5 star reviews with customised welcome packs and 
                <strong>24/7 guest support</strong> 
              </p>
          </div>
        </div>

        <div class="text-center mt-5">
        <a href="javascript:void(0)" class="btn btn-primary btn-lg">Learn More</a>
        </div>
      </div>
    </div>
    <!-- end why localstay -->
    </div>

</template>

<style>
.home-page-content > div {
  margin-bottom: 120px;
}

.partner-img {
  width: 180px;
  height: 50px;
}
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
