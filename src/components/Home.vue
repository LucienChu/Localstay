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


      <!-- end first month guarantee -->

    <!-- partner platforms -->
      <div class = "coop-partners">
        <div class="container-fluid">
          <div class="row">
            <div class="container">
              <h1 class="display-3 text-center mb-5">
              Maximising the visiblity of your London listing across channels
            </h1>
            <p class="lead display-5 col-md-10 col-lg-8 text-center text-muted p-0 mx-auto my-4">
              Such As Airbnb, Homeaway, Booking.com, Tripadvisor and other leading channels globally
            </p>
            </div>
          </div><br><br>
          <div class="row">
            <div class="container">
              <div class="row text-center p-0 mx-auto">
                <div class=" col-md-6 col-lg-4 col-xl-2 pt-3 my-4">
                    <img class = "partner-img" src="../../public/img/partners/airbnb.svg" style = "width: 90%" alt="airbnb">
                </div>
                <div class=" col-md-6 col-lg-4 col-xl-2 pt-3 my-4">
                    <img class = "partner-img" src="../../public/img/partners/homeaway.svg" style = "width: 90%" alt="airbnb">
                </div>
                
                <div class=" col-md-6 col-lg-4 col-xl-2 pt-3 my-4">
                    <img class = "partner-img" src="../../public/img/partners/luxuryretreats.svg" style = "width: 90%" alt="airbnb">
                </div>
                
                <div class=" col-md-6 col-lg-4 col-xl-2 pt-3 my-4">
                    <img class = "partner-img" src="../../public/img/partners/tripadvisor.svg" style = "width: 90%" alt="airbnb">
                </div>
                <div class=" col-md-6 col-lg-4 col-xl-2 pt-3 my-4">
                    <img class = "partner-img" src="../../public/img/partners/onefinestay.svg" style = "width: 90%" alt="airbnb">
                </div>
                <div class=" col-md-6 col-lg-4 col-xl-2 pt-3 my-4">
                    <img class = "partner-img" src="../../public/img/partners/bookingcom.svg" style = "width: 90%" alt="airbnb">
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
      </div>
    </div>
    <!-- end why localstay -->

    <!-- see what your home could earn -->
    <div class="jumbotron">
      <div class="container my-5">
        <div class="row mb-5">
          <div class="col-md-8 col-lg-8 col-xl-6 text-center mx-auto">
            <h1 class="display-4 mb-5">
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
    <div class="jumbotron" style = "margin: 0">
      <div class="container my-5">
        <div class="row mb-3">
          <div class="col-md-8 col-lg-8 col-xl-6 text-center mx-auto">
            <h1 class="display-4 mb-4">
              Boosting earnings for Hostmaker hosts across London
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
              <b-list-group-item class = "col-lg-6">
                kk
              </b-list-group-item>
              <b-list-group-item class = "col-lg-6">
                kk
              </b-list-group-item>
              <b-list-group-item class = "col-lg-6">
                kk
              </b-list-group-item>
              <b-list-group-item class = "col-lg-6">
                kk
              </b-list-group-item>
              <b-list-group-item class = "col-lg-6">
                kk
              </b-list-group-item>
            </b-list-group>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-md-10 text-center mx-auto">
            <h5>and more</h5>
          </div>
        </div> 
      </div>
    </div>
    <!-- end where are our clients arcoss your area -->
  </div>

</template>

<style scoped>
.home-page-content > div {
  margin-bottom: 120px;
}

.partner-img {
  width: 180px;
  height: 50px;
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
