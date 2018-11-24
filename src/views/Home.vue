<template>
  <div class="home-page-wrapper">
    <!-- home images swiper -->
    
    <home-page-swiper/>

    <home-page-promotion 
      imgUrl = "/img/promotion/first month rent guarantee.png"
      promotion-title = "We'll guarantee your first month's rent"
      promotion-desc = "We're so confident we can fill your property that we'll guarantee it"
      btn-text = "Please tell me more !"
      btn-router-address = "/WhatWeDo"
      />

    <div class = "coop-partners py-4 my-5">
      <div class="container">
        <div class="row">
          <div class="col-md-10 mx-auto">
            <h1 class="text-center mb-5" title = "section-title">
                Maximising the visiblity of your London listing across channels
            </h1>
            <p class="lead display-5 text-center text-muted p-0 mx-auto my-4">
                Such As Airbnb, Homeaway, Booking.com, Tripadvisor and other leading channels globally
            </p>
          </div>
        </div>
      </div>
      <small-icon-gallery id = "partner-icons-gallery"/>
    </div>
    

    <!-- why localstay -->
    <div class="why-localstay py-4 my-5">
      <div class="container">
        <h1 class="text-center mb-3" title = "section-title">Why Localstay</h1>
        <h5 class="text-center text-muted mb-5">
          Our unique approach smartly balances short, mid and long 
          lettings to deliver superior earnings
        </h5>

        <div class="row text-center">
          <div class="col-md-3 py-4 mx-auto">
              <img src="img/services/prize.svg" alt="service prize image" class = "service-img">
              <p style = "font-size: 130%">
                International track record of delivering 
                <strong>superior yields</strong> 
              </p>
          </div>

          <div class="col-md-3 py-4 mx-auto">
              <img src="img/services/daily-pricing.svg" alt="daily pricing image" class = "service-img">
              <p style = "font-size: 130%">
                <strong>Customised pricing algorithm </strong> 
                based on rich industry data and market expertise
              </p>
          </div>

          <div class="col-md-3 py-4 mx-auto">
              <img src="img/services/star.svg" alt="star image" class = "service-img">
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
    <div class="jumbotron py-4 my-5" style="background: #fafafa">
      <div class="container my-5">
        <div class="row mb-2">
          <div class="col-md-8 col-lg-8 col-xl-6 text-center mx-auto">
            <h1 class="mb-5" title = "section-title">
              Find out what your place could earn
            </h1>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-10 text-center mx-auto">
            <h4 class="">Get an instant estimate of how much your primary home, your secondary residence or one of your properties would earn with our flexible lettings approach. Contact us to get a more accurate estimate by our pricing experts.</h4>
          </div>
        </div>

        <!-- search address form -->
        <div class="row">
            <div class="container">
              <b-form id = "address-form">
                <div class="row">
                  <div id = "left-form" class="col-md-5 col-sm-6 col-10 ml-auto mb-5">
                    <b-form-group id="address"
                                class="mb-5"
                                label="Your property's address"
                                label-for="addressInput">
                      <b-form-input id="addressinput"                                  
                                    required
                                    placeholder="Enter email">
                      </b-form-input>
                    </b-form-group>
                    
                    <b-form-group label="Number of bedrooms" class="my-auto">
                      <b-select value="Studio" :options="['Studio','1','2','3','4+']" />
                    </b-form-group>
                  </div>

                  <div id = "right-form" class="col-md-5 col-sm-6 col-10 mr-auto">
                    <div class="row mb-3">
                      <div class="col">From</div>
                      <div class="col text-right">To</div>
                    </div>
                    <div class="row mb-2">
                      <div class="col ml-auto"> <p class = "display-4">min</p></div>
                      <div class="col text-center"><p class = "display-4">--</p></div>
                      <div class="col mr-auto text-right "><p class = "display-4">max</p></div>
                    </div>
                    <div class="row mb-4">
                      <div class="col text-center">
                        per week
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="get-start-btn col text-center">
                        <a href="#" class="btn btn-primary mx-auto btn-block" style="width: 50%">Get Start</a>
                      </div>
                    </div>
                  </div>
                </div>
              </b-form>
            </div>
        </div>
        <!-- end search address form -->
        <div class="row my-4">
          <div class="col-md-10 col-lg-8 text-center mx-auto d-flex flex-column">
            <h4 class="text-muted">
              Calculations based on comparable listings in the property area, guest capacity, and Hostmaker data and analysis.
            </h4>
          </div>
        </div>
        
      </div>
    </div>
    <!-- end what your home could earn -->
    

    <!-- where are our clients arcoss your area -->
    <div class="container-fluid jumbotron-container py-4 my-4">
      <div class="container">
        <div class="row mb-3">
          <div class="col-md-8 col-lg-10 text-center mx-auto">
            <h1 class="mb-4" title = "section-title">
              Boosting earnings for Hostmaker hosts across Montreal
            </h1>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-10 text-center mx-auto">
            <h4 class = "text-muted">in areas including:</h4>
          </div>
        </div> 

        <div class="row mb-5">
          <div class="col-md-8 mx-auto">
            <b-list-group class="list-group d-flex flex-row flex-wrap ml-5 pl-5" id = "service-area-list">
              <b-list-group-item class = "col-lg-5 col-md-6 col-10 mx-auto col-8" 
                                  v-for = "(area, id) in serviceArea" 
                                  :key="id" 
                                  style="border: none;">
                <i class = "fa fa-map-marker-alt"></i> {{area}}
              </b-list-group-item>
            </b-list-group>
          </div>
          <div class="col-md-6 text-center mx-auto mt-3">
             <h5 class = "text-secondary">and more</h5>
           </div>
        </div>

        <div class="row mb-5">

        </div> 
      </div>
      <div id ="landline-img-div">
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
          <service-card-deck :services-array = services />
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
    <div class="hosts-comments  pt-3 mt-3">
      <div class="container">
        <div class="row">
          <div class="display-4 text-center mb-5 mx-auto" title = "section-title">
            What they are saying about us
          </div>
        </div>
      </div>
      <swiper-comment-over-img :comment-image-array = commentsWithImgs />  
    </div>
    
    <!-- end hosts' comments -->
  </div>

