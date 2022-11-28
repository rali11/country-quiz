<template>
  <div class="choice">
    <input       
      class="choice__input" 
      type="radio"
      :id="id"
      :value="value"
      :name="name"
      @change="$emit('change', $event.target.value)"      
    >
    <label
      :class="['choice__label', stateClass]"
      :for="id"
    >
      <slot />
    </label>
  </div>
</template>

<script>
  export default {
    model:{
      event: 'change',
      prop: 'pick',
    },
    props:{
      id:{
        type:String,
        default:'',
        required:true,
      },
      name:{
        type:String,
        default:'choice-list',
      },
      value:{
        type:String,
        default:'',
        required:true,
      },
      pick:{
        type:String,
        default:'',
      },
      state:{
        type: String,
        default:'primary',
        validator: function(value){
          return ['success','error','primary'].includes(value);
        },
      }
    },
    computed:{
      includeState(){
        return ['success','error'].includes(this.state);
      },
      stateClass(){
        return this.includeState ? `choice__label--${this.state}`:'';
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use "@/assets/styles/settings/variables";
  
  .choice {        
    & ~ & {
      margin: 1.56rem 0;
    }

    &__input {
      display: none;
    }     

    &__label {      
      position: relative;
      counter-increment: counterChoice;
      border: 0.125rem solid variables.$choice-quiz;
      border-radius: 0.75rem;    
      display: block;
      padding: 0.6rem 0 0.6rem 5.1rem;
      color: variables.$choice-quiz;
      font-size: variables.$fs-btn;              
      font-weight: 500;
      transition: all .2s;

      &::before {      
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        display: flex;      
        align-items: center;   
        padding-left: 1.1rem;
        font-size: variables.$fs-counter;  
        content: counter(counterChoice, upper-alpha);
      }

      &:hover, .choice__input:checked ~ &  {
        border-color: variables.$choice-quiz-hover;
        background-color: variables.$choice-quiz-hover;
        color: variables.$text-primary-lighter;
        transition: all .2s;
      }  

      &--success, &--success:hover, .choice__input:checked ~ &--success {
        background-color: variables.$state-success;
        border-color: variables.$state-success;
        color: variables.$text-primary-lighter;  
        position: relative;    
        transition: all .2s;
      }    

      &--error, &--error:hover, .choice__input:checked ~ &--error {
        background-color: variables.$state-error;
        border-color: variables.$state-error;
        color: variables.$text-primary-lighter;   
        position: relative;      
      }

      &--success::after, &--error::after { 
        position: absolute;
        height: 100%;
        top: 0;
        right:1.1rem;  
        display: flex;
        align-items: center;
        font-family: 'Material Symbols Outlined';         
        font-size: variables.$fs-icons;      
        color: variables.$text-primary-light;      
      }

      &--success::after {
        content:"\e86c";   
      }

      &--error::after {
        content:"\e888";   
      }  
    }       
  }
</style>