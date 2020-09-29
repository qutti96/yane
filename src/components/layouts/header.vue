<template>
<header class="header" id="page-top">
  <div class="container mx-auto">
    <div class="header__wrap">
      <div class="header-logo__wrap1">
        <a class="header__logo" href="/">
          <img class="header-logo__img" src="/img/common/yane_logo@2x.png" alt="屋根コネクト"/>
        </a>
      </div>
      <div class="header-logo__wrap2">
        <p class="header__subtitle leading-none">屋根の葺き替えリフォーム・塗装・修理の専門サイト</p>
        <a class="header-btn-entry hover--op leading-none font-bld" href="#">加盟工事店募集中</a>
      </div>
      <div class="header-logo__wrap3 mr-6">
        <p class="flex mb-2"><img class="header-tel__img inline" src="/img/common/icon_tel@2x.png" alt="電話番号" /><span class="header-tel__txt leading-none">0120-690-287</span></p>
          <div class="flex">
            <p class="header-label">土日祝日もOK!</p>
            <p class="header__text--s">24時間電話受付</p>
          </div>
      </div>
      <div class="header-logo__wrap4">
        <a class="btn-estimation" href="/">
          <img class="btn-estimation__img" src="/img/common/icon_cal@2x.png" alt=""/>
          <span class="leading-none">無料簡単見積</span>
        </a>
      </div>
      <div id="js-btn-sp" class="btn-sp pc-none">
        <span class="btn-sp__line"></span>
        <span class="btn-sp__line"></span>
        <span class="btn-sp__line"></span>
      </div>
    </div>
  </div>
    <nav class="gnav">
      <div class="container mx-auto">
        <ul class="gnav__wrap">
          <li class="gnav__list"><a class="gnav__anchor" href="/">ホーム</a></li>
          <li class="gnav__list"><a class="gnav__anchor" href="#">屋根コネクトとは</a></li>
          <li class="gnav__list"><a class="gnav__anchor" href="#">施工店の基準</a></li>
          <li class="gnav__list"><a class="gnav__anchor" href="#">屋根の費用相場</a></li>
          <li class="gnav__list"><a class="gnav__anchor" href="#">運営会社</a></li>
        </ul>
      </div>
    </nav>
</header>
</template>

<script>
import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

export default {
  mounted: function() {
    $('.js-btn-sp').click(function() {
      $(this).toggleClass('is-active');
      $(".gnav").toggleClass('is-active');
    });
  }
}

// export default {
//   data() {
//     return {
//       isActive: false,
//       gnav: false,
//     }
//   },
//   methods: {
//     toggleMenu(e) {
//       this.isActive = !this.isActive
//       this.gnav = !this.gnav
//     },
//   },
// }
</script>
