<template lang="pug">
.pagenation
  .btn-pre 前へ
  .btn-num.is-active 1
  .btn-num 2
  .btn-num 3
  .btn-num ...
  .btn-pre 次へ
</template>

<style type="postcss" scoped>
.pagenation {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  @media (--sp) {
  padding-top: 26px;
  padding-bottom: 26px;
  }
}
.btn-num {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1em;
  border-radius: 3px;
  border: 1px solid #dfdfdf;
  width: 38px;
  height: 38px;
  line-height: 1;
  margin-right: 0.75em;
}
.btn-num.is-active {
  color: #fff;
  background-color: #224f99;
}
.pagenation .btn-num:last-child {
    margin-right: 0;
}
.btn-pre,.btn-next {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1em;
  border-radius: 3px;
  border: 1px solid #dfdfdf;
  line-height: 1;
  margin-right: 0.75em;
  padding-left: 1em;
  padding-right: 1em;
}
.btn-next {
  margin-right:0;
  margin-left: 0.75em;
}

@media screen and (max-width: 374px) {
  .btn-pre,
  .btn-num {
    margin-right: 0.25em;
  }
  .btn-next {
    margin-left: 0.25em;
  }
}
</style>
