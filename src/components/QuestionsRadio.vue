<template>
    <div class="questions-radio-div">
        <div class="questions-radio">
            <div class="question-title">Pergunta {{ questionNumber }}</div>
            <div class="question">{{ question }}</div>
            <div class="question-radio-div">
                <form id="question-radio-form">
                    <div class="radio-items">
                        <input type="radio" name="gender" id="radnor"/>
                        <label id="lable-for-rad" for="radnor">Male</label>
                    </div>
                    <div class="radio-items">
                        <input type="radio" name="gender" id="radnor" />
                        <label id="lable-for-rad" for="radnor">Female</label>
                    </div>
                    <div class="radio-items"> 
                        <input type="radio" name="gender" id="radnor" />
                        <label id="lable-for-rad" for="radnor">Leleka Mukeka</label>
                    </div>
                    <div class="radio-items">
                        <button id="question-button" type="submit">Avançar</button>
                    </div>   
                </form>
            </div>
        </div>
    </div>
</template>
  
  <script lang="ts">
  export default {
    name: 'QuestionsRadio',
    data () {
      return {
        questionNumber : 1,
        question: 'Qual das alternativas abaixo é uma demanda dos consumidores para produtos domésticos?'
      }
    }
  }
</script>

<style>
.questions-radio-div {
    /* background-color: rgb(95, 35, 13); */
    height: 80%;
    /* padding-top: -15px; */
    /* margin-bottom: ; */
}
.questions-radio {
    width: 95%;
    height: 90%;
    /* background-color: rgb(255, 194, 190); */
}
.question-title {
    display: flex;
    font-size: 14pt;
    /* background-color: white; */
    height: 10%;
    color: #e72627;
    font-weight: bold;
}
.question {
    display: flex;
    margin-top: 20px;
    /* color: #e72627; */
    font-weight: bold;
}
.question-radio-div {
    display: flex;
    justify-content: start;
    margin-top: 20px;
    height: 80%;
    /* background-color: aliceblue; */
}
.radio-items {
    padding-bottom: 20px;
    display: flex;
}
#question-radio-form {
    /* background-color: rgb(0, 0, 0); */
}
#question-button {
    margin-top: 10px;
    width: 150px;
    height: 60px;
    border-color: transparent;
    border-radius: 20px;
    font-size: 16pt;
    font-weight: bold;
    background-color: #e72627;
    color: white;
    cursor: pointer;
}
#lable-for-rad {
    padding-left: 12px;
    font-size: 12pt;
}
</style>
  