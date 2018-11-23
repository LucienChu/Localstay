<template>
    <div class="container">
        <div class="row services-div">
            <div class="col-md-3 col-sm-4 col-5 my-4 mx-auto text-center" v-for="(service, id) in services" :key="id">
                <div class="mb-4">
                <img :src="service.imgUrl" :alt="service.desc" class = "service-img">
                </div>
                <h3 class="service-title">
                {{service.title}}
                </h3>
                <p class="service-desc">
                {{service.desc}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      services: [
        {
          imgUrl: "img/services/profile.svg",
          title: "Profile & Listing",
          desc: "Stand-out listings created across all the best channels"
        },
        {
          imgUrl: "img/services/photography.svg",
          title: "Professional photography",
          desc: "Professional photography"
        },
        {
          imgUrl: "img/services/guest-relations.svg",
          title: "Guest Relations",
          desc: "24/7 guest support and callout service"
        },
        {
          imgUrl: "img/services/daily-pricing.svg",
          title: "Daily Pricing",
          desc: "Daily pricing review for yield maximisation"
        },
        {
          imgUrl: "img/services/property-design.svg",
          title: "Interior Design service",
          desc: "Interior Design"
        },
        {
          imgUrl: "img/services/housekeeping.svg",
          title: "Housekeeping",
          desc: "5-star housekeeping and linen"
        },
        {
          imgUrl: "img/services/maintenance.svg",
          title: "Maintenance",
          desc: "Quickly resolving maintenance issues"
        },
        {
          imgUrl: "img/services/key-exchange.svg",
          title: "24/7 Key Exchange",
          desc: "In-person meet & greets, warmly welcoming guests to your home"
        }
      ]
    };
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
    display: inline-block;
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


