<template>
  <Container tag="section">
    <h2>COUNTRY QUIZ</h2>
    <Card title="Kuala Lumpur is the capital of">
      <ChoiceList 
        :choices="choices" 
        :change-choices="changeChoices"
        correct-answer="13"
      />
    </Card>
  </Container>
</template>

<script>  
  import Card from '../ui/atoms/Card.vue'
  import Container from '../ui/objects/Container.vue'
  import ChoiceList from '../ui/molecules/ChoiceList.vue'

  export default {
    components: { Container, Card, ChoiceList},
    data(){
      return {
        choices:[
          {label:'London', value:'12'},
          {label:'Paris', value:'13'},
          {label:'Roma', value:'14'},
          {label:'Buenos Aires', value:'15'},
        ]
      }
    },
    methods:{
      changeChoices(){
        this.choices = [
          {label:'Quito', value:'12'},
          {label:'La paz', value:'13'},
          {label:'Bogota', value:'14'},
          {label:'Lima', value:'15'},
        ];
      }
    }
  }
</script>
