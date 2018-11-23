<template>
    <div class="container">
        <div class="row text-center mx-auto p-0">
            <div class="col-xl-2 col-md-4 col-sm-5 mx-auto pt-3 my-4 partner-img-div">
                <img class = "partner-img" src="../../public/img/partners/airbnb.svg" style = "width: 70%" alt="airbnb">
            </div>
            <div class="col-xl-2 col-md-4 col-sm-5 mx-auto pt-3 my-4 partner-img-div">
                <img class = "partner-img" src="../../public/img/partners/homeaway.svg" style = "width: 70%" alt="airbnb">
            </div>
            
            <div class="col-xl-2 col-md-4 col-sm-5 mx-auto pt-3 my-4 partner-img-div">
                <img class = "partner-img" src="../../public/img/partners/luxuryretreats.svg" style = "width: 70%" alt="airbnb">
            </div>
            
            <div class="col-xl-2 col-md-4 col-sm-5 mx-auto pt-3 my-4 partner-img-div">
                <img class = "partner-img" src="../../public/img/partners/tripadvisor.svg" style = "width: 70%" alt="airbnb">
            </div>
            <div class="col-xl-2 col-md-4 col-sm-5 mx-auto pt-3 my-4 partner-img-div">
                <img class = "partner-img" src="../../public/img/partners/onefinestay.svg" style = "width: 70%" alt="airbnb">
            </div>
            <div class="col-xl-2 col-md-4 col-sm-5 mx-auto pt-3 my-4 partner-img-div">
                <img class = "partner-img" src="../../public/img/partners/bookingcom.svg" style = "width: 70%" alt="airbnb">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    .partner-img {
  width: 180px;
  height: 50px;
}

.partner-img {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

@media screen and (max-width: 576px) {
  .partner-img {
    width: 80px !important;
    height: 50px;
  }
  .partner-img-div {
    width: 140px !important;
    margin: 0 auto !important;
    padding: 0 !important;
  }
}
</style>


