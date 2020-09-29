<template>
  <main class="contents--main">
    <div class="kv1">
      <div class="kv-top1 container mx-auto">
        <h2 class="kv-top1__txt1">厳選した屋根の優良施工店の<br/>一括見積もりで価格を比較！</h2>
        <p class="kv-top1__txt2">お見積は無料で、<br/>ご紹介した施工店への<br class="pc-none" />お断り代行も<br class="pc-none" />無料で承ります。</p>
        <p class="kv__catch"><span class="kv__catch-txt1">工事完成後は</span><span class="kv__catch-txt2">最大<span class="kv__catch-txt4">10</span>万円</span><span class="kv__catch-txt3">キャッシュバック！</span></p>
        <div class="kv-btn-entry">
          <a class="btn-estimation--xl" href="#">
            <img class="btn-estimation__img--xl" src="/img/common/icon_cal_m@2x.png" alt=""/>
            <span>無料簡単見積を開始する</span>
          </a>
        </div>
      </div>
    </div>
    <section class="comp-case">
      <div class="container mx-auto">
        <h2 class="title--main type-case">ご成約事例</h2>
        <ul class="case-list__wrap">
          <li class="case-list"><img class="case-list__img" src="/img/common/img_dummy@2x.png" alt="" />
            <p class="case-list__txt1">価格だけじゃなくこの人価格だけじゃなくこの人価格だけじゃなくこの人価格だけじゃなくこの人なら任せられると思い業者を決めた</p>
            <p class="case-list__txt2">神奈川県 A様</p>
            <div class="case-list-body2">
              <p class="case-list__txt3 text-center"><span class="font-bold text-lg">200万円</span>の見積もりが...</p>
              <p class="case-list__txt4 text-center font-bold text-lg">140万円に！</p>
              <p class="case-list__txt5 text-center font-bold"><span class="text-xl">60万円</span>DOWN！</p>
            </div>
          </li>
          <li class="case-list"><img class="case-list__img" src="/img/common/img_dummy@2x.png" alt="" />
            <p class="case-list__txt1">価格だけじゃなくこの人なら任せられると思い業者を決めた</p>
            <p class="case-list__txt2">神奈川県 A様</p>
            <div class="case-list-body2">
              <p class="case-list__txt3 text-center"><span class="font-bold text-lg">200万円</span>の見積もりが...</p>
              <p class="case-list__txt4 text-center font-bold text-lg">140万円に！</p>
              <p class="case-list__txt5 text-center font-bold"><span class="text-xl">60万円</span>DOWN！</p>
          </div>
          </li>
          <li class="case-list"><img class="case-list__img" src="/img/common/img_dummy@2x.png" alt="" />
            <p class="case-list__txt1">価格だけじゃなくこの人なら任せられると思い業者を決めた</p>
            <p class="case-list__txt2">神奈川県 A様</p>
            <div class="case-list-body2">
              <p class="case-list__txt3 text-center"><span class="font-bold text-lg">200万円</span>の見積もりが...</p>
              <p class="case-list__txt4 text-center font-bold text-lg">140万円に！</p>
              <p class="case-list__txt5 text-center font-bold"><span class="text-xl">60万円</span>DOWN！</p>
            </div>
          </li>
          <li class="case-list"><img class="case-list__img" src="/img/common/img_dummy@2x.png" alt="" />
            <p class="case-list__txt1">価格だけじゃなくこの人なら任せられると思い業者を決めた</p>
            <p class="case-list__txt2">神奈川県 A様</p>
            <div class="case-list-body2">
              <p class="case-list__txt3 text-center"><span class="font-bold text-lg">200万円</span>の見積もりが...</p>
              <p class="case-list__txt4 text-center font-bold text-lg">140万円に！</p>
              <p class="case-list__txt5 text-center font-bold"><span class="text-xl">60万円</span>DOWN！</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <Reason></Reason>
    <Estimation></Estimation>
    <Flow></Flow>
    <PickUp></PickUp>
    <Pref></Pref>
    <Faq></Faq>
    <Estimation></Estimation>
    <CompanyList></CompanyList>
  </main>
</template>

<script>
// import Kv from '~/components/layouts/kv'
// import Case from '~/components/layouts/contract-case'
import Reason from '~/components/layouts/reason'
import Flow from '~/components/layouts/flow'
import PickUp from '~/components/layouts/pick-up'
import Pref from '~/components/layouts/search-by-pref'
import Faq from '~/components/layouts/faq'
import Estimation from '~/components/layouts/estimation'
import CompanyList from '~/components/layouts/company-list'
export default {
  components: {
    // Kv,
    // Case,
    Reason,
    Flow,
    PickUp,
    Pref,
    Faq,
    CompanyList,
    Estimation,
  },
  head() {
    return {
      title: 'トップページ'
    }
  },
}
</script>
