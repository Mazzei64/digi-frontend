<template>
    <div class="questions-timeline-div">
        <div class="questions-timeline">
            <span id="questions-timeline-title">Questionário</span>
            <div class="main-timeline">
                <div class="timeline-bar">
                  <div :style="`max-width: ${(100 * $store.state.checkedMapLen) / $store.state.totalQuestionsNumber}%;`" class="timeline-bar-gauge"></div>
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
}
.questions-timeline {
    width: 95%;
    height: 60%;
}
.main-timeline {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
}
.timeline-bar {
  background-color: #d0d3da;
  border-radius: 10px;
  width: 100%;
  height: 12px;
}
.question-mark {
  display: flex;
  color: #889190;
  padding-top: 10px;
}
.timeline-bar-gauge {
  background-color: #e72627;
  border-radius: 10px;
  width: 100%;
  max-width: 0%;
  transition: max-width 0.2s ease;
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
}

</style>
  