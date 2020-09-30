<template>
  <main class="contents--main">
    <Kv></Kv>
    <Case></Case>
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
import Kv from '~/components/layouts/kv'
import Case from '~/components/layouts/contract-case'
import Reason from '~/components/layouts/reason'
import Flow from '~/components/layouts/flow'
import PickUp from '~/components/layouts/pick-up'
import Pref from '~/components/layouts/search-by-pref'
import Faq from '~/components/layouts/faq'
import Estimation from '~/components/layouts/estimation'
import CompanyList from '~/components/layouts/company-list'
export default {
  components: {
    Kv,
    Case,
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
