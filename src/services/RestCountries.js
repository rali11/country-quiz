const getAllCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  return json;
}

const getRandomInt = (max, notAvailableNumbers = []) => {
  let number = Math.floor(Math.random() * max);
  while (notAvailableNumbers.find(item => item === number)) {
    number = Math.floor(Math.random() * max);
  }
  return number;
}

const getRandomChoicesQuiz = countriesList => {
  const choices = [];    
  const notAvailableChoices = [];
  for (let i = 0; i < 4; i++) {
    const countryIndex = getRandomInt(countriesList.length, notAvailableChoices);     
    choices.push({label:countriesList[countryIndex].name.common, value:`${countryIndex}`});
    notAvailableChoices.push(countryIndex);
  }
  return choices;
}

const RestCountries = async () => {
  const countriesList = await getAllCountries();
  return {
    countriesList,
    async resetCountriesList(){
      this.countriesList = await getAllCountries();
    },
    getCapitalQuiz(){
      const choices = getRandomChoicesQuiz(this.countriesList);
      const correctChoice = choices[getRandomInt(4)].value;
      const capitalName = this.countriesList[correctChoice].capital;
      this.countriesList.splice(correctChoice, 1)
      return {
        question:`${capitalName} is the capital of`,
        correctChoice:`${correctChoice}`,
        choices,
        flagUrl:''
      };
    },
    getFlagQuiz(){
      const choices = getRandomChoicesQuiz(this.countriesList);
      const correctChoice = choices[getRandomInt(4)].value;
      const flagUrl = this.countriesList[correctChoice].flags.png;
      this.countriesList.splice(correctChoice, 1)
      return {
        question:`Which country does this flag belong to?`,
        correctChoice:`${correctChoice}`,
        choices,
        flagUrl
      };
    }
  }
}

export default await RestCountries();