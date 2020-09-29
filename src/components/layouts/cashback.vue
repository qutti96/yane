<template lang="pug">
.cashback__wrap
    h4.cashback__title 屋根の工事が完成したら最大10万円をキャッシュバック
    .cashback__child
      img.cashback__img(src="/img/common/img_credit@2x.png",alt="")
      .cashback__txt
        p.leading-loose.mb-2 当社がご紹介した優良工事店にて屋根の工事が完了しましたらお知らせください。屋根コネクトから最大10万円分をキャッシュバックいたします。
          br
          | ギフトカードは、Amazon、JCB、VISAの3ブランドの中からお選び頂けます。
        p.leading-loose ※AmazonはEメールタイプのギフト券となります
    .btn-group-cashback.mx-auto
      a.btn-secondary(href="#") キャッシュバックについて詳しく見る
</template>

<script>
export default {
}
</script>

<style type="postcss" scoped>
.cashback__wrap {
  width: 100%;
  border: 4px solid #224f99;
  border-radius: 10px;
  background-color: #fff;
  padding: 2.5rem 1.5rem;
  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.18);
  @media (--sp) {
  padding: 2rem 1rem;
  }
}
.cashback__title {
  font-size:1.5em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.75rem;
  @media (--sp) {
    font-size:1.25em;
  }
}
.cashback__child {
  margin-bottom: 2.5em;
  display: flex;
  align-items: center;
  @media (--sp) {
    display: block;
    margin-bottom: 1em;
  }
}
.cashback__img {
  width: 36%;
  margin-right: 4%;
  @media (--sp) {
    display: block;
    width: 67%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    }
}
.cashback__txt {
  @media (--sp) {
    /* margin-bottom: 1em; */
  }
}

.btn-group-cashback {
  width: 43%;
  @media (--sp) {
    width: 100%;
  }
}


</style>
