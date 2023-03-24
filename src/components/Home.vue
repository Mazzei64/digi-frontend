<template>
    <div class="quiz-main-body">
        <div class="quiz-main-template">
            <div class="questions-timeline-div outer-box">
                <div class="questions-timeline">
                    <span id="questions-timeline-title">Questionário</span>
                    <div class="main-timeline">

                    </div>
                </div>
            </div>
            <div class="questions-radio-div outer-box">
                ho
            </div>
            <div class="next-button-div outer-box">
                ho
            </div>
        </div>
    </div>
</template>
  
  <script>
  export default {
    el: "#home",
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
    background-color: rgb(0, 26, 255);
}
.quiz-main-template {
    position: fixed;
    width: 1280px;
    height: 645px;
    background-color: rgb(250, 212, 163);
}
.outer-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 215px;
}
.questions-timeline-div {
    background-color: coral;
}
.questions-radio-div {
    background-color: rgb(95, 35, 13);
    height: 60%;
}
.next-button-div {
    background-color: rgb(67, 10, 75);
    height: 20%;
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
  