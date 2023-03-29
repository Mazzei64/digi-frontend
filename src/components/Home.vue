<template >
    <div class="quiz-main-body">
        <div v-if="$store.state.questionNumber > $store.state.totalQuestionsNumber" class="quiz-main-template">
            <HeaderTimeline class="outer-box"/>
            <QuestionsRadio class="outer-box" />
            <!-- <Test/> -->
        </div>
        <div v-if="$store.state.questionNumber <= $store.state.totalQuestionsNumber" class="quiz-main-template">
          <div class="results-main-div">
            <span class="results-main-title">Seu Resultado Foi De:</span>
            <div class="final-result-value">60%</div>
          </div>
        </div>
    </div>
</template>
  
  <script>
  import HeaderTimeline from './HeaderTimeline.vue';
  import QuestionsRadio from './QuestionsRadio.vue';
  import Test from './Test.vue';

  export default {
    components: { Test, HeaderTimeline, QuestionsRadio },
    name: 'home',
    created() {
      this.$store.dispatch('fetchQuestions')
    }
  }
</script>

<style>

.quiz-main-body {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
}
.quiz-main-template {
    position: fixed;
    width: 1280px;
    height: 525px;
    background-color: #f5f1e5;
}
.outer-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* height: 215px; */
}
.next-button-div {
    background-color: rgb(67, 10, 75);
    height: 20%;
}
.results-main-div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #000000; */
}
.results-main-title {
  color: #000000;
  font-size: 40pt;
  font-weight: bold;
  position: absolute;
  top: 25%;
}
.final-result-value {
  position: absolute;
  display: block;
  font-size: 100pt;
  font-weight: bold;
  color: #000000;
  bottom: 20%;
}

</style>
  