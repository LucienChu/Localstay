<template>
  <b-container fluid class="template-wrapper pt-4 mt-4">
    <b-container>
      <b-row class="title-row">
        <b-col cols="lg-10 md-12 mx-auto text-center">
          <h3  class="display-4">Where we can help with your property portfolio</h3>
          <services-for-investor
            class="pt-4"
            bs-grid-layout="col-md-4 col-12 mx-auto mb-4"
            :servicesArray="servicesArr"
          />
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid class="artical-section">
      <b-container class="mt-4 py-4">
        <b-row class="mx-auto text-center">
          <h3
            class="py-4 display-4 mx-auto"
            
          >What Localstay does to protect your downside &#38; maximise your returns</h3>
        </b-row>
        <b-row class="d-flex pb-4 mb-4 pt-3 mt-3 img-and-text">
          <b-col cols="md-6 sm-12 mx-auto px-3 py-2" class="order-md-1 order-2">
            <p
              title="artical-intro"
            >Up to 30% more revenues for property portfolios from 10 to 1,000 units</p>
            <h4 class="display-4" title="artical-title">Impeccable listings for maximum visibility</h4>
            <p
              title="artical-body"
            >We create stand-out listings for your property portfolio across 15+ distribution channels, with a mix of expert copywriting, professional photography and smart automations. Our channels include exclusive, premium channels such as Stayy with Hostmaker or Tribute Portfolio Homes, in partnership with Marriott Intenational.</p>
            <h4 class="display-4" title="artical-title">Your dedicated advisor</h4>
            <p
              title="artical-body"
            >Your dedicated advisor assists you every step of the way with expert advice, local knowledge and in-depth insights about the performance of your portfolio. He or she will your single point of contact bringing your whole team at Hostmaker together.</p>
          </b-col>
          <b-col cols="md-6 sm-12 mx-auto px-3 py-2" class="order-md-2 order-1">
            <img src="img/avatars/3.png" class="rounded mx-auto d-block" alt="Picture 1">
          </b-col>
        </b-row>
        <b-row class="py-4 my-4 img-and-text">
          <b-col cols="md-6 sm-12 px-3 py-2">
            <img src="img/avatars/3.png" class="rounded mx-auto d-block" alt="Picture 2">
          </b-col>
          <b-col cols="md-6 sm-12 px-3 py-2">
            <p
              title="artical-intro"
            >Maximise your returns and track your portfolio's performance daily, monthly, yearly</p>
            <h4
              class="display-4"
              title="artical-title"
            >Daily pricing review to maximise your returns</h4>
            <p
              title="artical-body"
            >Our advanced pricing algorithms are tailored to your risk profile and property portfolio, delivering an industry-leading 30% mark-up in returns. They dynamically adjust prices on a daily basis to deliver the best possible RevPAR per unit and overall NOI.</p>
            <h4 class="display-4" title="artical-title">Customised online performance dashboard</h4>
            <p
              title="artical-body"
            >Track your property portfolio's daily, monthly and yearly performance thanks to a powerful, customised online dashboard. Dive into the details of specific units, or have a quick look at your key metrics and performance indicators.</p>
          </b-col>
        </b-row>
        <b-row class="d-flex py-4 my-4 img-and-text">
          <b-col cols="md-6 sm-12 px-3 py-2" class="order-md-1 order-2">
            <p
              title="artical-intro"
            >Better design and happier guests &#38; tenants for better returns</p>
            <h4 class="display-4" title="artical-title">Design studio: At Home with Hostmaker</h4>
            <p
              title="artical-body"
            >Our in-house interior design studio creates unique interiors in a scalable, cost-effective way. From refurbishments to full-on furnishing jobs, At Home with Hostmaker crafts travel-inspired homes to delight guests and tenants alike.</p>
            <h4 class="display-4" title="artical-title">Superior, personal hospitality</h4>
            <p
              title="artical-body"
            >Our hotel-trained operations teams manage reservations, check-ins, housekeeping services and everything in between 24/7, all year round, in 20+ languages. They make sure every stay, however short or long, is a 5-star experience.</p>
            <h4 class="display-4" title="artical-title">Tech-fuelled operations</h4>
            <p
              title="artical-body"
            >Our product and tech teams supercharge each and every part of our operations, from high-end linen logistics all the way to Welcome Wizards (as we call our greeters) routing .</p>
          </b-col>
          <b-col cols="md-6 sm-12 px-3 py-2" class="order-md-2 order-1">
            <img src="img/avatars/3.png" class="rounded mx-auto d-block" alt="Picture 3">
          </b-col>
        </b-row>
        <b-row class="py-4 my-4 img-and-text">
          <b-col cols="md-6 sm-12 px-3 py-2">
            <img src="img/avatars/3.png" class="rounded mx-auto d-block" alt="Picture 4">
          </b-col>
          <b-col cols="md-6 sm-12 px-3 py-2">
            <p title="artical-intro">Property portfolio management &#38; maintenance</p>
            <h4 class="display-4" title="artical-title">End-to-end maintenance of property repairs</h4>
            <p
              title="artical-body"
            >We help property portfolio owners and managers with every maintenance, big and small. On-call specialists are always at the ready, triggered by regular checks from our operations team members as well as our specialised Home Auditors.</p>
            <h4 class="display-4" title="artical-title">Insurance solutions for all types of damages</h4>
            <p
              title="artical-body"
            >We provide AA-rated insurance for public liability and damages to homes specifically covering short, medium and long lets.</p>
            <h4 class="display-4" title="artical-title">Regular home audits</h4>
            <p
              title="artical-body"
            >We provide property portfolio owners and managers with regular audits of the state of their units, including a centralised maintenance management workflow through the performance dashboard.</p>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="other-section">
      <b-container class="mt-4 py-4">
        <b-row class="mx-auto text-center">
          <h3
            class="py-4 display-4 mx-auto"
          >At Home with Localstay: our design studio</h3>
        </b-row>
        <b-row>
          <b-col cols="md-6 sm-12" class="mb-3">
            <b-img src="img/small/1.jpg" fluied alt="place holder" style="height: 100%"/>
          </b-col>
          <b-col cols="md-6 sm-12" class="mb-3">
            <b-row>
              <b-col>
                <b-img src="img/small/2.jpg" fluid alt="place holder2"/>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="pt-4">
                <p>Our skilled team of interior designers will have your home looking impeccable for your guests, encouraging 5-star reviews and a boost in your revenue.</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </b-container>
