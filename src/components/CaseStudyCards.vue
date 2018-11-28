<template>
  <b-container fluid class="template-wrapper">
    <b-container class="template-content-wrapper">
      <h4 class="ui-block-heading">5-star reviews that pay for your next holiday</h4>

      <b-row class="mx-auto">
        <b-col cols="lg-4 md-2 12 mx-auto">
          <b-card
            no-body
            img-top
            :img-src="`${baseUrl}img/bg/2.jpg`"
            img-alt="Card image cap"
            class="mb-3"
          >
            <b-card-body class="card-body">
              <h4 class="card-title small-title">PRICING</h4>
              <b-link to="/">
                <h5 class="link-title">Localstay's Pricing Team Has You Sorted</h5>
              </b-link>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="lg-4 md-2 12 mx-auto">
          <b-card
            no-body
            img-top
            :img-src="`${baseUrl}img/bg/2.jpg`"
            img-alt="Card image cap"
            class="mb-3"
          >
            <b-card-body class="card-body">
              <h4 class="card-title small-title">PRICING</h4>
              <b-link to="/">
                <h5 class="link-title">Localstay's Pricing Team Has You Sorted</h5>
              </b-link>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="lg-4 md-2 12 mx-auto">
          <b-card
            no-body
            img-top
            :img-src="`${baseUrl}img/bg/2.jpg`"
            img-alt="Card image cap"
            class="mb-3"
          >
            <b-card-body class="card-body">
              <h4 class="card-title small-title">PRICING</h4>
              <b-link to="/">
                <h5 class="link-title">Localstay's Pricing Team Has You Sorted</h5>
              </b-link>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
export default {};
</script>
<style scoped>
.template-wrapper {
  padding: 0 !important;
}

.template-content-wrapper {
  width: 90% !important;
  padding: 0;
}
.card-body {
  padding: 1.25rem;
}
.small-title {
  font-weight: 400;
  font-size: 1em;
  opacity: 0.6;
}
.link-title {
  line-height: 1.2;
  font-size: 1.4em;
  color: black;
  font-weight: 500;
  opacity: 0.6;
  margin-bottom: 0px;
}

.link-title:hover {
  font-weight: 800;
}
</style>


