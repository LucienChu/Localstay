<template>
    <div class="container-fluid swiper-wrapper py-4 my-5" style="padding: 0;">
      <div class="container swiper-text-container d-flex flex-column flex-warp">
        <div class="row mb-4 order-1">
          <div class="col-md-12 mx-auto text-center">
            <h1>Award-winning home rental management company in Montreal</h1>
          </div>
        </div>

        <div class="row mb-4 order-md-2 order-sm-3 order-3">
          <div class="col-md-12 mx-auto text-center">
            <h3 class = "text-secondary pt-4" >Increase your returns by 30%</h3>
          </div>
                    <div class="col-md-4 col-sm-10 mx-auto text-center">
            <a href="#" class="mt-2 btn btn-primary btn-lg btn-block">Get Start</a>
          </div>
        </div>

        <div class="row order-md-3 order-sm-2 order-2">
          
          <div class="col-md-3 col-6 ml-auto text-right">
            <a href="#"><h4 style="margin-bottom: 0px;">In partnership with Marriott International</h4></a>
          </div>
          <div class="col-md-3 col-6 mr-auto my-auto" style="border-left: 1px solid white">
            <a href="#"><img src="img/partners/marriott_international_logo.svg" alt=""></a>
          </div>
        </div>

      </div>

      <div class="container-fluid swiper-container">
        <div class="row">
          <swiper :options="swiperWithPagination" autoplay = "true">
            <swiper-slide>
              <img :src="`${baseUrl}img/bg/1.jpg`" alt="" style="width: 100%">         
            </swiper-slide>
            <swiper-slide>
              <img :src="`${baseUrl}img/bg/2.jpg`" alt="" style="width: 100%">         
            </swiper-slide>
            <swiper-slide>
              <img :src="`${baseUrl}img/bg/3.jpg`" alt="" style="width: 100%">         
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination mt-3" style="position: static"></div>
          </swiper>
        </div>
      </div>
    </div>
</template>
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
      swiperWithPagination: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 2500,
          disableOninteraction: false
        }
      }
    };
  }
};
</script>
<style scoped>
.swiper-wrapper {
  position: relative;
}
.swiper-text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  width: 80%;
}
.swiper-text-container h1,
.swiper-text-container h4 {
  color: whitesmoke;
}

@media screen and (max-width: 576px) {
  .swiper-text-container h1,
  .swiper-text-container h3,
  .swiper-text-container h4 {
    margin-bottom: 0;
    text-align: center;
  }
  .swiper-text-container img {
    width: 80%;
  }
  .home-page-wrapper > div {
    margin-bottom: 30px;
  }
}
</style>