</template>

<style scoped>
.home-page-wrapper > div,
.mb-5 {
  margin-bottom: 10px !important;
}
.home-page-wrapper > div {
  margin-bottom: 120px;
}
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
/* global css */
.home-page-wrapper > div {
  margin-bottom: 120px;
}

/* why localstay css */
.why-localstay img {
  margin-bottom: 1rem;
  width: 50px;
  height: 50px;
}

/* end why localstay css */

/* what you home could earn css */
#left-form {
  border-right: 2px dashed #000000;
}

@media screen and (max-width: 576px) {
  #left-form {
    border-right: none;
    margin: 0 auto;
  }
  #right-form {
    margin: 0 auto;
  }
}
/* end what you home could earn css */

/* service area css */
#landline-img-div {
  position: absolute;
  bottom: 0px;
  width: 25%;
  left: 0px;
}
#landline-img-div img {
  width: 100%;
}
@media screen and (max-width: 768px) {
  #landline-img-div {
    display: none;
  }
}
@media screen and (max-width: 576px) {
  #landline-img-div {
    display: block;
    width: 100%;
    position: relative;
    align-content: center;
  }
  #landline-img-div img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  #service-area-list {
    padding-left: 0 !important;
    margin: 0 auto !important;
  }
}

/* end service area css */
/* our service css */
.service-img {
  width: 50px;
  height: 50px;
}
@media screen and (max-width: 358px) {
  .services-div {
    margin-top: 20px;
    display: inline-block;
  }
  .services-div .text-center {
    padding: 10px 0;
  }

  .service-div .service-title {
    font-size: 1rem !important;
  }
  .service-div p {
    font-size: 0.8rem !important;
  }
}
/* end our service css */
.fixed-text,
.typing {
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
/* end typing animation css */

.jumbotron-container {
  position: relative;
  display: inline-block;
  margin-bottom: 0px !important;
}

.comment-swiper-container {
  position: relative;
}
</style>

<style src="@/vendor/libs/vue-awesome-swiper/vue-awesome-swiper.scss" lang="scss"></style>
<style src = "@/GlobalFontStyle.css"></style>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import homePageSwiper from "@/components/HomePageSwiper";

import homePagePromotion from "@/components/HomePagePromotion";
import smallIconGallery from "@/components/SmallIconGallery";
import serviceCardDeck from "@/components/ServiceCardDeck";
import swiperCommentOverImg from "@/components/SwiperCommentOverImg";
export default {
  name: "home",
  metaInfo: {
    title: "home"
  },
  components: {
    swiper,
    swiperSlide,
    "home-page-swiper": homePageSwiper,
    "home-page-promotion": homePagePromotion,
    "small-icon-gallery": smallIconGallery,
    "service-card-deck": serviceCardDeck,
    "swiper-comment-over-img": swiperCommentOverImg
  },
  data: function() {
    return {
      services: [
        {
          imgUrl: "img/services/profile.svg",
          title: "Profile & Listing",
          desc: "Stand-out listings created across all the best channels"
        },
        {
          imgUrl: "img/services/photography.svg",
          title: "Professional photography",
          desc: "Professional photography",
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

      commentsWithImgs: [
        {
          desc:
            "through Hostmaker has enabled me to capture more revenue than ever befoure. I can't recommend them enough.",
          propertyImgUrl: "img/bg/4.jpg",
          propertyOwner: "Mr. A"
        },
        {
          desc:
            " Hostmaker has enabled me to capture more revenue than ever befoure. I can't recommend them enough.",
          propertyImgUrl: "img/bg/4.jpg",
          propertyOwner: "Mr. A"
        },
        {
          desc:
            "through has enabled me to capture more revenue than ever befoure. I can't recommend them enough.",
          propertyImgUrl: "img/bg/4.jpg",
          propertyOwner: "Mr. A"
        }
      ],
      serviceArea: [
        "CDN/NDG",
        "Griffintown",
        "Le Plateau Mont-Royal",
        "Saint-Laurent",
        "Ville Marie",
        "Westmount"
      ],
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
      landlineSrc: "img/landmarks/london-landmark.svg"
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

