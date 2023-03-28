<template>
    <div class="questions-radio-div">
        <div class="questions-radio">
            <div class="question-title">Pergunta {{ $store.state.questionNumber }}</div>
            <div class="question">{{ $store.state.answeresArray[$store.state.questionNumber - 1].question }}</div>
            <div class="question-radio-div">
                <form v-on:submit.prevent="() => {}" id="question-radio-form">
                    <div v-for="(ans, index) in $store.state.answeresArray[$store.state.questionNumber - 1].answeres" class="radio-items">
                        <input type="radio" name="question" :id="`radnor-${index}`"/>
                        <label id="lable-for-rad" for="radnor">{{ ans }}</label>
                    </div>
                    <div v-if="$store.state.questionNumber <= 1" class="radio-items">
                        <button v-on:click="GetLastChecked(checkedMap, $store)" id="question-button" type="submit">Avançar</button>
                    </div>
                    <div v-if="$store.state.questionNumber > 1" class="radio-items">
                        <button v-on:click="ReturnOptions(checkedMap, $store) " id="question-button-return" type="submit">Voltar</button>
                        <button v-on:click="GetLastChecked(checkedMap, $store)" id="question-button" type="submit">Avançar</button>
                    </div> 
                </form>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { computed } from 'vue';

  export default {
    name: 'QuestionsRadio',
    data() {
        return {
            // should be allocated in store so the main bar can grow as the array grows.
            checkedMap: new Array<number>()
        }
    },
    methods: {
        GetLastChecked(checkedMap : number[], store : any) {
            let index = 0;
            store.state.answeresArray[store.state.questionNumber - 1].answeres.forEach(() => {
                const el = document.getElementById(`radnor-${index}`) as HTMLInputElement;
                if(el != null) {
                    if(el.checked) {
                        checkedMap.push(index);
                        el.checked = false;
                        store.commit('incrementQuestionNumber');
                        return;
                    }
                }
                index++;
            });
        },
        ReturnOptions(checkedMap : number[], store : any) {
            store.state.answeresArray[store.state.questionNumber - 1].answeres.forEach(() => {
                let index = 0;
                const el = document.getElementById(`radnor-${index}`) as HTMLInputElement;
                if(el != null) {
                    if(el.checked) {
                       el.checked = false;
                    }
                }
                index++;
            });
            store.commit('decrementQuestionNumber');
            const lastIndex = checkedMap.pop();
            const el = document.getElementById(`radnor-${lastIndex}`) as HTMLInputElement;
            if(el!= null) {
                el.checked = true;
            }
        }
    }

}
</script>

<style>
.questions-radio-div {
    height: 80%;
}
.questions-radio {
    width: 95%;
    height: 90%;
}
.question-title {
    display: flex;
    font-size: 14pt;
    height: 10%;
    color: #e72627;
    font-weight: bold;
}
.question {
    display: flex;
    margin-top: 20px;
    font-size: 15pt;
}
.question-radio-div {
    display: flex;
    justify-content: start;
    margin-top: 20px;
    height: 80%;
}
.radio-items {
    position: relative;
    padding-bottom: 20px;
    display: flex;
}
#question-button-return {
    position: static;
    margin-top: 10px;
    width: 150px;
    height: 60px;
    border-color: transparent;
    border-radius: 20px;
    font-size: 16pt;
    font-weight: bold;
    background-color: #2629e7;
    margin: 10px;
    margin-left: -1px;
    color: white;
    cursor: pointer;
}
#question-button {
    position: static;
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
  