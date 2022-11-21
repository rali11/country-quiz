<template>
  <component 
    :is="tag" 
    class="container"
  >
    <slot />
  </component>
</template>

<script>
  export default {
    props: {
      tag: {
        type:String,
        default:"div",
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    width: 29rem;
  }
</style>