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


</style>
