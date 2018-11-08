<template>
      <nav class="footer bg-footer-theme pt-4 mb-4">
          <h1>NYT, Forbes, Bloomber, BBC, INDEPENTDENT, CNBC 圖片</h1>
        <div class="container text-center py-4">
          <div class="pb-3">
            <a href="javascript:void(0)" class="footer-text text-large font-weight-normal">.bg-footer-theme</a> <span class="align-top">©</span>
          </div>
          <hr class="mb-4">
          <div class="row">
            <div class="col-sm pb-4">
              <div class="footer-text font-weight-bold mb-3 text-large">LOCATIONS</div>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">locations1</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">locations1</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">locations1</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">locations1</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">locations1</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">locations1</a>
              <a href="javascript:void(0)" class="footer-link d-block pb-2 text-large">locations1</a>
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
</template>

<script>
export default {
  name: "app-footer",

  methods: {
    getLayoutFooterBg() {
      return `bg-${this.layoutFooterBg}`;
    }
  }
};
</script>
