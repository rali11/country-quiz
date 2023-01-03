<template>
  <Container tag="section">
    <h2>COUNTRY QUIZ</h2>
    <Card>
      <template #header>
        <transition name="slide">
          <div v-if="showQuestion">
            <img 
              v-show="showFlag"
              class="header__flag-image" 
              :src="flagUrl"
            >
            <h3>{{ question }}</h3>
          </div>
        </transition>
      </template>
      <template #body>
        <ChoiceList 
          :choices="choices" 
          :change-choices="getRandomQuiz"
          :correct-answer="correctChoice"
        />
      </template>
    </Card>
  </Container>
</template>

<script>  

  import RestCountries from '../../services/RestCountries';
  import Card from '../ui/atoms/Card.vue'
  import Container from '../ui/objects/Container.vue'
  import ChoiceList from '../ui/molecules/ChoiceList.vue'

  export default {
    components: { Container, Card, ChoiceList},
    data(){
      return {
        showFlag:true,
        showQuestion:true,
        flagUrl:"https://flagcdn.com/w320/ar.png",
        correctChoice:'13',        
        question:'Which country does this flag belong to?',
        choices:[
          {label:'Peru', value:'12'},
          {label:'Argentina', value:'13'},
          {label:'Italy', value:'14'},
          {label:'Morocco', value:'15'},
        ]
      }
    },
    methods:{
      getRandomQuiz(){
        Math.floor(Math.random() * 2) === 0 
        ? this.getFlagQuestion() 
        : this.getCapitalQuestion();
      },
      getFlagQuestion(){
        const quiz = RestCountries.getFlagQuiz();
        this.showQuestion = false;
        this.flagUrl = quiz.flagUrl;
        this.showFlag = true;
        this.question = quiz.question;
        this.correctChoice = quiz.correctChoice;
        this.choices = quiz.choices;
        setTimeout(() => {
          this.showQuestion = true;
        }, 500);
      },
      getCapitalQuestion(){
        const quiz = RestCountries.getCapitalQuiz();
        this.showQuestion = false;
        this.showFlag = false;
        this.question = quiz.question;
        this.correctChoice = quiz.correctChoice;
        this.choices = quiz.choices;
        setTimeout(() => {
          this.showQuestion = true;
        }, 500);
      }
    },   
  }
</script>
<style lang="scss" scoped>
  .header__flag-image {
    width: 5.25rem;
    height: 3.37rem;
    filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
    border-radius: 4px;        
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(-10rem);
    opacity: 0;
  }
</style>