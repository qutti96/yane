<template>
<section class="comp-faq">
  <div class="container mx-auto">
    <h2 class="title--main type-faq">よくある質問</h2>
    <dl class="yane-faq-list__wrap">
      <dt class="yane-faq-list__title js-acc-trigger is-active">
        <span class="yane-faq-list__title--sub">Q</span><span class="yane-faq-list__txt--q">紹介された業者とは必ず契約しないといけないのですか？</span><span class="yane-faq-list__icon"></span>
      </dt>
      <dd class="yane-faq-list__txt">
        <div class="yane-faq-list__txt-wrap">
          <p class="yane-faq-list__title--sub">A</p>
          <p class="yane-faq-list__txt--a">そのようなことはありませんのでご安心ください。<br/>複数社からのお見積もりをしっかりと比較検討いただき、提案内容に納得された場合にのみ、ご契約いただけますと幸いです。</p>
        </div>
      </dd>
    </dl>
    <dl class="yane-faq-list__wrap">
      <dt class="yane-faq-list__title js-acc-trigger"><span class="yane-faq-list__title--sub">Q</span><span class="yane-faq-list__txt--q">紹介された業者とは必ず契約しないといけないのですか？</span><span class="yane-faq-list__icon"></span></dt>
      <dd class="yane-faq-list__txt">
        <div class="yane-faq-list__txt-wrap">
          <p class="yane-faq-list__title--sub">A</p>
          <p class="yane-faq-list__txt--a">そのようなことはありませんのでご安心ください。<br/>複数社からのお見積もりをしっかりと比較検討いただき、提案内容に納得された場合にのみ、ご契約いただけますと幸いです。</p>
        </div>
      </dd>
    </dl>
    <dl class="yane-faq-list__wrap"><dt class="yane-faq-list__title js-acc-trigger"><span class="yane-faq-list__title--sub">Q</span><span class="yane-faq-list__txt--q">紹介された業者とは必ず契約しないといけないのですか？</span><span class="yane-faq-list__icon"></span></dt>
      <dd class="yane-faq-list__txt">
        <div class="yane-faq-list__txt-wrap">
          <p class="yane-faq-list__title--sub">A</p>
          <p class="yane-faq-list__txt--a">そのようなことはありませんのでご安心ください。<br/>複数社からのお見積もりをしっかりと比較検討いただき、提案内容に納得された場合にのみ、ご契約いただけますと幸いです。</p>
        </div>
      </dd>
    </dl>
    <dl class="yane-faq-list__wrap"><dt class="yane-faq-list__title js-acc-trigger"><span class="yane-faq-list__title--sub">Q</span><span class="yane-faq-list__txt--q">紹介された業者とは必ず契約しないといけないのですか？</span><span class="yane-faq-list__icon"></span></dt>
      <dd class="yane-faq-list__txt">
        <div class="yane-faq-list__txt-wrap">
          <p class="yane-faq-list__title--sub">A</p>
          <p class="yane-faq-list__txt--a">そのようなことはありませんのでご安心ください。<br/>複数社からのお見積もりをしっかりと比較検討いただき、提案内容に納得された場合にのみ、ご契約いただけますと幸いです。</p>
        </div>
      </dd>
    </dl>
  </div>
</section>
</template>

<script>
function toggleAcc() {
  const trigger = document.querySelectorAll('.js-acc-trigger');
  for (let i = 0; i < trigger.length; i++) {
    if( trigger[i].classList.contains('is-active')){
      trigger[i].nextElementSibling.style.height = trigger[i].nextElementSibling.scrollHeight + 'px'
    }
    trigger[i].addEventListener('click', function() {
      let body = this.nextElementSibling;
      if (body.style.height) {
        this.classList.remove('is-active');
        body.classList.remove('is-active');
        body.style.height = null
      } else {
        this.classList.add('is-active');
        body.classList.add('is-active');
        body.style.height = body.scrollHeight + 'px'
      }
    });
  }
}

if (process.client) {
  if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', toggleAcc);
  } else {  // `DOMContentLoaded` has already fired
    toggleAcc();
  }
}
</script>

