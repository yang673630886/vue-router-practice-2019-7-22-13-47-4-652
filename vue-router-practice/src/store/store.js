import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios";
Vue.use(Vuex);

const storeConfig = new Vuex.Store({
    state: {
        todoList: []
    },
    mutations: {
        pushList: function (state, myListObject) {
            state.todoList.push(myListObject)
            let oldList = state.todoList;
            state.todoList = [];
            for (let i = 0; i < oldList.length; i++) {
                state.todoList.push(oldList[i])
            }
            
        }
        // callMutationAll(state, data) {
        //     state.msg1 = data.msg1;
        //     state.msg2 = data.msg2
        // },
        // resetMutationAll(state) {
        //     state.msg1 = "";
        //     state.msg2 = ""
        // }
    },
    actions: {
        // callActionAll: function (context) {
        //     axios
        //         .get("http://127.0.0.1:8080/hello")
        //         .then(function (response) {
        //             context.commit('callMutationAll', response.data);
        //         });
        // },
        // resetActionAll(context) {
        //     context.commit('resetMutationAll');
        // }

    },
    getters: {
        getList(state) {
            let result = [];
            window.console.log(state.todoList[0].info)
            for (let i = 0; i < state.todoList.length; i++){
                result.push(state.todoList[i].info)
            }
            return result
        },
        getOneList(state,index){
            return state.todoList[index-1].info
        }
    }
})

export default storeConfig

