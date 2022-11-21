<template>
  <div class="center">
    <Container>
      <h2>COUNTRY QUIZ</h2>
      <Card title="Kuala Lumpur is the capital of">
        <Button>
          Next
        </Button>
      </Card>
    </Container>
  </div>
</template>

<script>
import Button from '../ui/atoms/Button.vue'
import Card from '../ui/atoms/Card.vue'
import Container from '../ui/objects/Container.vue'
  export default {
  components: { Container, Card, Button },
  
      
  }
</script>

<style lang="scss" scoped>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>