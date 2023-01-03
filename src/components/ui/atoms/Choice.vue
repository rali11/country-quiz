<template>
  <div class="choice">
    <input       
      class="choice__input" 
      type="radio"
      :id="id"
      :value="value"
      :name="name"
      :checked="checked"
      @change="changeEvent($event.target)"      
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
        default:'show',
        validator: function(value){
          return ['success','error','hidden','show'].includes(value);
        },
      },
      checked:{
        type: Boolean,
        default:false,
      }
    },
    computed:{
      includeState(){
        return ['success','error','hidden','show'].includes(this.state);
      },
      stateClass(){
        return this.includeState ? `choice__label--${this.state}`:'';
      }
    },
    methods:{
      changeEvent(target){
        if(this.state === 'show'){
          this.$emit('change',target.value);
          this.$emit('update:checked', target.checked)
        }        
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use "@/assets/styles/settings/variables";
  
  .choice {  
    &__input {
      display: none;
    }     

    &__label {    
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      position: relative;
      counter-increment: counterChoice;
      border: 0.125rem solid variables.$choice-quiz;
      border-radius: 0.75rem;    
      display: block;
      padding: 0.6rem 3rem 0.6rem 5.1rem;
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

      &--hidden, &--hidden:hover {       
        animation-fill-mode: both ;          
        animation-direction: normal;      
        animation-duration: .6s;
        animation-name: hide-choice;
        animation-timing-function: ease-in-out;   
      }

      &--show, &--show:hover {
        animation-fill-mode: both;        
        animation-direction: normal;     
        animation-duration: .6s;
        animation-name: show-choice;
        animation-timing-function: ease-in-out;
      }

      &--success, &--success:hover, .choice__input:checked ~ &--success {
        background-color: variables.$state-success;
        border-color: variables.$state-success;
        color: variables.$text-primary-lighter;  
        position: relative;    
        transition: all .2s;
        animation-duration: .9s;
        animation-name: state-success;
        animation-timing-function: ease-in-out;        
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

  @keyframes state-success {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes hide-choice {
    100% {
      opacity: 0;
      transform: translateX(-10rem);      
    }
  }

  @keyframes show-choice {
    0%{
      opacity: 0;
      transform: translateX(-10rem);  
    }
    100% {
      opacity: 1;
      transform: translateX(0);      
    }
  }
</style>