<template>
  <div class="contents">
    <Header />
    <nuxt />
    <FooterBnr />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/layouts/Header'
import Footer from '~/components/layouts/Footer'
import FooterBnr from '~/components/layouts/footer-bnr'
export default {
  components: {
    Header,
    Footer,
    FooterBnr,
  }
}
</script>

<style type="postcss">
.contents--main {
  padding-bottom: 100px;
  @media (--sp) {
    padding-bottom: 30px;
  }
}

.container {
  padding-left: 14px;
  padding-right: 14px;
}

  @media screen and (min-width: 1280px) {
    .container {
      width: 1080px;
    }
  }

  @media screen and (min-width: 1080px) {
    .container {
      width: 1080px;
    }
  }

  @media screen and (min-width: 351px) and (max-width: 1079px) {
    .container {
      max-width: 100%;
    }
  }

/* header */
.header{
  padding:20px 0 0;
  width: 100%;
  background-color: #fff;
  position: sticky;
  z-index: 1000;
  top: 0;
  @media (--sp) {
  padding: 0;
  }
}
.header__wrap {
  display: flex;
  padding-bottom: 10px;
  @media (--sp) {
    padding: 8px 0;
    margin-bottom: 0;
    align-items: center;
  }
}
.header-logo__wrap1 {
  margin-right: 24px;
}
.header-logo__img {
  width: 141px;
  height: auto;
  @media (--sp) {
  width: 83px;
  }
}
.header-btn-entry {
  font-size: 0.9375em;
  font-weight: 700;
  background-color: #eaf7ff;
  border-radius: 17px;
  box-shadow:1px 1px 0px 0px rgba(0,0,0,0.14);
  border:1px solid #c9e2f2;
  padding: 8px 18px 8px 33px;
  position: relative;
  display: inline-block;
  transition: all  0.7s ease;
}
.header-btn-entry::before {
    content: '';
    width: 16px;
    height: 16px;
    display:  block;
    position: absolute;
    top: 8px;
    left: 11px;
    border-radius: 50%;
    background: #224f99;
}
.header-btn-entry::after {
    content:  '';
    width: 6px;
    height: 6px;
    position: absolute;
    top: 13px;
    left:  15px;
    display:  block;
    border-top: solid 2px #fff;
    border-right: solid 2px #fff;
    transform: rotate(45deg);
}
.header-label {
  background-color: #224f99;
  font-size: 0.6875em;
  padding:0.5em;
  display: inline-block;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  line-height: 1;
  font-weight: 700;
  margin-right: 11px;
}
.header__subtitle {
  font-size: 0.8125em;
  margin-bottom: 8px;
}
.header-logo__wrap2 {
  @media (--sp) {
    display: none;
  }
}
.header-logo__wrap3 {
  margin-left: auto;
  @media (--sp) {
    display: none;
  }
}
.header-logo__wrap4 {
  @media (--sp) {
    display: none;
    margin-left: auto;
  }
}
.header-tel__txt {
  font-family: 'Roboto', sans-serif;
  font-size: 1.75em;
  font-weight: 900;
}
.header__text--s {
  color: #01385e;
  font-size: 0.875em;
  font-weight: 700;
}
.header-tel__img {
  margin-right: 5px;
}
.btn-estimation {
  display: flex;
  align-items: center;
  background-color: #ffe400;
  border-radius: 26px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.14), 0 2px 4px -1px rgba(0, 0, 0, 0.14);
  padding: 9px 48px 10px 13px;
  position: relative;
  line-height: 1;
  font-weight: 700;
  font-size: 1.125em;
  transition: all  0.7s ease;

}
.btn-estimation::after {
    content:  '';
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    right:  20px;
    display:  block;
    border-top: solid 3px #224f99;
    border-right: solid 3px #224f99;
    transform: rotate(45deg);
    margin-top:-5px;
}
.btn-estimation__img {
  display: inline;
  margin-right: 14px;
  vertical-align: sub;
}
.btn-estimation:active,
.btn-estimation:hover,
.btn-estimation:focus,
.btn-estimation:focus-within {
  background-color: #f7ac04;
}


.gnav {
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  @media (--sp) {
    /* display: none; */
  }
}
.gnav.is-active {
  @media (--sp) {
    /* display: block; */
  }
}

