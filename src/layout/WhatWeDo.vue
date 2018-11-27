<template>
    <!-- top image and text -->
    <div>
        <div>
            <h1 class="overlay-img"> say something </h1>
            <b-img src="img/bg/1.jpg" fluid alt="owner" />
        </div>
        <!-- first nav bar -->
        <!-- <b-container>
            <b-row class = "d-flex justify-content-between mx-auto">
                <b-col cols="4 text-center" class="home-block">
                    <img src="/img/services/investor.svg" class="home-imgs" alt="Many homes">
                    <h5>Many homes</h5>
                </b-col>
                <b-col cols="4 text-center" class="home-block">
                    <img src="/img/services/landlord.svg" class="home-imgs" alt="a few home">
                    <h5>A few homes</h5>
                </b-col>
                <b-col cols="4 text-center" class="home-block">
                    <img src="/img/services/homeowner.svg" class="home-imgs" alt="one home">
                    <h5>One home</h5>
                </b-col>
            </b-row>
        </b-container> -->

        <b-nav class="pt-4 mt-3">
            <b-container style = "width: 40%;">
            <b-row class = "d-flex justify-content-between mx-auto">
                <b-nav-item class="col-4 home-block mx-auto text-center">
                    <img src="/img/services/investor.svg" class="home-imgs" alt="Many homes">
                    <h5 class = "pt-3" title = "num-of-property">Many homes</h5>
                </b-nav-item>
                <b-nav-item class="col-4 home-block mx-auto text-center">
                    <img src="/img/services/landlord.svg" class="home-imgs" alt="a few home">
                    <h5 class = "pt-3" title = "num-of-property">A few homes</h5>
                </b-nav-item>
                <b-nav-item class="col-4 home-block mx-auto text-center">
                    <img src="/img/services/homeowner.svg" class="home-imgs" alt="one home">
                    <h5 class = "pt-3" title = "num-of-property">One home</h5>
                </b-nav-item>
            </b-row>
        </b-container>
        </b-nav>
        <nav role="navigation">
            <b-container>
                <b-nav justified class="mx-auto">
                    <b-col cols = "4" class = "mx-auto">
                        <b-nav-item>
                            <div>
                                <img src="/img/services/investor.svg" class="rounded mx-auto d-block" alt="Many homes">
                            </div>
                        Many homes
                    </b-nav-item>
                    </b-col>
                    <b-col cols = "4" class = "mx-auto">
                        <b-nav-item>
                        <img src="/img/services/landlord.svg" class="rounded mx-auto d-block" alt="a few home">
                        <div>A few homes</div>
                    </b-nav-item></b-col>
                    
                    <b-col cols = "4" class = "mx-auto">
                        <b-nav-item>
                        <img src="/img/services/homeowner.svg" class="rounded mx-auto d-block" alt="one home">
                        <div>One home</div>
                    </b-nav-item> </b-col>
                    
                </b-nav>
            </b-container>
        </nav>
        <!-- second nav bar -->
        <nav class="container-fluid" role="navigation">
            <b-nav justified tabs class="nav-modify tabs-alt">
                <b-nav-item active class="align-self-end" style="box-shadow: 0 -2px #0E1112 inset">Services &#38; benefits</b-nav-item>
                <b-nav-item class="align-self-end ">How it works</b-nav-item>
                <b-nav-item class="align-self-end ">Case Studies</b-nav-item>
            </b-nav>
        </nav>

        <b-container>
            <b-row>
                <h3 class="mx-auto py-5">What Localstay does to protect your downside &#38; maximise your returns</h3>
            </b-row>
            <b-row  style="margin-bottom: 25px" class = "d-flex">
                <b-col cols="md-6 sm-12 mx-auto" class = "order-md-1 order-2">
                    <p>Up to 30% more revenues for property portfolios from 10 to 1,000 units</p>
                    <h4>Impeccable listings for maximum visibility</h4>
                    <p class="article-size">We create stand-out listings for your property portfolio across 15+ distribution channels, with a mix of expert copywriting, professional photography and smart automations. Our channels include exclusive, premium channels such as Stayy with Hostmaker or Tribute Portfolio Homes, in partnership with Marriott Intenational.</p>
                    <h4>Your dedicated advisor</h4>
                    <p class="article-size">Your dedicated advisor assists you every step of the way with expert advice, local knowledge and in-depth insights about the performance of your portfolio. He or she will your single point of contact bringing your whole team at Hostmaker together.</p></b-col>
                <b-col cols="md-6 sm-12 mx-auto" class = "order-md-2 order-1"><img src="img/avatars/3.png" class="rounded mx-auto d-block" alt="Picture 1"></b-col>
            </b-row>
            <b-row style="margin-bottom: 25px">
                <b-col cols="md-6 sm-12"><img src="img/avatars/3.png" class="rounded mx-auto d-block" alt="Picture 1"></b-col>
                <b-col cols="md-6 sm-12">
                    <p>Maximise your returns and track your portfolio's performance daily, monthly, yearly</p>
                    <h4>Daily pricing review to maximise your returns</h4>
                    <p class="article-size">Our advanced pricing algorithms are tailored to your risk profile and property portfolio, delivering an industry-leading 30% mark-up in returns. They dynamically adjust prices on a daily basis to deliver the best possible RevPAR per unit and overall NOI.</p>
                    <h4>Customised online performance dashboard</h4>
                    <p class="article-size">Track your property portfolio's daily, monthly and yearly performance thanks to a powerful, customised online dashboard. Dive into the details of specific units, or have a quick look at your key metrics and performance indicators.</p></b-col>
            </b-row>
            <b-row style="margin-bottom: 25px" class = "d-flex">
                <b-col cols="md-6 sm-12" class = "order-md-1 order-2">
                    <p>Better design and happier guests &#38; tenants for better returns</p>
                    <h4>Design studio: At Home with Hostmaker</h4>
                    <p class="article-size">Our in-house interior design studio creates unique interiors in a scalable, cost-effective way. From refurbishments to full-on furnishing jobs, At Home with Hostmaker crafts travel-inspired homes to delight guests and tenants alike.</p>
                    <h4>Superior, personal hospitality</h4>
                    <p class="article-size">Our hotel-trained operations teams manage reservations, check-ins, housekeeping services and everything in between 24/7, all year round, in 20+ languages. They make sure every stay, however short or long, is a 5-star experience.</p>
                    <h4>Tech-fuelled operations</h4>
                    <p class="article-size">Our product and tech teams supercharge each and every part of our operations, from high-end linen logistics all the way to Welcome Wizards (as we call our greeters) routing .</p>
                </b-col>
                <b-col cols = "md-6 sm-12" class="order-md-2 order-1"><img src="img/avatars/3.png" class="rounded mx-auto d-block" alt="Picture 1"></b-col>
            </b-row>
            <b-row style="margin-bottom: 25px">
                <b-col cols="md-6 sm-12"><img src="img/avatars/3.png" class="rounded mx-auto d-block" alt="Picture 1"></b-col>
                <b-col>
                    <p>Property portfolio management &#38; maintenance</p>
                    <h4>End-to-end maintenance of property repairs</h4>
                    <p class="article-size">We help property portfolio owners and managers with every maintenance, big and small. On-call specialists are always at the ready, triggered by regular checks from our operations team members as well as our specialised Home Auditors.</p>
                    <h4>Insurance solutions for all types of damages</h4>
                    <p class="article-size">We provide AA-rated insurance for public liability and damages to homes specifically covering short, medium and long lets.</p>
                    <h4>Regular home audits</h4>
                    <p class="article-size">We provide property portfolio owners and managers with regular audits of the state of their units, including a centralised maintenance management workflow through the performance dashboard.</p>
                </b-col>
            </b-row>
        </b-container>

        <b-container>
            <h3 class="text-center">At Home with Localstay: our design studio</h3>
            <b-row>
                <b-col cols = "md-6 sm-12" class="mb-3"><b-img src="img/small/1.jpg" fluied alt="place holder" style="height: 100%"/></b-col>
                <b-col cols = "md-6 sm-12" class="mb-3">
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
    </div>
</template>



<style scoped>
/* img {
  width: 100%;
} */
.article-size {
  font-size: 1.25em;
}

/* first nav bar css */
/* .nav-modify {
  margin: 0 30% 0 30%;
}

@media screen and (max-width: 991px) {
  .nav-modify {
    margin: 0 20% 0 20%;
  }
}

@media screen and (max-width: 765px) {
  .nav-modify {
    margin: 0;
  }
} */
/* first nav bar css */

.home-imgs{
    width: 8em;
    height: 4.5em;
    width: 100%;
}

[title = "num-of-property"]{
    color: lightslategray;
}


[title = "num-of-property"]:focus-within{
    color: red;
}


.home-block{
    opacity: 0.4
}

.home-block:hover,
.home-block:focus-within{
    opacity: 1;
}
.overlay-img {
  position: absolute;
  top: 30%;
}
</style>

<script>
export default {
  name: "what-we-do",

  props: {}
};
</script>


