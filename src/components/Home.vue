<template>
    <div class="quiz-main-body">
        <div class="quiz-main-template">
            <HeaderTimeline class="outer-box"/>
            <QuestionsRadio class="outer-box" />
            <!-- <div class="next-button-div outer-box">
                ho
            </div> -->
        </div>
    </div>
</template>
  
  <script lang="ts">
  import HeaderTimeline from './HeaderTimeline.vue'
  import QuestionsRadio from './QuestionsRadio.vue';

  export default {
    components: { HeaderTimeline, QuestionsRadio },
    name: 'home',
    data () {
      return {
        msg: ''
      }
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
    height: 465px;
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
  