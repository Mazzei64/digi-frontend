import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import ParseToJson from './../utils/jsonType';
import ShuffleArray from './../utils/shuffle';
import AnsweresStruct from './../utils/AnswerStruct';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questionNumber: 1,
    totalQuestionsNumber: 0,
    jsonResult: [Object],
    answeresArray : [new AnsweresStruct()],
    checkedMapLen : 0
  },
  getters: {
  },
  mutations: {
    updateMapLen(state, len : number) {
      state.checkedMapLen = len;
    },
    incrementQuestionNumber(state) {
      state.questionNumber++;
    },
    decrementQuestionNumber(state) {
      state.questionNumber--;
    },
    fetchQuestions(state, res) {
      state.jsonResult = JSON.parse(JSON.stringify(res.data).replace(/%20%27/g,'\: ').replace(/%27%3F/g,'?').replace(/%27/g,'\'').replace(/%20/g,' ').replace(/%3A/g,'').replace(/%24/g,'').replace(/%2C/g,'').replace(/%3F/g,'?').replace(/%22/g,''));

      let arrayIndex: number = 0;
      state.jsonResult.forEach(element => {
        state.totalQuestionsNumber++;
        const jsonElement = ParseToJson(JSON.stringify(element));
        state.answeresArray.push(new AnsweresStruct());
        state.answeresArray[arrayIndex].question = JSON.stringify(jsonElement["question"]).replace(/\"/g,'');
        state.answeresArray[arrayIndex].correctAnswer = JSON.stringify(jsonElement["correct_answer"]).replace(/\"/g,'');
        state.answeresArray[arrayIndex].answeres = [state.answeresArray[arrayIndex].correctAnswer, ...JSON.parse(JSON.stringify(jsonElement["incorrect_answers"]))];
        state.answeresArray[arrayIndex].answeres = (ShuffleArray(state.answeresArray[arrayIndex].answeres) as Array<string>);
        arrayIndex++;
      });
    }
  },
  actions: {
    fetchQuestions({ commit }) {
      axios.get('https://gist.githubusercontent.com/levismad/655fb5f6f6b11c4b603f1ae4e94e1632/raw/31473a7774bb0836dc3fc81aca9bfbd09b949d09/questions.json')
        .then(response => {
          commit('fetchQuestions', response);
        })
    }
  },
  modules: {
  }
})
