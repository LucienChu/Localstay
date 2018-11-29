<template>
  <!-- top image and text -->
  <div class="template-wrapper">
    <comment-img-overlay
      bgImgUrl="url('/img/bg/3.jpg')"
      bgImgHeight="70vh"
      text=" Localstay provides an easy-to-use, end-to-end service which I found reliable and well-priced.
          I especially loved the design element: At Home, their design studio, was a pleasure to work with.
          They are miles ahead of their competitors.”
        "
      textColor="white"
      textMaxWidth="600px"
      textFooter="a footer"
    />
    <!-- first nav bar -->
    <b-nav class="nav-modify tabs-alt pt-4 mt-3">
      <b-container id="top-navbar-container">
        <b-row class="d-flex justify-content-between mx-auto">
          <b-nav-item
            @click="topNavbarIndex = 0"
            :class="[{'top-navbar-item-selected': topNavbarIndex == 0} ,'col-4 home-block mx-auto text-center']"
          >
            <img src="/img/services/investor.svg" class="home-imgs" alt="Many homes">
            <h5 class="pt-3" title="num-of-property">Many homes</h5>
          </b-nav-item>
          <b-nav-item
            @click="topNavbarIndex = 1"
            :class="[{'top-navbar-item-selected': topNavbarIndex == 1} ,'col-4 home-block mx-auto text-center']"
          >
            <img src="/img/services/landlord.svg" class="home-imgs" alt="a few home">
            <h5 class="pt-3" title="num-of-property">A few homes</h5>
          </b-nav-item>
          <b-nav-item
            @click="topNavbarIndex = 2"
            :class="[{'top-navbar-item-selected': topNavbarIndex == 2} ,'col-4 home-block mx-auto text-center']"
          >
            <img src="/img/services/homeowner.svg" class="home-imgs" alt="one home">
            <h5 class="pt-3" title="num-of-property">One home</h5>
          </b-nav-item>
        </b-row>
      </b-container>
    </b-nav>

    <!-- second nav bar -->
    <b-container fluid style="background: white;">
      <b-nav class="container fluid" role="navigation" id="sub-navbar-container">
        <b-container>
          <b-nav justified tabs class="nav-modify tabs-alt">
            <b-nav-item
              :class="[{'sub-navbar-item-selected': subNavbarIndex == 0}, 'sub-navbar-items col-4']"
              @click="subNavbarIndex = 0"
            >Services &#38; benefits</b-nav-item>
            <b-nav-item
              :class="[{'sub-navbar-item-selected': subNavbarIndex == 1}, 'sub-navbar-items col-4']"
              @click="subNavbarIndex = 1"
            >How it works</b-nav-item>
            <b-nav-item
              :class="[{'sub-navbar-item-selected': subNavbarIndex == 2}, 'sub-navbar-items col-4']"
              @click="subNavbarIndex = 2"
            >Case Studies</b-nav-item>
          </b-nav>
        </b-container>
      </b-nav>
    </b-container>

    <what-we-do-for-investor v-if="topNavbarIndex == 0 && subNavbarIndex == 0"/>
    <what-we-do-for-landlord v-if="topNavbarIndex == 1 && subNavbarIndex == 0"/>
    <what-we-do-for-home-owner v-if="topNavbarIndex == 2 && subNavbarIndex == 0"/>
    <case-study v-if="subNavbarIndex == 2"/>
  </div>
</template>



<style scoped>
@media screen and (max-width: 520px) {
  .owner-description {
    font-size: 1.4rem;
  }
}
/* navbars' css */
#top-navbar-container {
  width: 50%;
}

#sub-navbar-container {
  width: 45%;
}

.sub-navbar-items {
  font-size: 1.1em;
  font-weight: 500;
}
@media screen and (max-width: 768px) {
  #top-navbar-container,
  #sub-navbar-container {
    width: 100%;
  }
}

@media screen and (max-width: 420px) {
  #top-navbar-container,
  #sub-navbar-container {
    padding: 0;
  }

  .sub-navbar-items {
    padding: 0px;
  }
}

.home-imgs {
  width: 8em;
  height: 4.5em;
  width: 100%;
}

[title="num-of-property"] {
  color: lightslategray;
}
.home-block {
  opacity: 0.4;
}

.home-block:hover {
  opacity: 1;
}

.top-navbar-item-selected {
  opacity: 1;
}

.sub-navbar-item-selected {
  border-bottom: 3px solid black;
  opacity: 1;
}
/* end navbars' css */

.article-size {
  font-size: 1.25em;
}

.overlay-img {
  position: absolute;
  top: 30%;
}
</style>

<script>
import whatWeDoForInvestor from "@/components/WhatWeDoForInvestor";
import whatWeDoForLandlord from "@/components/WhatWeDoForLandlord";
import whatWeDoForHomeOwner from "@/components/WhatWeDoForHomeOwner";
import caseStudy from "@/components/CaseStudyCards";
import commentImgOverlay from "@/components/CommentImgOverlay";
export default {
  name: "what-we-do",
  components: {
    "what-we-do-for-investor": whatWeDoForInvestor,
    "what-we-do-for-landlord": whatWeDoForLandlord,
    "what-we-do-for-home-owner": whatWeDoForHomeOwner,
    "case-study": caseStudy,
    "comment-img-overlay": commentImgOverlay
  },
  props: {},
  data: () => {
    return {
      topNavbarIndex: 0,
      subNavbarIndex: 0
    };
  },

  methods: {}
};
</script>