.gnav__wrap {
  width: 100%;
  display: flex;
  @media (--sp) {
    display: block;
    padding-bottom: 1.5rem;
  }
}
.gnav__list {
  width: 20%;
  @media (--sp) {
    display: block;
    width: 100%;
    border-bottom: 1px solid #e9e9e9;
  }
}
.gnav__anchor {
  display: block;
  text-align: center;
  font-weight: 700;
  padding:1.5em 1em;
  line-height: 1;
  position: relative;
  transition: all  0.7s ease;
}
.gnav__anchor::after {
  content:'';
  display: block;
  width: 1px;
  height: 38px;
  background-color: #e9e9e9;
  position: absolute;
  top: 13px;
  right:0;
  @media (--sp) {
    content: none;
  }
}
.gnav__anchor:active,
.gnav__anchor:hover,
.gnav__anchor:focus,
.gnav__anchor:focus-within {
  color: #fff;
  background-color: #a02021;
}

.gnav__wrap
  .gnav__anchor:first-child::before {
    content:'';
    display: block;
    width: 1px;
    height: 38px;
    background-color: #e9e9e9;
    position: absolute;
    top: 13px;
    left:0;
  @media (--sp) {
    content: none;
  }
  }
.btn-sp {
  width: 42px;
  height: 42px;
  margin-left: auto;
  /* background-color: rgba(0, 0, 0, 0.14); */
}
.btn-sp__line {
  display: block;
  width: 24px;
  height: 4px;
  background-color: #224f99;
  margin-bottom: 6px;
  margin-left: auto;
  margin-right: auto;
  transform-origin: center;
  transition-duration: 100ms;
  transition-property: background-color,opacity,transform;
  transition-timing-function: ease-out;
}
.btn-sp .btn-sp__line:first-child {
  margin-top: 9px;
}
.btn-sp .btn-sp__line:last-child {
  margin-bottom: 0;
}
.btn-sp.is-active .btn-sp__line:first-child {
  transform: rotate(45deg);
  margin-top: 19px;
}
.btn-sp.is-active .btn-sp__line:nth-child(2) {
  opacity: 0;
}
.btn-sp.is-active .btn-sp__line:last-child {
  transform: translateY(-20px) rotate(-45deg);
}

.gnav-enter-active,
.gnav-leave-active {/* アニメーションの時間、イージングなどを設定 */
  transition: opacity 0.8s ease-in-out;
}
/* フェードイン */
.gnav-enter { /* フェードインの初期状態 */
  opacity: 0;
}
.gnav-enter-to { /* フェードインの終了状態 */
  opacity: 1;
}
/* フェードアウト */
.gnav-leave { /* フェードアウトの初期状態 */
  opacity: 1;
}
.gnav-leave-to { /* フェードアウトの終了状態 */
  opacity: 0;
}

