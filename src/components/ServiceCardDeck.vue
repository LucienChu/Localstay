// this component takes an array of objects and user-defined
// bootstrap layout to generate a series of service cards
// prop: 
//   servicesArray => array of objects
//     an object should be in format as 
//     {
//         imgUrl: strValue (image url, ie: "img/services/profile.svg"),
//         imgSize: strValue in ['md' | 'lg'], default is empty indicating 50px by 50px
//         rawHTML: strValue (allow to accept HTML syntax in string value)
//         title: strValue,
//         desc: strValue,
//         routerLink: strValue (ie: rounter link address)
//      }
         
//     depends on situation, only imgUrl and title are required,
//     desc and routerLink could be optional and they should not
//     take place at the same time.

//   bsGridLayout
//     placeholder for bootstrap grid layout format (customizable bootstrap styling)

<template class = "template-wrapper">
  <div class="container">
    <div class="row services-div">
      <div :class="bsGridLayout" v-for="(service, id) in servicesArray" :key="id">
        <div class="mb-3">
          <img
            :src="service.imgUrl"
            :alt="service.desc+' image'"
            :class="['service-img', {'service-img-md' : service.imgSize == 'md'} , {'service-img-lg' : service.imgSize == 'lg'}]"
          >
        </div>
        <div class="col-10 mx-auto" v-if="service.routerLink">
          <router-link :to="service.routerLink">{{service.title}}</router-link>
        </div>
        <div v-else-if="service.rawHTML">
          <span v-html="service.rawHTML"></span>
        </div>
        <div v-else>
          <h3 class="service-title" v-html="service.title"></h3>
          <p class="service-desc" v-html="service.desc"></p>
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
.template-wrapper{
  max-width: 1200px;
}
.service-img {
  width: 50px;
  height: 50px;
}

.service-img-md {
  width: 75px;
  height: 75px;
}

.service-img-lg {
  width: 100px;
  height: 100px;
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


