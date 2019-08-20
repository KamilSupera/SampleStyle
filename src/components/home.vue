<template>
  <div class="home">
    <h1>Home</h1>
    <textarea id="code" row="20" col="20"></textarea>
  </div>
</template>
<script>
export default {
  name: 'home',
  mounted() {
    // Find a way (if any) to make code snippets more readable and nice to write.
    const value =
`.class {
  margin-top: 2px;
}

#test {
  color: black;
}`;

    var textarea = document.getElementById('code');
    textarea.innerHTML = value;
    this.$CodeMirror.fromTextArea(textarea, this.$CodeMirrorDefault);
  },
}
</script>