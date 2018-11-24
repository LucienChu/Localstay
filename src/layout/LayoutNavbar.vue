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
        


        <b-navbar-toggle   target="sub-bar-collapse-show-card"></b-navbar-toggle>

        <b-collapse is-nav id="sub-bar-collapse-show-card">
          <b-navbar-nav class = "ml-auto">
            <b-nav-item to="/WhatWeDo">What We Do</b-nav-item>
            <!-- <router-link to="/WhatWeDo">What we do</router-link> -->
            <b-nav-item to="/Pricing" active>Pricing</b-nav-item>
            <b-nav-item href="#" active>Who we are</b-nav-item>
          </b-navbar-nav>
              <!-- <service-card-deck bs-grid-layout = "col-4 text-center" :services-array = serviceArray /> -->
 
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
      localEmail: "montreal@localstaty.com",
      localPhoneNumber: "+1 514-123-4567",
      serviceArray: [
        {
          imgUrl: "/img/services/housekeeping.svg",
          title: "what we do",
          routerLink: "#"
        },
        {
          imgUrl: "/img/services/housekeeping.svg",
          title: "what we do",
          routerLink: "#"
        },
        {
          imgUrl: "/img/services/housekeeping.svg",
          title: "what we do",
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
    }
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

</style>


