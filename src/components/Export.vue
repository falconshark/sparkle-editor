<template>
  <div class="export-html">
    <div class="description">
      你可以複製此代碼並貼上至任何網站編輯器（例如艾比索）以匯出此文章。
    </div>
    <div class="export-html-code">
      {{content}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    content: function(){
      return this.$store.state.output;
    }
  },
}
</script>