/* footer */
.footer {
  padding-top: 37px;
  padding-bottom: 37px;
  border-top: 4px solid #224f99;
  @media (--sp) {
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-top:none;
  }
}
.footer-child {
  display: flex;
  @media (--sp) {
    flex-wrap: wrap;
  }
}
.footer__logo-wrap {
  margin-right: auto;
  @media (--sp) {
    order: 2;
    margin-left: auto;
  }
}
.footer__logo {
  @media (--sp) {
    width: 70px;
    height: auto;
  }
}
.footer-content {
  text-align: right;
  @media (--sp) {
    order: 1;
    width: 100%;
    text-align: center;
  }
}
.footer-link__anchor {
  display: block;
  margin-right: 1em;
  font-size: 0.75em;
  transition: all  0.7s ease;
  @media (--sp) {
    font-size: 1em;
  }
}
@media screen and (max-width: 374px) {
  .footer-link__anchor {
    font-size: 0.75em;
  }
}
.footer-link__anchor:active,
.footer-link__anchor:hover,
.footer-link__anchor:focus {
  color: #a02021;
  text-decoration: underline;
}
.footer-link__wrap {
  display: flex;
  @media (--sp) {
    justify-content: center;
  }
}
.footer-link__wrap .footer-link__anchor:last-child {
  margin-right: 0;
}
.footer-company {
  @media (--sp) {
    font-size: 0.75em;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
}


.hover--op:hover {
  opacity: .7;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
}

.breadcrumb__anchor {
  color: #fff;
  font-size: 0.75em;
  padding: 0.2em 0.8em 0.2em 0;
}
.breadcrumb__anchor::after {
  content: '>';
  color: #fff;
  font-size: 1em;
  margin-left: 0.5em;
}

.breadcrumb .breadcrumb-list:last-child .breadcrumb__anchor::after {
  content: '';
}
/* kv */
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


.title--main {
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2em;
  padding-top: 88px;
  line-height: 1.4;
  @media (--sp) {
    font-size: 1.625em;
    margin-bottom: 1.25em;
    padding-top: 60px;
  }
}
.title--main.type-reason {
  background: url('/img/common/icon_hand@2x.png') 50% 0 no-repeat;
  background-size: 62px;
  @media (--sp) {
    background-size: 44px;
  }
}
.title--main.type-cycle {
  background: url('/img/common/icon_cycle@2x.png') 50% 0 no-repeat;
  background-size: 62px;
  @media (--sp) {
    background-size: 44px;
  }
}
.title--main.type-note {
  background: url('/img/common/icon_note@2x.png') 50% 0 no-repeat;
  background-size: 62px;
  @media (--sp) {
    background-size: 44px;
  }
}
.title--main.type-location {
  background: url('/img/common/icon_location@2x.png') 50% 0 no-repeat;
  background-size: 62px;
  @media (--sp) {
    background-size: 44px;
  }
}
.title--main.type-case {
  background: url('/img/common/icon_home@2x.png') 50% 0 no-repeat;
  background-size: 62px;
  @media (--sp) {
    background-size: 44px;
  }
}
.title--main.type-mail {
  background: url('/img/common/icon_mail@2x.png') 50% 0 no-repeat;
  background-size: 62px;
  @media (--sp) {
    background-size: 44px;
  }
}
.title--main.type-cost {
  background: url('/img/common/icon_cost@2x.png') 50% 0 no-repeat;
  background-size: 62px;
  @media (--sp) {
    background-size: 44px;
  }
}
.title--l {
  font-size: 1.125em;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0.75rem;
}

.breadcrumb__anchor {
  font-size: 0.75em;
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


.kv-type1 {
  background: rgb(8,106,189);
  background: linear-gradient(135deg, rgba(8,106,189,1) 0%, rgba(57,140,233,1) 100%);
  padding-bottom: 52px;
  @media (--sp) {
    padding-bottom: 40px;
  }

}
.btn-kv-type1-entry {
  width: 430px;
  @media (--sp) {
    width: 50%;
  }
}
@media screen and (max-width: 460px) {
  .btn-kv-type1-entry {
    width: 96%;
  }
}

.kv-title--main {
  padding-top: 32px;
  font-size: 2.375em;
  font-weight: 900;
  line-height: 1.4;
  color: #fff;
  margin-bottom: 1.875rem;
  text-align: center;
  @media (--sp) {
    padding-top: 35px;
    font-size: 1.75em;
    line-height: 1.6;
  }
}
@media screen and (max-width: 460px) {
  .kv-title--main {
    font-size: 1.5em;
  }
}
.kv-title--secondary {
  padding-top: 32px;
  font-size: 2.375em;
  font-weight: 900;
  line-height: 1.4;
  color: #fff;
  margin-bottom: 0.5rem;
  @media (--sp) {
    padding-top: 13px;
    font-size: 1.75em;
    line-height: 1.6;
    margin-bottom: 0;
  }
}
@media screen and (max-width: 460px) {
  .kv-title--main {
    font-size: 1.5em;
  }
}


.lead__wrap {
  /* margin-bottom: 40px; */
  @media (--sp) {
    /* margin-bottom: 0; */
  }
}
.lead {
  padding-top: 40px;
  padding-bottom: 40px;
  @media (--sp) {
  padding-top: 16px;
  padding-bottom: 16px;
  }
}
.lead.type-area {
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #ebf6ff;
  @media (--sp) {
  padding-top: 30px;
  padding-bottom: 30px;
  }
}

.lead .lead__txt:last-child {
  margin-bottom: 0;
}
.lead__txt {
  font-size: 1.125em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1em;
  @media (--sp) {
    text-align: left;
    font-size: 1em;
    line-height: 2;
  }
}
.lead__txt--s {
  font-size: 1em;
  margin-bottom: 0;
  line-height: 2.1;
  @media (--sp) {
    line-height: 2.5;
  }
}
.lead__txt--s.type-detail {
  @media (--sp) {
    line-height: 1.8;
  }
}
.lead__txt--s.type-area {
  line-height: 2.6;
}
/* contract-case.vue */
.comp-case {
  padding-top:72px;
  padding-bottom: 72px;
  background-color: #fff;
  @media (--sp) {
    padding-top:40px;
    padding-bottom: 64px;
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


/* slick * .case-list {
  display: block;
  border: 2px solid #e8e8e8;
  border-radius: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  margin:0 14px;
  @media (--sp) {
  margin:0 8px;
  }
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

/* reason.vue */
.comp-reason {
  padding-top:72px;
  padding-bottom: 72px;
  background-color: #e5f2fc;
  @media (--sp) {
    padding-top:40px;
    padding-bottom: 40px;
  }
}
.reason__wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 28px;
  margin-bottom: 1.75rem;
  @media (--sp) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 14px;
  }
}
.reason-list {
  padding: 0 1.5rem 2.5rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.18);
  @media (--sp) {
  padding: 0 1.25rem 2rem;
  }
}
.reason-list__img1 {
  width: 100px;
  height:auto;
  min-height: 172px;
  margin-bottom: 2.5rem;
}
.reason-list__img2 {
  width: 125px;
  height:auto;
  margin-bottom: 2.5rem;
}
.reason-list__img3 {
  width: 92px;
  height:auto;
  min-height: 172px;
  margin-bottom: 2.5rem;
}
.reason-list__wrap {
}
.reason-list__wrap .reason-list:first-child {
  padding-top: 0;
}
.reason-list__wrap .reason-list:last-child {
  border-bottom: none;
}
.reason-list__title {
  padding-top: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  text-align: center;
}
.reason-list__num {
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 1.5em;
  line-height: 1;
  position: absolute;
  top: -10px;
  left: -24px;
  display: block;
  background-color: #0099ff;
  width: 68px;
  height: 68px;
  display: block;
  clip: rect(auto 34px 68px auto);
  transform:rotate(45deg);
}
.reason-list__num::after {
  content: '';
  position: absolute;
  background-color: #ffe400;
  top: 8px;
  bottom: 8px;
  left: 8px;
  right: 8px;
  transform:rotate(-45deg);
  border-top-left-radius: 10px;
}
.reason-list__titile-num {
  content: '';
  position: absolute;
  top: 0;
  left: -24px;
  width: 68px;
  height: auto;
  @media (--sp) {
    width: 58px;
    top: 0;
    left: -18px;
  }
}
.reason-list__titile-txt {
  font-size:1.5em;
  font-weight: 700;
  margin-bottom: 1.75rem;
  line-height: 1.4;
  @media (--sp) {
    font-size:1.25em;
  }
  }
.reason-list__txt {
  line-height: 2;
}
/* estimation */
.comp-estimation {
  background: url('/img/common/bg_estimation@2x.jpg') 0 100% no-repeat;
  background-size: cover;
  padding-bottom: 112px;
  @media (--sp) {
  padding-bottom: 52px;
  }
}
.title--estimation {
  padding-top: 1.25em;
  padding-bottom: 1.25em;
  line-height: 1.5;
  font-size: 1.75em;
  font-weight: 700;
  color: #fff;
  background-color: #224f99;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  @media (--sp) {
  font-size: 1.25em;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  }
}
.title-estimation--em {
  color: #ffe400;
}
.title--estimation::after {
  content:'';
  position: absolute;
  bottom: -17px;
  left: 50%;
  margin-left: -10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 18px 10px 0 10px;
  border-color: #224f99 transparent transparent transparent;
}
.estimation-person {
  width: 62.7%;
  margin-bottom: 33px;
  @media (--sp) {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  }
}
.estimation-entry-group {
  display: flex;
  justify-content: center;
  @media (--sp) {
  display: block;
  }
}
.estimation-entry-tel {
  margin-right: 28px;
  @media (--sp) {
  margin-right: 0;
  }
}
.estimation-entry-tel__child {
  display: flex;
  align-content: flex-end;
  @media (--sp) {
    display: block;
    text-align: center;
  }
}

