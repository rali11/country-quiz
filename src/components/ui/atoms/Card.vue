<template>
  <div class="card">
    <img 
      class="card__image"
      :src="image"
    >
    <h3 class="card__title">
      {{ title }}
    </h3>
    <slot />
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

    &__title {
      font-size:variables.$fs-title-3;
      padding: 2.4rem 0;
    }

    &__image {
      position: absolute;
      top:-4.37rem;
      right: 0;
    }
  }
  
</style>