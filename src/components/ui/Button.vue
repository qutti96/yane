<template lang="pug">
  a(:href="url")
    slot
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '#'
    },
  }
}
</script>

<style type="postcss" scoped>
</style>
