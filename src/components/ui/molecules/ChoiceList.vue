<template>
  <div class="choice-list">
    <Choice 
      v-model="picked"
      v-for="choice in choices"
      :key="choice.id"      
      :id="choice.id"
      :value="choice.value"
      :state="choice.state"
      :checked.sync="choice.checked"
    >
      {{ choice.label }}
    </Choice>
    <Button @click="resetChoices">
      Next
    </Button>
  </div>
</template>

<script>
  import Button from '../atoms/Button.vue';  
  import Choice from '../atoms/Choice.vue'

  export default {
    components: { Choice, Button },
    data(){
      return {
        id:1,
        picked:'',
        correctAnswer:'13',
        choices:[
          {id:'optionA', value:"12", label:'Vietnam', state:'show', checked:false},
          {id:'optionB', value:"13", label:'London', state:'show', checked:false},
          {id:'optionC', value:"14", label:'Paris', state:'show',  checked:false},
          {id:'optionD', value:"15", label:'Madrid', state:'show',  checked:false},
        ]
      }
    },
    watch:{
      picked(newVal){
        if(newVal){
          const correctChoice = this.choices.find( choice => choice['value'] === this.correctAnswer);
          correctChoice.state = 'success';
          if (newVal !== this.correctAnswer){
            const pickedChoice = this.choices.find( choice => choice.value === newVal);
            pickedChoice.state = 'error';
          }
          this.choices.forEach(choice => {
            if(choice.value !== newVal && choice.value !== this.correctAnswer){
              choice.state = 'hidden';
            }
          });
        }
      }
    },
    methods:{
      hiddenChoices(){
        return new Promise(resolve => {
          this.choices.forEach(choice => {
              choice.state = 'hidden';
            });
          setTimeout(() => {            
            resolve();
          }, 500)
        })     
      },
      async resetChoices(){
        await this.hiddenChoices();
        this.choices.forEach(choice => {
          choice.state = 'show';
          choice.checked = false;
        });
        this.picked = "";
      }
    }
  }
</script>
<style lang="scss" scoped>
  .choice-list {
    counter-reset: counterChoice;
  }
</style>
