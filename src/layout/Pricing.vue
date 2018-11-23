<template>
    <div>
        <b-container fluid style="margin-top:100px">
            <h1 class="text-center">Unlock the potential of your home, your property, or your portfolio.</h1>
            <h3 class="text-center">Opt for the solution that's right for your situation</h3>
            <b-card-group columns class="text-center">
                <b-card v-for="(data, id) in price_data" :key="id" :title="data.price_title"
                        :sub-title="data.price_sub" class="align-self-center">
                    <b-list-group>
                        <b-list-group-item v-for="(content, key) in data.dis" :key="key" class="text-left">
                            <b-row>
                                <b-col cols="auto"><i class = "fas fa-check"></i></b-col>
                                <b-col>{{content}}</b-col>
                            </b-row>
                        </b-list-group-item>
                    </b-list-group>
                    <template v-if="data.hightlight!='no'">
                        <div style="padding-bottom: 30px; border-bottom: 1px groove gray; margin-bottom: 30px;">
                            <strong>{{data.hightlight}}</strong>
                        </div>
                    </template>
                    <b-button :class= "'btn-'+data.button_class" >{{data.button}}</b-button>
                </b-card>
            </b-card-group>
        </b-container>
        <b-container fluid>
            <h1 class="text-center">All of our plans include…</h1>
            <b-container class="mx-auto" style="margin: 100px 0 20px 0;">
                <b-row>
                    <b-col class="text-center">
                        <img src="/img/services/profile.svg" alt="place holder 1">
                        <p >Stand-out listings created across all the best channels</p>
                    </b-col>
                    <b-col class="text-center">
                        <img src="/img/services/photography.svg" alt="place holder 1">
                        <p >Professional photography</p>
                    </b-col>
                    <b-col class="text-center">
                        <img src="/img/services/guest-relations.svg" alt="place holder 1">
                        <p >24/7 guest support and callout service</p>
                    </b-col>
                    <b-col class="text-center">
                        <img src="/img/services/daily-pricing.svg" alt="place holder 1">
                        <p>Daily pricing review for yield maximisation</p>
                    </b-col>
                    <div class="w-100"></div>
                    <b-col class="text-center">
                        <img src="/img/services/property-design.svg" alt="place holder 1">
                        <p >Interior Design service</p>
                    </b-col>
                    <b-col class="text-center">
                        <img src="/img/services/housekeeping.svg" alt="place holder 1">
                        <p >Professional photography</p>
                    </b-col>
                    <b-col class="text-center">
                        <img src="/img/services/maintenance.svg" alt="place holder 1">
                        <p >Quickly resolving maintenance issues</p>
                    </b-col>
                    <b-col class="text-center">
                        <img src="/img/services/key-exchange.svg" alt="place holder 1">
                        <p>In-person meet &#38; greets, warmly welcoming guests to your home</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="text-center">
                        <b-link to="/WhatWeDo">Read More</b-link>
                    </b-col>
                </b-row>
            </b-container>
        </b-container>

        <b-container>
            <b-nav tabs vertical>
                <b-nav-item v-b-toggle.collapse1>
                    <h3>What pricing plan is right for me?</h3>   
                </b-nav-item>
                <b-collapse id="collapse1">
                    <p>
                        Our three different plans are built so that every homeowner can benefit from flexible lettings. But which is right for you? We look at each Hostmaker plan carefully and why clients prefer Fixed, Flex or Pro, and how it answers their needs.<br>
                        The Hostmaker Fixed plan is great for landlords who are chiefly concerned with stable returns: typically, we see clients with high-value homes in more central locations preferring this solution, as it guarantees a high level of guaranteed revenue. This plan is criteria based on location and property suitability so ask our talented account managers which would best suit.<br>
                        The Hostmaker Flex plan is our most popular, and is adopted by a wide range of landlords and homeowners.<br>
                        The Hostmaker Pro plan is especially crafted for organisations who deal with large real estate portfolios, such as institutions, family offices, portfolio owners and other property asset management firms.
                    </p>
                </b-collapse>
                <b-nav-item v-b-toggle.collapse2>
                    <h3>Can I earn higher returns without the added risk to my property?</h3>   
                </b-nav-item>
                <b-collapse id="collapse2">
                    <p>Yes - we are pros at it! We have a proven track record of generating attractive returns for property investors globally. If you are a property investor interested in learning more about our services,
                    <b-link herf="#">tell us about your portfolio </b-link> 
                    we'll connect you with the right team member to discuss your needs.</p>
                </b-collapse>
                <b-nav-item v-b-toggle.collapse3>
                    <h3>Do you work with property investors?</h3>
                </b-nav-item>
                <b-collapse id="collapse3">
                    <p>Yes - we are pros at it! We have a proven track record of generating attractive returns for property investors globally. If you are a property investor interested in learning more about our services,
                    <b-link herf="#">tell us about your portfolio </b-link> 
                    we'll connect you with the right team member to discuss your needs.</p>
                </b-collapse>
                <b-nav-item v-b-toggle.collapse4>
                    <h3>I'm not convinced with the variable pricing options, what else do you offer?</h3>
                </b-nav-item>
                <b-collapse id="collapse4">
                    <p>Yes - we are pros at it! We have a proven track record of generating attractive returns for property investors globally. If you are a property investor interested in learning more about our services,
                    <b-link herf="#">tell us about your portfolio </b-link> 
                    we'll connect you with the right team member to discuss your needs.</p>
                </b-collapse>
                <b-nav-item v-b-toggle.collapse5>
                    <h3>Do you only manage within the 90-day regulation for short-lets or can I short-let all year?</h3>
                </b-nav-item>
                <b-collapse id="collapse5">
                    <p>Yes - we are pros at it! We have a proven track record of generating attractive returns for property investors globally. If you are a property investor interested in learning more about our services,
                    <b-link herf="#">tell us about your portfolio </b-link> 
                    we'll connect you with the right team member to discuss your needs.</p>
                </b-collapse>
            </b-nav>
        </b-container>
    </div>
