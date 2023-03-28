<template>
    <div class="questions-timeline-div">
        <div class="questions-timeline">
            <span id="questions-timeline-title">Questionário</span>
            <div class="main-timeline">
                <div class="timeline-bar">
                  <div class="timeline-bar-gauge"></div>
                </div>
                <div class="question-mark">Pergunta {{ $store.state.questionNumber }} de {{ $store.state.totalQuestionsNumber }}</div>
            </div>
        </div>
    </div>
</template>
  
  <script lang="ts">
  export default {
    name: 'HeaderTimeline',
  }
</script>

<style>
.questions-timeline-div {
    height: 140px;
    /* background-color: rgb(252, 206, 189); */
}
.questions-timeline {
    /* background-color: aliceblue; */
    width: 95%;
    height: 60%;
}
.main-timeline {
    /* display: block; */
    /* background-color: burlywood; */
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
    /* padding-top: 30px; */
}
.timeline-bar {
  /* display: block; */
  background-color: #d0d3da;
  border-radius: 10px;
  width: 100%;
  height: 12px;
  /* margin-top: 50px; */
}
.question-mark {
  display: flex;
  color: #889190;
  /* background-color: aliceblue; */
  /* padding-left: 10px; */
  padding-top: 10px;
  /* margin-top: 50px; */
}
.timeline-bar-gauge {
  background-color: #e72627;
  border-radius: 10px;
  width: 30%;
  height: 100%;
}
#questions-timeline-title {
    display: flex;
    font-size: 14pt;
    font-weight:bold;
    color: #e72627;
    justify-items: start;
    width: 100%;
    height: 40%;
    margin-bottom: 20px;
    /* background-color: black; */
}

</style>
  