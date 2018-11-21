<template>
    <!-- top image and text -->
    <div>
        <!-- <b-card overlay
            img-src="/img/bg/1.jpg"
            img-alt="Card Image"
            title="'Hostmaker provides an easy-to-use, end-to-end service which I found reliable and well-priced. I especially loved the design element: At Home, their design studio, was a pleasure to work with. They are miles ahead of their competitors.'"
            text-variant="white" class="card-modify">
            <p class="card-tex" sytle="margin-right: 20%;">sign</p>
        </b-card> -->
        <div>
            <h1 class="overlay-img"> say something </h1>
            <img src="img/bg/1.jpg" alt="owner">
        </div>
        <!-- first nav bar -->
        <nav role="navigation">
            <b-nav justified class="nav-modify">
                <b-nav-item class="align-self-end mx-auto">
                    <img src="/img/services/investor.svg" class="rounded mx-auto d-block" alt="Many homes">
                    <div>Many homes</div>
                </b-nav-item>
                <b-nav-item class="align-self-end mx-auto">
                    <img src="/img/services/landlord.svg" class="rounded mx-auto d-block" alt="a few home">
                    <div>A few homes</div>
                </b-nav-item>
                <b-nav-item class="align-self-end mx-auto">
                    <img src="/img/services/homeowner.svg" class="rounded mx-auto d-block" alt="one home">
                    <div>One home</div>
                </b-nav-item> 
            </b-nav>
        </nav>
        <!-- second nav bar -->
        <nav class="container-fluid" role="navigation">
            <b-nav justified tabs class="nav-modify">
                <b-nav-item active class="on-active align-self-end ">Services &#38; benefits</b-nav-item>
                <b-nav-item class="on-active align-self-end ">How it works</b-nav-item>
                <b-nav-item class="on-active align-self-end ">Case Studies</b-nav-item>
            </b-nav>
        </nav>
    </div>
</template>

<style>
    .nav-modify {
        margin: 0 30% 0 30%; 
    }

    @media screen and (max-width: 991px){
        .nav-modify {
            margin: 0 20% 0 20%;
        }
    }

    @media screen and (max-width: 765px){
        .nav-modify {
            margin: 0;
        }
    }

    .on-active:active {
        /* background:linear-gradient(to top, black 5%, white 0%); */
        border-bottom-color: black;
        border-bottom-style: solid;
        border-bottom-width: thick;
    }

    .overlay-img {
        position: absolute;
        top: 30%;

    }
</style>

