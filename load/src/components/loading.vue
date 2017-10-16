<template>
    <div id="index">
        数据请求
    </div>
</template>

<script>
    import { mapActions,mapState } from "vuex";
    export default {
        name: 'index',
        created(){
            var aa = ()=>{
                console.log(this)
            }
            aa()
            // this.defaultData(this.redirectfn)
            this.defaultData()
            consloe.log(state)
        },
        computed(){
            ...mapState({
                state:()=>{
                    console.log(state.state)
                    return state.state
                }
            })
        },
        // watch:{
        //     state(){
        //         if(this.state){
        //             this.$router.push({path:"/"})
        //         }
        //         consloe.log(this.state)
        //     }
        // },
        methods: {
            // redirectfn(){
            //     this.$router.push({path:"/"})
            // },
            ...mapActions([
                "defaultData"
            ])
        }
    }
</script>

<style scoped>
 
    
</style>