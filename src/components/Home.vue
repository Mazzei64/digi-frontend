<template>
    <div class="quiz-main-body">
        <div class="quiz-main-template">
            <HeaderTimeline/>
            <div class="questions-radio-div outer-box">
                ho
            </div>
            <div class="next-button-div outer-box">
                ho
            </div>
        </div>
    </div>
</template>
  
  <script lang="ts">
  import HeaderTimeline from './HeaderTimeline.vue'
  
  export default {
    components: { HeaderTimeline },
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
.questions-radio-div {
    background-color: rgb(95, 35, 13);
    height: 60%;
}
.next-button-div {
    background-color: rgb(67, 10, 75);
    height: 20%;
}



</style>
  