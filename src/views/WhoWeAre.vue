<template class = "template-wrapper">
    <div>
        <!-- image header -->
        <b-container fluid class = "header-container mt-5 py-5">
            <b-row style="max-width: 700px; padding-top: 50px;" class="mx-auto">
                <b-col cols = "7 mr-auto" class = "CEO-dialog">
                    <h3 class="display-3">
                        Our Vision is to unlock the potential of every home.
                    </h3>
                    <footer>-Nakul Sharma, CEO</footer>
                </b-col>
                <b-col cols = "4 ml-auto">
                    <img src="img/avatars/2-small.png" alt="CEO image" style="background: cover;">
                </b-col>
            </b-row>
        </b-container>
        <!-- end image header -->

        <!-- business statement -->
        <b-container fluid class = "business-statement-container">
            <b-container>
                <b-row>
                <b-col cols = "lg-8 md-12 mx-auto">
                    <h3 class="display-4 pb-5">
                        Taking hospitality to the future
                    </h3>

                    <p>
                        We are excited about unlocking the potential of every home by 
                        redefining the stay experience - bringing it to life through 
                        our end-to-end management service that delivers thoughtfully 
                        designed interiors, smart algorithmic pricing decisions and a 
                        personal service.
                        <br/>
                        <br/>
                        Whether guests are staying for a short break, a long business 
                        engagement or choose to make one of our our fully-furnished and 
                        managed properties their home in the city, we aim to deliver 
                        memorable stays.
                    </p>
                </b-col>
            </b-row>
            </b-container>
        </b-container>
        <!-- end business statement -->

        <!-- service jumbotron -->
        <b-jumbotron bg-variant="info" text-variant="white" id="company-potential-container">
            <b-container>
                <b-row>
                    <b-col cols = "col-md-3" class="mx-auto text-center pt-3 px-2" v-for="(potential, id) in potentials" :key="id">
                        <h3 class="display-3">{{potential.title}}</h3>
                        <p>{{potential.desc}}</p>
                    </b-col>
                </b-row>
            </b-container>
        </b-jumbotron>
        <!-- end service jumbotron -->

        <!-- company gallery -->
        <b-container fluid class = "company-gallery">
            <b-container>
                <b-row>
                    <b-col cols = "md-5 sm-10 ml-auto">
                        <figure>
                            <img src="/img/avatars/1.png" alt="" style="width: 100%;">
                            <figcaption>asdfodsfijeo</figcaption>
                        </figure>
                    </b-col>
                    <b-col cols = "md-5 sm-10 mr-auto">
                        <figure>
                            <img src="/img/avatars/1.png" alt="" style="width: 100%;">
                            <figcaption>asdfodsfijeo</figcaption>
                        </figure>
                    </b-col>
                </b-row>
            </b-container>
        </b-container>
        <!-- company gallery -->
    </div>
</template>
<style scoped>
    .header-container{
        height: 50vh;
        background: url('/img/bg/2.jpg') no-repeat; 
        background-size: cover; 
    }
    .CEO-dialog .display-3{
        color: white;
        font-weight: 400
    }


    .business-statement-container{
        padding: 100px 0;
        background:white;
    }

    .business-statement-container p{
        line-height: 1.3em;
    }

    #company-potential-container p{
        font-size: 1.5em;
    }
    @media screen and (max-width: 576px){
        .header-container{
            height: 40vh;
        }
        .CEO-dialog .display-3{
            font-size: 2em;
        }
        .business-statement-container{
            padding: 50px 0;
        }

        .business-statement-container .display-4{
            font-size: 2em;
            padding-bottom: 5% !important;
        }
        #company-potential-container .display-3{
            font-size: 2.5em;
        }
        #company-potential-container p{
            font-size: 1em;
        }
    }
</style>

<script>
export default {
    data: function(){
        return {
            potentials:[
                {title: "200+", desc: "People at your service"},
                {title: "300%", desc: "Higher Returns"},
                {title: "6", desc: "Countries"},
                {title: "200+", desc: "5 Star TrustPilot Reviews"}
            ]
        };
    }
}
</script>

