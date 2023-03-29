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
        HasChecked(store : any) : number {
            let index : number = 0;
            let state: number = -1;
            store.state.answeresArray[store.state.questionNumber - 1].answeres.forEach(() => {
                const el = document.getElementById(`radnor-${index}`) as HTMLInputElement;
                if(el != null) {
                    if(el.checked){
                        state = index;
                    }
                }
                index++;
            });
            return state;
        },
        GetLastChecked(checkedMap : number[], store : any) : void {
                let index = 0;
                if(store.state.questionNumber > store.state.totalQuestionsNumber) {

                }
                if(store.state.questionNumber < checkedMap.length) {
                    store.commit('incrementQuestionNumber');
                    const el = document.getElementById(`radnor-${checkedMap[store.state.questionNumber - 1]}`) as HTMLInputElement;
                    el.checked = true;
                    return;
                }
                const checkedIndex: number = this.HasChecked(store);
                if(checkedIndex === -1) return;
                
                const el = document.getElementById(`radnor-${checkedIndex}`) as HTMLInputElement;
                if(el != null) {
                    if(el.checked) {
                        checkedMap[store.state.questionNumber - 1] = checkedIndex;
                        store.state.answeresArray[store.state.questionNumber - 1].checked = store.state.answeresArray[store.state.questionNumber - 1].answeres[checkedIndex];
                        store.commit('updateMapLen', checkedMap.length);
                        el.checked = false;
                        store.commit('incrementQuestionNumber');
                        store.dispatch('fetchQuestions', store.state.questionNumber - 1);
                        return;
                    }
                }
        },
        ReturnOptions(checkedMap : number[], store : any) : void {
            store.commit('decrementQuestionNumber');
            const lastIndex = checkedMap[store.state.questionNumber - 1];
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
  