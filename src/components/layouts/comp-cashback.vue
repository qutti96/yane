<template lang="pug">
.comp-cashback
  .container.mx-auto
    <Cashback />
</template>

<script>
import Cashback from '~/components/layouts/cashback'
export default {
  components: {
    Cashback,
  },
}
</script>

<style type="postcss" scoped>
.comp-cashback {
  padding-top: 54px;
  padding-bottom: 0;
  @media (--sp) {
    padding-top: 20px;
  }
}

</style>
