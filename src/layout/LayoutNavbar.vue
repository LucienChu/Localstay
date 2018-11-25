<template>
  <div class = "nav-bar-wrapper container-fluid">

    <!-- top navbar -->
    <b-navbar id = "top-nav-bar" toggleable="sm" variant="dark" style="z-index: 20">
      <div class="container">
        <b-dd id = "locationDropdownBtn" variant="default" text="Montreal" size="xs">
          <b-dd-item>First Place</b-dd-item>

          <b-dd-item>Second Place</b-dd-item>
        </b-dd>

        <b-navbar-nav class = "ml-auto">
            <b-nav-item href="#">{{localEmail}}</b-nav-item>
            <b-nav-item href="#">{{localPhoneNumber}}</b-nav-item>
          </b-navbar-nav>
        <b-navbar-toggle target="navbar-example-1"></b-navbar-toggle>
        
      </div>
    </b-navbar>
    <!-- end top navbar -->

    <!-- sub navbar -->
    <b-navbar id = "sub-nav-bar" toggleable="lg" variant="light" style="z-index: 0">
      <div class="container">
        <b-navbar-nav id = "company-logo" href = "#" class="ml-2">
         LocalStay
        </b-navbar-nav>
        <div class="ml-auto">
          <b-button id = "getStartBtn" variant = "primary" size = "sm" to = "/WhatWeDo">get start</b-button>
          <b-navbar-toggle target = "collapse-content">
            
            <span v-if = "collapse == true" class = "ion ion-md-close" style = "width: 1.5em; height: 1.5em;"></span>
          </b-navbar-toggle>
        </div>

        <b-collapse is-nav id = "collapse-content" @show = "collapse = !collapse" @hidden = "collapse = !collapse">
          <b-navbar-nav v-if = "!collapse" class = "ml-auto">
            <b-nav-item to="/WhatWeDo">What We Dooo</b-nav-item>
            <!-- <router-link to="/WhatWeDo">What we do</router-link> -->
            <b-nav-item href="#" active>Pricing</b-nav-item>
            <b-nav-item href="#" active>Who we are</b-nav-item>
          </b-navbar-nav>
            <b-button v-if = "!collapse" id = "getStartBtn1" variant = "primary" size = "sm" to = "/WhatWeDo">get start</b-button>

          <b-navbar-nav v-if = "collapse" >
            <service-card-deck bs-grid-layout = "col-4 text-center pt-5"
          :services-array = serviceArray />
            <b-list-group class = "pt-4">
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                Guest Contact
                <span>{{localPhoneNumber}}</span>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                Email
                <span>{{localEmail}}</span>
              </b-list-group-item>
              <b-list-group-item class="mx-auto">
                <b-dd variant="default" text="Montreal" size="sm">
          <b-dd-item>First Place</b-dd-item>

          <b-dd-item>Second Place</b-dd-item>
        </b-dd>
              </b-list-group-item>

            </b-list-group>
          </b-navbar-nav>
          
        </b-collapse>


      </div>
    </b-navbar>
    <!-- end sub navbar -->
  </div>
</template>

<script>
import serviceCardDeck from "@/components/ServiceCardDeck";
export default {
  name: "app-header",
  components:{
    "service-card-deck" : serviceCardDeck,
  },
  data: function() {
    return {
      toggleIcon: "",
      localEmail: "montreal@localstaty.com",
      localPhoneNumber: "+1 514-123-4567",

      collapse: false,
      serviceArray: [
        {
          imgUrl: "/img/services/housekeeping.svg",
          title: "what we do",
          routerLink: "#"
        },
        {
          imgUrl: "/img/services/daily-pricing.svg",
          title: "Pricing",
          routerLink: "#"
        },
        {
          imgUrl: "/img/services/who-we-are.svg",
          title: "who we are",
          routerLink: "#"
        }
      ]
    };
  },
  props: {
    sidenavToggle: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    toggleSidenav() {
      this.layoutHelpers.toggleCollapsed();
    },

    getLayoutNavbarBg() {
      return this.layoutNavbarBg;
    },

  }
};
</script>
<style scoped>
.nav-bar-wrapper {
  position: fixed;
  z-index: 999;
  padding: 0;
}
#top-nav-bar {
  height: 20px;
}

.container {
  padding: 0;
}

#getStartBtn{
  margin-right: 0.2em;
}

@media screen and (max-width: 600px) {
  #top-nav-bar {
    display: none;
  }
}

@media screen and (min-width: 990px){
  #getStartBtn{
    display:none;
  }
}

.navbar-toggle-icon{
  width: 15px !important;
  height: 15px !important;
}

</style>