.estimation-entry-tel__txt1 {
  font-size: 1.0625em;
  color: #224f99;
  @media (--sp) {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
}
.estimation-entry-tel__label {
  background-color: #224f99;
  font-size: 0.8125em;
  padding:0.825em 0.875em;
  display: inline-block;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  line-height: 1;
  font-weight: 700;
  margin-right: 11px;
  @media (--sp) {
    font-size: 1em;
    margin-bottom: 1rem;
    padding:0.625em 1.375em;
    margin-right: 0;
  }
}
.estimation-entry-tel__num {
  @media (--sp) {
    width: 94%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    text-align: center;
  }
}
.estimation-entry-tel__img {
  width: 34px;
  height: 44px;
  vertical-align: baseline;
  margin-right: 10px;
  @media (--sp) {
  width: 18px;
  height: auto;
  }
}
.estimation-entry-tel__txt {
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 3.625em;
  color: #224f99;
  @media (--sp) {
    font-size: 2.375em;
  }
}

.line--y {
  vertical-align: -webkit-baseline-middle;
  background: linear-gradient(transparent 45%, #ffe400 45%);
}

.estimation-entry-btn {
  @media (--sp) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
}
@media screen and (max-width: 624px) {
  .estimation-entry-btn {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (max-width: 470px) {
  .estimation-entry-btn {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
}


.btn-estimation--l {
  display: flex;
  align-items: center;
  background-color: #ffe400;
  border-radius: 46px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.14), 0 2px 4px -1px rgba(0, 0, 0, 0.14);
  padding: 23px 54px 23px 27px;
  position: relative;
  line-height: 1;
  font-weight: 700;
  font-size: 1.4375em;
  letter-spacing: 0;
  transition: all  0.7s ease;
  @media (--sp) {
    display: inline-block;
    text-align: center;
    font-size: 1.25em;
    padding: 15px 50px 15px 17px;
  }
}
.btn-estimation--l::after {
    content:  '';
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    right:  27px;
    display:  block;
    border-top: solid 3px #224f99;
    border-right: solid 3px #224f99;
    transform: rotate(45deg);
    margin-top:-5px;
  @media (--sp) {
    right: 25px;
  }
}
.btn-estimation__img--l {
  display: inline;
  margin-right: 14px;
  vertical-align: sub;
  width: 46px;
  height: auto;
  @media (--sp) {
  width: 25px;
  }
}
.btn-estimation--l:active,
.btn-estimation--l:hover,
.btn-estimation--l:focus,
.btn-estimation--l:focus-within {
  background-color: #f7ac04;
}
.btn-estimation--xl {
  display: flex;
  align-items: center;
  background-color: #ffe400;
  border-radius: 46px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.14), 0 2px 4px -1px rgba(0, 0, 0, 0.14);
  padding: 19px 54px 19px 27px;
  position: relative;
  font-weight: 900;
  font-size: 1.5em;
  letter-spacing: 0;
  line-height: 1.3;
  transition: all  0.7s ease;
  @media (--sp) {
    font-size: 1.25em;
    padding: 15px 50px 15px 17px;
  }
}

.btn-estimation--xl:active,
.btn-estimation--xl:hover,
.btn-estimation--xl:focus,
.btn-estimation--xl:focus-within {
  background-color: #f7ac04;
}

.btn-estimation--xl::after {
  content:  '';
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  right:  34px;
  display:  block;
  border-top: solid 4px #224f99;
  border-right: solid 4px #224f99;
  transform: rotate(45deg);
  margin-top:-5px;
  @media (--sp) {
    right:  25px;
  }
}
.btn-estimation__img--xl {
  display: inline;
  margin-right: 18px;
  vertical-align: sub;
  width: 51px;
  height: auto;
  @media (--sp) {
    width: 25px;
  }
}



/* flow */
.comp-flow {
  padding-top:72px;
  padding-bottom: 72px;
  background-color: #fff;
  @media (--sp) {
    padding-top:40px;
    padding-bottom: 40px;
  }
}
.flow__wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 28px;
  grid-row-gap: 55px;
  @media (--sp) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.flow-list {
  padding-top: 1.75em;
  padding-bottom: 1.75em;
  border-bottom: 1px solid #e2e2e2;
}
.flow__img {
  width: 68%;
  margin-left: auto;
  margin-right: 7%;
  margin-top: 11%;
  @media (--sp) {
  width: 81%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  }
}
.flow-list__wrap {
}
.flow-list__wrap .flow-list:first-child {
  padding-top: 0;
}
.flow-list__wrap .flow-list:last-child {
  border-bottom: none;
}
.flow-list__title {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;
  @media (--sp) {

  }
}
.flow-list__num {
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 2em;
  line-height: 1.2;
  color: #224f99;
  margin-right: 10px;
}
.flow-list__titile-txt {
  font-size:1.25em;
  font-weight: 700;
  }
/* pickup */
.comp-pickup {
  padding-top:72px;
  padding-bottom: 72px;
  background-color: #e5f2fc;
  @media (--sp) {
    padding-top:40px;
    padding-bottom: 12px;
  }
}
.pickup-list__wrap {
  display: flex;
  flex-wrap: wrap;
}
.pickup-list {
  display: flex;
  width: 48.5%;
  margin-right: 3%;
  margin-bottom: 56px;
  @media (--sp) {
    display: block;
    margin-bottom: 28px;
  }
}
.pickup-list__wrap .pickup-list:nth-child(2n) {
  margin-right: 0;
}
.pickup-list__anchor {
  display: flex;
  @media (--sp) {
    display: block;
  }
}
.pickup-list__img {
  width: 86.5%;
  margin-right:3.8%;
  align-self: flex-start;
  overflow: hidden;
  @media (--sp) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
.pickup-list__img img {
  transition: all  1.0s ease;
}
.pickup-list__anchor:active .pickup-list__img img,
.pickup-list__anchor:hover .pickup-list__img img,
.pickup-list__anchor:focus .pickup-list__img img{
  transform:scale(1.2,1.2);
}
.pickup-list__title {
  font-size: 1.125em;
  font-weight: 700;
  line-height: 1.7;
  position: relative;
  padding: 0 0 0 1.75rem;
  display: block;
  margin-bottom: 0.5rem;
  transition: all  0.7s ease;
}
.pickup-list__title::before {
    content: '';
    width: 20px;
    height: 20px;
    display:  block;
    position: absolute;
    top: 7px;
    left: 0;
    border-radius: 50%;
    background: #224f99;
}
.pickup-list__title::after {
    content:  '';
    width: 7px;
    height: 7px;
    position: absolute;
    top: 14px;
    left:  6px;
    display:  block;
    border-top: solid 3px #fff;
    border-right: solid 3px #fff;
    transform: rotate(45deg);
}
.pickup-list__anchor:active .pickup-list__title,
.pickup-list__anchor:hover .pickup-list__title,
.pickup-list__anchor:focus .pickup-list__title {
  color: #a02021;
}
.pickup-list__txt {
  line-height: 1.9;
}

/*  faq */
.comp-faq {
  background-color: #e5f2fc;
  padding-top:70px;
  padding-bottom: 68px;
  @media (--sp) {
    padding-top:40px;
    padding-bottom: 40px;
  }
}
.title--main.type-faq {
  padding-top: 88px;
  background: url('/img/common/icon_faq@2x.png') 50% 0 no-repeat;
  background-size: 62px;
  }
.yane-faq-list__wrap {
  margin-bottom: 1em;
}
.yane-faq-list__title {
  display: flex;
  background-color: #fff;
  padding: 1.625em 2em;
  border: 1px solid #d4e5f3;
  border-radius: 8px;
  transition: all  0.7s ease;
  @media (--sp) {
  padding: 1.125em 1em;
  align-items: center;
  }
}
.yane-faq-list__title.is-active {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.yane-faq-list__title.is-active .yane-faq-list__icon::after {
  display:none;
}

.yane-faq-list__title:active,
.yane-faq-list__title:hover,
.yane-faq-list__title:focus,
.yane-faq-list__title:focus-within {
  color: #a02021;
}

.yane-faq-list__title--sub {
  font-family: 'Roboto', sans-serif;
  font-size: 1.625em;
  font-weight: 900;
  line-height: 1.2;
  color: #224f99;
  margin-right: 1rem;
  flex-shrink: 0;
}
.yane-faq-list__txt {
  height: 0;
  overflow: hidden;
  transition: height .4s ease-out;
}
.yane-faq-list__txt-wrap {
  background-color: #fff;
  padding: 1.625em 2em;
  border: 1px solid #d4e5f3;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: none;
  display: flex;
  transition: all  0.7s ease;
  @media (--sp) {
    padding: 1.125em 1em;
  }
}
.yane-faq-list__txt--q {
  font-size: 1.25em;
  font-weight: 700;
  line-height: 1.2;
  margin-right: 0.5rem;
}
.yane-faq-list__txt--a {
  line-height: 1.8;
}
.yane-faq-list__icon {
  display: block;
  width:34px;
  height: 34px;
  border-radius: 50%;
  background-color: #ffe400;
  position: relative;
  margin-left: auto;
  flex-shrink: 0;
}
.yane-faq-list__icon::before,
.yane-faq-list__icon::after {
  content: "";
  position: absolute;
  top: 16px;
  left: 10px;
  display: block;
  width: 14px;
  height: 2px;
  background-color: #224f99;
}
.yane-faq-list__icon::after {
  transform: rotate(90deg);
}

/* company-list */
.comp-company-list {
  padding-top:72px;
  padding-bottom: 25px;
  @media (--sp) {
    padding-top:40px;
    padding-bottom: 0;
  }
}
.company-list__wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 28px;
  grid-row-gap: 24px;
}
.company-list__wrap {
  @media (--sp) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }
}

@media screen and (max-width: 639px) {
  .company-list__wrap {
    grid-template-columns: repeat(2, 1fr);
  }
}


.btn-secondary {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #224f99;
  background-color: #fff;
  border: 2px solid #224f99;
  border-radius: 70px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.14), 0 2px 4px -1px rgba(0, 0, 0, 0.14);
  padding: 21px 35px 21px 30px;
  position: relative;
  line-height: 1.3;
  font-weight: 700;
  font-size: 1.25em;
  text-align: center;
  transition: all  0.7s ease;
  @media (--sp) {
    padding: 10px 35px 10px 30px;
    font-size: 1.125em;
    line-height: 1.5;
  }
}
.btn-secondary::after {
  content:  '';
  width: 7px;
  height: 7px;
  position: absolute;
  top: 50%;
  right:  25px;
  display:  block;
  border-top: solid 2px #224f99;
  border-right: solid 2px #224f99;
  transform: rotate(45deg);
  margin-top:-3px;
  transition: all  0.7s ease;
  @media (--sp) {
  right:  20px;
  }
}
.btn-secondary:active::after,
.btn-secondary:hover::after,
.btn-secondary:focus::after,
.btn-secondary:focus-within::after {
  border-color: #fff;
}
.btn-secondary:active,
.btn-secondary:hover,
.btn-secondary:focus,
.btn-secondary:focus-within {
  color: #fff;
  background-color: #224f99;
}


.tag-group__title {
  font-weight: 700;
  margin-bottom: 1em;
  @media (--sp) {
    font-size: 1em;
    white-space: nowrap;
  }
}
.tag-group {
  display: flex;
  flex-wrap: wrap;
}
.tag--main {
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  padding: 0.675em 1.25em;
  line-height: 1;
  margin-right: 12px;
  margin-bottom: 0.5em;
  @media (--sp) {
    margin-right: 5px;
  }
}
.tag--s {
  border: 1px solid #dfdfdf;
  border-radius: 17px;
  padding: 0.675em 1em;
  font-size: 0.875em;
  line-height: 1;
  margin-right: 8px;
  margin-bottom: 0.5em;
  @media (--sp) {
    margin-right: 5px;
  }
}
.tag--main.is-active,
.tag--s.is-active {
  color: #fff;
  background-color: #224f99;
}

.img--responsive {
  width: 100%;
  height: auto;
}
.pc-none {
  display: none;
  @media (--sp) {
    display: block;
  }
}
.sp-none {
  display: block;
  @media (--sp) {
    display: none;
  }
}


/* comp-area-list */
.comp-area-list {
  padding-top:72px;
  padding-bottom: 60px;
  @media (--sp) {
    padding-top:40px;
    padding-bottom: 40px;
  }
}
.area-list__grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 28px;
}
.area-list__grid {
  @media (--sp) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.area-list__wrap {
  display: flex;
  flex-wrap: wrap;
}

.area-list__anchor {
  padding-left:1em;
  padding-right: 1em;
  position: relative;
  transition: all  0.7s ease;
}
.area-list__anchor::after {
  content:'';
  width: 1px;
  height: 16px;
  background-color: #000;
  position: absolute;
  top: 5px;
  right: 0;
}
.area-list__wrap .area-list:first-child .area-list__anchor {
  padding-left: 0;
}
.area-list__anchor:active,
.area-list__anchor:hover,
.area-list__anchor:focus,
.area-list__anchor:focus-within {
  color: #a02021;
  text-decoration: underline;
}
.area-list {
  line-height: 1.8;
}

</style>
