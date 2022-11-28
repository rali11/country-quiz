<template>
  <div class="choice-list">
    <Choice 
      v-model="picked"
      id="optionA"
      value="Vietnam"
    >
      Vietnam
    </Choice>
    <Choice 
      v-model="picked"
      id="optionB"
      value="London"
    >
      London
    </Choice>
    <Choice
      v-model="picked" 
      id="optionC"
      value="Paris"
    >
      Paris
    </Choice>
    <Choice 
      v-model="picked"
      id="optionD"
      value="Madrid"
    >
      Madrid
    </Choice>
  </div>
</template>

<script>
import Choice from '../atoms/Choice.vue'

  export default {
    components: { Choice},
    data(){
      return {
        picked:'',
      }
    },
  }
</script>
<style lang="scss" scoped>
  .choice-list {
    counter-reset: counterChoice;
  }
</style>
