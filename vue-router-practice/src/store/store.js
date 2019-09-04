import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios";
Vue.use(Vuex);

const storeConfig = new Vuex.Store({
    state: {
       
    },
    mutations: {
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
        // getmsg1: function (state) {
        //     return state.msg1
        // },
        // getmsg2: function (state) {
        //     return state.msg2
        // }
    }
})

export default storeConfig

