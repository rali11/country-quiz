<template>
  <Container tag="section">
    <h2>COUNTRY QUIZ</h2>
    <Card title="Kuala Lumpur is the capital of">
      <ChoiceList />
    </Card>
  </Container>
</template>

<script>  
  import Card from '../ui/atoms/Card.vue'
  import Container from '../ui/objects/Container.vue'
  import ChoiceList from '../ui/molecules/ChoiceList.vue'

  export default {
    components: { Container, Card, ChoiceList},
  }
</script>
