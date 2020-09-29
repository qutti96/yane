<template lang="pug">
  main.contents--main
    .kv-type1
      .container.mx-auto
        ul.breadcrumb
          li.breadcrumb-list
            a.breadcrumb__anchor(href="#") ホーム
          li.breadcrumb-list
            a.breadcrumb__anchor(href="#") 屋根工事の事例
        h1.kv-title--main 屋根工事の事例
        .btn-kv-type1-entry.mx-auto
          <BtnEstL />
    .lead
      .container.mx-auto
        .lead__wrap
          p.lead__txt 屋根コネクト経由で工事を成約頂いたお客様の事例一覧です。
          p.lead__txt 屋根の葺き替えリフォームから、塗装、防水工事、カバー工法など、屋根の工事全般の事例となります。
    .archive-list__wrap
      .container.mx-auto
        p.tag-group__title 絞り込みメニュー
        <TagGroup />
        .case-list__wrap
          .case-list__box
            .case-list__img-box-wrap
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工前
              .arrow-right
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工後
            .case-list__txt-box
              h2.case-list__title 工事タイトル工事タイトル工事タイトル工事タイトル
              p.case-list__txt 説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
            .tag-group.mt-auto
              .tag--s.is-active 葺き替え
              .tag--s カバー工法
              .tag--s タグ1
              .tag--s タグ2
          .case-list__box
            .case-list__img-box-wrap
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工前
              .arrow-right
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工後
            .case-list__txt-box
              h2.case-list__title 工事タイトル工事タイトル
              p.case-list__txt 説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
            .tag-group.mt-auto
              .tag--s.is-active 葺き替え
              .tag--s カバー工法
              .tag--s タグ1
              .tag--s タグ2
          .case-list__box
            .case-list__img-box-wrap
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工前
              .arrow-right
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工後
            .case-list__txt-box
              h2.case-list__title 工事タイトル工事タイトル工事タイトル工事タイトル工事タイトル工事タイトル工事タイトル工事タイトル
              p.case-list__txt 説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
            .tag-group.mt-auto
              .tag--s.is-active 葺き替え
              .tag--s カバー工法
              .tag--s タグ1
              .tag--s タグ2
          .case-list__box
            .case-list__img-box-wrap
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工前
              .arrow-right
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工後
            .case-list__txt-box
              h2.case-list__title 工事タイトル工事タイトル
              p.case-list__txt 明文説明文説文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
            .tag-group.mt-auto
              .tag--s.is-active 葺き替え
              .tag--s カバー工法
              .tag--s タグ1
              .tag--s タグ2
          .case-list__box
            .case-list__img-box-wrap
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工前
              .arrow-right
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工後
            .case-list__txt-box
              h2.case-list__title 工事タイトル工事タイトル工事タイトル工事タイトル
              p.case-list__txt 説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
            .tag-group.mt-auto
              .tag--s.is-active 葺き替え
              .tag--s カバー工法
              .tag--s タグ1
              .tag--s タグ2
          .case-list__box
            .case-list__img-box-wrap
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工前
              .arrow-right
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工後
            .case-list__txt-box
              h2.case-list__title 工事タイトル工事タイトル
              p.case-list__txt 説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
            .tag-group.mt-auto
              .tag--s.is-active 葺き替え
              .tag--s カバー工法
              .tag--s タグ1
              .tag--s タグ2
          .case-list__box
            .case-list__img-box-wrap
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工前
              .arrow-right
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工後
            .case-list__txt-box
              h2.case-list__title 工事タイトル工事タイトル工事タイトル工事タイトル工事タイトル工事タイトル工事タイトル工事タイトル
              p.case-list__txt 説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
            .tag-group.mt-auto
              .tag--s.is-active 葺き替え
              .tag--s カバー工法
              .tag--s タグ1
              .tag--s タグ2
          .case-list__box
            .case-list__img-box-wrap
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工前
              .arrow-right
              .case-list__img-box
                img.case-list__img.img-responsive(src="/img/common/img_dummy_detail@2x.png",alt="")
                p.text-center 施工後
            .case-list__txt-box
              h2.case-list__title 工事タイトル工事タイトル
              p.case-list__txt 明文説明文説文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
            .tag-group.mt-auto
              .tag--s.is-active 葺き替え
              .tag--s カバー工法
              .tag--s タグ1
              .tag--s タグ2
        <Pagenation />
    <Estimation />
    <CompCashback />
    <CompanyList />
</template>

<script>
import CompCashback from '~/components/layouts/comp-cashback'
import Estimation from '~/components/layouts/estimation'
import CompanyList from '~/components/layouts/company-list'
import BtnEstL from '~/components/ui/btn-estimation-l'
import Pagenation from '~/components/ui/pagenation'
import TagGroup from '~/components/ui/tag-group'

export default {
  components: {
    CompCashback,
    CompanyList,
    Estimation,
    BtnEstL,
    Pagenation,
    TagGroup,
  },
  head() {
    return {
      title: '屋根工事の事例'
    }
  },
}
</script>

<style type="postcss">
.case-list__wrap {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
}

.case-list__box {
  width: 48.6%;
  border: 2px solid #e8e8e8;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 2.5%;
  margin-bottom: 1.625em;
  margin-right: 2.7%;
  @media (--sp) {
    width: 100%;
    padding: 3.8%;
    margin-right: 0;
    margin-bottom: 1em;
  }
}

.case-list__wrap .case-list__box:nth-child(2n) {
  margin-right: 0;
}

.case-list__wrap .case-list__box:last-child {
  @media (--sp) {
    margin-bottom: 0;
  }
}

.case-list__img-box-wrap {
  display: flex;
  width: 100%;
  margin-bottom: 1.5em;
}
.case-list__img-box {
  width: calc((100% - 30px)/2);
}
.case-list__img {
  border-radius: 5px;
  margin-bottom: 0.5em;
}
.arrow-right {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 11px 0 11px 10px;
  border-color: transparent transparent transparent #224f99;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 14%;
}
@media screen and (max-width: 460px) {
  .arrow-right {
    margin-top: 12%;
  }
}

.case-list__txt-box {
  width: 100%;
  margin-bottom: 1.5em;
  @media (--sp) {
    margin-bottom: 1em;
  }
}
.case-list__title {
  font-size: 1.125em;
  font-weight: 700;
  margin-bottom: 0.875em;
  @media (--sp) {
    font-size: 1em;
    margin-bottom: 0.5em;
  }
}
.case-list__txt {
  line-height: 2;
}
</style>
