<template>
  <div class="template-wrapper mt-4 pt-5">
    <b-container fluid class="pt-5">
      <h1 class="text-center">Unlock the potential of your home, your property, or your portfolio.</h1>
      <h3 class="text-center">Opt for the solution that's right for your situation</h3>
      <b-container class="my-5 py-3">
        <b-row class="align-items-center d-flex align-items-center" style="max-wdith: 1200px;">
          <b-col
            class="col-lg-4 col-md-8 mx-auto text-center"
            v-for="(data, id) in price_data"
            :key="id"
          >
            <b-card :title="data.price_title" :sub-title="data.price_sub">
              <b-list-group>
                <b-list-group-item v-for="(content, key) in data.dis" :key="key" class="text-left">
                  <b-row>
                    <b-col cols="auto">
                      <i class="fas fa-check"></i>
                    </b-col>
                    <b-col>{{content}}</b-col>
                  </b-row>
                </b-list-group-item>
              </b-list-group>
              <template v-if="data.hightlight!='no'">
                <div
                  style="padding-bottom: 30px; border-bottom: 1px groove gray; margin-bottom: 30px;"
                >
                  <strong>{{data.hightlight}}</strong>
                </div>
              </template>
              <b-button :class="'btn-'+data.button_class">{{data.button}}</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="wrapper service-wrapper">
      <h1 class="text-center pt-5">All of our plans include…</h1>
      <service-card-deck :servicesArray = servicesArr />
            <b-row>
              <b-col cols = "4" class = "mx-auto text-center">
        <b-link to = "/WhatWeDo" style="font-size: 1.2em;">Read more</b-link>
      </b-col>
      </b-row>
    </b-container>




      <q-and-a-accordion class="wrapper qAndAWrapper" :accordions = accordionArry />
  </div>
</template>
<style>
.wrapper{
  
  padding: 90px 0 60px 0;
}

@media screen and (max-width: 380px){
  .wrapper{
    padding: 60px 0;
  }
}
.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border: none;
}

.card-title {
  color: rgb(111, 199, 206);
  font-weight: bolder;
}
.card-subtitle {
  font-style: italic;
  padding-bottom: 30px;
  border-bottom: 1px groove gray;
  margin-bottom: 30px;
}
.card-coloums.card {
  display: flex;
}
.list-group {
  padding-bottom: 30px;
  border-bottom: 1px groove gray;
  margin-bottom: 30px;
}
.list-group-item {
  border: none;
}

.service-wrapper{
  background: white;
}
</style>