</template>
<style>
    .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
        border:none;
    }

    .card-title{
        color: rgb(111, 199, 206);
        font-weight: bolder;
    }
    .card-subtitle{
        font-style:italic;
        padding-bottom: 30px;
        border-bottom: 1px groove gray;
        margin-bottom: 30px;
    }
    .card-coloums.card {
        display:flex;
    }
    .list-group {
        padding-bottom: 30px;
        border-bottom: 1px groove gray;
        margin-bottom: 30px;
    }
    .list-group-item {
        border: none;
    }
</style>

<script>
export default {
    data: function() {
        return {
            price_data: [{
                    price_title: "FIXED",
                    price_sub: "Brings you a stable revenue for your property every month",
                    dis: [
                        "Predictable revenue through mixed mid and long term lettings",
                        "Your property is checked more often by experts",
                        "No empty months between tenants",
                        ],
                    hightlight: "Monthly rate agreed upon",
                    button_class: "outline-info",
                    button: "Choose Fixed",
                },
                {
                    price_title: "FLEX",
                    price_sub: "Maximises your monthly revenue by smartly mixing short, mid and long lets",
                    dis: [
                        "Up to 30% more revenue",
                        "Daily algorithmic pricing",
                        "Flexible calendar control over your property",
                        "Maximum visibility with 25+ platforms",
                        "No lengthy contract commitments",
                        ],
                    hightlight: "Management fee from 12%",
                    button_class: "info",
                    button: "Get Start With Flex",
                },
                {
                    price_title: "PRO",
                    price_sub: "Best suited for institutions, family offices, portfolio owners and other real estate pros.",
                    dis: [
                        "Flexible lettings through a blended-yield model",
                        "Tech fuelled pricing algorithms to maximise yields across portfolio",
                        "Dedicated Portfolio Manager",
                        "Single & multi-city inventory management model",
                        "Tailored interior design packages",
                        ],
                    hightlight: "no",
                    button_class: "outline-info",
                    button: "Get Start With Flex",
                },
                

            ],

            plan: [
                {
                    
                },
            ],
        }
    }
}
</script>
