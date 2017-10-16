import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

var store = new Vuex.Store({
    state:{
        navData:null,
        articleData:null,
        state:false
    },
    actions:{
        getAllData({commit}){
            var dataNav = function(){
                return new Promise((resolve,reject)=>{
                    this.axios.get("/api/front_article/getNav").then((data)=>{

                        commit("navData_m",data.data.data)
                        resolve()
                    })
                })
            }

            var dataArticle = function(){
                return new Promise((resolve,reject)=>{
                    this.axios.get("/api/front_article/getArticleAll").then((data)=>{
                        
                        commit("articleData_m",data.data.data)
                        resolve()
                    })
                })
            }



            return {
                axios:this.axios,
                dataNav,
                dataArticle
            }
        },
        defaultData({dispatch,commit},fn){
            // console.log()
            Promise.resolve().then(()=>{
                // console.log()
            })
            dispatch("getAllData").then((data)=>{
                console.log(data)
                promise.all([dispatch("getAllData").dataNav,dispatch("getAllData").dataArticle]).then(()=>{
                    commit("state_m",true)
                    // console.log(1)
                    // fn()
                })
            })
            








        }
    },
    mutations:{
        navData_m(state,data){
            state.navData = data
        },
        articleData_m(state,data){
            state.articleData = data
        },
        state_m(state,data){
            state.state = data
        }
    }
})

export default store