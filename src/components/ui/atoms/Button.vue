<template>
  <button 
    @click="$emit('click')"
    class="btn"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  @use "@/assets/styles/settings/variables";

  .btn {
    background-color: variables.$btn-primary;
    padding: 0.9rem 2.2rem;        
    color: variables.$text-primary-lighter;
    font-weight: 700;
    font-size: variables.$fs-btn;
    line-height: 1.6rem;
    border-radius: 0.75rem;
    border-width: 0;    
    box-shadow: 0px 2px 4px variables.$btn-primary-shadow;    
    transition: all .3s;

    &:hover {
      background-color: variables.$btn-primary-hover;
      transition: all .3s;
    }
  }
</style>