<script>
import serviceCardDeck from "@/components/ServiceCardDeck"
import qAndAAccordion from "@/components/QandAAccordion"
export default {
  components:{
    "service-card-deck": serviceCardDeck,
    "q-and-a-accordion": qAndAAccordion
  },
  data: function() {
    return {
      isVisible0: false,
      price_data: [
        {
          price_title: "FIXED",
          price_sub:
            "Brings you a stable revenue for your property every month",
          dis: [
            "Predictable revenue through mixed mid and long term lettings",
            "Your property is checked more often by experts",
            "No empty months between tenants"
          ],
          hightlight: "Monthly rate agreed upon",
          button_class: "outline-info",
          button: "Choose Fixed"
        },
        {
          price_title: "FLEX",
          price_sub:
            "Maximises your monthly revenue by smartly mixing short, mid and long lets",
          dis: [
            "Up to 30% more revenue",
            "Daily algorithmic pricing",
            "Flexible calendar control over your property",
            "Maximum visibility with 25+ platforms",
            "No lengthy contract commitments"
          ],
          hightlight: "Management fee from 12%",
          button_class: "info",
          button: "Get Start With Flex"
        },
        {
          price_title: "PRO",
          price_sub:
            "Best suited for institutions, family offices, portfolio owners and other real estate pros.",
          dis: [
            "Flexible lettings through a blended-yield model",
            "Tech fuelled pricing algorithms to maximise yields across portfolio",
            "Dedicated Portfolio Manager",
            "Single & multi-city inventory management model",
            "Tailored interior design packages"
          ],
          hightlight: "no",
          button_class: "outline-info",
          button: "Get Start With Flex"
        }
      ],
      servicesArr:[
        {
          imgUrl: "/img/services/profile.svg",
          desc: "Stand-out listings created across all the best channels"
        },
        {
          imgUrl: "/img/services/photography.svg",
          desc: "Professional photography"
        },
        {
          imgUrl: "/img/services/guest-relations.svg",
          desc: "24/7 guest support and callout service"
        },
        {
          imgUrl: "/img/services/daily-pricing.svg",
          desc: "Daily pricing review for yield maximisation"
        },
        {
          imgUrl: "/img/services/property-design.svg",
          desc: "Interior Design service"
        },
        {
          imgUrl: "/img/services/housekeeping.svg",
          desc: "Professional photography"
        },
        {
          imgUrl: "/img/services/maintenance.svg",
          desc: "Quickly resolving maintenance issues"
        },
        {
          imgUrl: "/img/services/key-exchange.svg",
          desc: "In-person meet &#38; greets, warmly welcoming guests to your home"
        },
        
      ],
      accordionArry: [
        {
          visible: true,
          question: "What pricing plan is right for me?",
          answer: `Our 3 Hostmaker pricing plans are designed to answer the needs of every 
                  homeowner thanks to our unique solution of <b>flexible lettings</b>. It all depends 
                  on your preferences, your property and what your financial goals are. 
                  </br>
                  </br>
                  But which is right for you? Let's look at each Hostmaker pricing plan together and 
                  why clients choose Fixed, Flex or Pro: 
                  </br>
                  </br>
                  <ul>
                    <li>
                      The <b>Hostmaker Fixed plan</b> is great for landlords who are chiefly concerned with <b>stable returns</b>. 
                      Typically, we see clients with high-value homes in more central locations preferring this 
                      solution, as it guarantees a high level of guaranteed revenue. This plan is best suited to 
                      specific properties, and our talented account managers can help to understand if this is the 
                      right one for you,
                    </li>
                    <li>
                      The <b>Hostmaker Flex plan</b> is our most popular, and is widely preferred by the majority of our 
                      clients, from single homeowners to multi-property landlords. It's also our original solution, 
                      so we've been doing it for years! Plus, since our management fee is based on how much revenues 
                      we earn for you, you know that we will do our best to maximise your earnings.
                    </li>
                    <li>
                      The <b>Hostmaker Pro plan</b> is our dedicated, turnkey solution for <b>organisations who have large real estate 
                      portfolios</b>, such as institutions, family offices, portfolio owners and managers and other property asset 
                      management firms. For instance, we collaborate with BNP PARIBAS Real Estate and other leaders in the space.
                    </li>
                  </ul>`
        },
        {
          visible: false,
          question: "Can I earn higher returns without the added risk to my property?",
          answer: `Yes you can - and you're not asking too much. At Hostmaker, 
                  we help our hosts to increase returns by up to 30% and have put measures in 
                  place to ensure that only the right kind of guests are welcomed into your home, 
                  helping to minimise any risk of property damage. Our in-house Guest Communications 
                  team vet each guest before confirming their bookings and we require guests to provide 
                  government-verified ID upon arrival. Our Premium hosts can also experience total peace 
                  of mind with AA-rated insurance for public liability and damages to the home, furniture 
                  and fixtures.`
        },
        {
          visible: false,
          question: "Do you work with property investors or portfolio owners and managers?",
          answer: `Yes - we work with a host of real estate professionals, from property investors 
                  and portfolio owners and managers all the way to family offices and institutions! We have 
                  a proven track record of generating above-market yields, all year round, across all of our 
                  markets. With our flexible lettings model, we can provide the right mix of long lets (for safety), 
                  medium lets (for maximising yields in low seasons) and short lets (for maximising yields in high 
                  seasons). If you are a property investor interested in learning more about our services, tell us 
                  about your portfolio and we'll connect you with a <b>dedicated advisor</b> to discuss a specific solution 
                  for your needs.`
        },
        {
          visible: false,
          question: "I'm not sure about the Flex plan, what else do you offer?",
          answer: `No worries! You may be looking for the added security of fixed earnings, and predictable 
                  returns. That's why we also offer a <b>Fixed plan</b> where we fully manage your property and give you 
                  fixed earnings each month. The estimate will depend on your property, but it will always be higher 
                  than a long-term tenant! Get started now by telling us a bit about your property or properties.`
        },
        {
          visible: false,
          question: "Do you only manage within the 90-day regulation for short-lets or can I short-let all year?",
          answer: `You can't short-let all year - but we're creative like that. At Hostmaker, we 
                  focus on increasing your returns by cleverly mixing short and medium term rentals (a 
                  strategy that is perfectly legal). We are able to list directly on the traditional medium 
                  and long-let sites such Zoopla, Rightmove as well as the likes of BridgeStreet and 
                  Spotahome giving your homes the widest distribution possible. Using this strategy, 
                  we can competitively price your property with a combination of short and medium-term 
                  lets to maximise your revenue, all year round, without exceeding the 90 day policy.`
        },
      ]
    };
  }
};
</script>
