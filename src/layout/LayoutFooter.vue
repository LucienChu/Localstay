<template>
      <div class="footer-wrapper">
        
        <div class="container-fluid footer-nav">
          <nav class="footer bg-footer-theme pt-4 mb-4">
                          <!-- associated press -->
    <div class="container pt-4">
      <div class="row">
        <div class="col-6 col-lg-4 col-xl-2 pt-3 my-4"><img class = "press-img" src="img/press/bbc.svg" alt="BBC image"></div>
        <div class="col-6 col-lg-4 col-xl-2 pt-3 my-4"><img class = "press-img"  src="img/press/bloomberg.svg" alt="Bloomberg image"></div>
        <div class="col-6 col-lg-4 col-xl-2 pt-3 my-4"><img class = "press-img" src="img/press/cnbc.svg" alt="CNBC image"></div>
        <div class="col-6 col-lg-4 col-xl-2 pt-3 my-4"><img class = "press-img" src="img/press/forbes.svg" alt="forbes image"></div>
        <div class="col-6 col-lg-4 col-xl-2 pt-3 my-4"><img class = "press-img" src="img/press/independent.svg" alt="independent image"></div>
        <div class="col-6 col-lg-4 col-xl-2 pt-3 my-4"><img class = "press-img" src="img/press/newyorktimes.svg" alt="newyorktimes image"></div>
      </div>
    </div>
    <!-- end associated press -->
        <div class="container text-center py-4">
          <div class="pb-3">
            <a href="javascript:void(0)" class="footer-text text-large font-weight-normal">.bg-footer-theme</a> <span class="align-top">©</span>
          </div>
          <hr class="mb-4">
          <div class="row">
            <div class="col-sm pb-4">
              <div class="footer-text font-weight-bold mb-3 text-large">LOCATIONS</div>
              <a v-for="(value, key) in locations" :key="key" :href="value" class="footer-link d-block pb-2 text-large">
                {{key}}
              </a>
            </div>
            <div class="col-sm pb-4">
              <div class="footer-text text-large font-weight-bold mb-3">LOCAL STAY</div>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">Careers</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">Press</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">Blog</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">AtHome With us</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">Stay with us</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">Introduce a host</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">Contact us</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">Profolio</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">FAQ</a>
            </div>
            <div class="col-sm pb-4">
              <div class="footer-text font-weight-bold mb-3 text-large">CONTACT</div>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">montreal@localstay.com`</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">+1 514-123-4567</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">address</a>
              
              <br>
              <div class="footer-text font-weight-bold mb-3 text-large">GUEST CONTACT</div>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">service@localstay.com`</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">+1 514-123-4567</a>
            </div>
          </div>
        </div>
        <h1>地標圖</h1>
      </nav>
        </div>
      </div>
</template>

<script>
export default {
  name: "app-footer",

  data: function() {
    return {
      locations: {
        Montreal: "www.baidu.com",
        Laval: "www.taobao.com",
        Broasa: "www.google.com"
      }
    };
  },

  methods: {
    getLayoutFooterBg() {
      return `bg-${this.layoutFooterBg}`;
    }
  }
};
</script>
<style src = "@/GlobalFontStyle.css"></style>
<style scoped>
.press-img {
  width: 60%;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.footer-nav {
  padding: 0;
}
</style>


