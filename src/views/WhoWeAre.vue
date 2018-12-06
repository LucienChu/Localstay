<template class = "template-wrapper">
  <div>
    <!-- image header -->
    <b-container fluid class="header-container mt-5 py-5">
      <b-row style="max-width: 700px; padding-top: 50px;" class="mx-auto">
        <b-col cols="7 mr-auto" class="CEO-dialog">
          <h3 class="display-3">Our Vision is to unlock the potential of every home.</h3>
          <footer>-Nakul Sharma, CEO</footer>
        </b-col>
        <b-col cols="4 ml-auto">
          <img src="img/avatars/2-small.png" alt="CEO image" style="background: cover;">
        </b-col>
      </b-row>
    </b-container>
    <!-- end image header -->
    <!-- business statement -->
    <b-container fluid class="business-statement-container">
      <b-container>
        <b-row>
          <b-col cols="lg-8 md-12 mx-auto paragraph">
            <h3 class="display-4 pb-5 paragraph-title">Taking hospitality to the future</h3>

            <p class="paragraph-body">
              We are excited about unlocking the potential of every home by
              redefining the stay experience - bringing it to life through
              our end-to-end management service that delivers thoughtfully
              designed interiors, smart algorithmic pricing decisions and a
              personal service.
              <br>
              <br>Whether guests are staying for a short break, a long business
              engagement or choose to make one of our our fully-furnished and
              managed properties their home in the city, we aim to deliver
              memorable stays.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <!-- end business statement -->
    <!-- service jumbotron -->
    <b-jumbotron bg-variant="info" text-variant="white" id="company-potential-container">
      <b-container>
        <b-row>
          <b-col
            cols="col-md-3"
            class="mx-auto text-center pt-3 px-2"
            v-for="(potential, id) in potentials"
            :key="id"
          >
            <h3 class="display-3">{{potential.title}}</h3>
            <p>{{potential.desc}}</p>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
    <!-- end service jumbotron -->
    <!-- company gallery -->
    <b-container fluid class="company-gallery">
      <b-container>
        <b-row>
          <b-col cols="md-5 sm-10 ml-auto">
            <figure>
              <img src="/img/avatars/1.png" alt style="width: 100%;">
              <figcaption>asdfodsfijeo</figcaption>
            </figure>
          </b-col>
          <b-col cols="md-5 sm-10 mr-auto">
            <figure>
              <img src="/img/avatars/1.png" alt style="width: 100%;">
              <figcaption>asdfodsfijeo</figcaption>
            </figure>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <!-- company gallery -->
    <!-- city gallery -->
    <b-container fluid class="city-thumbnails-container mt-5 py-5">
      <b-container>
        <b-row>
          <b-col cols="lg-8 md-12 mx-auto paragraph">
            <h3
              class="display-4 pb-5 paragraph-title"
            >Delivering superior yields in every Hostmaker city</h3>

            <p class="paragraph-body">
              Hostmaker is active across 9 cities in 6 countries, globally, and is growing at a rapid rate.
              Our hosts love us for the superior yields that we continue to deliver compared to our competitors,
              which are driven by our proprietary pricing strategy, local market expertise and global industry experience.
              If you are a property investor, a landlord with multiple properties or even a homeowner looking to let your property,
              we have the right solution for you.
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col
            class="col-md-3 col-6 img-thumbnail mb-3"
            v-for="(cityImage, id) in cityImages"
            :key="id"
          >
            <img :src="cityImage.imgUrl" :alt="cityImage.city + 'image'" class="img-fluid">
            <span class="img-thumbnail-content display-4 text-white">London</span>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <!-- end city gallery -->
    <!-- staff gallery -->
    <b-container fluid class="staff-container mt-5 py-5">
      <b-container class="pb-4">
        <b-row class="mb-5">
          <b-col cols="lg-8 md-12 mx-auto paragraph">
            <h3 class="display-4 pb-5 paragraph-title">Meet the flock</h3>

            <p class="paragraph-body">
              At Hostmaker, we pride ourselves on hiring the best and brightest
              pigeons from around the world to make sure we have a terrific team of
              people behind our home rental management services. That’s just one of
              the ways we live up to our award-winning standards!
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="sm-3">
            <div>
              <img src="/img/avatars/1.png" alt="Founder & CEO image" class="CEO-img">
              <p class="CEO-title-below-img mt-4">
                <b>CEO name</b>
                <br>-
                <span class="text-muted">Founder &amp; CEO</span>
              </p>
            </div>
          </b-col>
          <b-col cols="sm-9">
            <p class="CEO-title-on-paragraph">
              <b>CEO name</b> -
              <span class="text-muted">Founder &amp; CEO</span>
            </p>
            <p class="paragraph-body">
              Nakul cut his teeth in international hospitality from the very best global institutions,
              gaining deep experience in yield maximisation at Starwood Hotels &amp; Resorts and then getting a
              bird's eye view of the trends in the hotel industry as part of the commercial strategy team at
              Intercontinental Hotels Group.
              In 2013, Nakul closely followed the significant change in travel trends with travellers choosing
              more unique and adventurous stay experiences in homes over staid hotel offerings. As an Airbnb
              'superhost' and avid traveller himself, Nakul saw the opportunity to bring the best of the two
              worlds together.
              Hostmaker was hatched in 2014 to bring the professionalism, hospitality service values and pricing
              expertise from the five-star international hotel industry to support property owners in making the
              best of their most valuable assets and deliver memorable experiences to their guests.
              Since then, Hostmaker has grown from strength to strength with the most credible investors in the
              hospitality, real estate and technology space backing an award-winning company spread its wings across the globe.
            </p>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="pt-4 mt-4">
        <b-row>
          <b-row>
            <b-col
              class="col-lg-3 col-md-4 col-sm-6 col-12 mx-auto staff-img mb-3"
              v-for="(staffImage, id) in staffImages"
              :key="id"
            >
              <b-card
                img-top
                :img-src="staffImage.imgUrl"
                img-alt="staff image"
                class="staff-card pb-3"
                style="background-color: inherit;"
              >
                <p class="card-text">{{staffImage.staffName}}</p>
                <p class="card-text text-muted small">{{staffImage.staffTitle}}</p>
              </b-card>
            </b-col>
          </b-row>
        </b-row>
      </b-container>
    </b-container>
    <!-- end staff gallery -->
  </div>
