<template lang="pug">
<section class="comp-reason">
  <div class="container mx-auto">
    <h2 class="title--main type-reason">屋根コネクトが選ばれる理由</h2>
    <ul class="reason__wrap">
      <li class="reason-list">
        <h3 class="reason-list__title"><img class="reason-list__titile-num" src="/img/top/icon_num01.png" alt="1" /><span class="reason-list__titile-txt">登録は全国の<br class="sp-none"/>優良工事店のみ</span></h3><img class="reason-list__img1 mx-auto" src="/img/common/img_reason1@2x.png" alt="" />
        <p class="reason-list__txt">屋根コネクトでは工事店の登録時に、実績や経歴、資格の有無などを確認し、さらには口コミ調査など厳格な審査を行います。自信をもってご紹介できる全国の優良工事店のみを登録しているので安心してご利用いただけます。</p>
      </li>
      <li class="reason-list">
        <h3 class="reason-list__title"><img class="reason-list__titile-num" src="/img/top/icon_num02.png" alt="2" /><span class="reason-list__titile-txt">工事店の紹介後も<br class="sp-none"/>徹底サポート</span></h3><img class="reason-list__img2 mx-auto" src="/img/common/img_reason2@2x.png" alt="" />
        <p class="reason-list__txt">当社のサービスは、一括見積りサービスにありがちな紹介して終わりのサービスではありません。ご紹介後も、工事店の現地調査から見積提出、決定までを徹底して無料でサポート致します。ご紹介期間中から施工完了までお気軽にご相談ください。</p>
      </li>
      <li class="reason-list">
        <h3 class="reason-list__title"><img class="reason-list__titile-num" src="/img/top/icon_num03.png" alt="3" /><span class="reason-list__titile-txt">工事店へのお断りも<br class="sp-none"/>無料で代行</span></h3><img class="reason-list__img3 mx-auto" src="/img/common/img_reason3@2x.png" alt="" />
        <p class="reason-list__txt">複数社から見積りが届くため、発注を決定した工事店以外には通常お断りのご連絡が必要になります。屋根コネクトはこれらのお断り連絡も無料で代行。お客様に余計なご負担はお掛けいたしません。</p>
      </li>
    </ul>
    <Cashback></Cashback>
  </div>
</section>
</template>

<script>
import Cashback from '~/components/layouts/cashback'
export default {
  components: {
    Cashback,
  },
}
</script>
