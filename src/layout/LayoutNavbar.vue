<template>
  <div>

    <!-- top navbar -->
    <b-navbar id = "top-nav-bar" toggleable="lg" variant="dark" style="z-index: 20">
      <b-dd id = "locationDropdownBtn" variant="default" text="Montreal" :right="isRTL">
            <b-dd-item>First action</b-dd-item>

            <div class="dropdown-toggle">
              <b-dd-item>First menu</b-dd-item>
              <div class="dropdown-menu">
                <b-dd-item>First action</b-dd-item>
                <b-dd-item>Second action</b-dd-item>

                <div class="dropdown-toggle">
                  <b-dd-item>First menu</b-dd-item>
                  <div class="dropdown-menu">
                    <b-dd-item>First action</b-dd-item>
                    <b-dd-item>Second action</b-dd-item>
                  </div>
                </div>
              </div>
            </div>

            <b-dd-item>Second action</b-dd-item>

            <div class="dropdown-toggle">
              <b-dd-item>Second menu</b-dd-item>
              <div class="dropdown-menu">
                <b-dd-item>First action</b-dd-item>
                <b-dd-item>Second action</b-dd-item>
              </div>
            </div>
          </b-dd>
      <b-navbar-toggle target="navbar-example-1"></b-navbar-toggle>

      <b-collapse is-nav id="navbar-example-1">
        <b-navbar-nav class = "ml-auto">
          <b-nav-item><a href = "#">{{localEmail}}</a></b-nav-item>
        <b-nav-item><a href = "#"> {{localPhoneNumber}}</a></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- end top navbar -->

    <!-- sub navbar -->
    <b-navbar id = "sup-nav-bar" toggleable="lg" variant="light" style="z-index: 20">
      <b-navbar-nav>
        <a href = "#">LocalStay</a>
      </b-navbar-nav>
      <b-navbar-toggle target="sub-bar-list"></b-navbar-toggle>

      <b-collapse is-nav id="sub-bar-list">
        <b-navbar-nav class = "ml-auto">
          <b-nav-item href="#" active>What we do</b-nav-item>
          <b-nav-item href="#" active>Pricing</b-nav-item>
          <b-nav-item href="#" active>Who we are</b-nav-item>
          <b-nav-item><a href = "#">Log in</a></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
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
#locationDropdownBtn {
  border: 0;
}
</style>


