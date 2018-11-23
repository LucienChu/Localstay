<template>
    <div class="container">
        <div class="row">
          <div class="col" style="padding: 0;">
            <swiper class="comment-swiper-container" :options="swiperWithPagination">
              <swiper-slide v-for = "(comment, id) in comments" :key = "id">
                <div class="container">
                  <div class="row" >
                    <div class="comment-img-div ml-auto col-lg-10 col-md-12">
                      <img :src = "comment.propertyImgUrl" alt="property image">
                    </div>  
                    <div class="comment-card-div col-md-5 col-sm-6">
                      <b-card class="comment-card">
                        <div class="mb-3">
                            <span>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </span>
                        </div>
                        <blockquote class="blockquote mb-0">
                          <p>
                            {{comment.desc}}
                          </p>
                          <footer class="blockquote-footer"><cite>{{comment.propertyOwner}}</cite></footer>
                        </blockquote>
                      </b-card>
                    </div>           
                  </div>
                </div>   
              </swiper-slide>
                            
            <div slot="pagination" class="comment-swiper-pagination swiper-pagination" style=""></div>
          </swiper>
          </div>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    components:{
        "swiper": swiper,
        "swiper-slide": swiperSlide
    },
    data: function(){
        return{
            comments: [
                {
                desc: "through Hostmaker has enabled me to capture more revenue than ever befoure. I can't recommend them enough.", 
                propertyImgUrl: "img/bg/4.jpg",
                propertyOwner: "Mr. A"
                },
                {
                desc: " Hostmaker has enabled me to capture more revenue than ever befoure. I can't recommend them enough.", 
                propertyImgUrl: "img/bg/4.jpg",
                propertyOwner: "Mr. A"
                },
                {
                desc: "through has enabled me to capture more revenue than ever befoure. I can't recommend them enough.", 
                propertyImgUrl: "img/bg/4.jpg",
                propertyOwner: "Mr. A"
                },
            ],
            swiperWithPagination: {
                pagination: {
                el: ".swiper-pagination",
                clickable: true
                },
                autoplay: {
                delay: 2500,
                disableOninteraction: false
                },
                loop: true
            }
        };
    }
}
</script>
<style scoped>
.comment-img-div{
    padding: 0;
}
.comment-card-div {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
}
.comment-card {
  background: gray;
  color: whitesmoke;
}
.comment-swiper-pagination {
  position: static;
}
img{
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 562px) {
  .comment-card-div {
    position: relative;
  }

  .comment-swiper-pagination {
    position: absolute;
    transform: translateY(-350%);
  }
}
</style>

