// this component takes an array of objects and user-defined
// bootstrap layout to generate a series of service cards
// prop: 
//   servicesArray => array of objects
//     an object should be in format as 
//     {
//         imgUrl: strValue (image url, ie: "img/services/profile.svg"),
//         title: strValue,
//         desc: strValue,
//         routerLink: strValue (ie: rounter link address)
//      }
         
//     depends on situation, only imgUrl and title are required,
//     desc and routerLink could be optional and they should not
//     take place at the same time.

//   bsGridLayout
//     placeholder for bootstrap grid layout format (customizable bootstrap styling)

<template>
  <div class="container">
    <div class="row services-div">
      <div :class = bsGridLayout v-for="(service, id) in servicesArray" :key="id">
        <div class="mb-3">
        <img :src="service.imgUrl" :alt="service.desc" class = "service-img">
        </div>
        <div class="col-10 mx-auto" v-if = "service.routerLink">
          <router-link :to = "service.routerLink">{{service.title}}</router-link>
        </div>
        <div v-else>
          <h3 class="service-title">
          {{service.title}}
          </h3>
          <p class="service-desc">
          {{service.desc}}
          </p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    bsGridLayout: {
      type: String,
      default: "col-md-3 col-sm-4 col-5 my-4 mx-auto text-center"
    },
    servicesArray: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.service-img {
  width: 50px;
  height: 50px;
}
@media screen and (max-width: 358px) {
  .services-div {
    margin-top: 20px;
    display: flex;
  }
  .services-div .text-center {
    padding: 10px 0;
  }

  .service-div .service-title {
    font-size: 1rem !important;
  }
  .service-div p {
    font-size: 0.8rem !important;
  }
}
</style>


