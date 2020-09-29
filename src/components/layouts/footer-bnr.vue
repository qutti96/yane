<template lang="pug">
.footer-bnr.pc-none
  .container.mx-auto
    .footer-bnr__wrap
      .footer-bnr__btn
        a.btn-estimation--l(href="/")
          span.leading-none 簡単見積を開始する
      .footer-bnr__txt
        .footer-bnr__tel
          img.footer-bnr-tel__img.inline(src="/img/common/icon_tel_w@2x.png", alt="電話番号")
          span.footer-bnr-tel__txt.leading-none 0120-690-287
        .footer-bnr__label 土日祝日・24時間OK!
</template>

<script>
export default {
}
</script>

<style type="postcss" scoped>
.footer-bnr {
  background-color: #224f99;
  padding: 1em 0;
}
.footer-bnr__wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-bnr__btn {
  width: 50%;
  margin-right: 1.5%;
  text-align: right;
}
.footer-bnr__txt {
  width:  47%;
  margin-left: 1.5%;
}
.footer-bnr__tel {
  margin-bottom: 0.3em;
}
.footer-bnr-tel__txt {
  font-family: 'Roboto', sans-serif;
  font-size: 1.425em;
  font-weight: 900;
  color: #fff;
}
.footer-bnr-tel__img {
  color: #fff;
  width: 11px;
  height: auto;
  margin-right: 0.25em;
}
.footer-bnr__label {
  display: inline-block;
  color: #224f99;
  background-color: #fff;
  font-size: 0.875em;
  font-weight: 700;
  padding: 0.25em 0.875em;
  text-align: center;
  border-radius: 5px;
}


.btn-estimation--l {
  display: inline-flex;
  align-items: center;
  background-color: #ffe400;
  border-radius: 46px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.14), 0 2px 4px -1px rgba(0, 0, 0, 0.14);
  padding: 16px 30px 16px 16px;
  position: relative;
  line-height: 1;
  font-weight: 700;
  font-size: 1em;
  letter-spacing: 0;
  text-align: center;
}
.btn-estimation--l::after {
    content:  '';
    width: 5px;
    height: 5px;
    position: absolute;
    top: 50%;
    right:  16px;
    display:  block;
    border-top: solid 2px #224f99;
    border-right: solid 2px #224f99;
    transform: rotate(45deg);
    margin-top:-2px;
}
.btn-estimation__img--l {
  display: inline;
  margin-right: 14px;
  vertical-align: sub;
  width: 11px;
  height: auto;
  @media (--sp) {
  width: 25px;
  }
}
@media screen and (max-width: 374px) {
.btn-estimation--l {
  font-size: 0.75em;
}
.footer-bnr-tel__txt {
  font-size: 1.125em;
}
.footer-bnr__label {
  font-size: 0.75em;
}

}
</style>
