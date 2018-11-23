<template>
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class = "col-md-6 col-12 text-center ml-auto mb-4">
          <img :src = "imgUrl" style="width:100%;" alt="first month rent guarantee">
        </div>
        <div class = "col-md-6 col-12 text-center mr-auto mb-4">
            <h1 class="mb-5" title = "section-title">
              {{promotionTitle}}
            </h1>
            <h3 class = "mb-5">
              {{promotionDesc}}
            </h3>
            <router-link :to = btnRouterAddress class="btn btn-primary btn-lg">{{btnText}}</router-link>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    promotionTitle: {
      type: String,
      required: true
    },
    promotionDesc: String,
    btnText: {
      type: String,
      required: true
    },
    btnRouterAddress: String
  }
};
</script>
<style scoped>
</style>



