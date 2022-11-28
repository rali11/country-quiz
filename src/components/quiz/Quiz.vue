<template>
  <Container tag="section">
    <h2>COUNTRY QUIZ</h2>
    <Card title="Kuala Lumpur is the capital of">
      <ChoiceList />
      <Button>
        Next
      </Button>
    </Card>
  </Container>
</template>

<script>
import Button from '../ui/atoms/Button.vue'
import Card from '../ui/atoms/Card.vue'
import Container from '../ui/objects/Container.vue'
import ChoiceList from '../ui/molecules/ChoiceList.vue'

  export default {
    components: { Container, Card, Button, ChoiceList},
  }
</script>
