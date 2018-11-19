<template>
  <div class = "narbar-wrapper">

    <!-- top navbar -->
    <b-navbar id = "top-nav-bar" toggleable="sm" variant="dark" style="z-index: 20">
      <div class="container">
        <b-dd id = "locationDropdownBtn" variant="default" text="Montreal" size="xs">
          <b-dd-item>First action</b-dd-item>

          <b-dd-item>Second action</b-dd-item>
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
    <b-navbar id = "sup-nav-bar" toggleable="lg" variant="light" style="z-index: 0">
      <div class="container">
        <b-navbar-nav id = "company-logo" href = "#" class="ml-2">
         LocalStay
        </b-navbar-nav>
        <b-navbar-toggle target="sub-bar-list"></b-navbar-toggle>

        <b-collapse is-nav id="sub-bar-list">
          <b-navbar-nav class = "ml-auto">
            <b-nav-item href="#" active>What we do</b-nav-item>
            <b-nav-item href="#" active>Pricing</b-nav-item>
            <b-nav-item href="#" active>Who we are</b-nav-item>
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
      localPhoneNumber: "+1 514-123-4567"
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
#top-nav-bar {
  height: 20px;
}

.container {
  padding: 0;
}

@media screen and (max-width: 600px) {
  #top-nav-bar {
    display: none;
  }
}
</style>


