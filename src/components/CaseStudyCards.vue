<template>
  <b-container fluid class="template-wrapper">
    <b-row class="my-4 py-4">
      <h3 class="display-4 mx-auto">5-star reviews that pay for your next holiday</h3>
    </b-row>

    <b-row class="mx-auto card-row pb-4 mb-4">
      <div class = "col-lg-4 col-md-6 mx-auto" v-for = "(imgCard, id) in imgCardArray" :key = "id">
        <b-card
          no-body
          img-top
          :img-src="imgCard.imgSrc"
          img-alt="imgCard.imgAlt"
          class="mb-3"
        >
          <b-card-body class="card-body">
            <h4 class="card-title small-title">{{imgCard.title}}</h4>
            <b-link to="/">
              <h5 class="link-title">{{imgCard.desc}}</h5>
            </b-link>
          </b-card-body>
        </b-card>
      </div>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data: function(){
    return{
      imgCardArray: [
      {
        imgSrc: "/img/bg/2.jpg",
        imgAlt: "A card image",
        linkUrl: "/",
        title: "PRICING",
        desc: "Localstay's Pricing Team Has You Sorted"
      },
      {
        imgSrc: "/img/bg/3.jpg",
        imgAlt: "A card image",
        linkUrl: "/",
        title: "PRICING",
        desc: "Localstay's Pricing Team Has You Sorted"
      },
      {
        imgSrc: "/img/bg/2.jpg",
        imgAlt: "A card image",
        linkUrl: "/",
        title: "PRICING",
        desc: "Localstay's Pricing Team Has You Sorted"
      },
      {
        imgSrc: "/img/bg/2.jpg",
        imgAlt: "A card image",
        linkUrl: "/",
        title: "PRICING",
        desc: "Localstay's Pricing Team Has You Sorted"
      },
      {
        imgSrc: "/img/bg/2.jpg",
        imgAlt: "A card image",
        linkUrl: "/",
        title: "PRICING",
        desc: "Localstay's Pricing Team Has You Sorted"
      },
      {
        imgSrc: "/img/bg/2.jpg",
        imgAlt: "A card image",
        linkUrl: "/",
        title: "PRICING",
        desc: "Localstay's Pricing Team Has You Sorted"
      },
      {
        imgSrc: "/img/bg/2.jpg",
        imgAlt: "A card image",
        linkUrl: "/",
        title: "PRICING",
        desc: "Localstay's Pricing Team Has You Sorted"
      },
      {
        imgSrc: "/img/bg/2.jpg",
        imgAlt: "A card image",
        linkUrl: "/",
        title: "PRICING",
        desc: "Localstay's Pricing Team Has You Sorted"
      },
      {
        imgSrc: "/img/bg/2.jpg",
        imgAlt: "A card image",
        linkUrl: "/",
        title: "PRICING",
        desc: "Localstay's Pricing Team Has You Sorted"
      },
    ]
    };
  }
};
</script>
<style scoped>
.template-wrapper {
  padding: 0 !important;
}
.card-row{
  max-width: 1200px;
}
@media screen and (max-width: 992px){
  .card-row{
    padding: 0 2%;
  }
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


