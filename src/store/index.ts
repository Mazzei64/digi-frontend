import axios, { AxiosResponse } from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import ParseToJson from './../utils/jsonType';
import ShuffleArray from './../utils/shuffle';
import AnsweresStruct from './../utils/AnswerStruct';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayIndex: 0,
    questionNumber: 1,
    totalQuestionsNumber: 0,
    jsonResult: [Object],
    answeresArray: [new AnsweresStruct()],
    checkedMapLen: 0
  },
  getters: {
    totalQuestionsNumber(state) {
      return state.totalQuestionsNumber;
    },
    questionNumber(state) {
      return state.questionNumber;
    }
  },
  mutations: {
    incrementArrayIndex(state) {
      state.arrayIndex++;
    },
    updateMapLen(state, len: number) {
      state.checkedMapLen = len;
    },
    incrementQuestionNumber(state) {
      state.questionNumber++;
    },
    decrementQuestionNumber(state) {
      state.questionNumber--;
    },
    setTotalQuestionsNumber(state, totalQuestionsNumber) {
      state.totalQuestionsNumber = totalQuestionsNumber;
    },
    fetchQuestions(state, res) {
      state.jsonResult = res.data;

      const jsonElement = ParseToJson(JSON.stringify(res.data));
      state.answeresArray.push(new AnsweresStruct());
      state.answeresArray[state.arrayIndex].question = JSON.stringify(jsonElement["question"]).replace(/\"/g, '');
      state.answeresArray[state.arrayIndex].correctAnswer = JSON.stringify(jsonElement["correct_answer"]).replace(/\"/g, '');
      state.answeresArray[state.arrayIndex].answeres = [state.answeresArray[state.arrayIndex].correctAnswer, ...JSON.parse(JSON.stringify(jsonElement["incorrect_answers"]))];
      state.answeresArray[state.arrayIndex].answeres = (ShuffleArray(state.answeresArray[state.arrayIndex].answeres) as Array<string>);
      state.arrayIndex++;
    },
  },
  actions: {
    GetQuestionsCount({ commit }) {
      axios.get(`http://179.210.60.61:3000/api/questions/${1}`)
        .then(response => {
          commit('setTotalQuestionsNumber', response.data.questionsCount);
          this.dispatch('fetchQuestions', 1);
        });
    },
    fetchQuestions({ state, commit }, index) {
      axios.get(`http://179.210.60.61:3000/api/questions/${index + 1}`)
        .then(response => {
          commit('fetchQuestions', response);
        });
    }
  }
});
