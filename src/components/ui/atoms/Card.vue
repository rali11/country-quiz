<template>
  <div class="card">
    <img 
      class="card__image"
      :src="image"
    >
    <header class="card__header">
      <slot name="header" />
    </header>
    <div class="card__body">
      <slot name="body" />
    </div>    
  </div>
</template>

<script>
  import Image from "../../../../public/img/undraw_adventure_4hum 1.svg";

  export default {
    props:{
      title:{
        default:'',
        type:String
      }
    },
    data(){
      return {
        image: Image,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use "@/assets/styles/settings/variables";

  .card {
    display: block;
    color: variables.$text-primary;
    background-color: variables.$bg-lighter;
    border-radius:1.5rem;
    padding: 2rem;
    position: relative;

    &__header {
      font-size:variables.$fs-title-3;
      padding: 2.4rem 2rem;
      margin:0 -2rem;
      overflow: hidden;
    }

    &__body {
      overflow: hidden;
      margin: 0 -2rem;
      padding: 0 2rem;
    }

    &__image {
      position: absolute;
      top:-4.37rem;
      right: 0;
    }
  }
  
</style>