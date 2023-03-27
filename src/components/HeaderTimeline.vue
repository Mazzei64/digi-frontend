<template>
    <div class="questions-timeline-div outer-box">
        <div class="questions-timeline">
            <span id="questions-timeline-title">Questionário</span>
            <div class="main-timeline">

            </div>
        </div>
    </div>
</template>
  
  <script lang="ts">
  export default {
    name: 'HeaderTimeline',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style>
.questions-timeline-div {
    background-color: coral;
}
.questions-timeline {
    background-color: aliceblue;
    width: 95%;
    height: 80%;
}
.main-timeline {
    background-color: burlywood;
    width: 100%;
    height: 90%;
}
#questions-timeline-title {
    display: flex;
    font-size: 14pt;
    font-weight:bold;
    color: red;
    justify-items: start;
    width: 100%;
    background-color: black;
}

</style>
  