</template>
<script>
import serviceCardDeck from "@/components/ServiceCardDeck";
export default {
  components: {
    "services-for-investor": serviceCardDeck
  },
  data: function() {
    return {
      servicesArr: [
        {
          imgUrl: "/img/services/prize.svg",
          desc: "A prize image",
          imgSize: "md",
          rawHTML:
            "<p style = 'font-size: 1.2em;'>Put your property in safe hands with our <b>guest vetting</b> team &#38; <b>in-person-check ins</b></p>"
        },
        {
          imgUrl: "/img/services/daily-pricing.svg",
          desc: "A pricing image",
          imgSize: "md",
          rawHTML:
            "<p style = 'font-size: 1.2em;'>Experience superior listings complete with <b>professional photography</b> and copywriting</p>"
        },
        {
          imgUrl: "/img/services/dashboard.svg",
          desc: "A dash board image ",
          imgSize: "md",
          rawHTML:
            "<p style = 'font-size: 1.2em;'>Experience superior listings complete with <b>professional photography</b> and copywriting</p>"
        }
      ]
    };
  }
};
</script>
<style scoped>
.template-wrapper {
  padding: 0;
}
img {
  width: 100% !important;
}

@media screen and (max-width: 768px) {
  .img-and-text {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    padding-top: 0px !important;
    padding-bottom: 1.5em !important;
  }
}

.artical-section {
  background: white;
}
[title="artical-intro"] {
  font-size: 1.1em;
  font-weight: 400;
  opacity: 0.75;
}

[title="artical-title"] {
  font-size: 1.7em;
  font-weight: 400;
}

[title="artical-body"] {
  font-size: 1.3em;
  font-weight: 100;
  line-height: 1.35;
}
</style>

