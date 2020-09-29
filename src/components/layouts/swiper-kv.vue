<template>
  <client-only>
    <VueSlickCarousel v-bind="settings">
      <div>
        <div class="kv1">
          <div class="kv-top1 container mx-auto">
            <h2 class="kv-top1__txt1">厳選した屋根の優良施工店の<br/>一括見積もりで価格を比較！</h2>
            <p class="kv-top1__txt2">お見積は無料で、<br/>ご紹介した施工店への<br class="pc-none" />お断り代行も<br class="pc-none" />無料で承ります。</p>
            <p class="kv__catch"><span class="kv__catch-txt1">工事完成後は</span><span class="kv__catch-txt2">最大<span class="kv__catch-txt4">10</span>万円</span><span class="kv__catch-txt3">キャッシュバック！</span></p>
            <div class="kv-btn-entry">
              <BtnEstL></BtnEstL>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="flex justify-center items-center text-6xl h-full bg-yellow-200">
          <span>KV-2</span>
        </h2>
      </div>
      <div>
        <h2 class="flex justify-center items-center text-6xl h-full bg-green-200">
          <span>KV-3</span>
        </h2>
      </div>
      <template #prevArrow="arrowOption">
        <div class="custom-arrow-kv">
          {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
        </div>
      </template>
      <template #nextArrow="arrowOption">
        <div class="custom-arrow-kv">
          {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
        </div>
      </template>
      <template #customPaging="page">
        <div class="custom-dot-kv">
          {{ page }}
        </div>
      </template>
    </VueSlickCarousel>
  </client-only>
</template>

<script>
import BtnEstL from '~/components/ui/btn-estimation-l'
import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
  BtnEstL,
  VueSlickCarousel
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
      },
    }
  },
}
</script>
<style type="postcss" scoped>
.custom-dot-kv {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #dcd0bc;
  background-color: #fff;
  font-size: 0px;
  margin-top: -40px;
}
.slick-active .custom-dot-kv {
  border-color:#dcd0bc;
  background-color: #224f99;
}
.slick-prev {
  left: 60px;
  z-index: 100;
}
.slick-next {
  right: 60px;
  z-index: 100;
}
.slick-prev::before,
.slick-next::before {
  content: '';
  width: 40px;
  height: 40px;
  display:  block;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: #224f99;
  opacity: 1;
}
.slick-prev::after,
.slick-next::after {
    content:  '';
    width: 12px;
    height: 12px;
    position: absolute;
    top: 14px;
    left:  15px;
    display:  block;
    border-top: solid 4px #fff;
    border-right: solid 4px #fff;
    transform: rotate(-135deg);
}
.slick-next::after {
    left:  12px;
    transform: rotate(45deg);
}

@media screen and (max-width: 767px) {
  .slick-prev::before,
  .slick-next::before {
    content: '';
    width: 24px;
    height: 24px;
  }
  .slick-prev {
    left: 16px;
    bottom: -40px;
    top: auto;
    }
  .slick-next {
    right: 16px;
    bottom: -40px;
    top: auto;
  }
  .slick-prev::after,
  .slick-next::after {
    width: 7px;
    height: 7px;
    top: 8px;
    left: 9px;
    border-top: solid 2px #fff;
    border-right: solid 2px #fff;
  }
  .slick-next::after {
    left: 7px;
  }
}


.kv1 {
  background: url('/img/top/bg_kv_top1@2x.jpg') 0 80% no-repeat;
  background-size: cover;
  padding-bottom: 127px;
  @media (--sp) {
    background: url('/img/top/bg_kv_top1_sp@2x.jpg') 0 100% no-repeat;
    background-size: cover;
    padding-bottom: 64px;
  }
}
.kv-top1 {
  position: relative;
}
.kv-top1__txt1 {
  padding-top: 74px;
  font-size: 48px;
  font-weight: 900;
  line-height: 1.4;
  color: #fff;
  margin-bottom: 25px;
  @media (--sp) {
    padding-top: 35px;
    font-size: 1.75em;
    line-height: 1.6;
  }
}
@media screen and (max-width: 460px) {
  .kv-top1__txt1 {
    font-size: 1.5em;
  }
}

.kv-top1__txt2 {
  font-size: 22px;
  font-weight: 900;
  line-height: 2;
  color: #fff;
  margin-bottom: 43px;
  @media (--sp) {
  font-size: 1.25em;
  line-height: 1.6;
  margin-bottom: 1em;
  }
}
@media screen and (max-width: 460px) {
  .kv-top1__txt2 {
    font-size: 1.125em;
  margin-bottom: 3em;
  }
}

.kv__catch {
  width: 203px;
  height: 203px;
  border-radius: 50%;
  background-color: #224f99 ;
  text-align: center;
  position: absolute;
  top: 61px;
  right: 5%;
  @media (--sp) {
  width: 130px;
  height: 130px;
  top: 125px;
  right: 3%;
  }
}
@media screen and (min-width: 769px) and (max-width: 900px) {
  .kv__catch {
  top: 215px;
  right: 4%;
  }
}
@media screen and (min-width: 615px) and (max-width: 768px) {
  .kv__catch {
  top: 40px;
  right: 19%;
  }
}

.kv__catch-txt1 {
  font-size: 20px;
  font-weight: 900;
  line-height: 1.2;
  color: #fff;
  display: block;
  padding-top: 50px;
  @media (--sp) {
  font-size: 0.875em;
  padding-top: 35px;
  }
}
.kv__catch-txt2 {
  font-size: 29px;
  font-weight: 900;
  line-height: 1.3;
  color: #ffe400;
  display: block;
  @media (--sp) {
  font-size: 1.25em;
  }
}
.kv__catch-txt3 {
  font-size: 18px;
  font-weight: 900;
  line-height: 1.2;
  color: #fff;
  display: block;
  @media (--sp) {
  font-size: 0.75em;
  }
}
.kv__catch-txt4 {
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  font-weight: 900;
  @media (--sp) {
  font-size: 1.425em;
  letter-spacing: -0.05em;
  margin-right: 0.1em;
  }
}
.kv-btn-entry {
  width: 430px;
  @media (--sp) {
    width: 50%;
  }
}
@media screen and (max-width: 460px) {
  .kv-btn-entry {
    width: 96%;
  }
}
</style>
