<template lang="pug">
section.comp-case
  div.container.mx-auto
    h2.title--main.type-case ご成約事例
    ul.case-list__wrap
      li.case-list
        img.case-list__img(src="/img/common/img_dummy@2x.png",alt="")
        p.case-list__txt1 価格だけじゃなくこの人なら任せられると思い業者を決めた
        p.case-list__txt2 神奈川県 A様
        .case-list-body2
          p.case-list__txt3.text-center
            span.font-bold.text-lg 200万円
            | の見積もりが...
          p.case-list__txt4.text-center.font-bold.text-lg 140万円に！
          p.case-list__txt5.text-center.font-bold
            span.text-xl 60万円
            | DOWN！
      li.case-list
        img.case-list__img(src="/img/common/img_dummy@2x.png",alt="")
        p.case-list__txt1 価格だけじゃなくこの人なら任せられると思い業者を決めた
        p.case-list__txt2 神奈川県 A様
        .case-list-body2
          p.case-list__txt3.text-center
            span.font-bold.text-lg 200万円
            | の見積もりが...
          p.case-list__txt4.text-center.font-bold.text-lg 140万円に！
          p.case-list__txt5.text-center.font-bold
            span.text-xl 60万円
            | DOWN！
      li.case-list
        img.case-list__img(src="/img/common/img_dummy@2x.png",alt="")
        p.case-list__txt1 価格だけじゃなくこの人なら任せられると思い業者を決めた
        p.case-list__txt2 神奈川県 A様
        .case-list-body2
          p.case-list__txt3.text-center
            span.font-bold.text-lg 200万円
            | の見積もりが...
          p.case-list__txt4.text-center.font-bold.text-lg 140万円に！
          p.case-list__txt5.text-center.font-bold
            span.text-xl 60万円
            | DOWN！
      li.case-list
        img.case-list__img(src="/img/common/img_dummy@2x.png",alt="")
        p.case-list__txt1 価格だけじゃなくこの人なら任せられると思い業者を決めた
        p.case-list__txt2 神奈川県 A様
        .case-list-body2
          p.case-list__txt3.text-center
            span.font-bold.text-lg 200万円
            | の見積もりが...
          p.case-list__txt4.text-center.font-bold.text-lg 140万円に！
          p.case-list__txt5.text-center.font-bold
            span.text-xl 60万円
            | DOWN！
</template>

<script>
// export default {
//   data() {
//     return {
//       swiperOption: {
//         loop: true, //無限ループ
//         effect: 'fade', //切り替えをフェードに
//         pagination: { //ページネーション設定
//           el: '.swiper-pagination',
//           clickable: true
//         },
//         navigation: { //前へ・次へのナビ設定
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev'
//         }
//       }
//     }
//   }
// }
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>

<style type="postcss" scoped>
.comp-case {
  padding-top:72px;
  padding-bottom: 72px;
  background-color: #fff;
  @media (--sp) {
    padding-top:40px;
    padding-bottom: 40px;
  }
}
.case-list__wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.case-list__wrap .case-list:last-child {
  margin-right: 0;
}
.case-list__wrap .case-list:nth-child(2n) {
  @media (--sp) {
  margin-right: 0;
  }
}
.case-list {
  display: flex;
  width: 23%;
  border: 2px solid #e8e8e8;
  border-radius: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  @media (--sp) {
  width: 48%;
  margin-bottom: 1rem;
  }
}
@media screen and (max-width: 350px) {
  .case-list {
    width: 100%;
  }
}

/* .case-list__anchor {
  display: flex;
} */
.case-list__img{
  width: 100%;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 1px solid #e8e8e8;
  align-self: flex-start;
}
.case-list-body2 {
  width: 100%;
  padding: 1em;
}

.case-list__txt1 {
  width: 100%;
  padding: 1rem;
  margin-bottom: 0;
}
.case-list__txt2 {
  width: 100%;
  padding: 0 1rem 1rem;
  font-size: 0.875em;
  margin-top: auto;
  /* border-bottom: 1px solid #ececec; */
}
.case-list__txt2::after {
  content:'';
  display: block;
  width: 100%;
  height: 1px;
  background-color: #ececec;
  margin: 1rem auto 0;
}
.case-list__txt3 {
  width: 100%;
  padding-bottom: 1.6rem;
  position: relative;
}
.case-list__txt3::after {
  content: '';
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  margin-left: -9px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7px 9px 0 9px;
  border-color: #224f99 transparent transparent transparent;
}
.case-list__txt4 {
  width: 100%;
  margin-bottom: 0.75rem;
}
.case-list__txt5 {
  width: 100%;
  color: #d50000;
  background-color: #ffebeb;
  border-radius: 10px;
  padding: 0.45rem 0.5rem;
}
</style>
