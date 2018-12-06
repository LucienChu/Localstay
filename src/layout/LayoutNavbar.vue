<template>
  <div class="nav-bar-wrapper container-fluid">
    <!-- top navbar -->
    <b-navbar id="top-nav-bar" toggleable="sm" variant="dark" style="z-index: 20">
      <div class="container">
        <b-dd id="locationDropdownBtn" variant="default" text="Montreal" size="xs">
          <b-dd-item>First Place</b-dd-item>

          <b-dd-item>Second Place</b-dd-item>
        </b-dd>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">{{localEmail}}</b-nav-item>
          <b-nav-item href="#">{{localPhoneNumber}}</b-nav-item>
        </b-navbar-nav>
        <b-navbar-toggle target="navbar-example-1"></b-navbar-toggle>
      </div>
    </b-navbar>
    <!-- end top navbar -->
    <!-- sub navbar -->
    <b-navbar id="sub-nav-bar" toggleable="lg" variant="light" style="z-index: 0">
      <div class="container">
        <!-- Brand -->
        <b-navbar-brand href="/" class="app-brand" id="company-logo">
          <img
            src="/img/logo/localstay-logo.png"
            alt="localstay logo"
            class="app-brand-logo ui-w-120"
          >
        </b-navbar-brand>
        <b-navbar-brand href="/" class="app-brand" id="company-logo-small">
          <img
            src="/img/logo/localstay-logo-small.png"
            alt="localstay logo"
            class="app-brand-logo ui-w-30"
          >
        </b-navbar-brand>
        <!-- / Brand -->
        <div class="ml-auto">
          <b-button id="getStartBtn" variant="primary" size="sm" to="/WhatWeDo">get start</b-button>
          <b-navbar-toggle target="collapse-content">
            <span v-if="collapseShow" class="oi oi-x"></span>
            <span v-else class="oi oi-menu"></span>
          </b-navbar-toggle>
        </div>

        <b-collapse
          is-nav
          id="collapse-content"
          @show="collapseShow = true"
          @hidden="collapseShow = false"
        >
          <b-navbar-nav :class="{'pt-4': collapseShow, 'ml-auto': true}">
            <b-nav-item class="ml-2" to="/WhatWeDo">What We Do</b-nav-item>
            <b-nav-item class="ml-2" to="/Pricing">Pricing</b-nav-item>
            <b-nav-item class="ml-2" to="/WhoWeAre">Who we are</b-nav-item>
          </b-navbar-nav>

          <!-- a btn shown on right hand side when drop down toggle is not shown
          hidden otherwise-->
          <b-button id="getStartBtn1" variant="primary" size="sm" to="/GetStart">get start</b-button>

          <b-navbar-nav v-if="collapseShow" style="height: 100vh;" class="pt-4">
            <b-list-group>
              <b-list-group-item class="px-2 d-flex justify-content-between align-items-center">
                Guest Contact
                <span>{{localPhoneNumber}}</span>
              </b-list-group-item>
              <b-list-group-item class="px-2 d-flex justify-content-between align-items-center">
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
export default {
  name: "app-header",
  data: function() {
    return {
      localEmail: "montreal@localstaty.com",
      localPhoneNumber: "+1 514-123-4567",

      collapseShow: false
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
    sayHi() {
      this.collapseShow = !this.collapseShow;
    }
  }
};
</script>

<style scoped>
/* company logo */
@media screen and (min-width: 769px) {
  #company-logo-small {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  #company-logo {
    display: none;
  }
}

/* end company logo */
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

#getStartBtn {
  margin-right: 0.2em;
}

@media screen and (max-width: 600px) {
  #top-nav-bar {
    display: none;
  }
}

@media screen and (min-width: 990px) {
  #getStartBtn {
    display: none;
  }
}

@media screen and (max-width: 990px) {
  #getStartBtn1 {
    display: none;
  }
  .ml-auto .ml-2 {
    border-bottom: 1px solid lightgray;
  }
}
</style>
