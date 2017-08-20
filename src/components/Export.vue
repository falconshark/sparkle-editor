<template>
  <div>
    <textarea rows="4" cols="50">
      {{content}}
    </textarea>
  </div>
</template>

<script>
export default {
  data: function () {
    return { content: '' };
  }
}
</script>
