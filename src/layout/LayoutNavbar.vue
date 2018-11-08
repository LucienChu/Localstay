<template>
  <b-navbar toggleable="lg" :variant="getLayoutNavbarBg()" class="layout-navbar align-items-lg-center container-p-x">

    <!-- Brand -->
    <!-- <b-navbar-brand to="/">LocasStay</b-navbar-brand> -->

    <!-- Sidenav toggle -->
    <b-navbar-nav class="align-items-lg-center mr-auto mr-lg-4" v-if="sidenavToggle">
      <a class="nav-item nav-link px-0 ml-2 ml-lg-0" href="javascript:void(0)" @click="toggleSidenav">
        <i class="ion ion-md-menu text-large align-middle" />
      </a>
    </b-navbar-nav>

    <!-- Navbar toggle -->
    <b-navbar-toggle target="app-layout-navbar"></b-navbar-toggle>

    <!-- top navbar menue -->
    <b-collapse d-flex justfiy-contend-between is-nav>
      <!-- location dropdown -->
      <b-navbar-nav class="align-items-lg-center justify-content-end" >
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
      </b-navbar-nav>
      <!-- end location dropdown -->

      <!-- contact methods -->
      <b-nav class="justify-content-end">
        <b-nav-item><a href = "#">{{localEmail}}</a></b-nav-item>
        <b-nav-item><a href = "#"> {{localPhoneNumber}}</a></b-nav-item>
      </b-nav>
      <!-- end contact methods -->
    </b-collapse>
    <!-- end top navbar menue -->

  </b-navbar>
</template>

<script>
export default {
  name: "app-layout-navbar",
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
