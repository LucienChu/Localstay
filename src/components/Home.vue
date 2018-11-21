<template>
  <div class="home-page-wrapper">
    <!-- home images swiper -->
    
    <div class="container-fluid swiper-wrapper py-4 my-5" style="padding: 0;">
      <!-- text content -->
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
    <!-- end home images swiper -->

    <!-- first month guarantee -->
    <div class="container" id = "first-month-rent-guarantee py-4 my-5">
      <div class="row d-flex align-items-center" align-content-center>
        <div class = "col-lg-4 col-md-12 text-center ml-auto mb-4" id="first-month-rent-guarantee-image">
          <img src="../../public/img/promotion/first month rent guarantee.png" style="width:100%;" alt="first month rent guarantee">
        </div>
        <div class="col-lg-4 col-md-12 text-center mr-auto mb-4">
            <h1 class="display-3 mb-5" title = "section-title">
              We'll guarantee your first month's rent
            </h1>
            <h3 class = "display-4">
              We're so confident we can fill your property that we'll guarantee it
            </h3>
            <a href="#" class="btn btn-primary btn-lg">Please, tell me more!</a>
          </div>
      </div>
    </div>
    <!-- end first month guarantee -->

    <!-- partner platforms -->
    <div class = "coop-partners py-4 my-5">
      <div class="container-fluid">
        <div class="row">
          <div class="container">
            <h1 class="display-3 text-center mb-5" title = "section-title">
            Maximising the visiblity of your London listing across channels
          </h1>
          <p class="lead display-5 col-md-10 col-lg-8 text-center text-muted p-0 mx-auto my-4">
            Such As Airbnb, Homeaway, Booking.com, Tripadvisor and other leading channels globally
          </p>
          </div>
        </div><br><br>
        <div class="row">
          <div class="container">
            <div class="row text-center mx-auto p-0">
              <div class="col-xl-2 col-md-4 col-sm-5 mx-auto pt-3 my-4 partner-img-div">
                  <img class = "partner-img" src="../../public/img/partners/airbnb.svg" style = "width: 70%" alt="airbnb">
              </div>
              <div class="col-xl-2 col-md-4 col-sm-5 mx-auto pt-3 my-4 partner-img-div">
                  <img class = "partner-img" src="../../public/img/partners/homeaway.svg" style = "width: 70%" alt="airbnb">
              </div>
              
              <div class="col-xl-2 col-md-4 col-sm-5 mx-auto pt-3 my-4 partner-img-div">
                  <img class = "partner-img" src="../../public/img/partners/luxuryretreats.svg" style = "width: 70%" alt="airbnb">
              </div>
              
              <div class="col-xl-2 col-md-4 col-sm-5 mx-auto pt-3 my-4 partner-img-div">
                  <img class = "partner-img" src="../../public/img/partners/tripadvisor.svg" style = "width: 70%" alt="airbnb">
              </div>
              <div class="col-xl-2 col-md-4 col-sm-5 mx-auto pt-3 my-4 partner-img-div">
                  <img class = "partner-img" src="../../public/img/partners/onefinestay.svg" style = "width: 70%" alt="airbnb">
              </div>
              <div class="col-xl-2 col-md-4 col-sm-5 mx-auto pt-3 my-4 partner-img-div">
                  <img class = "partner-img" src="../../public/img/partners/bookingcom.svg" style = "width: 70%" alt="airbnb">
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    <!-- end partner platforms -->

    <!-- why localstay -->
    <div class="why-localstay py-4 my-5">
      <div class="container">
        <h2 class="display-3 text-center mb-4" title = "section-title">Why Localstay</h2>
        <h5 class="display-4 text-center mb-5">
          Our unique approach smartly balances short, mid and long 
          lettings to deliver superior earnings
        </h5>

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
      </div>
    </div>
    <!-- end why localstay -->

    <!-- see what your home could earn -->
    <div class="jumbotron py-4 my-5">
      <div class="container my-5">
        <div class="row mb-5">
          <div class="col-md-8 col-lg-8 col-xl-6 text-center mx-auto">
            <h1 class="display-4 mb-5" title = "section-title">
              Find out what your place could earn
            </h1>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-10 text-center mx-auto">
            <h4 class="">Get an instant estimate of how much your primary home, your secondary residence or one of your properties would earn with our flexible lettings approach. Contact us to get a more accurate estimate by our pricing experts.</h4>
          </div>
        </div>
        <div class="row mb-5">
            <div class="container property-search-div py-5" style="background: white; width: 80%">
              <div class="row">
                <div class="col-md-5 ml-auto mr-auto">
                  <b-form-group label="Your property's address" class="">
                    <b-input placeholder="Search you property here" />
                  </b-form-group>
                  <b-form-group label="Number of bedrooms" class="">
                    <b-select value="Studio" :options="['Studio','1','2','3','4+']" />
                  </b-form-group>
                </div>
                <div class="col-md-5 ml-auto mr-auto">
                  <div class="container d-flex flex-column" style="">
                    <div class="row mb-3">
                      <div class="col">From</div>
                      <div class="col text-right">To</div>
                    </div>
                    <div class="row mb-3">
                      <div class="col ml-auto"> <p class = "display-4">min</p></div>
                      <div class="col text-center"><p class = "display-4">--</p></div>
                      <div class="col mr-auto text-right "><p class = "display-4">max</p></div>
                    </div>
                    <div class="row mb-3">
                      <div class="col text-center">
                        per week
                      </div>
                    </div>
                  </div>
                  <div class="get-start-btn text-center">
                    <a href="#" class="btn btn-primary" style="width: 80%">Get Start</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-10 col-lg-8 text-center mx-auto">
            <h4 class="text-muted">
              Calculations based on comparable listings in the property area, guest capacity, and Hostmaker data and analysis.
            </h4>
          </div>
        </div>
        
      </div>
    </div>
    <!-- end what your home could earn -->
    

    <!-- where are our clients arcoss your area -->
    <div class="container-fluid jumbotron-container py-4 my-5">
      <div class="container my-5">
        <div class="row mb-3">
          <div class="col-md-8 col-lg-8 col-xl-6 text-center mx-auto">
            <h1 class="display-4 mb-4" title = "section-title">
              Boosting earnings for Hostmaker hosts across Montreal
            </h1>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-10 text-center mx-auto">
            <h4>in areas including:</h4>
          </div>
        </div> 

        <div class="row mb-5">
          <div class="col-md-8 mx-auto">
            <b-list-group class="list-group d-flex flex-row flex-wrap">
              <b-list-group-item class = "col-lg-5">
                <span><i class = "fa fa-map-marker-alt"></i></span> not show
              </b-list-group-item>
              <b-list-group-item class = "col-lg-5">
                kk
              </b-list-group-item>
              <b-list-group-item class = "col-lg-5">
                kk
              </b-list-group-item>
              <b-list-group-item class = "col-lg-5">
                kk
              </b-list-group-item>
              <b-list-group-item class = "col-lg-5">
                kk
              </b-list-group-item>
            </b-list-group>
            <i class="fas fa-pencil" title="Edit"></i> 
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-md-10 text-center mx-auto">
            <h5>and more</h5>
          </div>
        </div> 
      </div>
      <div class="landline-img-div">
        <img :src="landlineSrc" alt="Montreal Landline" class="landline">
      </div>
    </div>
    <!-- end where are our clients arcoss your area -->

    <div class="mt-5"></div>
    <!-- house keeping services -->
    <div class="everything-is-taken-care py-4 my-5">
      <div class="container">
        <div class="row">
          <div class="display-4 text-center mb-5 mx-auto" title = "section-title">
          Everything is taken care of
        </div>
        </div>

      <div class="row text-center">
          <div class="col-md-3 my-5 text-center" v-for="(service, id) in services" :key="id">
              <div class="container align-content-center mb-4">
                <img :src="service.imgUrl" :alt="service.desc">
              </div>
              <h3>
                {{service.title}}
              </h3>
              <p style = "font-size: 130%">
                {{service.desc}}
              </p>
          </div>
        </div>

      </div>

      <div class="row mt-5">
        <div class="col-md-2 mx-auto text-center">
          <a href="#" class = "btn btn-primary text-large">Learn more</a>
        </div>
      </div>
    </div>
    <!-- end house keeping services -->

    <!-- text animation -->
    <div class= "container-fluid text-animation-container py-4 my-5" style="background: aqua;">
      <div class="row py-4 text-center d-flex">
        <div class="animate-text-head-div col-xl-2 col-lg-12 col-md-12 ml-auto my-auto text-right text-white">
          <h1 class="fixed-text">{{animateStrTitle}}</h1>
        </div>
        <div class="animate-text-tail-div  mr-auto text-center">
          <vue-typed-js :strings = animateStrs 
                        :loop = "true"
                        :smartBackspace = "true"
                        :typeSpeed = "100"
                        :backDelay = "500"
                        :backSpeed = "50"
                        :startDelay = "1000"
                        :cursorChar = "'|'"
                        @preStringTyped = "getNextTitle()">
            <h1 class = "typing my-auto" style="display: inline-block"></h1>
          </vue-typed-js>
        </div>
      </div>

    </div>
    <!-- end text animation -->

    <!-- hosts' comments -->
    <div class="hosts-comments  py-4 my-5">
      <div class="container">
        <div class="row">
          <div class="display-4 text-center mb-5 mx-auto" title = "section-title">
            What they are saying about us
          </div>
        </div>
        <div class="row">
          <div class="col" style="padding: 0;">
            <swiper class="comment-swiper-container" :options="swiperWithPagination">
              <swiper-slide>
                <div class="container">
                  <div class="row">
                    <div class="comment-img-div ml-auto col-lg-10 col-md-12" style="padding: 0;">
                      <img src="img/bg/4.jpg" alt="background img" style="width: 100%; height: 100%;">
                    </div>  
                    <div class="comment-card-div col-md-5 col-sm-6">
                      <b-card class="comment-card">
                        <div class="mb-3">
                            <span>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </span>
                        </div>
                        <blockquote class="blockquote mb-0">
                          <p>
                            "Hosting through Hostmaker has enabled me to capture more revenue than ever befoure. I can't recommend them enough."
                          </p>
                          <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                      </b-card>
                    </div>           
                  </div>
                </div>   
              </swiper-slide>
                            
            <div slot="pagination" class="comment-swiper-pagination swiper-pagination" style=""></div>
          </swiper>
          </div>
        </div>
      </div>
    </div>
    
    <!-- end hosts' comments -->
  </div>

