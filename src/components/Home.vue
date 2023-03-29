<template >
    <div class="quiz-main-body">
        <div v-if="$store.state.questionNumber <= $store.state.totalQuestionsNumber" class="quiz-main-template">
            <HeaderTimeline class="outer-box"/>
            <QuestionsRadio class="outer-box" />
        </div>
        <div v-if="$store.state.questionNumber > $store.state.totalQuestionsNumber" class="quiz-main-template">
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

</style>
  