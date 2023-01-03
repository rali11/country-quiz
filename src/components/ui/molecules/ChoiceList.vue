<template>
  <div class="choice-list">
    <Choice 
      v-model="picked"
      v-for="choice in choicesList"
      :key="choice.id"      
      :id="choice.id"
      :value="choice.value"
      :state="choice.state"
      :checked.sync="choice.checked"
    >
      {{ choice.label }}
    </Choice>
    <transition name="slide">
      <Button 
        v-show="showBtnNext"
        @click="resetchoicesList"
      >
        Next
      </Button>
    </transition>
  </div>
</template>

<script>
  import Button from '../atoms/Button.vue';  
  import Choice from '../atoms/Choice.vue'

  export default {
    components: { Choice, Button },
    props:{
      choices:{
        type:Array,
        default:() => []
      },
      changeChoices:{
        type:Function,
        default:() => {}
      },
      correctAnswer:{
        type:String,
        default:'',
      }
    },
    data(){
      return {
        id:1,
        picked:'',
        choicesList:[],
        showBtnNext:false,
      }
    },
    mounted(){
      this.generateChoicesList();
    },
    watch:{
      picked(newVal){
        if(newVal){
          const correctChoice = this.choicesList.find( choice => choice['value'] === this.correctAnswer);
          correctChoice.state = 'success';
          if (newVal !== this.correctAnswer){
            const pickedChoice = this.choicesList.find( choice => choice.value === newVal);
            pickedChoice.state = 'error';
          }
          this.choicesList.forEach(choice => {
            if(choice.value !== newVal && choice.value !== this.correctAnswer){
              choice.state = 'hidden';
            }
          });
          this.showBtnNext = !this.showBtnNext;
        }
      }
    },
    methods:{      
      async resetchoicesList(){        
        this.showBtnNext = !this.showBtnNext;
        await this.changeChoices();
        await this.hiddenChoicesList();
        this.generateChoicesList();
        this.picked = "";
      },
      hiddenChoicesList(){
        return new Promise(resolve => {
          this.choicesList.forEach(choice => {
              choice.checked = false;
              choice.state = 'hidden';
            });
          setTimeout(() => {            
            resolve();
          }, 500)
        })
      },    
      generateChoicesList(){
        this.choicesList = [];
        let i = 1;
        this.choices.forEach(choice => {
          this.choicesList.push({
            id:`option${i}`, 
            value:choice.value, 
            label:choice.label,
            state:'show',
            checked:false,
          })
          i++;
        })
      },  
    }
  }
</script>
<style lang="scss" scoped>
  .choice-list {
    counter-reset: counterChoice;     
    display: flex;
    flex-direction: column;
    height: 400px;
    gap: 1.56rem;

    .btn {
      margin-left:auto;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .8s;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(10rem);
    opacity: 0;
  }
</style>