</template>

<style scoped>
/* global css */
.home-page-wrapper > div {
  margin-bottom: 120px;
}

@media screen and (max-width: 520px) {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .display-1,
  .display-2,
  .display-3,
  .display-4 {
    font-size: 1em;
  }
  [title = "section-title"]{
    font-size: 1.4em;
    font-weight: 400;
  }

  .home-page-wrapper > div,
  .mb-5 {
    margin-bottom: 10px !important;
  }
}
/* end global css */

/* swiper-wrapper css */
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
.swiper-text-container h4  {
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
/* end swiper-wrapper css */

/* partner platform css */
.partner-img {
  width: 180px;
  height: 50px;
}

.partner-img {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

@media screen and (max-width: 576px) {
  .partner-img {
    width: 80px !important;
    height: 50px;
  }
  .partner-img-div {
    width: 140px !important;
    margin: 0 auto !important;
    padding: 0 !important;
  }
}

/* end partner platform css */

.fixed-text, .typing{
  margin-bottom: 0;
}
@media screen and (max-width: 1200px) {
  .animate-text-head-div,
  .animate-text-tail-div {
    text-align: center !important;
    margin: 0 auto !important;
  }
  .animate-text-tail-div .typing {
    margin-bottom: 0px;
  }
}

@media screen and (max-width: 576px) {
  .animate-text-head-div,
  .animate-text-tail-div {
    padding: 0px !important;
  }
}

.jumbotron-container {
  position: relative;
  display: inline-block;
  margin-bottom: 0px !important;
}
.landline-img-div {
  position: absolute;
  bottom: 0px;
  width: 25%;
  left: 0px;
}
.landline-img-div img {
  width: 100%;
}
@media screen and (max-width: 800px) {
  .landline-img-div {
    width: auto;
    position: relative;
    align-content: center;
  }
  .landline-img-div img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}

.comment-swiper-container {
  position: relative;
}

/* host comment section css */
.comment-card-div {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
}
.comment-card {
  background: gray;
  color: whitesmoke;
}
.comment-swiper-pagination {
  position: static;
}

@media screen and (max-width: 562px) {
  .comment-card-div {
    position: relative;
  }

  .comment-swiper-pagination {
    position: absolute;
    transform: translateY(-350%);
  }
}
/* host comment section css */
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
      currentTextId: 0,
      textArray: [
        { fixed: "200,000", typing: "guests welcomed" },
        {
          fixed: "$25,200",
          typing:
            "average yearly revenue for 1-bed apartment in central Montreal"
        },
        { fixed: "$50M", typing: "profits delivered to hosts" }
      ],
      animateStrTitle: "",
      animateStrs: [],
      landlineSrc: "img/avatars/1.png",
      services: [
        {
          imgUrl: "img/services/profile.svg",
          title: "Profile & Listing",
          desc: "Stand-out listings created across all the best channels"
        },
        {
          imgUrl: "img/services/photography.svg",
          title: "Professional photography",
          desc: "Professional photography"
        },
        {
          imgUrl: "img/services/guest-relations.svg",
          title: "Guest Relations",
          desc: "24/7 guest support and callout service"
        },
        {
          imgUrl: "img/services/daily-pricing.svg",
          title: "Daily Pricing",
          desc: "Daily pricing review for yield maximisation"
        },
        {
          imgUrl: "img/services/property-design.svg",
          title: "Interior Design service",
          desc: "Interior Design"
        },
        {
          imgUrl: "img/services/housekeeping.svg",
          title: "Housekeeping",
          desc: "5-star housekeeping and linen"
        },
        {
          imgUrl: "img/services/maintenance.svg",
          title: "Maintenance",
          desc: "Quickly resolving maintenance issues"
        },
        {
          imgUrl: "img/services/key-exchange.svg",
          title: "24/7 Key Exchange",
          desc: "In-person meet & greets, warmly welcoming guests to your home"
        }
      ],
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
  },
  methods: {
    getNextTitle: function() {
      this.currentTextId = (this.currentTextId + 1) % this.textArray.length;
      this.animateStrTitle = this.textArray[this.currentTextId].fixed;
    }
  },
  created: function() {
    let size = this.textArray.length;
    this.currentTextId = size - 1;
    let strArray = [];
    for (let i = 0; i < size; i++) {
      strArray.push(this.textArray[i].typing);
    }
    this.animateStrs = strArray;
    this.animateStrTitle = this.textArray[0].fixed;
  }
};
</script>