</template>
<style scoped>
.header-container {
  height: 50vh;
  background: url("/img/bg/2.jpg") no-repeat;
  background-size: cover;
}
.CEO-dialog .display-3 {
  color: white;
  font-weight: 400;
}
.business-statement-container,
.city-thumbnails-container {
  padding: 100px 0;
  background: white;
}
.paragraph-body {
  line-height: 1.8em;
}
#company-potential-container p {
  font-size: 1.5em;
}
.img-thumbnail-content {
  position: absolute;
  top: 90%;
}
.img-thumbnail,
.staff-img {
  filter: gray;
  -webkit-filter: grayscale(100%);
  -webkit-transition: all 0.5s ease-in-out;
}
.img-thumbnail:hover,
.staff-img:hover {
  filter: none !important;
  -webkit-filter: none !important;
}
.CEO-title-below-img {
  display: none;
}
.CEO-img {
  width: 100%;
}
.staff-card {
  border: none;
}
.card-body {
  padding-left: 0px;
}
@media screen and (max-width: 576px) {
  .header-container {
    height: 40vh;
  }
  .CEO-dialog .display-3 {
    font-size: 2em;
  }
  .business-statement-container {
    padding: 50px 0;
  }
  .paragraph-title {
    font-size: 2em;
    padding-bottom: 5% !important;
  }
  #company-potential-container .display-3 {
    font-size: 2.5em;
  }
  #company-potential-container p {
    font-size: 1em;
  }
  .CEO-img {
    width: 50%;
  }
  .CEO-title-below-img {
    display: block;
  }
  .CEO-title-on-paragraph {
    display: none;
  }
}
</style>

<script>
export default {
  data: function() {
    return {
      potentials: [
        { title: "200+", desc: "People at your service" },
        { title: "300%", desc: "Higher Returns" },
        { title: "6", desc: "Countries" },
        { title: "200+", desc: "5 Star TrustPilot Reviews" }
      ],
      cityImages: [
        { imgUrl: "/img/bg/9.jpg", city: "London" },
        { imgUrl: "/img/bg/9.jpg", city: "London" },
        { imgUrl: "/img/bg/9.jpg", city: "London" },
        { imgUrl: "/img/bg/9.jpg", city: "London" },
        { imgUrl: "/img/bg/9.jpg", city: "London" },
        { imgUrl: "/img/bg/9.jpg", city: "London" },
        { imgUrl: "/img/bg/9.jpg", city: "London" },
        { imgUrl: "/img/bg/9.jpg", city: "London" },
        { imgUrl: "/img/bg/9.jpg", city: "London" },
        { imgUrl: "/img/bg/9.jpg", city: "London" }
      ],
      staffImages: [
        {
          imgUrl: "/img/avatars/3.png",
          staffName: "Staff name",
          staffTitle: "position title"
        },
        {
          imgUrl: "/img/avatars/3.png",
          staffName: "Staff name",
          staffTitle: "position title"
        },
        {
          imgUrl: "/img/avatars/3.png",
          staffName: "Staff name",
          staffTitle: "position title"
        },
        {
          imgUrl: "/img/avatars/3.png",
          staffName: "Staff name",
          staffTitle: "position title"
        },
        {
          imgUrl: "/img/avatars/3.png",
          staffName: "Staff name",
          staffTitle: "position title"
        },
        {
          imgUrl: "/img/avatars/3.png",
          staffName: "Staff name",
          staffTitle: "position title"
        }
      ]
    };
  }
};
</script>